import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/movie/:imdbID" element={<MovieDetail></MovieDetail>}></Route>
                    <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
                </Routes>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
