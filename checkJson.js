const fs = require("fs")

const employees = []

const varun = {
    name: "varun",
    salary: 500,
    age: 24
}

const tharun = {
    name: "tharun",
    salary: 400,
    age: 34
}

employees.push(varun, tharun)

console.log(employees)

fs.writeFileSync("checkJson.json", JSON.stringify(employees))