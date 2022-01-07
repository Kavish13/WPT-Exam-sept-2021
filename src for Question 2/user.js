const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "webtech",
  password: "webtechnology",
  database: "webtechnologyprac2022",
};

const record = {
  sender: "kavish",
  receiver: "kd",
  msg: "hello...",
};

const addRecord = async (record) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const sql = `insert into message (sender,receiver,msg) value (?,?,?)`;
  await connection.queryAsync(sql, [
    record.sender,
    record.receiver,
    record.msg,
  ]);
  await connection.endAsync();
  console.log("record added");
};

const getRecord = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  const sql = `select * from message`;
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log("list of record");
  console.log(list);
  return list;
};
getRecord();

module.exports = { addRecord, getRecord };
