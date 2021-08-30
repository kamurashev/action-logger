import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deletePerson } from '../../actions/personActions';

const PersonItem = ({ person: { id, firstName, lastName }, deletePerson }) => {
  const onDelete = () => {
    deletePerson(id);
    M.toast({
      html: `${firstName} ${lastName} has been removed from the known persons list`,
    });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

PersonItem.propTypes = {
  person: PropTypes.object.isRequired,
  deletePerson: PropTypes.func.isRequired,
};

export default connect(null, { deletePerson })(PersonItem);
