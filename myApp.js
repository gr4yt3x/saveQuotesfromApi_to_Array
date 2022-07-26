const express = require('express');
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var request = new XMLHttpRequest();


app.get('/',(req,res) => {
    res.send(quotes);
})


var quotes = []

for(var i = 0; i < 20; i++){
    request.open("GET","https://api.quotable.io/random", false);
    request.send();
    json = JSON.parse(request.responseText);
    var quote = json.content;

    quotes.push(quote)
}


app.listen('3000' , () => console.log("escutando na porta 3000"));