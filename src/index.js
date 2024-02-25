import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myFirstElement = (
  <span>
    <h1>Hello World</h1>
  </span>
); // Javascript XML or JSX format

// React Components
// Functional Component
function Hello1() {
  return <h1><i>Hello Namwan</i></h1>
}

// Class Component (can have implement logic and state while functional component cannot)
class Hello2 extends React.Component {
  render() {
    return <h1><i>Hello Tin</i></h1>
  }
}

// React Props
function Hello3(props) {
  return <h1>Hello {props.name}</h1>
}

class Hello4 extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

// Component inside Component
function Someone() {
  const everyone = ['Tin', 'Namwan', 'Tinwan']
  var anyone = everyone[Math.floor(Math.random()*everyone.length)]
  return <span>and {anyone}</span>
}

class Hello5 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} <Someone/></h1>
      </div>
    )
  }
}

// React State
// State Object
class Person extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fName: "Tin",
      lName: "Namwan",
      age: 20
    }
  }

  changeName = () => {
    this.setState({
      fName: "Spicy",
      lName: "Lemon"
    })
  }

  render() {
    return (
      <div>
        <p>Hello, my name is {this.state.fName} {this.state.lName} ({this.state.age})</p>
        <button 
        type="button"
        onClick={this.changeName}>Change Name</button>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(myFirstElement)
root.render(<Hello1/>)
root.render(<Hello2/>)
root.render(<Hello3 name="Tinwan"/>)
root.render(<Hello4 name="Wantin"/>)
root.render(<Hello5 name="Jubjib"/>)
root.render(<Person/>)