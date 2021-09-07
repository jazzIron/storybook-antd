import React from 'react';

const Index = ({ children }) => {
  return (
    <div>
      <>
        <h1 className='title'>Checkbox</h1>
        <p className='text'>Checkbox component.</p>
        <h2 className='title'>When to use</h2>
        <p className='text'>
          Used for selecting multiple values from several options. If you use only one checkbox, it is the same as using
          Switch to toggle between two states. <br />
          The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as
          changed and this needs to be submitted. <br />
          <a href='https://ant.design/components/checkbox/' target='_blank'>
            바로가기
          </a>
        </p>
        {children}
      </>
    </div>
  );
};

export default Index;
