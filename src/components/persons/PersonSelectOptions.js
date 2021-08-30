import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPersons } from '../../actions/personActions';

const PersonSelectOptions = ({ persons, loading, getPersons }) => {
  useEffect(
    () => !persons && !loading && getPersons(),
    // eslint-disable-next-line
    []
  );  

  return (
    !loading &&
    persons &&
    persons.map((p) => {
      const fullName = `${p.firstName} ${p.lastName}`;
      return (
        <option key={p.id} value={fullName}>
          {fullName}
        </option>
      )
    })
  );
};

PersonSelectOptions.propTypes = {
  persons: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  getPersons: PropTypes.func.isRequired,
};

const mapProps = (state) => ({
  persons: state.person.persons,
  loading: state.person.loading,
});

export default connect(mapProps, { getPersons })(PersonSelectOptions);
