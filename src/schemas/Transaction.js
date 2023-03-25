const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    name: String,
    surname: String,
    tcNumber: Number,
    _transactionNumber: {
        type: Number,
        unique: true
    }
})

module.exports = mongoose.model("Transaction", transactionSchema);