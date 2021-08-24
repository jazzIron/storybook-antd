import React from 'react';
import { Descriptions } from 'antd';

/* API */
/** Descriptions
 * bordered	boolean(FALSE) - 테두리 표시 여부
 * colon	boolean(TRUE) - 콜론
 * column	number - 칼럼 수 
 * contentStyle	CSSProperties - 컨텐츠 스타일
 * extra	ReactNode - 아이템 포함
 * labelStyle	CSSProperties - 라벨 스타일
 * layout	horizontal | vertical (horizontal) - 레이아웃
 * size	default | middle | small - 사이즈
 * title ReactNode - 설명 타이틀
 */


const DescriptionsBasic = ({
    bordered,
    colon,
    column,
    contentStyle,
    extra,
    labelStyle,
    layout,
    size,
    title,
    children
}) => {
    return (
        <Descriptions
            bordered={bordered}
            colon={colon}
            column={column}
            contentStyle={contentStyle}
            extra={extra}
            labelStyle={labelStyle}
            layout={layout}
            size={size}
            title={title}
        >
            {children}
        </Descriptions>
    )
}
export default DescriptionsBasic;