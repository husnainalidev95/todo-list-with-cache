import React from 'react';
import { Button as AntDButton } from 'antd';

function Button({value, ...rest}) {
  return (
    <AntDButton {...rest}>{value}</AntDButton>
  );
}

export default Button;
