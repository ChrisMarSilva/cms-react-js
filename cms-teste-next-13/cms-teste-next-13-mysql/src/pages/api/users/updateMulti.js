import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    switch (req.method) {
        case "PUT":
            return await updateMulti(req, res);

        default:
            return res.status(405).end(); // Method not allowed
        //return res.status(500).json("Não Implementado");
    }
}

const updateMulti = async (req, res) => {
    try {
        const { ids, username, email } = req.body;
        const where = { id: { in: parseInt(ids) } };
        const data = { username: username, email: email };
        const result = await prisma.User.updateMany({ where: where, data: data, select: { '*': true } });
        // const result = await prisma.user.updateMany({ where: { email: { contains: 'prisma.io' }}, data: { role: 'ADMIN', }})
        // const result = await prisma.post.updateMany({ data: {views: {increment: 1,},likes: {increment: 1,},},})
        return res.status(200).json(result); // json({ userId, username, email });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
