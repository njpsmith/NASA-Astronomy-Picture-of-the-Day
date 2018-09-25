import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import styled from 'styled-components';


const SearchBarWrapper = styled.div`
  margin-bottom: 20px;
`

const Button = styled.button`
  display: inline-block;
  position: relative;
  top: 1px;
  padding: 12px 18px;
  background: #222222;
  border: 0;
  color: #fff;
  font-size: 14px;
  border-radius: 2px;
  height: 48px;
  margin-left: 6px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover,
  &:focus {
    background: #4c4c4c;
  }
`


class SearchBar extends Component {

  state = {
    date: "",
    createdAt: moment(),
    calendarFocused: false
  }

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState( () => ({createdAt}) );
      this.setState({ date: createdAt.format("YYYY-MM-DD") });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState( () => ({ calendarFocused: focused }) );
  };


  redirectToSearchResults = (e) => {
    e.preventDefault();
    const date = this.state.date;

    console.log('clicked');
    this.props.redirectToSearchResults(date)
  };

  render() {
    return (
      <SearchBarWrapper>
        <p>{this.state.toSearchResults}</p>
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat="DD/MM/YYYY"
        />
        <Button onClick={this.redirectToSearchResults}>Submit</Button>
      </SearchBarWrapper>
    );
  }
};

export default SearchBar;
