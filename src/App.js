import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from './pages/Notes'
import EditNote from './pages/EditNote'
import CreateNote from './pages/CreateNote'
// import DummyNotes from "./data/dummy_notes"
import { useEffect, useState } from "react";

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  // console.log(notes);

  useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])
  
  return (
    <main id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
          <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
