import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import BollywoodPage from './Pages/Bollywood/BollywoodPage';
import Tech from './Pages/TechnologyPage/Technology';
import Hollywood from './Pages/HollywoodPage/Hollywood';
import Fitness from './Pages/FitnessPage/Fitness';
import Food from './Pages/FoodPage/Food';
import { Heading } from './Pages/NextPage/Heading';
import Heading2 from './Pages/NextPage/Heading2';
import { Heading3 } from './Pages/NextPage/Heading3';
import NextPagecontext from './Pages/NextPage/NextPagecontent';
import HomeLatest from './Pages/NextPage/HomeLatest';
import Homelatestarticle from './Pages/NextPage/Homelatestarticle';
import VerticalImage from './Pages/NextPage/VerticalImage';
import Topost1 from './Pages/NextPage/Topost1';
import Topost2 from './Pages/NextPage/Topost2';
import BollywoodNextPage from './Pages/NextPageBolly/Bollywood';
import Techie from './Pages/NextPageBolly/Techie';
import Holly from './Pages/NextPageBolly/Holly';
import Fitnesss from './Pages/NextPageBolly/Fitnesss';
import Foods from './Pages/NextPageBolly/Foods';
import Compb from './Contextapi/compb';
import { UseContext } from './Contextapi/UseContext';
import Memo from './Memo/Memo';

function App() {

 
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Heading' element={< Heading />} />
        <Route path='/Heading2' element={< Heading2 />} />
        <Route path='/Heading3' element={< Heading3 />} />

        <Route path='/H4' element={< HomeLatest/>} />
        <Route path='/H5' element={<Homelatestarticle/>}  />
        <Route path='VerticalImage' element={<VerticalImage/>} />
        <Route path='TopPost' element={<Topost1/>} />
        <Route path='TopPosts' element={<Topost2/>} />

        <Route path='/pages/about/:id' element={<NextPagecontext/>} />


        <Route path='/Bollywood' element={<BollywoodPage/>} />
        <Route path='/Bolly' element={<BollywoodNextPage/>}/>


        <Route path='/Technology' element={<Tech/>} />
        <Route path='/Techie' element={<Techie/>} />

        <Route path='/Hollywood' element={<Hollywood/>} />
        <Route path='Holly' element={<Holly/>} />

        <Route path='/Fitness' element={<Fitness/>}/>
        <Route path='/FitPost' element={<Fitnesss/>} />

        <Route path='/Food' element={<Food/>} />
        <Route path='/Foods' element={<Foods/>} />
        </Routes>
        </BrowserRouter>

{/* <UseContext.Provider value = "Hello">
     <Compb/>
</UseContext.Provider>      */}

{/* <Memo/> */}
  </>
  );
}

export default App;
