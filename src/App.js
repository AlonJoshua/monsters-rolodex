import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
      searchQuery: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({ monsters: users, filteredMonsters: users })
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchQuery);
    });

    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          onInput={(event) => {
            const searchQuery = event.target.value.toLowerCase();
            this.setState(() => {
              return { searchQuery };
            });
          }}
          placeholder="Search"
        ></input>
        {filteredMonsters.map((monster) => (
          <div key={monster.name}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
