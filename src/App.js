import './App.css';
import Appbar from './components/Appbar'
import Overview from './components/Overview'
import Upload from './components/Upload'
import DrawOne from './components/DrawOne'
import DrawTwo from './components/DrawTwo'
import Links from './components/Links'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Appbar />
      <Routes>
        <Route path='/overview' element={<Overview />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/drawOne' element={<DrawOne />} />
        <Route path='/drawTwo' element={<DrawTwo />} />
        <Route path='/links' element={<Links />} />
      </Routes>

    </div>
  );
}

export default App;