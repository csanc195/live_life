var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required:true,
		trim:true,
	},
	postBody: {
		type: String,
		required: true,
		trim: true
	},
	timeStamp: {
		type: Date,
		required: true,
	}
});

var Event = mongoose.model("Event", EventSchema);
module.exports = Event;