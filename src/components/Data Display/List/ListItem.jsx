import React from 'react';
import { List } from 'antd';

/** List.Item
 * actions ( Array<ReactNode> ) : 목록 항목의 컨텐츠 영역
 * extra ( ReactNode ) : 목록항목에 아이템 영역 추가
 */

/** List.Item.Meta
 * avatar ( ReactNode ) : 리스트 아이템에 아바타 아이템 포함
 * description ( ReactNode ) : 리스트 아이템에 설명 아이템 포함
 * title ( ReactNode ) : 리스트 아이템에 타이틀 아이템 포함
 */

const ListItem = ({ actions, extra, avatar, description, title, children }) => (
    <List.Item
        actions={actions}
        extra={extra}
    >
        <List.Item.Meta
            avatar={avatar}
            title={title}
            description={description}
        />
        {children}
    </List.Item>
)
export default ListItem;