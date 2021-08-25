import React from "react";
import Index from './Index';
import MenuBasic from './MenuBasic';
import PropTypes from 'prop-types';

export default {
    component: MenuBasic, //해당 컴포넌트
    title: "Navigation/Menu", //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
    excludeStoires: "", //Storybook에서 스토리를 내보낼 때 렌더링에서 제외 하는것
    parameters: {
        actions: {
        }
    }, //callback event 수신 
    argTypes: {
        image: {
            options: ['CUSTOM_IMAGE', 'DEFAULT_IMAGE'],
            control: { type: 'radio' }
        },
        description: { control: { type: 'text' }, },
        children: { control: { type: 'text' }, },
    }, //각각의 스토리에서 인수(args)의 행동 방식을 명시
    decorators: [(Story) => (<Index><Story /></Index>)
    ], //내보내기 시 앞 뒤로 데코레이션 설정
};

const MenuTemplate = (args) => <MenuBasic {...args} />;

export const Basic = MenuTemplate.bind({});
Basic.args = {
}

Basic.propTypes = {
    // data: PropTypes.array.isRequired,
    // bordered: PropTypes.bool.isRequired,
    // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
    // size: PropTypes.oneOf(['default', 'large', 'small']),
};