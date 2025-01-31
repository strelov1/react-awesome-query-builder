import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';

export default ({ items, setField, selectedKey, readonly, placeholder }) => {
  const renderOptions = (fields, level = 0) =>
    Object.keys(fields).map((fieldKey) => {
      const field = fields[fieldKey];
      const { items, path, label, disabled } = field;
      const prefix = '\u00A0\u00A0'.repeat(level);
      if (items) {
        return [
          <ListSubheader disabled={disabled} key={path} disableSticky>
            {label}
          </ListSubheader>,
          renderOptions(items, level + 1),
        ];
      }
      return (
        <MenuItem disabled={disabled} key={path} value={path}>
          {prefix && <span>{prefix}</span>}
          {label}
        </MenuItem>
      );
    });

  const onChange = (e) => {
    if (e.target.value === undefined) return;
    setField(e.target.value);
  };

  const renderValue = (selectedValue) => {
    if (!readonly && !selectedValue) return placeholder;
    const findLabel = (fields) => {
      return fields.map((field) => {
        if (!field.items) return field.path === selectedValue ? field.label : null;
        return findLabel(field.items);
      });
    };
    return findLabel(items)
      .filter((v) => v !== null)
      .pop();
  };

  const hasValue = selectedKey != null;
  return (
    <FormControl>
      <Select
        autoWidth
        displayEmpty
        label={placeholder}
        onChange={onChange}
        value={hasValue ? selectedKey : ''}
        disabled={readonly}
        renderValue={renderValue}
      >
        {renderOptions(items)}
      </Select>
    </FormControl>
  );
};
