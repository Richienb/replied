import { ReadStream, WriteStream } from "tty"

declare namespace replied {
	export interface Options {
		/** The stdout to log to. */
		stdout?: WriteStream

		/** The stdin to capture. */
		stdin?: ReadStream
	}
}

/**
Log a message to the console and capture the stdin that is replied.
@param message The message to log.
@example
```
const replied = require("replied");

const ESC = "\u001B[";

(async () => {
	const result = await replied(ESC + '0c'); // Primary device attributes
})();
```
*/
declare function replied(message: string, options?: replied.Options): Promise<string>

export = replied
