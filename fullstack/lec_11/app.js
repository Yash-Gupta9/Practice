let http = require('http');

let server = http.createServer((req, res) => {

    let secret = "thisisasecret";
    let header = req.headers.authorization; // must be lowercase

    if (!header) {
        res.statusCode = 401;
        res.write("Kindly enter header value first");
        res.end();
        return;
    }

    if (header === secret) {
        res.statusCode = 200;
        res.write("Welcome user");
        res.end();
        return;
    } else {
        res.statusCode = 403;
        res.write("Invalid");
        res.end();
        return;
    }
});

server.listen(3000, () => {
    console.log("app is running at port 3000");
});
