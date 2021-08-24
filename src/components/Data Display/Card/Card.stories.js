import React from "react";
import Index from './Index';
import CardBasic from './CardBasic';
import PropTypes from 'prop-types';

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

export default {
    component: CardBasic, //해당 컴포넌트
    title: "Data Display/Card", //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
    excludeStoires: "", //Storybook에서 스토리를 내보낼 때 렌더링에서 제외 하는것
    parameters: {
        actions: {}
    }, //callback event 수신 
    argTypes: {
        title: {
            defaultValue: 'titleField',
            control: { type: 'text' },
        },
        type: {
            defaultValue: '',
            options: ['', 'inner'],
            control: { type: 'radio' },
        },
        headStyle: {
            control: { type: 'object' },
        },
        bodyStyle: {
            control: { type: 'object' },
        },
        activeTabKey: {
            control: { type: 'text' },
        },
        loading: {
            defaultValue: false,
            options: [false, true],
            control: { type: 'radio' },
        },
        bordered: {
            defaultValue: true,
            options: [false, true],
            control: { type: 'radio' },
        },
        size: {
            defaultValue: 'default',
            options: ['default', 'small'],
            control: { type: 'radio' },
        },
        hoverable: {
            defaultValue: false,
            options: [false, true],
            control: { type: 'radio' },
        },
        activeTabKey: {
            defaultValue: '0',
            control: { type: 'text' },
        },
    }, //각각의 스토리에서 인수(args)의 행동 방식을 명시
    decorators: [(Story) => (<Index><Story /></Index>)
    ], //내보내기 시 앞 뒤로 데코레이션 설정
};

const CardTemplate = (args) => <CardBasic {...args} />;

const style = {
    width: '300px'
}
const actions = [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
]
const childrenField =
    <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
    />;

export const Basic = CardTemplate.bind({});
Basic.args = {
    style: style,
    actions: actions,
    children: childrenField,
    cover: <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />,
    extra: <a href="#">More</a>
}

Basic.propTypes = {
    // data: PropTypes.array.isRequired,
    // bordered: PropTypes.bool.isRequired,
    // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
    // size: PropTypes.oneOf(['default', 'large', 'small']),
};