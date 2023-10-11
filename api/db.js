import mysql from "mysql"

export const db = mysql.createConnection({
    host: "cp2-sqlserver.database.windows.net",
    port: 1433,
    user: "nicolas",
    password: "Banco@fiap2tds",
    database: "crud"

})

