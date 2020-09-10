/*
// ./server/models/Habit.js

// const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema({
  uid: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  frequency: { type: Array, required: true },
  created_at: Date,
  start_date: { type: Date, required: true }
});

habitSchema.pre('save', function(next) {
  if (!this.created_at)
    this.created_at = new Date;

  next();
});

const Habit = mongoose.model('habits', habitSchema);

module.exports = Habit;
*/