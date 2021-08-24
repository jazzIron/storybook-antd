import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">Collapse</h1>
                <p className="text">
                    A content area which can be collapsed and expanded.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    Can be used to group or hide complex regions to keep the page clean. <br />
                    Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time. <br />
                    <a href='https://ant.design/components/collapse/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
