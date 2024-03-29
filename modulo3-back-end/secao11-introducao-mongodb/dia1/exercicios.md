## 3.11.1: MongoDB - Introdução

### Agora a Prática

- Exercício 1: Retorne apenas os documentos com `_id` = 8.
~~~
> db.bios.findOne( { "_id": 8 } )
~~~
- Exercício 2: Retorne apenas os documentos com `_id` = 8, mas só exiba `_id` e `name`.
~~~
> db.bios.findOne( { "_id": 8 }, { "name": 1 } )
~~~
- Exercício 3: Retorne apenas os documentos com `_id` = 8, mas só exiba `name` e `birth`.
~~~
> db.bios.findOne( { "_id": 8 }, { "name": 1, "birth": 1, "_id": 0 } )
~~~
- Exercício 4: Retorne todos os documentos com `name.first` = 'John' utilizando o método `pretty()`.
~~~
> db.bios.find( { "name.first": "John" } ).pretty()
~~~
- Exercício 5: Retorne os 3 primeiros documentos da coleção `bios` utilizando o método `pretty()`.
~~~
> db.bios.find().limit(3).pretty()
~~~
- Exercício 6: Retorne 2 documentos da coleção `bios` pulando os 5 primeiros documentos.
~~~
> db.bios.find().skip(5).limit(2)
~~~
Utilizando o `mongoimport`, importe o arquivo `books.json` para a sua instância local do MongoDB e utilize a coleção `books` para construir as seguintes consultas:
- Exercício 7: Retorne a quantidade de documentos da coleção `books`.
~~~
~~~
- Exercício 8: Conte quantos livros existem com o `status` = 'PUBLISH'.
~~~
~~~
- Exercício 9: Exiba os atributos `title`, `isbn` e `pageCount` dos 3 primeiros livros. NÃO retorne o atributo `_id`.
~~~
~~~
- Exercício 10: Pule 5 documentos e exiba os atributos `_id`, `title`, `authors` e `status` dos livros com o `status` = 'MEAP', limitando-se a 10 documentos.
~~~
~~~
