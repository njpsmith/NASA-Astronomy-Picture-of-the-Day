import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import TodaysPhoto from './components/TodaysPhoto';
import styled from 'styled-components';



const AppWrapper = styled.div`
  text-align: center;
`
const Footer = styled.footer`
  padding: 20px;
`


class App extends Component {
  state = {
    image: null,
    selectedDate: ""
  }

  componentDidMount() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=6bqMnYSHTDqOkeCtkzC7sNvDNxyObYaTPMidabxh')
      .then(response => {
        this.setState({
          image: response.data
        });
      });
  }

  onHandleSearch = (date) => {
    let { history } = this.props;
    history.push({
      pathname: '/' + date,
    });
  }

  render() {
    return (
      <AppWrapper>
        <Header />
          
        <SearchBar redirectToSearchResults={this.onHandleSearch} />

        <Route 
          exact 
          path="/" 
          render={() => <TodaysPhoto image={this.state.image} />}
        />
        <Route path="/:date" component={SearchResults} />

        <Footer />
      </AppWrapper>
    );
  }
}

export default withRouter(App);

