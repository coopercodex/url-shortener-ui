import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [
        // {
        //   id: 1,
        //   long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        //   short_url: 'http://localhost:3001/useshorturl/1',
        //   title: 'Awesome photo'
        // }
      ]
    }
  }

  componentDidMount() {
    getUrls()
    .then(response => this.setState({urls: response.urls}))
  }

  addUrl = (newUrl) => {
    this.setState({urls: [...this.state.urls, newUrl]})
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl} urls={this.state.urls} />
        </header>
        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
