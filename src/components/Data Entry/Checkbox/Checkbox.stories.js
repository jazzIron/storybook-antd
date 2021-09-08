import React from 'react';
import { useArgs } from '@storybook/client-api';
import Index from './Index';
import CheckboxBasic from './CheckboxBasic';
import CheckboxAll from './CheckboxAll';
import PropTypes from 'prop-types';

const options = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

export default {
  component: CheckboxBasic, //해당 컴포넌트
  title: 'Data Entry/Checkbox', //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
  excludeStoires: '', //Storybook에서 스토리를 내보낼 때 렌더링에서 제외 하는것
  parameters: {
    actions: {},
  }, //callback event 수신
  argTypes: {
    disabled: {
      defaultValue: false,
      options: [true, false],
      control: { type: 'radio' },
    },
    defaultValue: { control: { type: 'text' } },
  }, //각각의 스토리에서 인수(args)의 행동 방식을 명시
  decorators: [
    Story => (
      <Index>
        <Story />
      </Index>
    ),
  ], //내보내기 시 앞 뒤로 데코레이션 설정
};


const CheckboxTemplate = ({ ...args }) => {
  const [{ value }, updateArgs] = useArgs();
  const handleChange = (e) => updateArgs({ value: e })
  return (<CheckboxBasic {...args} onChange={handleChange} />)
}

export const Basic = CheckboxTemplate.bind({});
Basic.args = {
  "options": options,
};

Basic.propTypes = {
  // data: PropTypes.array.isRequired,
  // bordered: PropTypes.bool.isRequired,
  // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
  // size: PropTypes.oneOf(['default', 'large', 'small']),
};


const CheckboxAllTemplate = ({ ...args }) => {
  const [{ valueItem }, updateArgs] = useArgs();
  const [{ checkAll }, updateCheckAll] = useArgs();
  const handleChange = (e) => updateArgs({ valueItem: e });
  const onCheckAllChange = e => updateCheckAll({ checkAll: e });
  return (<CheckboxAll {...args} onChange={handleChange} onCheckAllChange={onCheckAllChange} />)
}

export const CheckBoxAll = CheckboxAllTemplate.bind({});
CheckBoxAll.args = {
  "options": options,
  "defaultCheckedList": defaultCheckedList
};

CheckBoxAll.propTypes = {
  // data: PropTypes.array.isRequired,
  // bordered: PropTypes.bool.isRequired,
  // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
  // size: PropTypes.oneOf(['default', 'large', 'small']),
};
