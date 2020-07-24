# replied [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/replied/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/replied)

Log a message to the console and capture the stdin that is replied. Useful for ansi escape codes like [Primary Device Attributes](https://terminalguide.namepad.de/seq/csi_sc/).

[![NPM Badge](https://nodei.co/npm/replied.png)](https://npmjs.com/package/replied)

## Install

```sh
npm install replied
```

## Usage

```js
const replied = require("replied");

const ESC = "\u001B[";

(async () => {
	const result = await replied(ESC + '0c'); // Primary device attributes
})();
```

## API

### replied(message, options?)

#### message

Type: `string`

The message to log.

#### options

Type: `object`

##### stdout

Type: `WriteStream`\
Default: [process.stdout](https://nodejs.org/api/process.html#process_process_stdout)

The stdout to log to.

##### stdin

Type: `ReadStream`\
Default: [process.stdin](https://nodejs.org/api/process.html#process_process_stdin)

The stdin to capture.
