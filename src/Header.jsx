import logo from './logo.svg';
import Button from './Button'

function Header() {
    return (
        <header className="App-header">
        <p id="myHobby">My hobby is sport climbing </p>
        <Button />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
}

export default Header