const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
var mongooseDelete = require("mongoose-delete");

mongoose.set("strictQuery", true);
const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

// Add plugin
mongoose.plugin(slug);
mongoose.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Course", Course);
