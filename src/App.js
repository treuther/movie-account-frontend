import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar';
import GenresContainer from './containers/GenresContainer';

class App extends React.Component {

  // componentDidMount() {
    // fetch('http://localhost:3000/api/v1/genres/1')
    // .then(response => response.json())
    // .then(data => console.log(data))
  // }

  render() {
    return (
      <div className="App">
        <NavBar />
        <GenresContainer />
      </div>
    );
  }
  
}

//accessing values currently in our store as props.
// const mapStateToProps = (state) => {
//   return {
//     genres: state.genres
//   }
// }

//mapDispatchToProps allows us to dispatch new actions directly to our store

//connect passes the function over to App
//connect can pass, mapStateToProps, mapDispatchToProps, or directly pass in an action creater.
//action creater gives us the ability to update our store directly from fetching component.
export default App;
//connect is dispatching
