import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">Table</h1>
                <p className="text">
                    A table displays rows of data.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    To display a collection of structured data. <br />
                    To sort, search, paginate, filter data. <br />
                    <a href='https://ant.design/components/table/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
