import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logActions';
import PersonSelectOptions from '../persons/PersonSelectOptions';

const EditLogModal = ({ current, updateLog }) => {
  const style = { width: '75%', height: '75%' };

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [person, setPerson] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setPerson(current.person);
    }
  }, [current]);

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
    const uLog = {
      id: current.id,
      message,
      attention,
      person,
      date: new Date(),
    };
    updateLog(uLog);
    M.toast({ html: `Log updated by ${person}` });
    setMessage('');
    setPerson('');
    setAttention(false);
  };

  return (
    <div id='edit-log-modal' className='modal' style={style}>
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
            {/* {current && !current.message && (
            <label htmlFor='message' className='active'>
              Log Message
            </label>
            )} */}
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

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapProps = (state) => ({
  current: state.log.current,
});

export default connect(mapProps, { updateLog })(EditLogModal);
