// pages/api/upload.js
import { PrismaClient } from '@prisma/client';
import formidable from 'formidable';

const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: false, // Disable the built-in body parser
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const form = new formidable();

    try {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Error parsing form data:', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            const file = files.file;

            // Save the file to the database using Prisma
            const savedFile = await prisma.file.create({
                data: {
                    filename: file.name,
                },
            });

            return res.status(200).json({ message: 'File uploaded and saved to the database', file: savedFile });
        });
    } catch (error) {
        console.error('Error during file upload:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
