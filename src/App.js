import "./App.css";
import React from "react";
import ConditionRend from "./Component/ConditionRend";
import EVenHandling from "./Component/EventHandle/EVenHandling";
import ListRendering from "./Component/ListRender/ListRendering";
import ChildProperty from "./Component/Props/MulticlsProps";
import Property from "./Component/Props/Props";
import StateCounter from "./Component/State/StateCounter";
import StateConcept from "./Component/State/Statefirst";
import Test from "./Component/Test";
import DataFetching1 from "./Component/UseReducer/DataFetching1";
import FetchData from "./Component/FetchData";
import CReducer from "./Component/CReducer";
import Names from "./Hooks/Names";
import UseEffect from "./Hooks/UseEffect";

// export const CountContext = React.createContext();

// let initialState = 0;
// const reducers = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;;
//   }
// };

function App() {
  return (
    <div className="App">
      {/* Hooks */}
      {/* <Names /> */}
      <UseEffect/>

      {/* Reducer */}
      {/* <CReducer /> */}

      {/* <FetchData/> */}
      {/* <DataFetching1/> */}

      {/* <Test name="Test"/> */}
      {/* ********List Rendering******** */}
      {/* <ListRendering /> */}
      {/* **** Condition Render **** */}
      {/* <ConditionRend/> */}
      {/* ******Event Handling ****** */}
      {/* <EVenHandling /> */}

      {/* ***** State ****** */}

      {/* <StateConcept /> */}
      {/* <StateCounter/> */}

      {/* **** Props ***** */}

      {/* <Property name= "Highman" directorname =" Mike Hussain "/>
     <ChildProperty  name= "Highman1" directorname =" Mike Hussain1 "/>
     <ChildProperty  name= "Highman2" directorname =" Mike Hussain2 "/>
     <ChildProperty  name= "Highman3" directorname =" Mike Hussain3 "/> */}
    </div>
  );
}

export default App;
