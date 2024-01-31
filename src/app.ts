import express from 'express';
import cors from 'cors';

const port = 3000;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.json('hello world!');
})
server.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});