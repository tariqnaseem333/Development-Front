var collection = require('./connections');

collectionDocument = [
    {
        "empId": 101,
        "empName": "Claire",
        "age": 30,
        "salary": 50000,
        "achievements": "Professional Angular developer"
    },
    {
        "empId": 102,
        "empName": "Benny",
        "age": 29,
        "salary": 150000,
        "achievements": "Professional React developer"
    }, {
        "empId": 103,
        "empName": "Daphne",
        "age": 27,
        "salary": 80000,
        "achievements": "Professional Vue developer"
    }, {
        "empId": 104,
        "empName": "Matt",
        "age": 31,
        "salary": 00000,
        "achievements": "Professional Express developer"
    }, {
        "empId": 105,
        "empName": "Peter",
        "age": 29,
        "salary": 150000,
        "achievements": "Professional Scala developer"
    },

]

exports.setupDb = () => {
    return collection.getCollection().then((mycollection) => {
        return mycollection.deleteMany().then((data) => {
            return mycollection.insertMany(collectionDocument).then((data) => {
                if (data) {
                    return 'Data inserted into database';
                }
                else { throw new Error("Insertion failed") }
            })

        })
    })
}