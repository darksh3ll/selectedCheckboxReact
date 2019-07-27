import React ,{memo}from 'react';

const Checkbox = memo( ({title, checked, onChange}) => {
  return (
    <div className="listItem">
      <input onChange={onChange} checked={checked} type="checkbox"/>
      <span className="labelForm">{title}</span>
    </div>

  );
})

export default Checkbox;
