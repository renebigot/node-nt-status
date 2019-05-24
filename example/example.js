const {StatusCodes, StatusDescriptions} = require('../')

const code = StatusCodes['STATUS_OPLOCK_BREAK_IN_PROGRESS']
console.log(`Code for STATUS_OPLOCK_BREAK_IN_PROGRESS: 0x${code.toString(16)}`)
console.log(`Description for STATUS_OPLOCK_BREAK_IN_PROGRESS: ${StatusDescriptions[code]}`)