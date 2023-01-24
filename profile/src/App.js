import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from "./pages/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter><Routes>
        <Route path="/profile.github.io" element={<Layout></Layout>}>
        <Route index  element={<Home></Home>}></Route>
        </Route>
        </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
