import React from 'react';
import { Tabs } from 'antd';
// import TabPaneItem from './TabPaneItem';

const { TabPane } = Tabs;

/* API */
/** Tab
 * activeKey	string
 * addIcon	ReactNode
 * animated	boolean | { inkBar: boolean, tabPane: boolean }
 * centered	boolean
 * defaultActiveKey	string
 * hideAdd	boolean
 * moreIcon	ReactNode
 * renderTabBar	(props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement
 * size	large | default | small
 * tabBarExtraContent	ReactNode | {left?: ReactNode, right?: ReactNode}
 * tabBarGutter	number
 * tabBarStyle	object
 * tabPosition	top | right | bottom | left
 * destroyInactiveTabPane	boolean
 * type	line | card | editable-card
 * onChange	function(activeKey) {}
 * onEdit	(targetKey, action) => void
 * onTabClick	function(key: string, event: MouseEvent)
 * onTabScroll	function({ direction: left | right | top | bottom })
 */


/** Tabs.TabPane
 * closeIcon	ReactNode
 * forceRender	boolean	FALSE
 * key	string
 * tab	ReactNode
 */

const TabBasic = ({
    activeKey,
    addIcon,
    animated,
    centered,
    defaultActiveKey,
    hideAdd,
    moreIcon,
    renderTabBar,
    size,
    tabBarExtraContent,
    tabBarGutter,
    tabBarStyle,
    tabPosition,
    destroyInactiveTabPane,
    type,
    onChange,
    onEdit,
    onTabClick,
    onTabScroll,
    data
}) => {
    return (
        <Tabs
            activeKey={activeKey}
            addIcon={addIcon}
            animated={animated}
            centered={centered}
            defaultActiveKey={defaultActiveKey}
            hideAdd={hideAdd}
            moreIcon={moreIcon}
            renderTabBar={renderTabBar}
            size={size}
            tabBarExtraContent={tabBarExtraContent}
            tabBarGutter={tabBarGutter}
            tabBarStyle={tabBarStyle}
            tabPosition={tabPosition}
            destroyInactiveTabPane={destroyInactiveTabPane}
            type={type}
            onChange={onChange}
            onEdit={onEdit}
            onTabClick={onTabClick}
            onTabScroll={onTabScroll}
            data={data}
        >
            {data.map(item =>
                <TabPane
                    closeIcon={item.closeIcon}
                    closable={item.closable}
                    forceRender={false}
                    tab={item.tab}
                    key={item.key}
                >
                    {item.content}
                </TabPane>)}
        </Tabs>
    )
}

export default TabBasic;