import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">PageHeader</h1>
                <p className="text">
                    A header with common actions and design elements built in.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    PageHeader can be used to highlight the page topic, display important information about the page, and carry the action items related to the current page (including page-level operations, inter-page navigation, etc.) It can also be used as inter-page navigation.
                    <a href='https://ant.design/components/page-header/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
