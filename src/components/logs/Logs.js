import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loadind, setLoading] = useState(false);

  useEffect(() => getLogs(), []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  return loadind ?
    <Preloader /> :
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Action Logs</h4>
      </li>
      {
        !loadind && logs.length === 0 ?
        <p className='center'>No logs to show...</p> :
        logs.map(log => <LogItem key={log.id} log={log} />)
      }
    </ul>  
};

export default Logs;
