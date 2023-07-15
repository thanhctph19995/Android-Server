var http = require('http');
var fs = require('fs');
var data = "\n Luu Ngoc Thao Nhi \n ph19999 \n nhilntph19999@gmail.com";

http.createServer(function (req, res) {
    if (req.url == '/docfile') {
        readFileAndResponse(res, './lab3bai2.html');
    }
    else if (req.url == '/taofile') {
        fs.writeFile('thongtin.txt', 
        'Chu The Thanh ph19995 \n 0327851479 \n thanhctph19995@fpt.edu.vn', function (err) {
          if (err) throw err;
          console.log('Saved!');
          res.write('Da tao file');
          res.end();
        });
    }
    else if (req.url == '/themsv') {
        fs.appendFile('thongtin.txt',data, 'utf8',
        function(err){
            if (err) throw err;
            console.log("data saved!");
        });
    }
    else if (req.url == '/doiten') {
        fs.rename('thongtin.txt', 'mssv.txt', function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
          });
    }
}).listen(8000);
function readFileAndResponse(res, fileUrl) {
    fs.readFile(fileUrl, function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }