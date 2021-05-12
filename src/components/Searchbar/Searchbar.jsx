import { Component } from 'react';
import styles from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
    state = { query: '' };

    handleChange = element => {
        this.setState({ query: element.currentTarget.value });
    };

    handleSubmit = element => {
        element.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    render () {
        return (
            <>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <input
                        className=""
                        type="text"
                        value={this.state.query}
                        onChange ={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                    />
                    <button type="submit" className="">
                        <span className="">Search</span>
                    </button>
                </form>
            </>
        )
    }
}

export default Searchbar;