import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    switch (req.method) {
        case "DELETE":
            return await deleteMulti(req, res);

        default:
            return res.status(405).end(); // Method not allowed
        //return res.status(500).json("Não Implementado");
    }
}

const deleteMulti = async (req, res) => {
    try {
        let ids;
        ids = req.body?.ids;
        if (!ids) {
            let lista = req.headers['x-ids'];
            lista = String(lista ?? '');
            ids = lista.split(',').map(item => parseInt(item));
            //console.log(ids)
            //console.log(typeof ids)
        }
        if (!ids) return res.status(200).json("No body");
        const where = { id: { in: ids } };
        await prisma.User.deleteMany({ where: where });
        return res.status(200).json({ success: true, ids: ids });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
