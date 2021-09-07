import React from 'react';
import { Checkbox } from 'antd';

/* API */
/** Checkbox
autoFocus  boolean - 포커스 여부
checked	boolean - 체크여부
defaultChecked	boolean  - 초기상태 지정
disabled	boolean  - 체크박스 비활성화 여부
indeterminate boolean - 불확실한 체크상태
onChange function(e:Event) - 상태가 변경될 때 트리거되는 콜백함수
 */

/** Checkbox Group
defaultValue string[] - 기본선택 값
disabled	boolean - 모든 확인란을 비활성화
name	string - 모든 input[type="checkbox"] 자식의 name 속성
options sring[] | option[] - 옵션지정
value	string - 현재 선택된 값을 설정
onChange function(checkedValue) - 상태가 변경될 때 트리거되는 콜백함수
*/

/** Methods
 * Checkbox
 * blur() - 포커스 제거
 * focus() - 포커스 처리
 */

const CheckboxBasic = ({ defaultValue, disabled, name, options, value, onChange }) => {
  return (
    <>
      <Checkbox.Group
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        options={options}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default CheckboxBasic;
