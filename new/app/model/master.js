const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: String,
  slug: { type: String, unique: true },
  description: String
});
EventSchema.pre("save", function(next) {
  this.slug = slugify(this.name);
  next();
});
const EventModel = mongoose.model("Event", EventSchema);
module.exports = EventModel;
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
