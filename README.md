# API_node_express
Created REST API using node package npm and express

Steps to downlaod and install Node.js:

1. GO to https://nodejs.org/en/download/ and download the file inaccordance to the system requirements
2. Follow the prompts till installation
3. Open the cmd in Windows (Windows Key + X -> press 'R'(To open Run) -> Type in 'cmd' -> cmd will open up
4. Type in npm -v (wait a few seconds, it will show the current installed version)
5. To create first Hello World program on your computer using Node.js

Create a file name mynodeprogram.js 
And type in the follwoing code to it:

                var http = require('http');
                http.createServer(function (req, res) {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end('Hello World!');
                }).listen(8080);
Save the file

In cmd chnage the location to the disk where the file is stored. For eg in cmd >>> cd c:/users/username/Desktop/
It will change the directory to desktop, then type in node mynodeprogram.js
And now your porgram is running on the local server at port 8080 which is your computer only.
