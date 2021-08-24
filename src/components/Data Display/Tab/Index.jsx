import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">Tabs</h1>
                <p className="text">
                    Tabs make it easy to switch between different views.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    Ant Design has 3 types of Tabs for different situations. <br />
                    Card Tabs: for managing too many closeable views.<br />
                    Normal Tabs: for functional aspects of a page.<br />
                    Radio.Button: for secondary tabs.<br />
                    <a href='https://ant.design/components/tabs/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
