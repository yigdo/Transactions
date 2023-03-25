const mongoose = require("mongoose");
const Transaction = require("./schemas/Transaction");
const { TransactionSeeder } = require("./seeder/TransactionSeeder");
require("dotenv").config();

mongoose.connect(process.env.CONNECTION_STRING ?? "localhost");

if (process.env.DEVELOPMENT = true){
    Transaction.deleteMany({});
    Transaction.insertMany(TransactionSeeder(10))
}