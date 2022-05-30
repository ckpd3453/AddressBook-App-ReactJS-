import "./App.css";
import Form from "./component/Form";
import Home from "./component/Home";
import { BrowserRouter,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Switch>
         <Route exact path='/form' component={Form}></Route>
         <Route path='/' component={Home}></Route>
         <Route path='/home' component={Home}></Route>
         {/* <Route exact path="/form/:id" component={Form}></Route> */}
       </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
