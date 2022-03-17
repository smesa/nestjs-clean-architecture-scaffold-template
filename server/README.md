## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Postgres

Install docker and run the command:

```bash
docker run --name clean-architecture-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

run migration

```bash
npm run typeorm:generate:win -n init
npm run typeorm:run:win
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


Nest is [MIT licensed](LICENSE).
