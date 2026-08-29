const { model } = require('mongoose');

const  {PositionsSchema } = require('../schemas/PostionsSchema');

const PositionsModel = new model("postion", PositionsSchema);

module.exports = {PositionsModel};