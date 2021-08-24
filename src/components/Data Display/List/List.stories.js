import React from "react";
import Index from './Index';
import ListBasic from './ListBasic';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const renderItem = (data) => {
    return (<List.Item> [ITEM] {data}</List.Item>)
}

const loadMore = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
            }}
        >
            loading more
        </div>
    )
}

export default {
    component: ListBasic, //해당 컴포넌트
    title: "Data Display/List", //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
    excludeStoires: "", //Storybook에서 스토리를 내보낼 때 렌더링에서 제외 하는것
    argTypes: {
        itemLayout: {
            options: ['horizontal', 'vertical'],
            control: { type: 'radio' }
        },
        size: {
            options: ['default', 'small', 'large'],
            control: { type: 'radio' }
        },
        bordered: {
            options: [true, false],
            control: { type: 'radio' }
        }
    }, //각각의 스토리에서 인수(args)의 행동 방식을 명시
    decorators: [(Story) => (<Index><Story /></Index>)
    ], //내보내기 시 앞 뒤로 데코레이션 설정
};

const ListBasicTemplate = (args) => <ListBasic {...args} />;

export const Basic = ListBasicTemplate.bind({});
Basic.args = {
    data: data,
    rowKey: '',
    renderItem: renderItem,
    loadMore: loadMore,
    loading: false,
    itemLayout: 'horizontal',
    bordered: true,
    size: 'default',
    pagination: true,
    header: <div>헤더 아이템</div>,
    footer: <div>푸터 아이템</div>,
    locale: <div>데이터가 존재 하지않습니다.</div>
}

const listData = [];
for (let i = 0; i < 5; i++) {
    listData.push({
        href: "https://ant.design",
        title: `ant design part ${i}`,
        avatar: <Avatar src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />,
        description:
            "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    });
}

const IconText = ({ icon, text }) => (<Space>{React.createElement(icon)} {text}</Space>);

const renderItemVertical = (listData) => (
    <ListItem
        extra={
            <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
        }
        actions={[
            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        title={listData.title} avatar={listData.avatar} description={listData.description} children={listData.content}
    />
)

export const Vertical = ListBasicTemplate.bind({});
Vertical.args = {
    ...Basic.args,
    data: listData,
    rowKey: '',
    renderItem: renderItemVertical,
    loadMore: loadMore,
    itemLayout: 'vertical'
}

Basic.propTypes = {
    data: PropTypes.array.isRequired,
    bordered: PropTypes.bool.isRequired,
    itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
    size: PropTypes.oneOf(['default', 'large', 'small']),
};