import React from "react";
import { useArgs } from '@storybook/client-api';
import Index from './Index';
import TableBasic from './TableBasic';
import PropTypes from 'prop-types';

export default {
    component: TableBasic, //해당 컴포넌트
    title: "Data Display/Table", //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
    excludeStoires: "", //Storybook에서 스토리를 내보낼 때 렌더링에서 제외 하는것
    parameters: {
    }, //callback event 수신 
    argTypes: {
        type: {
            defaultValue: 'line',
            options: ['line', 'card', 'editable-card'],
            control: { type: 'radio' },
        },
        size: {
            defaultValue: 'default',
            options: ['default', 'large', 'small'],
            control: { type: 'radio' },
        }

    }, //각각의 스토리에서 인수(args)의 행동 방식을 명시
    decorators: [(Story) => (<Index><Story /></Index>)
    ], //내보내기 시 앞 뒤로 데코레이션 설정
};

const TableTemplate = ({ ...args }) => {
    const [{ activeKey }, updateArgs] = useArgs();
    return (<TableBasic {...args} />)
}

export const Basic = TableTemplate.bind({});
Basic.args = {
}

Basic.propTypes = {
    // data: PropTypes.array.isRequired,
    // bordered: PropTypes.bool.isRequired,
    // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
    // size: PropTypes.oneOf(['default', 'large', 'small']),
};