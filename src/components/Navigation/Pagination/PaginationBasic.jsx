import React from 'react';
import { Pagination } from 'antd';

/* API */
/** Pagination
current	number	- 현재 페이지 번호
defaultCurrent	number(1) - 기본초기 페이지 번호
defaultPageSize	number(10) - 페이지당 기본 데이터수
disabled	boolean	- 숨김여부
hideOnSinglePage	boolean(FALSE) 단일페이지에서 숨김여부
itemRender	(page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode	- innerHTML 커스텀
pageSize	number	- 페이지 사이즈
pageSizeOptions	string[]([10, 20, 50, 100])
responsive	boolean	- 반응형여부
showLessItems	boolean(FALSE) - 페이지 항목 줄이기
showQuickJumper	boolean | { goButton: ReactNode }(FALSE) - 페이지 직접이동 확인
showSizeChanger	boolean	 - pageSize 선택을 표시할지 여부를 결정합니다. 합계가 50보다 크면 true가 됩니다.
showTitle	boolean(TRUE) - 페이지 항목의 제목 표시
showTotal	function(total, range)	- 총 개수와 범위 표시 
simple	boolean	- 단순모드
size	default | small(default) - 사이즈
total	number(0) - 총개수
onChange	function(page, pageSize) - 페이지 번호 또는 pageSize가 변경될 때 호출되며 결과 페이지 번호와 pageSize를 인수로 사용합니다
onShowSizeChange	function(current, size)	- pageSize가 변경될 때 호출됨
 */

const PaginationBasic = ({
    current,
    defaultCurrent,
    defaultPageSize,
    disabled,
    hideOnSinglePage,
    itemRender,
    pageSize,
    pageSizeOptions,
    responsive,
    showLessItems,
    showQuickJumper,
    showSizeChanger,
    showTitle,
    showTotal,
    simple,
    size,
    total,
    onChange,
    onShowSizeChange,
}) => {
    return (
        <Pagination
            current={current}
            defaultCurrent={defaultCurrent}
            defaultPageSize={defaultPageSize}
            disabled={disabled}
            hideOnSinglePage={hideOnSinglePage}
            itemRender={itemRender}
            pageSize={pageSize}
            pageSizeOptions={pageSizeOptions}
            responsive={responsive}
            showLessItems={showLessItems}
            showQuickJumper={showQuickJumper}
            showSizeChanger={showSizeChanger}
            showTitle={showTitle}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}개 `}
            simple={simple}
            size={size}
            total={total}
            onChange={onChange}
            onShowSizeChange={onShowSizeChange}
        />
    )
}

export default PaginationBasic;