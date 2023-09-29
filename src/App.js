import { Component } from "react";
import SearchBox from "./components/search-box/search-box.component"
import CardList from "./components/card-list/card-list.component";
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

  onSearchChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchQuery };
    });
  }
  

  render() {

    const { monsters, searchQuery } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchQuery);
    });

    return (
      <div className="App">
        <SearchBox 
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="monsters-search-box" 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
