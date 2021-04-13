import React from 'react';

const ConfirmFn = (Cmp) => (props) => {
  const { useConfirm } = props.config.settings;
  const confirmFn = useConfirm ? useConfirm() : null;
  return <Cmp {...props} confirmFn={confirmFn} />;
};

export default ConfirmFn;
