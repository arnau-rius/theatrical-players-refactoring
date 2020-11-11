const { htmlStatement } = require("../src/statement");
const fs = require("fs");

test("html statement test", () => {
  const invoice = JSON.parse(fs.readFileSync("test/invoice.json", "utf8"));
  const plays = JSON.parse(fs.readFileSync("test/plays.json", "utf8"));
  expect(htmlStatement(invoice, plays)).toMatchSnapshot();
});
