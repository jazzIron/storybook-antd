import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">List</h1>
                <p className="text">
                    리스트 Component
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    A list can be used to display content related to a single subject. <br />
                    The content can consist of multiple elements of varying type and size. <br />
                    <a href='https://ant.design/components/list/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
