import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


export default class Filter extends Component {

    filterId = nanoid();

    render() {
        const { filterId, } = this;
        const { onChange, filter } = this.props;
    return (
      <div>
          <label htmlFor={filterId}>Find contacts by name</label>
            <input
                id={filterId}
                type="text"
                name="filter"
                onChange={onChange}
                value={filter} />
            </div>
    )
  }
}


Filter.propTypes = {
    onSubmit: PropTypes.func,
    filter: PropTypes.string.isRequired,
}