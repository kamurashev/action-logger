import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPersons } from '../../actions/personActions';
import PersonItem from './PersonItem';

const PersonListModal = ({ persons, loading, getPersons }) => {
  useEffect(
    () => !persons && !loading && getPersons(),
    // eslint-disable-next-line
    []
  );

  return (
    <div id='person-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Person List</h4>
        <ul className='collection'>
          {!loading && persons &&
            persons.map((person) => (
              <PersonItem key={person.id} person={person} />
            ))}
        </ul>
      </div>
    </div>
  );
};

PersonListModal.propTypes = {
  persons: PropTypes.array,
  loadind: PropTypes.bool.isRequired,
  getPersons: PropTypes.func.isRequired,
};

const mapProps = (state) => ({
  persons: state.person.persons,
  loadind: state.person.loading,
});

export default connect(mapProps, { getPersons })(PersonListModal);
