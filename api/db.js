import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "nicolas",
    password: "Banco@fiap2tds",
    database: "crud"

})

