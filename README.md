# dmn-migrate-cli

[![Build Status](https://travis-ci.com/bpmn-io/dmn-migrate-cli.svg?branch=master)](https://travis-ci.com/bpmn-io/dmn-migrate-cli)

Migrate DMN diagrams to the latest DMN standard version, via your command line.


## Usage

```bash
dmn-migrate -i dmn11.dmn -o dmn13.dmn

# or

dmn-migrate -i *.dmn -o migrated/

# or

cat diagram.dmn | dmn-migrate > migrated.dmn
```


## License

MIT
