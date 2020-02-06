# dmn-migrate-cli

[![Build Status](https://travis-ci.com/bpmn-io/dmn-migrate-cli.svg?branch=master)](https://travis-ci.com/bpmn-io/dmn-migrate-cli)

Migrate DMN diagrams to the latest DMN standard version, via your command line.


## Usage

```bash
Usage
  $ dmn-migrate -i [file|...files] -o [file|directory]

Options
  --input,   -i     Input file(s), may be glob pattern. If no input is given
                    we read from stdin.
  --output,  -o     Output file or directory. Output directory must end with
                    trailing file separator. If not given we pipe to stdout.

Examples
  $ dmn-migrate -i foo.dmn -o bar.dmn
  $ dmn-migrate -i *.dmn -o migrated/
  $ cat foo.dmn | dmn-migrate > migrated/foo.migrated.dmn
```


## License

MIT
