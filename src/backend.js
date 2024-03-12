// this is just the backend for this website, just basically a simple page switcher that draws from it. ported to 3000 cuz why not
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname + ".html";
    //console.log(filename);
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
}).listen(3000);