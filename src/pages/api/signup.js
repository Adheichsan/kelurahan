import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { fullname, email, password } = req.body;

    try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await prisma.user.create({
            data: {
                fullname,
                email,
                password: hashedPassword,
            },
        });

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
