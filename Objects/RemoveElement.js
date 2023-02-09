const Employee = {
    firstname: 'John',
    lastname: 'Doe'
  };
  
  console.log(Employee.firstname);
  // Expected output: "John"
  
  delete Employee.firstname;
  
  console.log(Employee.firstname);
  // Expected output: undefined

 // 2. Object destructuring with rest syntax
 const employee = {
    name: 'John Smith',
    position: 'Sales Manager'
  };
  const { position, ...employeeRest } = employee;
  console.log(employeeRest); // { name: 'John Smith' }
  console.log(employee); 
  // { name: 'John Smith',position: 'Sales Manager' }

  const employee1 = {
    name: 'John Smith',
    position1: 'Sales Manager',
    experience: 6, // years
  };
  const { position1, experience, ...employeeRest1 } = employee;
  console.log(employeeRest1); // { name: 'John Smith' }
  