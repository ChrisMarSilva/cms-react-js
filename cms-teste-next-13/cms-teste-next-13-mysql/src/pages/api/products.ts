import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from "@/lib/db";
import { RowDataPacket, } from "mysql2"

interface IBodyPost {
    nome: string;
}

interface IBodyPut {
    id: number;
    nome: string;
}

interface IBodyDelete {
    id: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => { // export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // console.log(`${req.method}`); //  - body:
    const { body } = req;
    // console.log(body);
    //console.log(req.query);
    const { _id } = req.query;
    //console.log(`_id ${_id}`);

    if (req.method === "GET") {
        const sql = "SELECT * FROM produtos";
        const params: any[] = []; // Array<any>; // 
        const products = await query(sql, params); // { sql: sql, values: params, }
        //const products = await query({ sql: sql, values: params, }, (err, results, fields) => { console.log('results:', results); console.log('fields:', fields); console.log('error:', err); });

        res.status(200).json({ products: products });
        return;
    }

    if (req.method === "POST") {
        // const nome = req.body.nome;
        const { nome } = body as IBodyPost;
        // console.log(`nome ${nome}`);

        const sql = "INSERT INTO produtos (nome) VALUES (?)";
        const params = [nome];
        const addProducts = await query(sql, params); // { sql: sql, values: params, }

        const message = (addProducts as RowDataPacket).insertId ? "success" : "error";
        const product = { id: (addProducts as RowDataPacket).insertId, nome: nome, };
        res.status(200).json({ response: { message: message, product: product } });
        return;
    }

    if (req.method === "PUT") {
        // const id = req.body.id;
        // const nome = req.body.nome;
        const { id, nome } = body as IBodyPut;
        // console.log(`id ${id} - nome ${nome}`);

        const sql = "UPDATE produtos SET nome = ? WHERE id = ?";
        const params = [nome, id];
        const updateProducts = await query(sql, params); // { sql: sql, values: params, }

        const result = (updateProducts as RowDataPacket).affectedRows;

        const message = result ? "success" : "error";
        const product = { id: id, nome: nome, };
        res.status(200).json({ response: { message: message, product: product } });
        return;
    }

    if (req.method === "DELETE") {
        // const head_token = head.get("x-id");
        // const id = idDelete; // req.body.id;
        //const { id } = body as IBodyDelete;
        //const { id } = req.query;
        // console.log(`id ${id}`);

        if (!_id) res.status(200).json({ response: { message: "error" } });

        const sql = "DELETE FROM produtos WHERE id = ?";
        const params = [_id];
        const deleteProducts = await query(sql, params); // { sql: sql, values: params, }
        //console.log(deleteProducts);

        const result = (deleteProducts as RowDataPacket).affectedRows;
        //console.log(`result ${result}`);

        const message = result ? "success" : "error";
        res.status(200).json({ response: { message: message, id: _id } });
        return;
    }
}

export default handler;
