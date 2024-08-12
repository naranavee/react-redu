import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";



//npm i react-redux
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewCakeContainer />
        <ItemContainer item="cakes"/>
        
      </div>
    </Provider>
  );
}

export default App;
