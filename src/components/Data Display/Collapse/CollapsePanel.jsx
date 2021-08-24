import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

/** Collapse.Panel
 * collapsible ( header | disabled ) : 패널을 축소 트리거 영역 지정
 * extra ( ReactNode ) : 모서리 아이템 
 * forceRender ( boolean ) : (default: false) : 헤더를 클릭 후 패널에서  컨텐츠 강제로 랜더링
 * header ( ReactNode ) :  제목
 * key ( string | number ) :  Unique key
 * showArrow ( boolean ) : false 경우 패널에 아이콘 미표시 (default: true)
 */

const CollapsePanel = ({
    collapsible,
    extra,
    forceRender,
    header,
    key,
    showArrow,
    children
}) => {
    return (
        <Panel
            collapsible={collapsible}
            extra={extra}
            forceRender={forceRender}
            header={header}
            key={key}
            showArrow={showArrow}
        >
            {children}
        </Panel>
    );
};

export default CollapsePanel;