import React, { Component } from 'react';
import Image from './Image';
import axios from 'axios';
import dateFormat from 'dateformat';


class SearchResults extends Component {
  state = {
    image: "",
    date: "",
    prettyDate: null
  }

  onHandleGetURL = () => {
    const chosenDate = window.location.pathname.substring(1);
    if(this.state.date !== chosenDate) {
      this.setState({date: chosenDate});

      const prettyDate = dateFormat(chosenDate, "dddd, mmmm dS, yyyy");
      this.setState({prettyDate});
      
      axios.get('https://api.nasa.gov/planetary/apod?api_key=6bqMnYSHTDqOkeCtkzC7sNvDNxyObYaTPMidabxh&date=' + chosenDate)
        .then(response => {
          this.setState({image: response.data});
        });
    } 
  }

  componentDidMount() {
    this.onHandleGetURL();
  }

  componentWillUpdate() {
    this.onHandleGetURL();
  }

  render() {
    const { title } = this.state.image;

    return (
      <div>
        <Image image={this.state.image}/>
        { this.state.prettyDate ? 
          <div>
            <p>{this.state.image && title}</p>
            <p>Image taken {this.state.prettyDate}.</p>
          </div>
          : null
        }
      </div>
    );
  }
}

export default SearchResults;
