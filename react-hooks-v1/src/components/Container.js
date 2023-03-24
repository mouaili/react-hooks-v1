import React, { useState } from 'react';
import ClassDisplayKeys from './ClassDisplayKeys';
import FunctionDisplayKeys from './FunctionDisplayKeys';

const Container = () => {
  const [show, setShow] = useState(true);
  const display = show ? 'Hide Card' : 'Show Card';

  return (
    <div className="container">
      <h2>Le conteneur..</h2>
      <button className="btn btn-primary m-3" onClick={() => setShow(!show)}>
        {display}
      </button>
      {/* {show && <ClassDisplayKeys />} */}
      {show && <FunctionDisplayKeys />}
    </div>
  );
};

export default Container;
