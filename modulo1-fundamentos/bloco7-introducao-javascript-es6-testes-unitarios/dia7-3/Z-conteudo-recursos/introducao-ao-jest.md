## Introdução ao Jest

### Por que usar?

A grande vantagem do Jest é que ele não interrompe a execução quando um teste falha.

Mesmo com os testes anteriores não passando é possível continuar trabalhando em novos testes e você tem conhecimento se alguma nova implementação causa falhas em outras áreas do código.

Com outras ferramentas seria preciso editar o código comentando ou removendo testes para pular.
- O Jest não requer instalação. (quase nenhuma)
- Se integra muito bem com o React, que já vem com o Jest instalado.

### Instalando o Jest
~~~shell Terminal
# conferir se o npm está instalado e instalar se não estiver
npm -v
sudo apt update
sudo apt install npm

# na pasta do projeto vamos criar o package.json
npm init -y
Wrote to /project/file/path/package.json:
{
  "name": "nomeDaPasta", # nome da pasta onde foi criado
  "version": "1.0.0", # versão atual do projeto
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
~~~
No `package.json` mudar o valor de "test"
~~~json package.json
"scripts": {
    "test": "jest"
  },
~~~
Agora vamos instalar o Jest de fato, os pacotes serão instalados como dependências de desenvolvimento.
~~~shell
npm install --save-dev jest
~~~
Lembre de incluir um `.gitignore`:
~~~
node_modules
~~~

##

#### [:arrow_left: NodeJS Assert](./nodejs-assert.md#nodejs-assert) | [Escrevendo Testes :arrow_right:](./escrevendo-testes.md#escrevendo-testes)

#### [:date: Voltar para o dia 7.3](../README.md#73-javascript-es6---fluxos-de-exceção-e-objetos)
