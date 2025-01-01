const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose); // Correct import

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      default: null,
    },
    active: {
      type: String,
      enum: ["active", "inactive"],
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(autoIncrement, { inc_field: "userId" });

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
