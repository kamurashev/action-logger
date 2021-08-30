import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../../actions/logActions';
import PersonSelectOptions from '../persons/PersonSelectOptions';

const AddLogModal = ({ addLog }) => {
  const style = { width: '75%', height: '75%' };

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [person, setPerson] = useState('');

  const onSubmit = () => {
    if (message === '' && person === '') {
      return M.toast({ html: 'Please enter a message and select a person' });
    }
    if (message === '') {
      return M.toast({ html: 'Please enter a message' });
    }
    if (person === '') {
      return M.toast({ html: 'Please select a person' });
    }
    const newLog = {
      message,
      attention,
      person,
      date: new Date(),
    };
    addLog(newLog);

    M.toast({ html: `Log added by ${person}` });

    setMessage('');
    setPerson('');
    setAttention(false);
  };

  return (
    <div id='add-log-modal' className='modal' style={style}>
      <div className='modal-content'>
        <h4>Enter Action Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='person'
              value={person}
              className='browser-default'
              onChange={(e) => setPerson(e.target.value)}>
              <option value='' disabled>
                Select Person
              </option>
              <PersonSelectOptions />
            </select>
          </div>

          <div className='row'>
            <div className='input-field'>
              <p>
                <label>
                  <input
                    type='checkbox'
                    className='filled-in'
                    checked={attention}
                    value={attention}
                    onChange={(e) => setAttention(!attention)}
                  />
                  <span>Needs Attention</span>
                </label>
              </p>
            </div>
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, { addLog })(AddLogModal);
