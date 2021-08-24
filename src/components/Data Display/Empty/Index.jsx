import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">Empty</h1>
                <p className="text">
                    Empty state placeholder.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    When there is no data provided, display for friendly tips. <br />
                    User tutorial to create something in fresh new situation. <br />
                    <a href='https://ant.design/components/empty/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
