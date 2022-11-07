import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import Textbox from './components/Textbox';

// let name = "Tauqeer Ahmad";
// let lang = {
//   web: 'javascript',  
//   mobile: 'kotlin'
// }
function App() {
  return (
    <>
      <Navbar title="Text Utils" home="Home" services="Services" live="Go Live"></Navbar>
      {/* <Navbar></Navbar> */}
      <div className="container">
        <Textbox heading="Enter the text to analyse" />
      </div>

    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
  title: "React Works",

}
export default App;
