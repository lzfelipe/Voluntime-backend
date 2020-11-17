# Voluntime API

Este é o servidor back-end para o web app [Voluntime](https://github.com/lzfelipe/Voluntime), acesse o repositório do front-end para mais informações e para conhecer o projeto.

Essa é uma API REST, construída utilizando Node.js + Express + Knex.js (SQL). 
A principal função dessa API é retornar e enviar dados do usuário, aplicações e dados das ONGs.

## Pré-requisitos
1. Primeiramente **clone o repositório**
```
$ git clone https://github.com/lzfelipe/VoluntimeAPI

$ cd VoluntimeAPI
```

2. **Instale as depêndencias** 
```
$ yarn
```

_ou_

```
$ npm install
```
3. **Configure o banco de dados**

Para rodar essa API você vai precisar de um banco de dados em **MySQL** por padrão do projeto, mas o Knex constrói queries em **Postgres**, **MSSQL**, **MariaDB**, **SQLite3**, **Oracle**, ou **Amazon Redshift**.  Porém, vale lembrar que algumas queries foram escritas manualmente e você pode ter que alterar algumas coisas caso opte por outro banco de dados.

Para configurar sua conexão basta criar um arquivo chamado ***knex_file.js*** na raiz do projeto exatamente como exemplificado [aqui](https://github.com/lzfelipe/VoluntimeAPI/blob/master/knexfile_example.js).

4. **Configure uma secret key e o servidor de email**
 
 Crie um arquivo de configuração chamado ***config.js*** na pasta:
 
     src/config
O arquivo deve seguir o padrão do [arquivo de exemplo](https://github.com/lzfelipe/VoluntimeAPI/blob/master/src/config/config_example.js) também.

*PS: Se preferir, instale a depêndencia [dotenv](https://github.com/motdotla/dotenv) e use as váriaveis de ambiente para inserir essas informações e faça as mudanças de acordo.*

## Rotas
A URL base é apenas: [http://localhost:3333/](http://localhost:3333)


### Rotas de usuário

- **Criar um usuário**

| ENDPOINT | Metódo| Params | URL Params | Sucesso | Erro
|--|--|--|--|--|--|
| /user| `POST`  |-|-|**Code:** 200 - OK<br />**Content:** <br />`{`<br />`"Usuário criado."`<br /> }  |<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <Mensagem com a descrição do erro> }`

- **Selecionar usuário por ID**

| ENDPOINT | Metódo| Params | URL Params | Sucesso | Erro
|--|--|--|--|--|--|
| /users| `POST`  |-|id|**Code:** 200 - OK<br />**Content:**<br />` { `<br />[Usuário](https://github.com/lzfelipe/VoluntimeAPI#user) <br /> } |<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <Mensagem com a descrição do erro> }`

- **Deletar usuário**

| ENDPOINT | Metódo| Params | URL Params | Sucesso | Erro
|--|--|--|--|--|--|
| /user| `DELETE`  |-|id|**Code:** 200 - OK<br />**Content:** <br />`{`<br />`"Usuário deletado."`<br /> }  |<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <Mensagem com a descrição do erro> }`

### Autenticação

- **Login**

| ENDPOINT | Metódo| Params | URL Params | Sucesso | Erro
|--|--|--|--|--|--|
| /login| `POST` |*email e senha*|-|**Code:** 200 - OK<br />**Content:**<br />` { `<br /> `token`, <br /> `success: ` ***true*** <br /> } |<br />**Code:** 400 - BAD REQUEST <br />**Content:** `{` <br /> *error*:  *"Credenciais inválidas"*, <br /> `success: ` ***false*** <br /> `}`

### Aplicações

- **Enviar uma aplicação** (*para voluntariar-se/ong*)
Para essa requisição você vai precisar enviar dois arquivos de imagem, jutamente com algumas informações que vem pré-definidas no front-end. Se você não conhece uma ferramenta pra fazer esse tipo de requisição, enviando arquivos, nesse exemplo uso [Insomnia](https://insomnia.rest/).

![Application request](https://i.imgur.com/t61C6Ck.jpg) 

- **Deletar aplicação**

| ENDPOINT | Metódo| Params | URL Params | Sucesso | Erro
|--|--|--|--|--|--|
| /application| `DELETE`  |-|id|**Code:** 200 - OK<br />**Content:** <br />`{`<br />`"Trabalho cancelado."`<br /> }  |<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <Mensagem com a descrição do erro> }`

- **Marcar trabalho como concluído**

| ENDPOINT | Metódo| Params | URL Params | Sucesso | Erro
|--|--|--|--|--|--|
| /application| `PUT`  |-|id|**Code:** 200 - OK<br />**Content:** <br />`{`<br />`"O serviço foi concluído."`<br /> }  |<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <Mensagem com a descrição do erro> }`

- **Selecionar aplicação por ID (da aplicação)**

| ENDPOINT | Metódo| Params | URL Params | Sucesso | Erro
|--|--|--|--|--|--|
| /application| `GET`  |-|id|**Code:** 200 - OK<br />**Content:**<br />` { `<br />[Aplicação](https://github.com/lzfelipe/VoluntimeAPI#aplicacoes) <br /> } |<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <Mensagem com a descrição do erro> }`

- **Selecionar aplicações por ID (da ONG)**

| ENDPOINT | Metódo| Params | URL Params | Sucesso | Erro
|--|--|--|--|--|--|
| /application| `GET`  |-|ong_id|**Code:** 200 - OK<br />**Content:**<br />` { `<br />[[Aplicações]](https://github.com/lzfelipe/VoluntimeAPI#aplicacoes) <br /> } |<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <Mensagem com a descrição do erro> }`

- **Selecionar aplicações por ID (do usuário)**

| ENDPOINT | Metódo| Params | URL Params | Sucesso | Erro
|--|--|--|--|--|--|
| /application| `GET`  |-|user_id|**Code:** 200 - OK<br />**Content:**<br />` { `<br />[[Aplicações]](https://github.com/lzfelipe/VoluntimeAPI#aplicacoes) <br /> } |<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <Mensagem com a descrição do erro> }`

### Rotas de ONG

- **Selecionar ONG por ID**

| ENDPOINT | Metódo| Params | URL Params | Sucesso | Erro
|--|--|--|--|--|--|
| /ong| `GET`  |-|id|**Code:** 200 - OK<br />**Content:**<br />` { `<br />[ONG](https://github.com/lzfelipe/VoluntimeAPI#ongs) <br /> } |<br />**Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{ error:  <Mensagem com a descrição do erro> }`


- **Login como ONG**

| ENDPOINT | Metódo| Params | URL Params | Sucesso | Erro
|--|--|--|--|--|--|
| /ong| `POST` |*email e senha*|-|**Code:** 200 - OK<br />**Content:**<br />` { `<br /> `id`, <br /> `success: ` ***true*** <br /> } |<br />**Code:** 400 - BAD REQUEST <br />**Content:** `{` <br /> *error*:  *"Credenciais inválidas"*, <br /> `success: ` ***false*** <br /> `}`




## Modelos

#### Usuarios

    id int(10) unsigned NOT  NULL,
    full_name varchar(255) NOT  NULL,
    birth_date varchar(255) NOT  NULL,
    cep varchar(255) NOT  NULL,
    email varchar(255) NOT  NULL,
    password  varchar(255) NOT  NULL,
    background_field varchar(255) DEFAULT NULL,
    created_at timestamp  NULL DEFAULT CURRENT_TIMESTAMP,
    badges varchar(255) DEFAULT 'https://i.imgur.com/ylBnJ4k.png'

#### Aplicacoes

    user_id  int(10) unsigned DEFAULT NULL,
    cpf varchar(255) NOT  NULL,
    rg_front varchar(255) NOT  NULL,
    confirmed_by_ong tinyint(1) DEFAULT '0',
    is_done tinyint(1) DEFAULT '0',
    rg_verse varchar(255) NOT  NULL,
    choosen_date varchar(255) NOT  NULL,
    badge_url varchar(255) NOT  NULL,
    id int(10) unsigned NOT  NULL,
    ong_id varchar(255) DEFAULT NULL,
    ong_name varchar(255) DEFAULT NULL
    ADD KEY  `applications_user_id_foreign` (`user_id`);
    CONSTRAINT  `applications_user_id_foreign`  FOREIGN KEY (`user_id`) REFERENCES  `users` (`id`) ON DELETE CASCADE;

#### ONGs

*As ongs usadas no projeto foram feitas apenas para servir de exemplo na interface e estão "hard-coded" [aqui](https://github.com/lzfelipe/VoluntimeAPI/blob/master/src/controllers/OngController.js), mas seguem esse padrão:* 

    {
	    id:  1,
	    causa:  "Animais|Moradores de Rua|Idosos|Meio Ambiente|Alimento",
	    periodo:  "manha|tarde|noite",
	    mainPhoto:  "URL",
	    profilePhotos: ["URL", "URL", "URL"],
	    nome:  "Nome da Ong",
	    description:  "Descrição",
	    address:  "Endereço",
	    lat:  00.000000,
	    lng:  00.000000,
    }


## Ferramentas/Frameworks/Libs/Addons
-   [NodeJS](https://nodejs.org/en/)  - Construção do servidor;
-   [bcrypt](https://github.com/kelektiv/node.bcrypt.js)  - Encriptação de senhas;
-   [cookie-parser](https://github.com/expressjs/cookie-parser)  - Gerenciamento de cookies;
-   [cors](https://github.com/expressjs/cors)  - Lidar com erros de *Cross-origin resource sharing*;
-   [express](https://github.com/expressjs/express)  - Construção das rotas;
-   [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)  - Gerador de tokens JWT para validação de dados;
-   [knex](https://github.com/knex/knex)  - Query builder em SQL
-   [multer](https://github.com/expressjs/multer) - Lidar com upload de imagens;
-   [mysql2](https://github.com/sidorares/node-mysql2)  - Lidar com conexão e queries em mysql;
- [nodemailer](https://github.com/nodemailer/nodemailer)  - Envio de emails automáticos.
