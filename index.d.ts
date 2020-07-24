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
const theModule = require("the-module");

theModule("unicorns");
//=> 'unicorns & rainbows'
```
*/
declare function replied(message: string, options?: replied.Options): Promise<string>

export = replied
