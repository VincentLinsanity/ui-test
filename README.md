# ui-test

## features

- Node.js v16 LTS
- Postgresql v14
- Express v4.17
- Sequelize v6.9

### pre-setup

```
sudo vi /private/etc/hosts
add new line
127.0.0.1 postgres
```

### command

- launch postgresql instance

```
npm run start_psql
```

- create table users

```
npm run create_users
```

- use eslint force lint

```
npm run force_eslint
```

- use docker-compose

```
docker-compose up -d
```
