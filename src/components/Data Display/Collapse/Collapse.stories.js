import React from "react";
import Index from './Index';
import CollapseBasic from './CollapseBasic';
import CollapsePanel from './CollapsePanel';
import PropTypes from 'prop-types';

const collapsePanelItems = () => {
    const panelItems = [];
    for (let i = 0; i < 5; i++) {
        panelItems.push({
            collapsible: 'header',
            header: `ant design Title [${i}]`,
            key: String(i),
            showArrow: true,
            content: `ant design Content [${i}]`,
        });
    }
    return panelItems;
    //return (panelItems.map(item => (<CollapsePanel collapsible={item.collapsible} header={item.header} key={item.key} showArrow={item.showArrow}>{item.content}</CollapsePanel>)))
}

export default {
    component: CollapseBasic, //해당 컴포넌트
    title: "Data Display/Collapse", //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
    excludeStoires: "", //Storybook에서 스토리를 내보낼 때 렌더링에서 제외 하는것
    parameters: {
        actions: {}
    }, //callback event 수신 
    argTypes: {
        defaultActiveKey: {
            defaultValue: ['0'],
            control: { type: 'array' },
        },
        activeKey: {
            defaultValue: '0',
            control: { type: 'text' },
        },
        accordion: {
            defaultValue: false,
            options: [false, true],
            control: { type: 'radio' },
        },
        collapsible: {
            defaultValue: 'header',
            options: ['header', 'disabled'],
            control: { type: 'radio' },
        },
        bordered: {
            defaultValue: true,
            options: [false, true],
            control: { type: 'radio' },
        },
        expandIconPosition: {
            defaultValue: 'right',
            options: ['left', 'right'],
            control: { type: 'radio' }
        },
        ghost: {
            defaultValue: false,
            options: [false, true],
            control: { type: 'radio' }
        },
        destroyInactivePanel: {
            defaultValue: false,
            options: [false, true],
            control: { type: 'radio' }
        }
    }, //각각의 스토리에서 인수(args)의 행동 방식을 명시
    decorators: [(Story) => (<Index><Story /></Index>)
    ], //내보내기 시 앞 뒤로 데코레이션 설정
};

const CollapseTemplate = (args) => <CollapseBasic {...args} />;

const handleChange = (value) => console.log(value);


export const Basic = CollapseTemplate.bind({});
Basic.args = {
    onChange: handleChange(),
    children: collapsePanelItems()
}

Basic.propTypes = {
    // data: PropTypes.array.isRequired,
    // bordered: PropTypes.bool.isRequired,
    // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
    // size: PropTypes.oneOf(['default', 'large', 'small']),
};