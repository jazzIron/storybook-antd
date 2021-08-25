import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">Pagination</h1>
                <p className="text">
                    A long list can be divided into several pages using Pagination, and only one page will be loaded at a time.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    When it will take a long time to load/render all items. <br />
                    If you want to browse the data by navigating through pages. <br />
                    <a href='https://ant.design/components/pagination/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
