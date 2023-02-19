# Sequelize Intro

NOTES:

- buat gitignore
- npm init

## 1. [Apa itu sequelize?](https://sequelize.org/docs/v6/)

Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

## 2. [Install sequelize](https://sequelize.org/docs/v6/getting-started/)

Jangan lupa, npm init dan .gitignore

Install sequelize.

commad: `npm install --save sequelize`

Install database driver.

commad: `npm install --save pg`

## 3. [Install sequelize-cli](https://sequelize.org/docs/v6/other-topics/migrations/)

Sequelize-cli adalah sebuah bantuan lagi dari sequelize, yang dapat mengenerate file2 yang nanti kita butuhkan dalam penggunaan sequlize.

commad: `npm install -D sequelize-cli`

## 4. [Initialize sequelize-cli](https://sequelize.org/docs/v6/other-topics/migrations/#installing-the-cli)

commad: `npx sequelize-cli init`

Init ini akan mengenerate 4 folder yaitu:

- config, contains config file, which tells CLI how to connect with database
- models, contains all models for your project
- migrations, contains all migration files
- seeders, contains all seed files

## 5. [Config sequelize](https://sequelize.org/docs/v6/other-topics/migrations/#installing-the-cli)

Sesuaikan credential untuk koneksi ke database ada di config/config.json.

## 6. [Help](https://sequelize.org/docs/v6/other-topics/migrations/#installing-the-cli)

Kalau bingung atau butuh bantuan, coba jalankan command `npx sequelize-cli help` atau lihat ke dokumentasi.

## 7. [Create database](https://sequelize.org/docs/v6/other-topics/migrations/#configuration)

Buat database melalui sequelize.

commad: `npx sequelize-cli db:create`

## 8. [Generate model and migration](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration)

Dengan generate model maka otomatis akan mengenerate juga migration, yang isinya adalah instruksi untuk membuat table dengan nama plural dari model beserta attributtes yang ada dalam table.

commad: `npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,isActive:boolean`
contoh : `npx sequelize-cli model:generate --name Product --attributes name:string,price:integer,brand:string`

<!-- npx sequelize-cli model:generate --name Profile --attributes title:string,description:string,category:string,imageUrl:string -->

command 1 lagi : `npx sequelize-cli migration:create --name addExpiredDateColumnToProductTable`

kalau kita ingin melihat apa saja attribute yang ada di model:generate, bisa digunakan command `npx sequelize-cli model:generate --help`.

[Tipe data di sequelize](https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)

## 9. [Running Migration](https://sequelize.org/docs/v6/other-topics/migrations/#running-migrations)

Menjalankan semua migration yang statusnya belum dijalankan.

commad: `npx sequelize-cli db:migrate`

`npx sequelize-cli db:migrate --name 20230108160328-create-post`

Bisa juga mengundo migration

command: `npx sequelize-cli db:migrate:undo:all`

`npx sequelize-cli db:migrate:undo --name 20180704124934-create-branch.js`

## 10. [Generate seeder](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed)

Mengenerate file seeder.

commad: `npx sequelize-cli seed:generate --name demo-user`

contoh: `npx sequelize-cli seed:generate --name seedProducts`

## 11. [Running seeder](hhttps://sequelize.org/docs/v6/other-topics/migrations/#running-seeds)

Sebelum di jalankan, buat dulu code pada seeder

Menjalankan semua seeder.

commad: `npx sequelize-cli db:seed:all`

Command for spesific : `sequelize db:seed --seed my_seeder_file.js, npx sequelize-cli db:seed --seed 20230108163555-seedPosts`

`npx sequelize db:seed:undo # Undo most recent seed`
`npx sequelize db:seed:undo:all # Undo all seeds`
`npx sequelize db:seed:undo --seed path/to/seed/file.js # Undo specific seeds`

<!-- commad: `npx sequelize-cli db:seed:all` -->

## 12. Using model

Menggunakan model yang telah di generate oleh sequelize, bisa di require index dari folder model lalu diikuti dengan nama modelnya.

## 13. [Get data](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)

Menampilkan data dari table.

more detail: https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findall

## 14. Migration dan Model itu SANGAT BERBEDA

`SANGAT BERBEDA`

TIDAK ADA HUBUNGANNYA SAMA SEKALI

Migration, berhubungan dengan struktur table

Model, berhubungan dengan data yang ada dalam table

# Referensi

- https://sequelize.org/docs/v6/
- https://sequelize.org/api/v6/identifiers.html
- https://medium.com/wripolinema/sudah-kenal-sama-orm-34712e85c6fa
- https://medium.com/@Ayra_Lux/a-guide-to-orm-sequelize-c276c7b6dd18

npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

npm i sequelize pg express jsonwebtoken bcrypt cors dotenv
npm install --save-dev jest
npm install supertest --save-dev
npm install -D sequelize-cli
npx sequelize-cli init
npx sequelize-cli db:create
npx sequelize-cli model:generate --name User --attributes
npx sequelize-cli migration:create --name
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name
npx sequelize-cli db:seed:all / --seed

### Express Setup

1. touch app.js
2. setup app.js reference: https://expressjs.com/en/starter/hello-world.html
3. setup bodyparser, cors, json body (optional)

### Logic Server

### 1. Register

try:

- req body
- await user create
- send status 201, json user

catch:

- error message copy from instruction

### 2. Login

try:

- req body
- await user findone
- if user not found, throw 401
- compare password with bcryptjs reference: https://www.npmjs.com/package/bcryptjs
- if password invalid, throw 401
- create access token using jwt sign, (payload, and secret message), reference: https://www.npmjs.com/package/jsonwebtoken
- send status 200, and json access_token

catch:

- error message copy from instruction

### 3. Get news

try:

- await news findall, include if needed
- send status 200 and json newsData

### 4. Post news

try:

- req body
- await news create
- send status 201 and json newsData

### 5. Get newsById

try:

- await news findone with where req params id
- if not found, throw error 404
- send status 200 and json newsData

### 6. Delete news

try:

- create variable deletednews
- await news findone, set deletednews with newsData.name
- await news destroy where req params id
- send status 200 and message

### 7. Put news

try:

- req body
- await news and user findone
- await news update, where req params id, with req body
- if news not found, throw error 404
- send status 200 and message json

### 8. Patch news

try:

- req body
- await news findone
- news update by req params
- if news not found, throw error 404
- send status 200 and message json

### 9. Authentication

try:

- get access token from req headers
- if access_token not found, throw error 401
- decode access_token with jwt verify (payload, secret), reference: https://www.npmjs.com/package/jsonwebtoken
- await user find where access_token.id
- if user not found, throw error 401
- set request user with user data

### 10. Authorization

try:

- await news findbypk with req params id
- if news not found, throw error 404
- if condition not met to perform action, throw error 403

## CLIENT

### Vue Setup

1. npm init vue@latest, reference: https://vuejs.org/guide/quick-start.html
2. migrate from template folder to client/index.html
3. check main.js, main.css, cdn package

### Logic Client

0. npm i axios

### 1. submitLogin

try:

- await post login with data from v-model form
- set access_token etc to localstorage
- set page to home and login true

### 2. submitLogout

try:

- remove all localStorage
- set page to login and login false

### 3. submitRegister

try:

- await axios post with data from v-model form
- set page to login or home

### 4. fetchnews/fetchCategory

try:

- await axios get news, with header
- set datanews to with data from axios

### 5. postnews

try:

- await axios post news with data from v-model form
- set page to listnews

references vue: https://vuejs.org/guide/essentials/conditional.html
