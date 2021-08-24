import React from 'react';
import { Empty } from 'antd';

/* API */
/** Empty
 * image ( ReactNode ) : empty 이미지 (default : Empty.PRESENTED_IMAGE_SIMPLE)
 * imageStyle ( CSSProperties ) : empty 스타일
 * description ( ReactNode ) : 설명
 */

const EmptyBasic = ({
    image,
    imageStyle,
    description,
    children
}) => {
    const imageItem = image === 'CUSTOM_IMAGE' ? 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg' : Empty.PRESENTED_IMAGE_SIMPLE;
    return (
        <Empty
            image={imageItem}
            imageStyle={imageStyle}
            description={description}
        >
            {children}
        </Empty>
    )
}

export default EmptyBasic;