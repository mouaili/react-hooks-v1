import React, { useEffect, useState } from 'react';

const FunctionDisplayKeys = () => {
  const [keyCode, setKeyCode] = useState('');

  const handleKeyCode = e => {
    setKeyCode(e.code);
    console.log(e);
  };

  useEffect(() => {
    //FIRST ACTION
    console.log('Event mounted');
    document.addEventListener('keyup', handleKeyCode);

    //SECOND ACTION
    //TO CLEAN UP THE EVENT ==> RETURN CALLBACK FUNCTION
    return () => {
      console.log('Event removed');
      document.removeEventListener('keyup', handleKeyCode);
    };
  }, []);

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="card-title">{keyCode}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionDisplayKeys;
