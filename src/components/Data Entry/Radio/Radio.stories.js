import React from 'react';
import { useArgs } from '@storybook/client-api';
import Index from './Index';
import RadioBasic from './RadioBasic';
import PropTypes from 'prop-types';

const options = ['Apple', 'Pear', 'Orange'];

export default {
  component: RadioBasic, //해당 컴포넌트
  title: 'Data Entry/RadioBasic', //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
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
    optionType: {
      defaultValue: '',
      options: ['', 'button'],
      control: { type: 'radio' },
    },
    size: {
      defaultValue: 'middle',
      options: ['large', 'middle', 'small'],
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


const RadioTemplate = ({ ...args }) => {
  const [{ value }, updateArgs] = useArgs();
  const handleChange = (e) => updateArgs({ value: e })
  return (<RadioBasic {...args} onChange={handleChange} />)
}


export const Basic = RadioTemplate.bind({});
Basic.args = {
  "options": options,
  buttonStyle: {
    "marginTop": 50
  },
};

Basic.propTypes = {
  // data: PropTypes.array.isRequired,
  // bordered: PropTypes.bool.isRequired,
  // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
  // size: PropTypes.oneOf(['default', 'large', 'small']),
};

