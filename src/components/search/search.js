import React, { Component } from 'react';
import { Input } from '@material-ui/core';
import ListPhotographers from '../listPhotographers/listPhotographers';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initElems: [],
      elems: [],
    };
    for (let index = 0; index < props.list.length; index += 1) {
      const { 
        name, 
        picture, 
        birthDate, 
        deathDate, 
        birthplace, 
        slug } = props.list[index];
      this.state.initElems.push([
        name,
        picture,
        birthDate,
        deathDate,
        birthplace,
        slug,
      ]);
      this.state.elems.push([
        name,
        picture,
        birthDate,
        deathDate,
        birthplace,
        slug,
      ]);
    }
  }

  filter(event) {
    const updateElems = this.state.initElems.filter(item => {
      return (
        `${item[0]} ${item[4]}`
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ elems: updateElems });
  }

  componentDidMount() {
    this.setState({ elems: this.state.elems });
  }

  render() {
    return (
      <div>
        <Input
          type="search"
          placeholder={this.props.placeholder}
          onChange={event => this.filter(event)}
          style={{ width: '100%' }}
        />
        <ListPhotographers elems={this.state.elems} />
      </div>
    );
  }
}

export default Search;
