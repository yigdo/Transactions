const { randomName, randomSurname, RandomInt } = require("../data/DummyData");

function TransactionSeeder(seedAmount){
    let insertArray = []
    let workingEntity;
    for (let i = 0; i < seedAmount; i++) {
        workingEntity = {name: randomName(), surname: randomSurname(), tcNumber:RandomInt(10000000000, 99999999999), _transactionNumber: RandomInt(0,10000000)}
        
        do {

            if(insertArray.find(e => e._transactionNumber == workingEntity._transactionNumber) == null){
                isOk = true;
            }else{
                isOk = false;
            }

        } while (isOk == false);
        insertArray.push(workingEntity);
    }
    return insertArray;
}

exports.TransactionSeeder = TransactionSeeder