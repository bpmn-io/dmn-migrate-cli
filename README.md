# dmn-migrate-cli

[![CI](https://github.com/bpmn-io/dmn-migrate-cli/actions/workflows/CI.yml/badge.svg)](https://github.com/bpmn-io/dmn-migrate-cli/actions/workflows/CI.yml)

Migrate DMN diagrams to the latest DMN standard version, via your command line.


## Installation

Install the command line globally:

```sh
npm install -g @bpmn-io/dmn-migrate-cli
```

Altenatively, run the utility directly via [`npx`](https://www.npmjs.com/package/npx):

```sh
npx @bpmn-io/dmn-migrate-cli -o migrated/ '**/*.dmn'
```


## Usage

```bash
  Migrate your DMN diagrams to DMN 1.3.

  Usage
    $ dmn-migrate -o [file|directory] [...inputs]

    Inputs may be glob patterns, too.
    If no input is given we read from stdin.

  Options
    --output,  -o   Output file or directory. Output directory must
                    end with file separator. If not given we pipe to
                    stdout.

  Examples
    $ dmn-migrate -o bar.dmn foo.dmn
    $ dmn-migrate -o migrated/ *.dmn
    $ cat foo.dmn | dmn-migrate > migrated/foo.migrated.dmn
```


## License

MIT
