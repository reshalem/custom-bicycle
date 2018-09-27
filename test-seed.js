const fs = require('fs');

let cargos = fs.readFileSync('./JSON/cargos.json', 'utf8');
let cleanCargos = JSON.parse(cargos);

for (let i = 0; i < cleanCargos.length; i++) {
    cleanCargos[i].createdAt = new Date;
    cleanCargos[i].updatedAt = new Date;
}

console.log(cleanCargos);