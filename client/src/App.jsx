  import './App.css'
  import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

  import Header from './components/Layouts/Header/Header';
  import Footer from './components/Layouts/Footer/Footer';

  import Home from './pages/Home/Home';
  import About from './pages/About/About';

  //screen reader friendly structure with ARIA roles
  function RootLayout() {
    return (
      <>
        <header> 
          <Header /> 
        </header>

        <main>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </>
    );
  }

 function App() {
  
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/aboutme" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
 }

 export default App;