import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getUser(req, res);

        case "PUT":
            return await updateUser(req, res);

        case "DELETE":
            return await deleteUser(req, res);

        default:
            return res.status(405).end(); // Method not allowed
        //return res.status(500).json("Não Implementado");
    }
}

const getUser = async (req, res) => {
    try {
        const { userId } = req.query;
        const where = { id: parseInt(userId) };
        const result = await prisma.User.findFirst({ where: where });
        // const results = await prisma.user.findUnique({ where: { email: 'elsa@prisma.io' } })
        // const results = await prisma.user.findUnique({ where: { id: 99 } })
        // const results = await prisma.user.findFirst({ where: { posts: { some: { likes: { gt: 100 } } } }, orderBy: { id: "desc" } }) }
        // const results = await prisma.user.findUnique({where: {email: 'emma@prisma.io',},select: {email: true,name: true,},})
        // const results = await prisma.user.findUnique({where: {email: 'emma@prisma.io',},select: {email: true,posts: {select: {likes: true,},},},})
        // const results: User | null = await prisma.user.findUnique({ where: { id: 22 } })
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const { userId } = req.query;
        const { username, email } = req.body;
        const where = { id: parseInt(userId) };
        const data = { username: username, email: email };
        const result = await prisma.User.update({ where: where, data: data });
        // const result = await prisma.user.upsert({where: {email: 'viola@prisma.io',},update: {name: 'Viola the Magnificent',},create: {email: 'viola@prisma.io',name: 'Viola the Magnificent',},})
        return res.status(200).json({ userId, username, email });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.query;
        const where = { id: parseInt(userId) };
        await prisma.User.delete({ where: where });
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
