var express = require("express");
var routing = express.Router();

var DAL = require("../public/javascripts/EmployeeDAL.js");

//insert an employee
routing.post("/InsertEmployee", function(req, res) {
  console.log("request received for adding new employee in database!!");
  // DAL.checkEmployee(req.body.empId).then(function(empData) {
  //   if (empData != null) {
  //     console.log("Error", empData);
  //     res.status(500);
  //     res.json({
  //       message: "Employee already exist with employee ID: " + req.body.empId
  //     });
  //   }
  // });
  return DAL.insertEmp(req).then(function(items) {
    if (items != null)
      res.json({
        message:
          items.empName +
          " inserted successfully with employee id: " +
          items.empId
      });
    else {
      res.status(500);
      res.json({ message: "Could not save employee data" });
    }
  });
});

//delete based on employee name
routing.delete("/deleteEmployee", function(req, res) {
  console.log("request received for deleting employee details from database!!");
  empId = parseInt(req.body.empId);

  return DAL.deleteEmp(empId, req)
    .then(function(items) {
      // console.info('The promise was fulfilled with items!', items);
      res.json(items);
    })
    .catch(function(err) {
      res.json({ message: "sorry, Error here" });
    });
});

//update employee details

routing.put("/updateEmployeeDetails/:id", function(req, res) {
  console.log("request received for updating employee details in database!!");
  empId = parseInt(req.params.id);
  return DAL.updateEmp(empId, req, res)
    .then(function(items) {
      // console.info('The promise was fulfilled with items!', items);
      res.json({
        message:
          "Employee details successfully update for empId: " + items.empId,
        data: items
      });
    })
    .catch(function(err) {
      res.json({ message: "sorry, Error here" });
    });
});

//get all the employees
routing.get("/retreiveEmployeelist", function(req, res) {
  console.log(
    "request received for retreiving employee details from database!!"
  );
  return DAL.findEmp(req)
    .then(function(items) {
      // console.info('The promise was fulfilled with items!', items);
      res.json(items);
    })
    .catch(function(err) {
      res.json({ message: "sorry, Error here" });
    });
});

//get an employee based on employee name
routing.get("/getEmployeeByName", function(req, res) {
  EmpName = req.query.name;
  console.log(
    "request received for retreiving employee details from database!!"
  );
  return DAL.findEmpByName(EmpName, req)
    .then(function(items) {
      // console.info('The promise was fulfilled with items!', items);
      res.json(items);
    })
    .catch(function(err) {
      res.json({ message: "sorry, Error here" });
    });
});

module.exports = routing;
