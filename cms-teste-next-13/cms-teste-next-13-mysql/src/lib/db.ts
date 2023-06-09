import mysql from "mysql2/promise";
import { ConnectionOptions, PoolOptions, } from "mysql2"

export async function query(sql: string, values: any[] = []) { // { sql: any, values: any } // RowDataPacket | []RowDataPacket
    try {

        // const config: ConnectionOptions = {
        //     host: process.env.MYSQL_HOST,
        //     port: process.env.MYSQL_PORT | 3306,
        //     database: process.env.MYSQL_DATABASE,
        //     user: process.env.MYSQL_USER,
        //     password: process.env.MYSQL_PASSWORD,
        //     //namedPlaceholders: true,
        //     // OR
        //     // process.env.MYSQL_DATABASE_URL
        // }

        // const dbconnection = await mysql.createConnection(config); 
        // const [results] = await dbconnection.execute(sql, values);
        // await dbconnection.end();

        const config: PoolOptions = {
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT | 3306,
            database: process.env.MYSQL_DATABASE,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0
        }

        const pool = await mysql.createPool(config);
        // const promisePool = pool.promise();
        const [results] = await pool.execute(sql, values);
        await pool.end();

        return results;
    } catch (error) {
        return { error };  // console.log(error);  // throw Error(error.message);
    }
}

/*

import { RowDataPacket, OkPacket, Connection, ConnectionOptions, } from "mysql2"

export interface IProduto extends RowDataPacket {
    id?: number
    nome: string
}


export async function connection(): Promise<Connection> {
    return new Promise((resolve, reject) => {

        const config: ConnectionOptions = {
            host: process.env.MYSQL_HOST,
            // port: process.env.MYSQL_PORT,
            database: process.env.MYSQL_DATABASE,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            //namedPlaceholders: true,
            // OR
            // process.env.MYSQL_DATABASE_URL
        }

        const conn = mysql.createConnection(config);

        resolve(conn);
    }).then((result) => {
        return result;
    });
}

export class ProdutoRepository {

    readAll(): Promise<IProduto[]> {
        return new Promise((resolve, reject) => {
            connection.query<IProduto[]>("SELECT * FROM users", (err: any, res: any) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
    }

    readById(user_id: number): Promise<IProduto | undefined> {
        return new Promise((resolve, reject) => {
            connection.query<IProduto[]>(
                "SELECT * FROM users WHERE id = ?",
                [user_id],
                (err: any, res: any) => {
                    if (err) reject(err)
                    else resolve(res?.[0])
                }
            )
        })
    }

    create(user: IProduto): Promise<IProduto> {
        return new Promise((resolve, reject) => {
            connection.query<OkPacket>(
                "INSERT INTO users (email, password, admin) VALUES(?,?,?)",
                [user.email, user.password, user.admin],
                (err: any, res: any) => {
                    if (err) reject(err)
                    else
                        this.readById(res.insertId)
                            .then(user => resolve(user!))
                            .catch(reject)
                }
            )
        })
    }

    update(user: IProduto): Promise<IProduto | undefined> {
        return new Promise((resolve, reject) => {
            connection.query<OkPacket>(
                "UPDATE users SET email = ?, password = ?, admin = ? WHERE id = ?",
                [user.email, user.password, user.admin, user.id],
                (err: any, res: any) => {
                    if (err) reject(err)
                    else
                        this.readById(user.id!)
                            .then(resolve)
                            .catch(reject)
                }
            )
        })
    }

    remove(user_id: number): Promise<number> {
        return new Promise((resolve, reject) => {
            connection.execute<OkPacket>(
                "DELETE FROM users WHERE id = ?",
                [user_id],
                (err: any, res: any) => {
                    if (err) reject(err)
                    else resolve(res.affectedRows)
                }
            )
        })
    }

}

*/