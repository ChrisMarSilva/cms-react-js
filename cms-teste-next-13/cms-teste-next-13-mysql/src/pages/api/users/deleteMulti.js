import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    switch (req.method) {
        case "DELETE":
            return await deleteMulti(req, res);

        default:
            return res.status(500).json("Não Implementado");
    }
}

const deleteMulti = async (req, res) => {
    try {
        const { ids } = req.body;
        const where = { id: { in: parseInt(ids) } };
        await prisma.User.deleteMany({ where: where });
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
