import React from 'react';
import { Card } from 'antd';

/* API */
/** CardBasic
 * actions	Array<ReactNode>
 * activeTabKey	string - 현재 TabPane's key
 * bodyStyle	CSSProperties - 카드 body style
 * bordered	boolean(TRUE) - 카드 주변 테두리 여부
 * cover	ReactNode - 카드 커버
 * defaultActiveTabKey	string - 초기활성 TabPane's key
 * extra	ReactNode - 추가 영역
 * headStyle CSSProperties - 카드 headStyle
 * hoverable boolean(FALSE) - hover 효과
 * loading	boolean(FALSE) - 로딩여부
 * size	default | small(default) - 카드 사이즈
 * tabBarExtraContent	ReactNode - 탭 표시줄 추가 컨텐츠
 * tabList	Array<{key: string, tab: ReactNode}> - 탭 리스트
 * tabProps	- tabProps items
 * title	ReactNode - 카드 타이틀
 * type	string - 카드스타일 유형
 * onTabChange	(key) => void - 탭전환 콜백 함수
 */

/** Card.Grid
 * className	string - 카드 클래스명
 * hoverable	boolean(TRUE) - hover효과
 * style	CSSProperties - 카드 컨테이너 스타일
 */

/** Card.Meta
 * avatar	ReactNode - 아바타
 * className	string - 카드 클래스명
 * description	ReactNode - 카드 정보
 * style	CSSProperties - 카드 컨테이너 스타일 
 * title	ReactNode - 카드 타이틀
 */


const CardBasic = ({
    actions,
    activeTabKey,
    bodyStyle,
    bordered,
    cover,
    defaultActiveTabKey,
    extra,
    headStyle,
    hoverable,
    loading,
    size,
    tabBarExtraContent,
    tabList,
    tabProps,
    title,
    type,
    onTabChange,
    style,
    children
}) => {
    return (
        <Card
            loading={loading}
            bordered={bordered}
            cover={cover}
            size={size}
            title={title}
            type={type}
            extra={extra}
            hoverable={hoverable}
            bodyStyle={bodyStyle}
            headStyle={headStyle}
            style={style}
            actions={actions}>
            {children}
        </Card>
    )
}
export default CardBasic;