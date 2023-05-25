import logo from './logo.svg';
import './App.scss';
import MyComponent from './components/MyComponent';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        {/* <h1>Hello world</h1> */}
        <MyComponent></MyComponent>
      </div>
    );
  }
}


// const App = () => {
//   return (
//     <div>
//       <h1>Hello world</h1>
//       <MyComponent></MyComponent>
//     </div>
//   );
// }

export default App;
