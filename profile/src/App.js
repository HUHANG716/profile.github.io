import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from "./pages/Layout";
import ContactMe from "./pages/ContactMe";
import AboutMe from "./pages/AboutMe";
function App() {
  return (
    <div className="App">
      <BrowserRouter><Routes>
        <Route path="/profile.github.io" element={<Layout></Layout>}>
        <Route index  element={<Home></Home>}></Route>
        <Route path="/profile.github.io/contact" element={<ContactMe />}></Route>
        <Route path="/profile.github.io/about" element={<AboutMe />}></Route>
        </Route>
        </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
