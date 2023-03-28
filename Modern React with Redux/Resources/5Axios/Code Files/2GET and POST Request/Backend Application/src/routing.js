var express = require('express');
var routing = express.Router();
var create = require('./dbsetup');
var dbCalled = require('./connections');

routing.get('/setupdb',(req,res,next)=>{
    create.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})

routing.get('/retreiveEmployeelist',(req,res,next)=>{
    return dbCalled.getCollection().then((model)=>{
        return model.find().then((data)=>{
            res.send(data);
        })
    })
})

routing.post('/InsertEmployee',(req,res,next)=>{
    let obj = req.body;
    return dbCalled.getCollection().then((model)=>{
        return model.create(obj).then((data)=>{
            if(data){
                res.send(`${obj.empName} inserted successfully with employee id: ${obj.empId}`)
            }
            else{
                res.send('Some server error occurred')
            }
        })
    })
})



module.exports = routing;