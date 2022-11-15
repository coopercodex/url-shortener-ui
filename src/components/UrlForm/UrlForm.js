import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }
  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // this.clearInputs();
  }

  handleSubmit = e => {
    e.preventDefault();
    
    const newUrl = {
      long_url: this.state.urlToShorten,
      title: this.state.title
    }
    this.props.addUrl(newUrl)
    this.clearInputs()
  //   fetch('http://localhost:3001/api/v1/urls', {
  //     method: 'POST', 
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(newUrl)
  //   })
  //   .then(response => response.json())
  //   .then(response => this.setState({urls: [...this.props.urls, response]}))
  //   // window.location.reload()
  }

  clearInputs = () => {
    this.setState({ title: '', urlToShorten: '' });
  }

  render() {
    console.log(this.props.urls)
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
