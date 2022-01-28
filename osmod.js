const os= require('os')

const user = os.userInfo()
console.log(user)

console.log(`the time is: ${os.uptime} seconds`)


const info = 
{
    name:os.type(),
    release: os.release()
}

console.log(info)