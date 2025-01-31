import React from 'react';

export default ({ items, setField, selectedKey, readonly }) => {
  const renderOptions = (fields) =>
    Object.keys(fields).map((fieldKey) => {
      const field = fields[fieldKey];
      const { items, path, label, disabled } = field;
      if (items) {
        return (
          <optgroup disabled={disabled} key={path} label={label}>
            {renderOptions(items)}
          </optgroup>
        );
      }
      return (
        <option disabled={disabled} key={path} value={path}>
          {label}
        </option>
      );
    });

  const onChange = (e) => setField(e.target.value);

  const hasValue = selectedKey != null;

  const renderEmptyOption = () => {
    return <option value="" />;
  };

  return (
    <select onChange={onChange} value={hasValue ? selectedKey : ''} disabled={readonly}>
      {renderEmptyOption()}
      {renderOptions(items)}
    </select>
  );
};
