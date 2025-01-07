const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);

const ReviewSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    userid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number, // Rating between 1 to 5
        min: 1,
        max: 5,
        required: true,
    },
    comment: {
        type: String, // Comment text for the review
    },
});

// Apply auto increment to the review id
ReviewSchema.plugin(autoIncrement, { inc_field: "id" });

const ReviewModel = mongoose.model("Review", ReviewSchema);

module.exports = ReviewModel;
