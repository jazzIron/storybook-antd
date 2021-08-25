import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">Image</h1>
                <p className="text">
                    Previewable image.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    When you need to display pictures.<br />
                    Display when loading a large image or fault tolerant handling when loading fail.<br />
                    <a href='https://ant.design/components/image/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
