import React, { useState } from 'react';

import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;


const CheckboxAll = ({ defaultValue, disabled, name, options, value, defaultCheckedList }) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = list => {
    console.log(list);
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < options.length);
    setCheckAll(list.length === options.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? options : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <CheckboxGroup options={options} value={checkedList} onChange={onChange} />
    </>
  );
};

export default CheckboxAll;
