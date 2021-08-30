import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const query = useRef('');

  const onChange = (e) => searchLogs(query.current.value);  

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              ref={query}
              onChange={onChange}
              id='search'
              type='search'
              placeholder='Search Logs...'
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
