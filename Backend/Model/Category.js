const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);

const CategorySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  category_name: {
    type: String,
    required: true,
  },
});

// Apply auto increment to the category id
CategorySchema.plugin(autoIncrement, { inc_field: "id" });

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;
