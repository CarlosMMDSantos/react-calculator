import React from 'react';
import Button from './Button'

class ButtonPannel extends React.Component {
    render () {
        return (
            <div className="button-panel">
                {this.props.buttons.map((line, index) => {
                    return <div key={index}>
                        {line.map(button => {
                            return <Button key={button.text} text={button.text} action={button.action} isOrange={button.isOrange} isWide={button.isWide}/>
                        })}
                    </div>
                })}
            </div>
        )
    }
}

export default ButtonPannel