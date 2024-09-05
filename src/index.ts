import express, { Request, Response } from 'express';
import getClient from "./client/elasticsearch";

const app = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
    const client = getClient();

    try {
        // Criar um registro no Elasticsearch
        const result = await client.index({
            index: 'elastic_teste',
            type: 'type_elastic_teste',
            body: {
                idUsuario: 'sdvsdgv3gh1fsd23132123123',
                nome: 'Manell',
                email: 'manell@gmail.com',
                acao: 'Entrou na home do sistema...',
                tsCriacao: new Date(),
            },
        });

        res.send(result);
    } catch (error) {
        console.error('Erro ao indexar documento no Elasticsearch:', error);

        return res.status(500).json({ message: 'Erro ao criar registro' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
