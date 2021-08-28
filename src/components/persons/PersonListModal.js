import React, { useState, useEffect } from 'react';
import PersonItem from './PersonItem';

const PersonListModal = () => {
  const [persons, setPersons] = useState([]);
  const [loadind, setLoading] = useState(false);

  useEffect(() => getPersons(), []);

  const getPersons = async () => {
    setLoading(true);
    const res = await fetch('/persons');
    const data = await res.json();
    setPersons(data);
    setLoading(false);
  };

  return (
    <div id='person-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Person List</h4>
        <ul className='collection'>
          {!loadind &&
            persons.map((person) => (
              <PersonItem key={person.id} person={person} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonListModal;
