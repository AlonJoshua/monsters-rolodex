import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        const { onChangeHandler } = this.props;

        return (
            <input
            type="search"
            className={`search-box ${this.props.className}`}
            onInput={onChangeHandler}
            placeholder={this.props.placeholder}
          ></input>
        )
    }
}

export default SearchBox;