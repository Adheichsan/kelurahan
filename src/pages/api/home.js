import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const homeItems = await prisma.home.findMany();
            res.status(200).json(homeItems);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
