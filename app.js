// const { readFile} = require('fs');

// console.log('started a new operation');

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     console.log('completed first task');
// })
// console.log('starting next task');

// console.log('first ')
// setTimeout(()=>{
//     console.log('second')
// },0)
// console.log('third')

// setInterval(()=>{
//     console.log('hello world')
// },2000)
// console.log('I will run first')

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('requestt event')
    res.end('hello world')
})

server.listen(5000,()=>{
    console.log('server is listening on port 5000')
})