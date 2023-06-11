import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getUser(req, res);

        case "POST":
            return await addUser(req, res);

        default:
            return res.status(405).end(); // Method not allowed
        //return res.status(500).json("Não Implementado");
    }
}

const getUser = async (req, res) => {
    try {
        const results = await prisma.User.findMany({ orderBy: { username: 'desc' } });
        // const results = await prisma.user.findMany({ where: { email: { endsWith: 'prisma.io' } } })
        // const results = await prisma.user.findMany({where: {OR: [{name: {startsWith: 'E',},},{AND: {profileViews: {gt: 0,},role: {equals: 'ADMIN',}}}]}})
        // const results = await prisma.user.findMany({where: {email: {endsWith: "prisma.io"},posts: {some: {published: false}}},}
        // const results = await prisma.user.findMany({where: {role: 'ADMIN',},include: {posts: true,},})
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json(error.message); // json({ message: error.message })
    }
}

const addUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const data = { username: username, email: email };

        const result = await prisma.User.create({ data: data, select: { id: true } });
        return res.status(200).json({ ...result, username, email });

        // const result = await prisma.User.create({ data: data, select: { '*': true } }); 
        // return res.status(200).json(result);

        // return res.status(200).json({ success: true, user: result });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


