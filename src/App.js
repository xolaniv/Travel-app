import React from 'react';
import './Components/icons/icons';
import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideBar from './Components/Sidebar/sidebar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideBar />
      </header>
    </div>
  );
}

export default App;
