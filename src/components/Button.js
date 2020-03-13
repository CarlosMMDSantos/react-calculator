import React from 'react';

class Button extends React.Component {
    render () {
        return (
            <div className={"button" + (this.props.isOrange ? " orange" : "") + (this.props.isWide ? " wide" : "") }>
                <button name={this.props.text} onClick={this.props.action}>{this.props.text}</button>
            </div>
        )
    }
}

export default Button