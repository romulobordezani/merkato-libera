# Meli FE test

![Meli](https://blog.egestor.com.br/wp-content/uploads/2017/01/mercado-livre.png | width=100)

This repository contains the Front End Test for Meli, made with a lot of passion and hope to join Meli's team soon.

Webapp available at: [meli-front-end-test.herokuapp.com](https://meli-front-end-test.herokuapp.com/).

## Installing

```bash
yarn 
```

## How to run locally
```bash
yarn run dev
```


## Running linters
```bash
yarn run lint
```

Auto fix:
```bash
yarn run lint:fix
```

## Running Unit Tests ( WIP )
```bash
yarn run lint:test
```

## How to deploy
You will need access to [Heroku git](https://git.heroku.com/meli-front-end-test.git) first.

Every push on master will trigger the Pipeline. 
```
git push heroku master
```

TODO - Add unit tests and block deploys when tests are failing.

Please follow my TODO list for this test at [Dynalist](https://dynalist.io/d/n7bvXIbrRFCRwDLh3RW5y2np).
