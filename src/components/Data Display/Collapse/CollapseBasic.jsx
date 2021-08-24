import React from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;


/* API */
/** Collapse
 * accordion ( boolean ) : 하나의 아코디언 메뉴만 활성화 가능
 * activeKey ( string[] | string, number[] | number ) : empty 스타일
 * bordered ( boolean ) : 선 여부 (default: true)
 * collapsible ( header | disabled) : 자식 패널을 접을 수 있는지 아니면 접을 수 있는 트리거 영역을 지정
 * defaultActiveKey	(string[] | string number[] | number) : 초기 활성화 패널 key		
 * destroyInactivePanel (boolean) : 비활성 패널 제거 (default:false)	
 * expandIcon ((panelProps) => ReactNode) :	축소 아이콘 사용자 정의 	
 * expandIconPosition (left | right) :	아이콘 포지션
 * ghost (boolean) : 축소테두리, 배경 투명 여부 (default:false)	
 * onChange (function) : 활성 패널이 변경될 때 콜백함수		
 */

const handleExpandIcon = (isActive) => <CaretRightOutlined rotate={isActive ? 90 : 0} />

const CollapseBasic = ({
    accordion,
    activeKey,
    bordered,
    collapsible,
    defaultActiveKey,
    destroyInactivePanel,
    expandIconPosition,
    ghost,
    onChange,
    children
}) => {
    console.log(children);
    return (
        <Collapse
            accordion={accordion}
            activeKey={activeKey}
            bordered={bordered}
            collapsible={collapsible}
            defaultActiveKey={defaultActiveKey}
            destroyInactivePanel={destroyInactivePanel}
            expandIcon={({ isActive }) => handleExpandIcon(isActive)}
            expandIconPosition={expandIconPosition}
            ghost={ghost}
            onChange={onChange}>
            {children.map(item => (
                <Panel collapsible={item.collapsible} header={item.header} key={item.key} showArrow={item.showArrow}>
                    <p>{item.content}</p>
                </Panel>
            ))}
            {/* {children} */}
        </Collapse>
    )
}
export default CollapseBasic;