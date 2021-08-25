import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

/** Tabs.TabPane
 * closeIcon	ReactNode
 * forceRender	boolean	FALSE
 * key	string
 * tab	ReactNode
 */

const TabPaneItem = ({
    closeIcon,
    forceRender,
    key,
    tab,
    closable,
    children,
}) => {
    console.log(children);
    return (
        <TabPane tab='TEST@@@'>jaksldsjakdl</TabPane>
        // <TabPane
        //     closeIcon={closeIcon}
        //     closable={closable}
        //     forceRender={false}
        //     tab={tab}
        //     key={key}
        // >
        //     TEST ITEMS
        //     {/* {children} */}
        // </TabPane>
    );
};

export default TabPaneItem;