import React from 'react';

function Title({ title, id }) {
  return (
    <div className="title  mb-40" id={id}>
      <h4>{title}</h4>
    </div>
  );
}

export default Title;
