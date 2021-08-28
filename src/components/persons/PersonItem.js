import React from 'react'
import PropTypes from 'prop-types'

const PersonItem = ({person}) => {
  return (
    <li className='collection-item'>
      <div>
        {person.firstName} {person.lastName}
        <a href="#!" className='secondary-content'>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

PersonItem.propTypes = {
  person: PropTypes.object.isRequired,
}

export default PersonItem
