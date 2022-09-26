import './App.css';
import Appbar from './components/Appbar'
import Overview from './components/Overview'
import Upload from './components/Upload'
import DrawOne from './components/DrawOne'
import DrawTwo from './components/DrawTwo'
import Links from './components/Links'
import Download from './components/Download'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Appbar />
      <Routes>
        <Route path='/overview/:id' element={<Overview />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/drawOne/:id' element={<DrawOne />} />
        <Route path='/drawTwo/:id' element={<DrawTwo />} />


        <Route path=":userId" element={< Links />} />

        <Route path='/download/:id' element={<Download />} />
      </Routes>

    </div>
  );
}

export default App;