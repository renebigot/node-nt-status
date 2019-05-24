# NT Status

This is a nodejs helper library use to translate NT Status codes to human readable strings.

It's primary purpose is to print errors messages returned `SMB` operations in `node-libdsm`.

## Usage

```javascript
const {StatusCodes, StatusDescriptions} = require('nt-status')

// At some moment in your code, you receive a status code
// Every NT Status codes are defined inside require('nt-status').StatusCodes
const code = StatusCodes.STATUS_OPLOCK_BREAK_IN_PROGRESS
console.log(`Code for STATUS_OPLOCK_BREAK_IN_PROGRESS: 0x${code.toString(16)}`)

// Translate code to human readable string
console.log(`Description for STATUS_OPLOCK_BREAK_IN_PROGRESS: ${StatusDescriptions[code]}`)
```
