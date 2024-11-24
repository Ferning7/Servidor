import conectarAoBanco from "../config/dbConfig.js"

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta ao banco de dados, utilizando a string de conexão obtida da variável de ambiente STRING_CONEXAO.
// Essa linha provavelmente aguarda a conexão ser estabelecida antes de continuar.


// Função assíncrona para buscar todos os posts do banco de dados.
export default async function getTodosPosts() {
    // Obtém o banco de dados com o nome "servidor_imersao"
    const db = conexao.db("servidor_imersao");
    // Obtém a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
    return colecao.find().toArray();
};