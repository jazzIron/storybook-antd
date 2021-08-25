import React from 'react';

const Index = ({ children }) => {
    return (
        <div>
            <>
                <h1 className="title">Menu</h1>
                <p className="text">
                    A versatile menu for navigation.
                </p>
                <h2 className="title">When to use</h2>
                <p className="text">
                    Navigation is an important part of any website, as a good navigation setup allows users to move around the site quickly and efficiently.<br />
                    Ant Design offers two navigation options: top and side. <br />
                    Top navigation provides all the categories and functions of the website. Side navigation provides the multi-level structure of the website. <br />
                    More layouts with navigation: Layout.<br />
                    <a href='https://ant.design/components/menu/' target='_blank'>바로가기</a>
                </p>
                {children}
            </>
        </div>
    );
};

export default Index;
