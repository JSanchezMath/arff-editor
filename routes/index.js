var express = require('express');
var arff = require('node-arff');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  arff.load('storage/eucalyptus.arff', function (err, data) {
    if (err) {
      return console.error(err);
    }
    //console.log(data.name);
    //console.log(data.attributes);
    //console.log(data.types);
    //console.log(data.data);
    var variables = {
      title: 'Editor ARFF',
      file: 'eucalyptus.arff',
      dataset: {
        name: data.name,
        attributes: data.attributes,
        types: data.types,
        data: data.data
      }
    };
    res.render('index', variables);
  });
});

module.exports = router;
