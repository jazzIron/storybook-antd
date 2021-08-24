import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">Card</h1>
                <p className="text">
                    Simple rectangular container.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.
                    <a href='https://ant.design/components/card/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
