module.exports = function (app) {

    var GroceryItem = require('./../models/GroceryItem.js');

    app.route('/api/items')
        .get(function (req, res) {
            GroceryItem.find(function(err, doc) {
                res.send(doc);
            });

        })
        .post(function (req, res) {
            console.log('Adding item...');
            var item = req.body;
            var groceryItem = new GroceryItem(item);
            groceryItem.save(function (err, data) {
                res.status(300).send();
            })
        })

}
