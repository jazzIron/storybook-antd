import React, { useState } from "react";
import { useArgs } from '@storybook/client-api';
import Index from './Index';
import TabBasic from './TabBasic';
import TabPaneItem from './TabPaneItem';
import PropTypes from 'prop-types';

const TabPaneItems = () => {
    const listData = [];
    for (let i = 0; i < 5; i++) {
        listData.push({
            closeIcon: ``,
            key: i,
            tab: `tabTitle_${i}`,
            closable: false,
            content: `TabPaneItems ===> ${i}`
        });
    }
    return listData;
    return (listData.map(item => (<TabPaneItem closeIcon={item.closeIcon} key={item.key} tab={item.tab} closable={item.closable}>{item.content}</TabPaneItem>)))
}

export default {
    component: TabBasic, //해당 컴포넌트
    title: "Data Display/Tab", //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
    excludeStoires: "", //Storybook에서 스토리를 내보낼 때 렌더링에서 제외 하는것
    parameters: {
    }, //callback event 수신 
    argTypes: {
        // activeKey: {
        //     defaultValue: '1',
        //     control: { type: 'text' },
        // },
        animated: {
            defaultValue: true,
            options: [true, false],
            control: { type: 'radio' }
        },
        centered: {
            defaultValue: false,
            options: [true, false],
            control: { type: 'radio' }
        },
        hideAdd: {
            defaultValue: true,
            options: [true, false],
            control: { type: 'radio' }
        },
        size: {
            defaultValue: 'default',
            options: ['default', 'large', 'small'],
            control: { type: 'radio' },
        },
        tabBarGutter: { control: { type: 'number' }, },
        tabBarStyle: { control: { type: 'object' }, },
        tabPosition: {
            defaultValue: 'top',
            options: ['top', 'right', 'bottom', 'left'],
            control: { type: 'radio' },
        },
        destroyInactiveTabPane: {
            defaultValue: false,
            options: [true, false],
            control: { type: 'radio' }
        },
        type: {
            defaultValue: 'line',
            options: ['line', 'card', 'editable-card'],
            control: { type: 'radio' },
        },
    }, //각각의 스토리에서 인수(args)의 행동 방식을 명시
    decorators: [(Story) => (<Index><Story /></Index>)
    ], //내보내기 시 앞 뒤로 데코레이션 설정
};

const TabTemplate = ({ ...args }) => {
    const [{ activeKey }, updateArgs] = useArgs();
    const handleChange = (activeKey) => {
        // console.log('handleChange');
        // updateArgs({ activeKey: activeKey })
    }
    const handleTabClick = (targetKey, action) => {
        // console.log(targetKey);
        // console.log(action);
        updateArgs({ activeKey: targetKey })
    }
    return (<TabBasic {...args} onChange={handleChange} onTabClick={handleTabClick} />)
}
const tabBarStyle = {

};

const handleEdit = (targetKey, action) => {
    //console.log(targetKey);
    //console.log(action);
}

const handleTabScroll = (direction) => {
    //console.log(direction);
}

export const Basic = TabTemplate.bind({});
Basic.args = {
    addIcon: '',
    moreIcon: '',
    tabBarExtraContent: '',
    tabBarStyle: tabBarStyle,
    data: TabPaneItems(),
    // renderTabBar: () => { },
    // onChange: handleChange,
    onEdit: handleEdit,
    // onTabClick: handleTabClick,
    onTabScroll: handleTabScroll,
}

Basic.propTypes = {
    // data: PropTypes.array.isRequired,
    // bordered: PropTypes.bool.isRequired,
    // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
    // size: PropTypes.oneOf(['default', 'large', 'small']),
};