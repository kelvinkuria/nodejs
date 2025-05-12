const os = require('os');
const user =os.userInfo();
console.log(user);
console.log(`the system uptime is ${os.uptime()} seconds`);
const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    cpu: os.cpus(),
    network: os.networkInterfaces(),
    homedir:os.homedir(),
    platform:os.platform(),
    arch:os.arch(),
}
console.log(currentOS);