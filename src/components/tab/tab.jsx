import React from 'react';
import TabHeader from './tabHeader/tabHeader';
import TabContent from './tabContent/tabContent';

import './tab.css';

export default Tab;

function Tab({tabsContent, ...props}) {
    const [activeTab, setActiveTab] = React.useState(0);

    const changeActiveTab = index => {
        setActiveTab(index)
    };

    const viewTabItem = tabsContent.map((tabItem, index) => {
        return {
            tabHeader: <TabHeader index={index} changeActiveTab={changeActiveTab}
                            key={tabItem.title+'Header'}
                            selected={index===activeTab ? true : false}>
                    {tabItem.title}
                </TabHeader>,
            tabContent: <TabContent index={index}
                            key={tabItem.title+'Content'}
                            selected={index===activeTab ? true : false}>
                    {tabItem.content}
                </TabContent>
        }
    });

    const getClass = () => {
        return `tab ${props.className}`
    };

    return(
        <div className={ getClass() }>
            <div className='tab__header'>
                {viewTabItem.map((viewTabItem)=>viewTabItem.tabHeader)}
            </div>
            <div className='tab__content'>
                {viewTabItem.map((viewTabItem)=>viewTabItem.tabContent)}
            </div>
        </div>
    )
}