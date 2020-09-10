// this is the model for the User Schema
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, unique: true , minlength: 3},
  password: { type: String, required: true },
  created_at: Date,
});

// not sure what this is but maybe it'll spark a clue
UserSchema.pre('save', function (next) {
  if (!this.created_at) this.created_at = newDate;

  next();
});

module.exports = Users = mongoose.model('users', UserSchema);
