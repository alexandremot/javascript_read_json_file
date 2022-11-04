'use strict';

const fs = require('fs');

fs.readFile('dados_chave.json', (err, data) => {
    if (err) throw err;
    let my_json = JSON.parse(data);
    console.log(my_json[0].chave);
});
