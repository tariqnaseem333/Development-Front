const { Schema } = require("mongoose");
var Mongoose = require("mongoose");
Mongoose.Promise = global.Promise;
var url = "mongodb://localhost:27017/EmployeeDB";


const EmployeeSchema = Schema({
        empId: Number,
        empName: String,
        age: Number,
        salary: Number,
        achievements: String
},{collection:"Employee"})


var collection = {}

collection.getCollection = () => {
        return Mongoose.connection.close().then(() => {
                return Mongoose.connect(url, { useNewUrlParser: true }).then((databse) => {
                        return databse.model('Employee', EmployeeSchema)
                }).catch((error) => {
                        let err = new Error("Could not connect to Database");
                        err.status = 500;
                        throw err;
                })
        })
}


module.exports = collection;




