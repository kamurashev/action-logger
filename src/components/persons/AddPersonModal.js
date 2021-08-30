import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addPerson } from '../../actions/personActions';

const AddPersonModal = ({ addPerson }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' && lastName === '') {
      return M.toast({ html: 'Please enter the first and last name' });
    }
    if (firstName === '') {
      return M.toast({ html: 'Please enter the first name' });
    }
    if (lastName === '') {
      return M.toast({ html: 'Please select the last name' });
    }
    addPerson({ firstName, lastName });
    M.toast({ html: `${firstName} ${lastName} has been added to the known persons list` });
    setFirstName('');
    setLastName('');
  };

  return (
    <div id='add-person-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Person</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'>
          Enter
        </a>
      </div>
    </div>
  );
};

AddPersonModal.propTypes = {
  addPerson: PropTypes.func.isRequired,
};

export default connect(null, { addPerson })(AddPersonModal);
