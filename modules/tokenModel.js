const { Schema, model } = require("mongoose");

const TokenSchema = new Schema({
  userId: { type: String },
  token: { type: String },
});

module.exports = model("tokenModule", TokenSchema);
