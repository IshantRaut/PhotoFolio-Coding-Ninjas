// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import Albumform from "./Components/AlbumForm/Albumform";


import Navbar from "./Components/Navbar";
import Albumslist from "./Components/AlbumsList/Albumslist"
import Imageslist from "./Components/ImagesList/Imageslist";

function App() {
  return (
    <>
    <Navbar/>
    {/* <Albumform/> */}
    <Albumslist/>
    {/* <Imageslist/> */}
    </>
  );
}

export default App;


