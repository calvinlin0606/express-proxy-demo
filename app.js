const express = require("express");

const app = express();

const axios = require('axios');

app.get('/api/autocomplete/:query', (req, res)=> {
    const endpoint = `http://autocomplete.geocoder.api.here.com/6.2/suggest.json?app_id=8pp2PTaqs0cb2gq9aUbV&app_code=fGaxb0Pky8BokXxEFkfPog&query=${req.params.query}&beginHighlight=<b>&endHighlight=</b>&country=AUS&maxResults=5`;
    axios({
        method: 'GET',
        url: endpoint,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(response => {
        res.send(JSON.stringify(response.data))
    }).catch(error => {
        res.send(JSON.stringify(error), 400)
    })

    //res.send("Hello World");
});

app.listen(3001, ()=>{
    console.log("app is running on port 3001");
}); 