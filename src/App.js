import { Fragment, useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddPersonModal from './components/persons/AddPersonModal';
import PersonListModal from './components/persons/PersonListModal';

const App = () => {
  // Init materializejs (modals and stuff)
  useEffect(() => M.AutoInit());

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddPersonModal />
        <PersonListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
