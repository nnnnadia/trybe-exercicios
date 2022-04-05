## Gerenciador de Pacotes

### Node Package Manager
O NPM é o maior registry (uma espécie de cartório) de software e possui 3 componentes distintos:
- o *website*: utilize para descobrir pacotes, configurar e ajustar perfis;
- *Command Line Interface (CLI)*: roda no terminal, onde geralmente interagimos com o npm;
- *registry*: é um grande e público database de JavaScript envolvendo software e metainformação sobre.

Até aqui já utilizamos o `npm` para instalar pacotes, hoje vamos conhecer o `npx` que nos permite executar comandos do um pacote sem necessariamente instalá-lo.

### Criando um app React

~~~shell
npx create-react-app my-app
cd my-app
npm start
~~~
o pacote create-react-app cria todos os arquivos necessários para um prejeto React. Aqui podemos entender o uso do `npx`, só vamos rodar uma vez por projeto, então não é necessário instalar o pacote.

### Observação: Instalando o NVM
Em caso de algum erro de versionamento ao rodar os passos anteriores vamos instalar o nvm
1 - baixar e instalar
~~~shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | zsh
# observe qual é o terminal que você usa e altere `zsh` se não for esse
~~~
2 - fechar o terminal e todas as abas
3 - testar a instalação
~~~shell
nvm --version
~~~
4 - instalar a versão LTS do Node
~~~shell
nvm install --lts
~~~
5 - testar a instalação
~~~shell
node --version
~~~

#### [ :arrow_right:](.)

#### [:date: Voltar para o dia 10.1](../#101-hello-world-no-react)
