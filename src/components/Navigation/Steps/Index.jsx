import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">Steps</h1>
                <p className="text">
                    Steps is a navigation bar that guides users through the steps of a task.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    When a given task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.  <br />
                    <a href='https://ant.design/components/steps/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
