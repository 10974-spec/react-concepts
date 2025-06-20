import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from "./components/tree-view/data";
import QrCodeGenerator from './components/qr-code-generator';

function App() {
  return (
    <div className='App'>
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* <StarRating noOfStars={10} /> */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus} /> */}
      <QrCodeGenerator/>
    </div>
  );
}

export default App;
