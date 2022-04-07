import react from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends react.Component {
  render() {
    return (
      <ul>
        {
          conteudos.map(({ conteudo, bloco, status }) => {
            const conteudoLi = <li>
              <p>O conteúdo é: <span>{conteudo}</span></p>
              <p>Status: <span>{status}</span></p>
              <p>Bloco: <span>{bloco}</span></p>
            </li>
            return conteudoLi;
          })
        }
      </ul>
    );
  }
}

export default Content;
