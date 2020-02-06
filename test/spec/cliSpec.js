const { expect } = require('chai');

const exec = require('execa').sync;

const glob = require('fast-glob').sync;

const path = require('path');

const fs = require('fs');

const binPath = require('../../package.json').bin['dmn-migrate'];

let tmpdir;

describe('cli', function() {

  this.timeout(10000);

  beforeEach(function() {
    tmpdir = fs.mkdtempSync('dmn-migrate') + path.sep;
  });

  afterEach(function() {
    if (tmpdir) {
      fs.rmdirSync(tmpdir, { recursive: true });
    }

    tmpdir = null;
  });

  it('should migrate diagram', function() {

    // when
    const result = exec(binPath, [
      '-i',
      'test/fixtures/diagram.dmn',
      '-o',
      path.join(tmpdir, 'migrated.dmn')
    ]);

    // then
    expect(result.exitCode).to.eql(0);
    expect(result.stdout).to.include('Done.');
    expect(result.stderr).to.eql('');
  });


  it('should batch migrate diagrams', function() {

    // when
    const result = exec(binPath, [
      '-i',
      'test/fixtures/*.dmn',
      '-o',
      tmpdir
    ]);

    // then
    expect(result.exitCode).to.eql(0);
    expect(result.stdout).to.include('Done.');
    expect(result.stderr).to.eql('');

    const migrated = glob('**/*.dmn', { cwd: tmpdir });

    expect(migrated).to.have.length(4);
  });


  it('should exit with 1 if input is missing', function() {

    // given
    let error;

    // when
    try {
      exec(binPath);
    } catch (e) {
      error = e;
    }

    // then
    expect(error).to.exist;
    expect(error.exitCode).to.eql(1);
    expect(error.stdout).to.eql('');
    expect(error.stderr).to.eql('Error: Missing --input');
  });


  it('should read from stdin and pipe to stdout', function() {

    // given
    const INPUT_PATH = path.join(__dirname, '../fixtures/diagram-1-3.dmn');

    const input = fs.readFileSync(INPUT_PATH, 'utf8');

    // when
    const result = exec(binPath, { input });

    // then
    expect(result.exitCode).to.eql(0);
    expect(result.stdout).to.eql(input);
    expect(result.stderr).to.eql('');
  });


  describe('DMN 1.3 diagram', function() {

    it('should leave DMN 1.3 diagram as it is', function() {

      // given
      const INPUT_PATH = path.join(__dirname, '../fixtures/diagram-1-3.dmn');
      const OUTPUT_PATH = path.join(tmpdir, 'tmp.dmn');

      const input = fs.readFileSync(INPUT_PATH, 'utf8');

      // when
      const result = exec(binPath, [
        '-i',
        INPUT_PATH,
        '-o',
        OUTPUT_PATH
      ]);

      // then
      expect(result.exitCode).to.eql(0);
      expect(result.stdout).to.include('Done.');
      expect(result.stderr).to.eql('');

      const output = fs.readFileSync(OUTPUT_PATH, 'utf8');
      expect(output).to.eql(input);
    });

  });

});
