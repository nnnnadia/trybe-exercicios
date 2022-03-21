## Object Destructuring

### Sintaxe
#### Atribuição básica
~~~javascript
const obj = {a: false, b: 5};
const {a, b} = obj;

console.log(a); // false
console.log(b); // 5
~~~

#### Atribuição para variáveis com novos nomes
~~~javascript
const obj = {a: false, b: 5};
const {a: fu, b: ba} = obj;

console.log(fu); // false
console.log(ba); // 5
~~~

#### Objeto aninhado e desestruturação de array
~~~javascript
var metadata = {
  title: "Scratchpad",
  translations: [
    {
    locale: "de",
    localization_tags: [ ],
    last_edit: "2014-04-14T08:43:37",
    url: "/de/docs/Tools/Scratchpad",
    title: "JavaScript-Umgebung"
    }
  ],
  url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
~~~

#### Extraindo campos de objetos passados como parâmetro de função
~~~javascript
function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
~~~

#### Nomes computados de propriedade de objeto e desestruturação
~~~javascript
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
~~~
> Códigos retirados do MDN.

##

#### [:arrow_left: Parâmetro Rest](./parametro-rest.md#parametro-rest) | [ :arrow_right:](./)

#### [:date: Voltar para o dia 8.5](../README.md#javascript-es6---spread-operator-parâmetro-rest-destructuring-e-mais)