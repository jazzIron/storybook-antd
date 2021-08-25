import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">Breadcrumb</h1>
                <p className="text">
                    A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    When the system has more than two layers in a hierarchy. <br />
                    When you need to inform the user of where they are. <br />
                    When the user may need to navigate back to a higher level. <br />
                    <a href='https://ant.design/components/breadcrumb/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
