import React, { useState } from 'react';
import './custom-select.css';

const CustomSelect = ({ options, onChange}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event: any) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <select value={selectedValue} onChange={handleSelectChange}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
