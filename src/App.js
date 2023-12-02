import styled from 'styled-components';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  );
}

const TodoList = () => {
  return (
    <div>
      <h3>What to learn</h3>
      <div>
        <input />
        <button>+</button>
        <ul>
          <li><input type={'checkbox'} checked={true}/><span>HTML/CSS</span></li>
          <li><input type={'checkbox'} checked={true}/><span>JS</span></li>
          <li><input type={'checkbox'} checked={true}/><span>React</span></li>
        </ul>
      </div>
    </div>
  )
}

export default App;

