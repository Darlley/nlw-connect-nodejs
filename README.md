Meu link: https://rocketseat.com.br/eventos/nlw/convite/darlley-18410
Notion do projeto: https://efficient-sloth-d85.notion.site/Node-js-19d395da577080d1857df227077f1b96

### Aula 01 - Criação e configuração inicial do projeto

Nessa aula, vamos criar o projeto com Node.js e realizar as primeiras configurações das bibliotecas que vamos utilizar, como o Fastify como micro-framework principal, Swagger para documentação interativa da API, Biome para formatação do código e além disso vamos preparar a aplicação para ser acessada por outros endereços Web, por meio da configuração de CORS.

Configurações de tsconfig: https://github.com/tsconfig/bases

## ANOTAÇÕES 

Sempre que alterar o schema ou criar uma tabela nova:
1. `npx drizzle-kit generate` (gera um arquivo .sql para gerar o banco de dados)
2. `npx drizzle-kit migrate` (cria a tabela no banco de dados)

ou

`npm run migrate`

---

`STATUS_CODE/301`: redirect permanente (o browser cria um cache para a próxima vez que eu acessar o mesmo link)
`STATUS_CODE/302`: redirect temporário (o browser acessa o backend novamente o que nos permite fazer a contagem de cliques)

---

No Radis existem algumas estruturas de dados. 

1. `CHAVE/VALOR`: `insert into tabela values('chave', 'valor')`
2. Lists []
3. sorted sets: comandos que começam com `'z'`, é como se fosse arrays ordenados por uma coluna ( [ likes: number ] )
4. hashes {} vamos usar esse: `await redis.hincrby('referral:access-count', subscriberId, 1) ` incrementa o subscriberId 1 por vez
