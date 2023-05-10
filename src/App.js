import styled from "styled-components"
import Homepage from "./pages/homePage";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Counter from "./pages/counter";

//APP : 사용자가 만든 새로운 컴포넌트


function App() {
  return (
 
   <BrowserRouter>
    <Routes>
      <Route path ='/sieun' element={<Homepage/>}/>
      <Route path ='/counter' element={<Counter/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;


const B = styled.h2`
  background-color: red;
`


const A = styled.h1`
  background-color : yellow;
  color: black;
  align-items: center;
`





