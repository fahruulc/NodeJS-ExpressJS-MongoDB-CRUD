const dbConfig = require("../../config/db.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.posts = require("./post.model")(mongoose);

module.exports = db;
