
const server = http.createServer(function(req, res){
    const categoria = req.url 

    if(categoria == '/tecnologia'){
        res.end('<html><body>Noticias de Tecnologia</body></html>')
    } else if(categoria == '/moda'){
        res.end('<html><body>Noticias de moda</body></html>')
    } else if(categoria == '/beleza'){
        res.end('<html><body>Noticias de beleza</body></html>')
    } else {
        res.end('<html><body>Portal de noticias</body></html>')
    }
}).listen(3000)