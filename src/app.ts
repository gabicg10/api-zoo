import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';

const port = 3043;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    //res.json('hello world!');
    let ave: Ave = new Ave('papagaio', 30, 'macho', 10);
    let reptil: Reptil = new Reptil('lagarto',2, 'femea', 'cicloides');
    let mamifero: Mamifero = new Mamifero('cachorro', 8, 'macho', 'doberman');
    res.json([ave, reptil, mamifero, ]);
});

server.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});

server.post('/ave', (req, res) => {
    const {nome, idade, genero, envergadura} = req.body;
    const novaAve = new Ave (nome, idade, genero, envergadura);
    res.json(['essa é a nova ave', novaAve]);
});