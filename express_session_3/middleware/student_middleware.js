const students = [
  {
    id: 1,
    name: "Hai",
  },
  {
    id: 2,
    name: "Tu",
  },
  {
    id: 3,
    name: "Trung",
  },
];

function studentMiddleware(req, res, next) {
  console.log("request body", req.body);
  const index = students.findIndex(
    (ele) => {
      return JSON.stringify(ele) === JSON.stringify(req.body);
    }
    // if index === -1 student info khong thuoc array student
    // if index >= 0 student info thuoc array student
  );
  const isUnauthorized = index < 0 ? true : false;
  //   if (index >= 0) {
  //     isHacker = true;
  //   } else {
  //     isHacker = false;
  //   }

  if (isUnauthorized) {
    res.status(401);
    res.send("Unauthorized");
    return;
  }
  next();
}

module.exports = studentMiddleware;
