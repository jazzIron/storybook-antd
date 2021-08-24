import React from "react";
import Index from './Index';
import DescriptionsBasic from './DescriptionsBasic';
import DescriptionsItem from "./DescriptionsItem";
import PropTypes from 'prop-types';

const DescriptionsItems = () => {
    const listData = [];
    for (let i = 0; i < 5; i++) {
        listData.push({
            contentStyle: ``,
            labelStyle: ``,
            label: `TEST___${i}`,
            span: `2`,
            content: `DescriptionsItem ===> ${i}`
        });
    }
    return (listData.map(item => (<DescriptionsItem label={item.label} span={item.span}>{item.content}</DescriptionsItem>)))
}

export default {
    component: DescriptionsBasic, //해당 컴포넌트
    title: "Data Display/Descriptions", //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
    excludeStoires: "", //Storybook에서 스토리를 내보낼 때 렌더링에서 제외 하는것
    parameters: {
        actions: {}
    }, //callback event 수신 
    argTypes: {
        title: {
            defaultValue: 'titleField',
            control: { type: 'text' },
        },
        bordered: {
            defaultValue: true,
            options: [false, true],
            control: { type: 'radio' },
        },
        colon: {
            defaultValue: true,
            options: [false, true],
            control: { type: 'radio' },
        },
        column: {
            defaultValue: '3',
            control: { type: 'text' },
        },
        layout: {
            defaultValue: 'horizontal ',
            options: ['horizontal ', 'vertical'],
            control: { type: 'radio' },
        },
        size: {
            defaultValue: 'default',
            options: ['default', ' middle', 'small'],
            control: { type: 'radio' },
        },
    }, //각각의 스토리에서 인수(args)의 행동 방식을 명시
    decorators: [(Story) => (<Index><Story /></Index>)
    ], //내보내기 시 앞 뒤로 데코레이션 설정
};

const DescriptionsTemplate = (args) => <DescriptionsBasic {...args} />;


export const Basic = DescriptionsTemplate.bind({});
Basic.args = {
    children: DescriptionsItems(),
    extra: <span>테스트</span>
}

Basic.propTypes = {
    // data: PropTypes.array.isRequired,
    // bordered: PropTypes.bool.isRequired,
    // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
    // size: PropTypes.oneOf(['default', 'large', 'small']),
};