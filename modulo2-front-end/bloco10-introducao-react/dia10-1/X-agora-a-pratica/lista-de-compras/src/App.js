import react from 'react'
import * as ReactDOM from 'react-dom';
import './App.css';

function ListItem(value) {
  return <li>{value}</li>;
}

function App() {
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  const element = <ul>{ListItem('Morango')}</ul>
  root.render(element);
}

export default App;
