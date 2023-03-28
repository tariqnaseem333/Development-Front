var empOne = {
    name : "John",
    empNumber : 1001,
    emailId : "John@gmail.com"
};

//to get property names
console.log("property names:")
for(let property in empOne){
  console.log(property);
}

// to get the values of property
console.log("property values:")
for(let property in empOne){
  console.log(empOne[property]);
}

// to get the values of property using Object.values()
console.log("property values using Object.values():")
console.log(Object.values(empOne));