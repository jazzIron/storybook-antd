import React from 'react';
import { Descriptions } from 'antd';

/** DescriptionItem
 * contentStyle	CSSProperties - 컨텐츠 스타일e
 * label	ReactNode - 라벨
 * labelStyle	CSSProperties - 라벨 스타일
 * span	number(1) - 칼럼 포함수
 */

const DescriptionsItem = ({
    contentStyle,
    label,
    labelStyle,
    span,
    children
}) => {
    return (
        <Descriptions.Item
            contentStyle={contentStyle}
            labelStyle={labelStyle}
            span={span}
            label={label}
        >
            {children}
        </Descriptions.Item>
    );
};

export default DescriptionsItem;