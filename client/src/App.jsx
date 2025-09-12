  import './App.css'
  import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

  import Header from './components/Header/Header';
  import Footer from './components/Footer/Footer';

  import Home from './pages/Home/Home';

  //screen reader friendly structure with ARIA roles
  function RootLayout() {
    return (
      <>
        <header role="banner"> 
          <Header /> 
        </header>

        <main id="page-content">
          <Outlet />
        </main>

        <footer role="contentinfo">
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
 }

 export default App;