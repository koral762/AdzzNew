import React from 'react'

export const Header = () => {

    const pHeader = "Nulla eget magna ut purus iaculis dapibus. Vestibulum euismod fringilla gravida. Donec a quam a elit tristique fringilla. Nam ipsum enim, bibendum vitae magna et, placerat porttitor enim. Suspendisse potenti. Donec ut lorem placerat, feugiat magna non, sodales risus. Fusce rutrum suscipit diam, eu tempor erat sollicitudin vel.";

    return (
        <div className="header-container">
            <h1>FAQ h1</h1>
            <div className="first-header-paragraph">
                <div className="img-header"></div>
                <p>{pHeader}</p>
            </div>
        </div>
    )
}