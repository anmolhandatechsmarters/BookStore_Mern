const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose); // Correct import

const UserSchema = new mongoose.Schema({
    userId: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Apply the auto-increment plugin to the User schema
UserSchema.plugin(autoIncrement, { inc_field: 'userId' });

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
