import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import GiphySearch from "./Components/GiphySearch";
import "./App.scss";

const API_KEY = "Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giphs: null,
      search: "",
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  callApi(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ giphs: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.callApi(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`);
  }

  search(text) {
    this.callApi(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${text}`
    );
  }

  onButtonClick() {
    this.search(this.state.search);
  }

  onInput(event) {
    const text = event.target.value;
    this.setState({
      search: text,
    });
  }

  render() {
    return (
      <>
        <Header />
        <input
          value={this.state.search}
          type="text"
          placeholder="search"
          onChange={this.onInput}
        />
        <button onClick={this.onButtonClick}>Search GIF</button>
        <GiphySearch data={this.state.giphs} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
