var http = require("http");
let employee = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
];

function getAllEmployees() {
    return employee;
}



console.log("Lab 03 -  NodeJs");


//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"OK": "${http.STATUS_CODES[200]}"}`)
    } else {
        if (req.url === '/') {
            res.end("<h1>Welcome to Lab Exercise 03</h1>")
        }

        if (req.url === '/employee') {
            res.end(JSON.stringify(getAllEmployees()));
        }

        if (req.url === '/employee/names') {
            let names = employee.map(emp => `${emp.firstName} ${emp.lastName}`);
            names.sort();
            res.end(JSON.stringify(names));
        }

        if (req.url === '/employee/totalsalary') {
            let totalSalary = employee.reduce((sum, emp) => sum + emp.Salary, 0);
            res.end(JSON.stringify({ "total_salary": totalSalary }));
             
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})