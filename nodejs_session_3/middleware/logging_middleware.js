function LoggingMiddleware(req, res, next) {
  // request: gui len
  // response: tra ve
  // next: phuong thuc de day tien trinh den ham tiep theo
  console.log("New request at", new Date());
  next();
}

module.exports = LoggingMiddleware;
