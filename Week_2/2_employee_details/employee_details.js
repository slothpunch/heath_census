const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];

// Create the displayEmployees() function to display employee details 
// const totalEmployees = employees.map((employee, index) =>
function displayEmployees() {
    const totalEmployees = employees.map((employee) =>
        `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}</p>`
      ).join('');
      document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((total, emp) => total + emp.salary, 0);
    alert(`Total Salaries: ${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmps = employees.filter((emp) => emp.department === 'HR');
    const hrEmpDisplay = hrEmps.map((emp, idx) => 
    `<p>${emp.id}: ${emp.name}: ${emp.age} - ${emp.department} - ${emp.salary} </p>`);
    document.getElementById('employeesDetails').innerHTML = hrEmpDisplay;
}

function findEmployeeById(emp_id) {
    const foundEmp = employees.find((emp) => emp.id === emp_id);
    if (foundEmp) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmp.id}: ${foundEmp.name}: ${foundEmp.age} - ${foundEmp.department} - ${foundEmp.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}
