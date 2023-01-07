import { Header } from "./components/Header/Header";
import { Episode} from "./pages/Episode/Episode"
import { Character } from "./pages/Character/Character";
import { Error } from "./pages/Error/Error";
import { Location } from "./pages/Location/Location";
import { Route,Routes } from "react-router-dom";
import { SinglUser } from "./pages/SinglUser/SinglUser";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container pt-5">
      <Routes>
          <Route path="/character" element={<Character/>} />
          <Route path="/location" element={<Location/>} />
          <Route path="/episode" element={<Episode/>} />
          <Route path="/user/:id" element={<SinglUser/>} />
          <Route path="*" element= {<Error/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
