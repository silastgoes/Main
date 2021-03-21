var http = require('http')

var server = http.createServer(function(req,res){

    var category = req.url
    if(category=='/tecnology'){
        res.end("<html><bory>Noticias de Tecnologia</bory></html>")
    } else if(category=='/fashion'){
        res.end("<html><bory>Noticias de Moda</bory></html>")
    }else{    
        res.end("<html><bory>Portal de Notícias</bory></html>")
    }
});

server.listen(3000)