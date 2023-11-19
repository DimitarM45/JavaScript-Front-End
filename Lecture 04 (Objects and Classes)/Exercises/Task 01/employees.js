function printEmployeeInfo(employees) {
  for (let i = 0; i < employees.length; i++) {
    let employee = {
      name: employees[i],
      personalNumber: employees[i].length,
    };

    console.log(
      `Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`
    );
  }
}
