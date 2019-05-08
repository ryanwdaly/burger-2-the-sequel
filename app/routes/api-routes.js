var BurgerData = require("../models/burgerData");

// Routes
// =============================================================
module.exports = function(app) {

  app.post("/api/burgers", function(req, res) {
    console.log("Burger Data:");
    console.log(req.body);
    BurgerData.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/burgers/all", function(req, res) {
    BurgerData.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/burgers/:id", function(req, res) {
    BurgerData.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      console.log(result);
      res.json(result);
    });
  });

  app.post('/api/update/:id', function(req, res){
    //update Temperatures table and burgers table

    BurgerData.update({
        devoured: 1,
        burger_id: req.params.id
      },
      {
        where: {id : req.params.id}
      }).then(function(data){
        res.json(data);

      }).catch(function(err){
        console.log(err);
      });
    
  });

};
