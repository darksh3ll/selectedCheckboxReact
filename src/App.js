import React, { useState } from 'react';
import './App.css';
import { listCheckBox } from './data'
import CheckBox from './components/Checkbox'

export default () => {

  const [selectedCheckbox, setSelectedCheckbox] = useState(listCheckBox);
  const [allChecked, setAllChecked] = useState(false);

  const checkAllItems = (isChecked) => {
    setAllChecked(isChecked);
    setSelectedCheckbox(selectedCheckbox.map((item) => ({ ...item, isChecked })))
  };

  const setItemChecked = (id, isChecked) => {
    const items = selectedCheckbox.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked
        }
      }
      return item;
    });

    setSelectedCheckbox(items);
    setAllChecked(items.every(item => item.isChecked));
  };

  return (
    <div className="App">
      <h4 className="title">React-hooks-multi-select-checkbox</h4>
      {renderCheckBox({allChecked,checkAllItems})}
      {renderSelectedCheckbox({selectedCheckbox,setItemChecked})}
    </div>
  );
};

const renderCheckBox = ({allChecked,checkAllItems}) => (
  <CheckBox
      title={!allChecked ? "Check All" : "Uncheck All"}
      checked={allChecked} onChange={() => checkAllItems(!allChecked)}

      />
);
const renderSelectedCheckbox = ({selectedCheckbox,setItemChecked}) => (
  selectedCheckbox.map(item => <CheckBox
    key={item.id} title={item.title}
    checked={item.isChecked}
    onChange={() => setItemChecked(item.id, !item.isChecked)}
     />
));