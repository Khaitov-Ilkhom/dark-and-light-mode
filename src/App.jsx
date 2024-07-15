import './App.css'
import Index from "./routes/Index.jsx";
import {useContext} from "react";
import AppContext from "./context/store/Index.jsx";

function App() {
    const [state, dispatch] = useContext(AppContext)

  return (
    <div data-theme={state.theme}>
      <Index/>
    </div>
  )
}

export default App
