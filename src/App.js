import React from 'react';
import './App.css';

import Display from './components/Display'
import ButtonPannel from './components/ButtonPannel'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: [
        [
          {
            text: "AC",
            action: this.clearBuffer,
            isOrange: false,
            isWide: false
          },
          {
            text: "+/-",
            action: this.moreOrLess,
            isOrange: false,
            isWide: false
          },
          {
            text: "%",
            action: this.percentage,
            isOrange: false,
            isWide: false
          },
          {
            text: "/",
            action: this.addOperation,
            isOrange: true,
            isWide: false
          }
        ],
        [
          {
            text: "7",
            action: this.pushToBuffer,
            isOrange: false,
            isWide: false
          },
          {
            text: "8",
            action: this.pushToBuffer,
            isOrange: false,
            isWide: false
          },
          {
            text: "9",
            action: this.pushToBuffer,
            isOrange: false,
            isWide: false
          },
          {
            text: "*",
            action: this.addOperation,
            isOrange: true,
            isWide: false
          }
        ],
        [
          {
            text: "4",
            action: this.pushToBuffer,
            isOrange: false,
            isWide: false
          },
          {
            text: "5",
            action: this.pushToBuffer,
            isOrange: false,
            isWide: false
          },
          {
            text: "6",
            action: this.pushToBuffer,
            isOrange: false,
            isWide: false
          },
          {
            text: "-",
            action: this.addOperation,
            isOrange: true,
            isWide: false
          }
        ],
        [
          {
            text: "1",
            action: this.pushToBuffer,
            isOrange: false,
            isWide: false
          },
          {
            text: "2",
            action: this.pushToBuffer,
            isOrange: false,
            isWide: false
          },
          {
            text: "3",
            action: this.pushToBuffer,
            isOrange: false,
            isWide: false
          },
          {
            text: "+",
            action: this.addOperation,
            isOrange: true,
            isWide: false
          }
        ],
        [
          {
            text: "0",
            action: this.pushToBuffer,
            isOrange: false,
            isWide: true
          },
          {
            text: ".",
            action: this.pushToBuffer,
            isOrange: false,
            isWide: false
          },
          {
            text: "=",
            action: this.evaluateBuffer,
            isOrange: true,
            isWide: false
          }
        ]
      ],
      buffer: "0",
      items: [],
      refreshBuffer: false
    }
  }

  pushToBuffer = (e) => {
    if (this.state.buffer === "Err") {
      return false
    }

    let newBuffer = this.state.buffer

    if ((this.state.buffer.length === 1 && this.state.buffer === "0") || this.state.refreshBuffer) {
      newBuffer = e.target.name
    } else {
      newBuffer = newBuffer + e.target.name
    }

    this.setState({
      buffer: newBuffer
    })
  }

  moreOrLess = () => {
    let newBuffer = null

    if (this.state.buffer.startsWith("-")) {
      newBuffer = this.state.buffer.substring(1)
    } else {
      newBuffer = "-" + this.state.buffer
    }

    this.setState({
      buffer: newBuffer
    })
  }

  percentage = () => {
    this.setState({
      buffer: parseFloat(this.state.buffer) / 100
    })
  }

  clearBuffer = () => {
    this.setState({
      buffer: "0"
    })
  }

  addOperation = (e) => {
    try {
      this.setState({
        items: this.state.items.concat(this.state.buffer, e.target.name),
        refreshBuffer: true
      })
    } catch (ex) {
      this.setState({
        buffer: 'Err'
      })
    }
  }

  evaluateBuffer = () => {
    let resultItems = this.state.items
    resultItems.push(this.state.buffer)

    this.setState({
      items: []
    })

    try {
      this.setState({
        buffer: eval(resultItems.join(""))
      })
    }
    catch (ex) {
      this.setState({
        buffer: 'Err'
      })
    }
  }

  render() {


    return (
      <div id="root">
        <div className="app">
          <Display buffer={this.state.buffer}/>
          <ButtonPannel buttons={this.state.buttons} />
        </div>
      </div>
    );
  }
}

export default App;
