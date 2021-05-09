const mongoose = require("mongoose");

const thesisAuthorSchema = new mongoose.Schema({
    book_id : {type:String, required: true},
    author_fname : {type:String, required: true},
    author_lname : {type:String, required: true}
});

const thesisAuthorModel = mongoose.model("sp_thesis_author", thesisAuthorSchema);

module.exports = thesisAuthorModel;
