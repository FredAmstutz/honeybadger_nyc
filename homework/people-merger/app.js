const fs = require('fs');

fs.readFile('./people1.json', 'utf-8', function(err, data) {
    if (err) throw err;
    const names1 = JSON.parse(data);
    fs.readFile('./people2.json', 'utf-8', function(err, data) {
        if (err) throw err;
        const names2 = JSON.parse(data);
        const combinedNames = names1.concat(names2).sort();
        fs.writeFile('./peopleComplete.txt', combinedNames);
    });
});