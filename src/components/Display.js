import React from 'react';

class Display extends React.Component {
    render () {
        return (
            <div className="display">
                <div>{this.props.buffer}</div>
            </div>
        )
    }
}

export default Display