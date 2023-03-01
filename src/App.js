import Wrapper from './Component/Wrapper/Wrapper';
import Display from './Component/Display/Display';
import Buttonbox from './Component/ButtonBox/Buttonbox';
import Button from './Component/Button/Button';

import './App.css';
import CalcProvider from './Component/Calcontext';



const ButtonValue = [
  ["C", "+/-", "%", "/"],
  [7,8,9, "x"],
  [4,5,6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
  
]

function App(props) {
  return (
    <CalcProvider >
        <Wrapper>
          <Display/>
    
    <Buttonbox>
    {ButtonValue.flat().map((btn,i)=>(
      <Button value = {btn} key ={i}/>
    ))}
    </Buttonbox>
    

      </Wrapper>
    </CalcProvider>
  );
}

export default App;
