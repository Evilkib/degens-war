import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>My Next.js App</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>My Footer</p>
            </footer>
        </div>
    );
};

export default Layout;