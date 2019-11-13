var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    // cat.all(function(data) {
    //   var hbsObject = {
    //     cats: data
    //   };

    // res.render("index", hbsObject);
      res.render("index");
    });

  

module.exports = router;

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Articleschema = new Schema({
	title: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	summary: {
		type: String,
		default: "Summary unavailable."
	},
	img: {
		type: String,
		// default: "/assets/images/unavailable.jpg"
	},
	issaved: {
		type: Boolean,
		default: false
	},
	status: {
		type: String,
		default: "Save Article"
	},
	created: {
		type: Date,
		default: Date.now
	},
	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	}
});

Articleschema.index({title: "text"});

var Article  = mongoose.model("Article", Articleschema);
module.exports = Article;