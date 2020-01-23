import React from "react";

import PaginationExample from "./PaginationExample";
// import logo from './logo.svg';
// import './App.css';

// import Header from "./Header";
// import Subheader from "./Subheader";
// import LeftSlot from "./LeftSlot";
// import RightSlot from "./RightSlot";
// import Layout from "./Layout";

function App() {
  return (
    <div>
      <PaginationExample url={"https://jsonplaceholder.typicode.com/posts"} />
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       name: "Steve",
//       age: 105
//     }
//   }

//   handleClick = () => {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Click the button to increment count (this is reloaded one): {this.state.count}
//           </p>
//           <button type="button" onClick={this.handleClick}>
//             Click me
//           </button>
//           <p>The below header component utilizes the props.children pattern for generic rendering</p>
//           <Header name={this.state.name}>
//             <Subheader age={this.state.age}/>
//           </Header>
//         </header>
//         <h1>Layout component is an example of the slot pattern of passing components as props</h1>
//         <Layout left={<LeftSlot />} right={<RightSlot />} />
//       </div>
//     );
//   }

// }

export default App;
