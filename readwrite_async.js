const {readFile, writeFile}=require('fs');

readFile('./content/first.txt','utf8',(err,output)=>
{
    if(err) throw err;
    console.log(output);
    const first=output;


readFile('./content/second.txt','utf8',(err,output)=>{
    if(err) throw err;
    console.log(output);
    const second=output;


writeFile('./content/resultasync.txt',`my name is : ${first} ${second}`,{flag:'a'},(err,output)=>{
    if(err) throw err;
    console.log(output);
})
})
})