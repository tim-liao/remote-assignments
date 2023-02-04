import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getUser(email) {
  const [[rows]] = await connection.query(
    `SELECT * FROM user  WHERE email = ?`,
    [email]
  );
  return rows;
}

export async function createUser(email, password) {
  await connection.query(`INSERT INTO user (email, password) VALUES (?,?)`, [
    email,
    password,
  ]);
  return getUser(email);
}

// const ss = await getUser("aa@gmail.com");
// console.log(ss);
// const aa = await createUser("test", "test");
// console.log(aa);
