import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import GenresContainer from './containers/GenresContainer';
import MoviesContainer from './containers/MoviesContainer';

// All visible content is contained within the App class. JSX syntax
//Top-level parent component
class App extends React.Component {

  //Mounting phase. Invoked immediately after a component is mounted. Requires the component to already be in the DOM.
  // componentDidMount() {
    // fetch('http://localhost:3000/api/v1/genres/1')
    // .then(response => response.json())
    // .then(data => console.log(data))
  // }

  // render is the only required method for class components
  // Both Mounting and Updating phase
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* Route = routes paths to specified component/path/function */}
        <Route exact path='/' component={Home} />
        <GenresContainer />
        {/* Switch will only render the first matched child route */}
        <Switch>
          <Route exact path='/movies' component={MoviesContainer} />
        </Switch>
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
export default App; //Allows other files to import things from App.js.
//There are named exports and default exports.
//You can only have 1 export default per file.
//connect is dispatching
