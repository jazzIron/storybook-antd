import React from 'react';
import { Radio } from 'antd';

/* API */
/** Radio/Radio.Button
autoFocus  boolean - 포커스 여부
checked	boolean - 체크여부
defaultChecked	boolean  - 초기상태 지정
disabled	boolean  - 체크박스 비활성화 여부
value any - 비교값에 따라 선택 여부 결정

 */

/** RadioGroup
buttonStyle outline | solid (outline) - 버튼 스타일
defaultValue any - 기본선택 값
disabled	boolean - 모든 라디오버튼 비활성화
name	string - 모든 input[type="radio"] 자식의 name 속성
options string[] | Array<{ label: string value: string disabled?: boolean }> - 옵션지정
optionType default | button : 라디오 옵션 유형
size large | middle | small : 라디오 버튼 크기
value	any	 - 현재 선택된 값을 설정
onChange function(e:Event) - 상태가 변경될 때 트리거되는 콜백함수
*/

/** Methods
 * Radio
 * blur() - 포커스 제거
 * focus() - 포커스 처리
 */

const RadioBasic = ({ buttonStyle, defaultValue, disabled, name, options, optionType, size, value, onChange }) => {
  return (
    <>
      <Radio.Group
        style={{ buttonStyle }}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        options={options}
        optionType={optionType}
        size={size}
        value={value}
        onChange={onChange} />
    </>
  );
};

export default RadioBasic;
