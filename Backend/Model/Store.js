const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);
const ReviewModel = require("./reviewModel"); 
const CategoryModel = require("./categoryModel"); 

const StoreSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
    required: true,
    default: "Free",
  },
  old_price: {
    type: String,
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
  }],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", 
    required: true, 
  },
});


StoreSchema.plugin(autoIncrement, { inc_field: "id" });

const StoreModel = mongoose.model("Store", StoreSchema);

module.exports = StoreModel;
