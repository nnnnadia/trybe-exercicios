import react from 'react'
import * as ReactDOM from 'react-dom';
import './App.css';

function ListItem(value) {
  return <li>{value}</li>;
}

function App() {
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  const shoppingList = ['🍓', '🍞', '🍪', '🧀'];
  const element = <ul>{shoppingList.map((item) => ListItem(item))}</ul>
  root.render(element);
}

export default App;
