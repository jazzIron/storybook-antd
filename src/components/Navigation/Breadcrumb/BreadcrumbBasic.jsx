import React from 'react';
import { Breadcrumb } from 'antd';

/* API */
/** Breadcrumb
itemRender  (route, params, routes, paths) => ReactNode
params	object
routes	routes[] 
separator	ReactNode - 구분자
 */

/** Breadcrumb.Item
className	string - 클래스 네임
dropdownProps	Dropdown - 드롭다운 
href	string - url
overlay	Menu | () => Menu - 메뉴 아이템
onClick	(e:MouseEvent) => void - 클릭이벤트
*/


const BreadcrumbBasic = ({
    itemRender,
    params,
    routes,
    separator
}) => {
    return (
        <Breadcrumb separator={separator}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbBasic;