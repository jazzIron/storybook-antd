import React from "react";
import { useArgs } from '@storybook/client-api';
import Index from './Index';
import PaginationBasic from './PaginationBasic';
import PropTypes from 'prop-types';

export default {
    component: PaginationBasic, //해당 컴포넌트
    title: "Navigation/Pagination", //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
    excludeStoires: "", //Storybook에서 스토리를 내보낼 때 렌더링에서 제외 하는것
    parameters: {
        actions: {
        }
    }, //callback event 수신 
    argTypes: {
        size: {
            options: ['default', 'small', 'large'],
            control: { type: 'radio' }
        },
        disabled: {
            defaultValue: false,
            options: [true, false],
            control: { type: 'radio' }
        },
        showQuickJumper: {
            defaultValue: false,
            options: [true, false],
            control: { type: 'radio' }
        },
        showSizeChanger: {
            defaultValue: true,
            options: [true, false],
            control: { type: 'radio' }
        },
        hideOnSinglePage: {
            defaultValue: false,
            options: [true, false],
            control: { type: 'radio' }
        },
        description: { control: { type: 'text' }, },
        children: { control: { type: 'text' }, },
    }, //각각의 스토리에서 인수(args)의 행동 방식을 명시
    decorators: [(Story) => (<Index><Story /></Index>)
    ], //내보내기 시 앞 뒤로 데코레이션 설정
};

const PaginationTemplate = ({ ...args }) => {
    const [{ activeKey }, updateArgs] = useArgs();
    const handleChange = (page, pageSize) => {
        console.group('handleChange');
        console.log(page);
        console.log(pageSize);
        console.groupEnd()
    }
    const handleShowSizeChange = (current, size) => {
        console.group('handleChange');
        console.log(current);
        console.log(size);
        console.groupEnd()
    }
    return (<PaginationBasic {...args} onChange={handleChange} onShowSizeChange={handleShowSizeChange} />)
}

export const Basic = PaginationTemplate.bind({});
Basic.args = {
    current: 1,
    defaultCurrent: 1,
    defaultPageSize: 10,
    pageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
    responsive: true,
    showTitle: 'TEST',
    total: 50,

}

Basic.propTypes = {
    // data: PropTypes.array.isRequired,
    // bordered: PropTypes.bool.isRequired,
    // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
    // size: PropTypes.oneOf(['default', 'large', 'small']),
};