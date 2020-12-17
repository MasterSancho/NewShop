import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
 return (
  <Spinner
   animation='border'
   variant='success'
   role='status'
   style={{
    width: '250px',
    height: '250px',
    margin: 'auto',
    display: 'block',
   }}>
   <span className='sr-only'>Loading...</span>
  </Spinner>
 );
};

export default Loader;
