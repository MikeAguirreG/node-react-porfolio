const catalog = './store/catalog.json'
const fs = require('fs');

exports.catalog = (req, res) => {
    console.log(catalog)
    fs.readFile(catalog, 'utf8', (error, data) => {
        if (error) {
            return res.status(400).json({
                error : error    
            })
        }
        return res.send(JSON.parse(data))
    });
}