var mongoose = require("mongoose");

var AnnUserSchema = new mongoose.Schema({

    userIp: {
        type: String,
        required: true
    },
    upVotedPosts: [{
        postId : String
    }],
    downVotedPosts: [{
        postId : String
    }]
});

var AnnUser = mongoose.model("AnnUser", AnnUserSchema);
module.exports = AnnUser;