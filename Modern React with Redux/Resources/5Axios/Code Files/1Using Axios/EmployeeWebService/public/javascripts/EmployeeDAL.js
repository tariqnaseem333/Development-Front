var MongoClient = require("mongodb");
var driver = {};

var conn = MongoClient.connect("mongodb://localhost:27017/Data_DB");

//get all employees
driver.findEmp = function(req) {
  return conn
    .then(function(mongoClientInstance) {
      var dataBase = mongoClientInstance.db();
      var collection = dataBase.collection("Employee");
      return collection
        .find()
        .project({ _id: 0 })
        .toArray();
    })
    .then(function(items) {
      console.log(items);
      return items;
    });
};

//get employee by name
driver.findEmpByName = function(EmpName, req) {
  return conn
    .then(function(mongoClientInstance) {
      var dataBase = mongoClientInstance.db();
      var collection = dataBase.collection("Employee");
      return collection.find({ empName: EmpName }).toArray();
    })
    .then(function(items) {
      console.log(items);
      return items;
    });
};

//update employee salary
driver.updateEmp = function(EmpId, req) {
  var data = req.body;
  console.log("Data: ", data);
  return conn.then(function(mongoClientInstance) {
    var dataBase = mongoClientInstance.db();
    var collection = dataBase.collection("Employee");
    return collection
      .findOneAndUpdate(
        { empId: EmpId },
        {
          $set: {
            empName: data.empName,
            achievements: data.achievements,
            salary: data.salary,
            age: data.age,
            image: data.image
          }
        },
        { returnOriginal: false }
      )
      .then(function(result) {
        return result.value;
      });
  });
};

driver.generateId = function() {
  return conn.then(function(mongoClientInstance) {
    var dataBase = mongoClientInstance.db();
    var collection = dataBase.collection("Employee");
    return collection.distinct("empId").then(function(ids) {
      var max_emp_id = Math.max(...ids);
      console.log("in before if", max_emp_id);
      if (max_emp_id == -Infinity) {
        max_emp_id = 101;
      }
      console.log("Value: ", max_emp_id + 1);
      return max_emp_id + 1;
    });
  });
};

//insert a new employee
driver.insertEmp = function(req) {
  emp = req.body;
  return conn.then(function(mongoClientInstance) {
    var dataBase = mongoClientInstance.db();
    var collection = dataBase.collection("Employee");
    return driver.generateId().then(function(eid) {
      emp.empId = eid;
      console.log(emp);
      return collection.insert(emp).then(function(result) {
        if (result.insertedCount > 0) return result.ops[0];
        else return null;
      });
    });
  });
};

//delete an existing employee
driver.deleteEmp = function(EmpId, req, res) {
  return conn.then(function(mongoClientInstance) {
    var dataBase = mongoClientInstance.db();
    var collection = dataBase.collection("Employee");
    return collection
      .findAndModify({ empId: EmpId }, [], { remove: true })
      .then(function(result) {
        return result;
      });
  });
};

driver.checkEmployee = function(EmpId) {
  return conn.then(function(mongoClientInstance) {
    var dataBase = mongoClientInstance.db();
    var collection = dataBase.collection("Employee");
    return collection.findOne({ empId: EmpId }).then(function(empRecord) {
      return empRecord;
    });
  });
};

module.exports = driver;
