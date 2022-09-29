import './App.css';
import NavigationBar from "./components/navbar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from 'react-router-dom'
import CreateNotes from "./pages/createnote/createnotes.component";
import Notes from "./pages/notes/notes.component";
import SingleNote from "./pages/singlenote/singlenote.component";
import Footer from "./components/footer/footer.component";

const App = () => {
    return (
        <>
            <NavigationBar/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/create'} element={<CreateNotes/>}/>
                <Route path={'/notes'} element={<Notes/>}/>
                <Route path={'/notes/:id'} element={<SingleNote/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
