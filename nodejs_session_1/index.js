const fs = require("fs"); // file system

// fs.readFile("./mindx1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error of fs function: ", err);
//   }
//   console.log("data: ", data);
// });
// CRUD : Create, delete, update, read
const data = fs.readFileSync("./students.json");
const students = JSON.parse(data);
const newStudent = {
  id: 2,
  name: "Tuan",
  gender: "Female",
};
students["data"].push(newStudent);

fs.writeFileSync("./students.json", JSON.stringify(students));
