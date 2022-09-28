import './App.css';
import NavigationBar from "./components/navbar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from 'react-router-dom'

const App = () => {
    return (
        <>
            <NavigationBar/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
            </Routes>

        </>
    );
}

export default App;
