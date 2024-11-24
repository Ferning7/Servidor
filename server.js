import express from 'express';
import routes from './src/routes/postsRoutes.js';
// Importa o framework Express para criação de aplicações web.


const app = express();
routes(app)


app.listen(3000, () => {
    // Inicia o servidor Express na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
    console.log("Perigoso ta na ativa");
});
