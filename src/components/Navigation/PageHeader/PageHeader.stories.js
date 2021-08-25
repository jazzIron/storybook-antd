import React from "react";
import Index from './Index';
import PageHeaderBasic from './PageHeaderBasic';
import PropTypes from 'prop-types';
import { Tag, Button } from 'antd';

export default {
    component: PageHeaderBasic, //해당 컴포넌트
    title: "Navigation/PageHeader", //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
    excludeStoires: "", //Storybook에서 스토리를 내보낼 때 렌더링에서 제외 하는것
    parameters: {
        actions: {
        }
    }, //callback event 수신 
    argTypes: {
        ghost: {
            defaultValue: false,
            options: [true, false],
            control: { type: 'radio' }
        },
        title: {
            defaultValue: '타이틀 영역',
            control: { type: 'text' },
        },
        subTitle: {
            defaultValue: '서브타이틀 영역',
            control: { type: 'text' },
        },
        children: { control: { type: 'text' }, },
    }, //각각의 스토리에서 인수(args)의 행동 방식을 명시
    decorators: [(Story) => (<Index><Story /></Index>)
    ], //내보내기 시 앞 뒤로 데코레이션 설정
};


const PageHeaderTemplate = (args) => {

    return (<PageHeaderBasic {...args} />);
};

export const Basic = PageHeaderTemplate.bind({});
Basic.args = {
    className: '',
    //backIcon: true,
    tags: <Tag color="blue">TEST TAG</Tag>,
    avatar: `https://avatars1.githubusercontent.com/u/8186664?s=460&v=4`,
    extra: [
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary"> Primary</Button>,
    ],
    footer: '푸터영역',
    onBack: () => { }
}

Basic.propTypes = {
    // data: PropTypes.array.isRequired,
    // bordered: PropTypes.bool.isRequired,
    // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
    // size: PropTypes.oneOf(['default', 'large', 'small']),
};