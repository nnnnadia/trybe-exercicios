## 22.5: Node.js: Express e Mysql

### Agora a Prática + Bônus (TDD)

#### Setup

- [Exercício 1](https://github.com/tryber/exercise-todo-list-manager/commit/23d183b047a3568c774aee6f2f1871e5988c8b6a#comments)
- [Exercício 2](https://github.com/tryber/exercise-todo-list-manager/commit/59346b7a2817683af16f3b2267155db86911ae6a#comments)

#### Endpoints

- POST -> `/tasks`
  - cenário<br/>
  ![cenário post](https://github.com/tryber/exercise-todo-list-manager/blob/d2dd174ded9daed98642dab9de71722cf734f52d/img/post.png)
  - teste ([Exercício 5](https://github.com/tryber/exercise-todo-list-manager/commit/d8d334ac57e2498e7dd95599fb7fcb3b33585409#comments))
  - MySQL Prepared Statement ([Exercício 3.a](https://github.com/tryber/exercise-todo-list-manager/commit/c61f3564679b53eef1bf3e8a3a2d20fdf2548f57#comments))
  - Rota ([Exercício 4.a](https://github.com/tryber/exercise-todo-list-manager/commit/023c7852236a55190929a6dd0bebc64e3abb712e#comments))

- PUT -> `/tasks/:id`
  - cenário<br/>
  ![cenário put](https://github.com/tryber/exercise-todo-list-manager/blob/1d02153a269d7e7145853da2923d87c6a39882c3/img/put-by-id.png)
  - teste ([Exercício 1](https://github.com/tryber/exercise-todo-list-manager/commit/d8d334ac57e2498e7dd95599fb7fcb3b33585409#comments))
  - MySQL Prepared Statement ([Exercício 3.b](https://github.com/tryber/exercise-todo-list-manager/commit/bffe4103771f6ca1980ebf70bb0cccb4327e519d#comments))
  - Rota ([Exercício 4.b](https://github.com/tryber/exercise-todo-list-manager/commit/6cdf1ce2c1caa55382034bf0886e060a07602174#comments))

- DELETE -> `/tasks/:id`
  - cenário<br/>
  ![cenário delete](https://github.com/tryber/exercise-todo-list-manager/blob/5f050f220ec184f2ce77700e8023a82e5bb4eaac/img/delete-by-id.png)
  - teste ([Exercício 2](https://github.com/tryber/exercise-todo-list-manager/commit/3e28aae00b1a464d1a5acb2c2d7ed416ae3bc3fb#comments))
  - MySQL Prepared Statement ([Exercício 3.c](https://github.com/tryber/exercise-todo-list-manager/commit/228ebcd77c01447c6bf83c76ac1c09097f5196ba#comments))
  - Rota ([Exercício 4.c](https://github.com/tryber/exercise-todo-list-manager/commit/69d190466fb88941620d37e3c5826853edf0c23a#comments))

- GET -> `/tasks`
  - cenário<br/>
  ![cenário get all](https://github.com/tryber/exercise-todo-list-manager/blob/1d02153a269d7e7145853da2923d87c6a39882c3/img/get-all.png)
  - teste ([Exercício 3](https://github.com/tryber/exercise-todo-list-manager/commit/1166d1dc0698a694dae27734daad8e8872750346#comments))
  - MySQL Prepared Statement ([Exercício 3.d](https://github.com/tryber/exercise-todo-list-manager/commit/b3d5e9de82c2e26e4d0bf7ebf2f603c285b53f1c#comments))
  - Rota ([Exercício 4.d](https://github.com/tryber/exercise-todo-list-manager/commit/8775527d2dcc43d45ce8b99c6bdcd4964e146441#comments))

- GET -> `/tasks/:id`
  - cenário<br/>
  ![cenário get by id](https://github.com/tryber/exercise-todo-list-manager/blob/1d02153a269d7e7145853da2923d87c6a39882c3/img/get-by-id.png)
  - teste ([Exercício 4](https://github.com/tryber/exercise-todo-list-manager/commit/c7647a24078d214c3e36e28897d4b2a028188fe1#comments))
  - MySQL Prepared Statement ([Exercício 3.e](https://github.com/tryber/exercise-todo-list-manager/commit/8658abd471422e6c2431287b676a234bd94778ab#comments))
  - Rota ([Exercício 4.e](https://github.com/tryber/exercise-todo-list-manager/commit/a9df477798b868b40f52dc9aaf741a9727b904ad#comments))

##

#### [:arrow_left: 22.4](../../dia22-4/X-agora-a-pratica/exercicios.md#224-express-middlewares) | [23.1 :arrow_right:](../../dia23-1/X-agora-a-pratica/exercicios.md)

##### [:rocket: Voltar](https://github.com/nnnnadia/trybe-exercicios/tree/main#bloco-22-introdu%C3%A7%C3%A3o-ao-desenvolvimento-web-com-nodejs)
