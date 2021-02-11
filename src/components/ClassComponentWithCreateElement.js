import React from "react";


class MyHeaderWithCreateElement extends React.Component {
    render() {
        return React.createElement(
            'h1',
            { className: 'header_title' },
            'Hello React from createElement!'
        );
    }
}

export default MyHeaderWithCreateElement;
