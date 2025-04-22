📦 API de Entregadores e Estabelecimentos
Esta API permite gerenciar entregadores e estabelecimentos, incluindo operações de listagem, busca por ID e criação de novos registros.

▶️ Como usar
Clone o projeto e instale as dependências:

git clone https://github.com/seu-usuario/sua-api.git
cd sua-api
npm install

Inicie o servidor:

npm start

O servidor estará disponível em: http://localhost:3000

🔹 ROTAS DE ENTREGADORES
📄 Listar todos os entregadores
GET http://localhost:3000/entregador HTTP/1.1

🔍 Buscar entregador por ID
GET http://localhost:3000/entregador/2 HTTP/1.1

➕ Criar novo entregador
POST http://localhost:3000/entregador HTTP/1.1
Content-Type: application/json

{ "nome": "Alexandre Magno",
"celular": 61995826657,
"dataNascimento": 3111996,
"cpf": 36098712377
}

🔹 ROTAS DE ESTABELECIMENTOS
📄 Listar todos os estabelecimentos
GET http://localhost:3000/estabelecimentos HTTP/1.1

🔍 Buscar estabelecimento por ID
GET http://localhost:3000/estabelecimentos/2 HTTP/1.1

➕ Criar novo estabelecimento
POST http://localhost:3000/estabelecimentos HTTP/1.1
Content-Type: application/json

{ "nome": "Giraffas",
"horarioFuncionamento": "Ter-Dom/08:00-19:00",
"foto": "http://urlTeste.com.br/"
}

📫 Contato
Em caso de dúvidas, sugestões ou contribuições, entre em contato com o time de desenvolvimento.
