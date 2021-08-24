import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">Descriptions</h1>
                <p className="text">
                    Display multiple read-only fields in groups.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    Commonly displayed on the details page.
                    <a href='https://ant.design/components/descriptions/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
