import './css/App.scss';
import logo from './logo.svg';


function React() {
  let numbers = [1, 2, 3]
  const cars = numbers.map(e => e * 2)

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
      <p>{cars}</p>
    </header>
  );
}

export default React;
