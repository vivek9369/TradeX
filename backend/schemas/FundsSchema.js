const { Schema } = require("mongoose");

const FundsSchema = new Schema({
  availableMargin: { type: Number, default: 0 },
  usedMargin:      { type: Number, default: 0 },
  openingBalance:  { type: Number, default: 0 },
  payin:           { type: Number, default: 0 },
  span:            { type: Number, default: 0 },
  deliveryMargin:  { type: Number, default: 0 },
  exposure:        { type: Number, default: 0 },
  optionsPremium:  { type: Number, default: 0 },
  updatedAt:       { type: Date,   default: Date.now },
});

module.exports = { FundsSchema };
