
const http=require('http');
const port=8000;

const fs=require('fs');

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});// if i dont include this then it works fine
    // fs.readFile('./index.html',function(err,data){
    //     if(err)
    //     {
    //         console.log('error',err);
    //         res.end('<h1>Error!</h1>');
    //     }
    //     res.end(data);
    // })

    let filePath;
    switch(req.url)
    {
        case '/': filePath='./index.html';
             break;
        case '/profile': filePath='./profile.html';
             break;
        default: filePath='./404.html';
    }

    fs.readFile(filePath,function(err,data){
        if(err)
        {
            console.log('error',err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);
    })
}

const Server=http.createServer(requestHandler);

Server.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return;
    }

    console.log('server is running and up on port: ',port);

});

