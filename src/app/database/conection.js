import mysql from 'mysql';

const conection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '100200',
  database: 'bd_api-copa'
});

conection.connect()

export const Query = (sql, value='', messageReject) => {
  return new Promise((resolve, reject) => {
    conection.query(sql, value, (error, results) => {
      if(error) return reject(messageReject)
      const row = JSON.parse(JSON.stringify(results))
      return resolve(row)
    })
  })
}

export default conection;