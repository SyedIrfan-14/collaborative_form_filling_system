// const mysql = require('mysql2/promise');
// require('dotenv').config();

// let db;

// if (process.env.MYSQL_URL) {
//   const dbUrl = new URL(process.env.MYSQL_URL);
//   db = mysql.createPool({
//     host: dbUrl.hostname,
//     user: dbUrl.username,
//     password: dbUrl.password,
//     database: dbUrl.pathname.replace('/', ''),
//     port: dbUrl.port || 3306,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
//     ssl: {
//       rejectUnauthorized: false
//     },
//     // Force IPv4
//     family: 4
//   });
// } else {
//   db = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT || 3306,
//     family: 4
//   });
// }

// // Optional: Test connection
// (async () => {
//   try {
//     const conn = await db.getConnection();
//     await conn.ping();
//     console.log('✅ MySQL database connected successfully.');
//     conn.release();
//   } catch (err) {
//     console.error('❌ MySQL connection failed:', err.message);
//   }
// })();

// module.exports = db;


const mysql = require('mysql2/promise');
require('dotenv').config();

let db;

if (process.env.MYSQL_URL) {
  // Railway-provided URL (preferred for production)
  const dbUrl = new URL(process.env.MYSQL_URL);
  db = mysql.createPool({
    host: dbUrl.hostname,
    user: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.slice(1),
    port: dbUrl.port || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
} else {
  // Local/custom fallback
  db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'test',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
}

db.getConnection()
  .then(() => console.log('✅ MySQL connected'))
  .catch((err) => console.error('❌ MySQL connection failed:', err.message));

module.exports = db;

