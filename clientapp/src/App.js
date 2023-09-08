import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Student from "./components/pages/student";
import Home from "./components/pages/home";
import Professor from "./components/pages/professor";
import CreateStudent from './components/users/students/createStudent'
import CreateProfessor from './components/users/professors/createProfessor'
import EditProfessor from "./components/users/professors/editProfessor";
import EditStudent from "./components/users/students/editStudent";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/student' exact element={<Student/>} />
        <Route path='/professor' exact element={<Professor/>}/>
        <Route path='/create-student' exact element={<CreateStudent/>}/>
        <Route path='/create-professor' exact element={<CreateProfessor/>}/>
        <Route path='/edit-student/:id' exact element={<EditStudent/>}/>
        <Route path='/edit-professor/:id' exact element={<EditProfessor/>}/>
      </Routes>
    </>
  );
}

export default App;
