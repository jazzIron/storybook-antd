import React from 'react';
import { List } from 'antd';

/* API */
/** List
 * bordered ( false ) : 테두리 여부
 * dataSource ( any[] ) : 데이터 Array
 * footer ( ReactNode ) : footer Render
 * grid ( object ) : grid list (default {gutter: 16, column: 4})
 * header ( ReactNode ) : header Render
 * itemLayout ( horizontal / vertical ) : 목록 레이아웃 (default : horizontal)
 * loading ( boolean | SpinProps(more)) : fetch 로딩 (default : false)
 * loadMore ( ReactNode ) : 더보기 기능
 * locale ( object ) : 빈 데이터인 경우 노출되는 view
 * pagination ( boolean | object ) : 페이지 버튼 영역
 * renderItem ( (item) => ReactNode ) : dataSource 커스텀마이징 rendering
 * rowKey ( string | Function(record) | string ) : unique key
 * size ( default | large | small ) : 리스트 사이즈 ( default :  default )
 * split ( boolean ) : 분할 렌더링 토글 ( default : true )
 */

/** List grid props
 * column : column grid,
 * gutter : gutter grid,
 * xs  : <567px,
 * sm  : >=576px,
 * md  : >=768px,
 * lg  : >=992px,
 * xl  : >=1200px,
 * xxl : >=1600px
 */

/** pagination
 * position ( top | bottom | both ) : 위치 지정 
 */

const ListBasic = ({ data, rowKey, renderItem, loadMore, loading, itemLayout, bordered, size, pagination, header, footer, locale }) => (
    <List
        dataSource={data}
        rowKey={rowKey}
        renderItem={renderItem}
        loadMore={loadMore}
        loading={loading}
        itemLayout={itemLayout}
        bordered={bordered}
        size={size}
        pagination={pagination}
        header={header}
        footer={footer}
        locale={locale}
    />
);

export default ListBasic;