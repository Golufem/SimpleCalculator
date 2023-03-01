import React, {useContext} from 'react'
import { CalcContext } from '../Calcontext'
import  "./button.css"



const getClassName = btn =>{
  const classNames ={
     '=':'equals',
     '+': 'opt',
     '/': 'opt',
     '-': 'opt',
     'x': 'opt',
   }
   return classNames[btn]
 }

 
 


const Button = (props) => {

  const {setCalc, calc}  = useContext(CalcContext);

  // console.log(setCalc)
 // When user click .
  const commaClick = () => {
    setCalc({
     ...calc,
     num: !(calc.num.toString().includes('.'))? calc.num + props.value: calc.num
    
    })
  }

  // when user click C
  const userClickClear = () =>{
    setCalc({
      sign: "",
      num: 0,
      res:0
    })
  }
 // user Click number
  const handleClickButtton = () =>{
     const numberString = props.value.toString();
     let numberValue;

     if(numberString === '0' && calc.num ===0){
      numberValue = '0';
     }else{
      numberValue = Number(calc.num + numberString)
     }

     setCalc({
      ...calc,
      num: numberValue
     })
  }
 //user click Operation
 const signClick = () =>{
    setCalc({
      sign: props.value,
      res: !calc.res && calc.num? calc.num : calc.res,
      num:0
    })
 }
 // User click Equalss
 const equalsClick = ( ) => {

  if(calc.res && calc.num){
    const Mathematics = (a,b,sign) =>{
      const result = {
        '+':(a,b) => a+b,
        '-':(a,b) => a-b,
        'x':(a,b) => a*b,
        '/':(a,b) => a/b,
      }

     return  result[sign](a,b)
  }
  setCalc({
    res: Mathematics(calc.res, calc.num, calc.sign),
    sign: '',
    num : 0
  })

  }

 



 
 }
// User Clicked Percentage

const percentClicked = () =>{
  setCalc({
    res: calc.res/100,
    num: calc.num/100,
    sign: ''
  })
}

const invertClick = () =>{
  setCalc({
    res: calc.res*-1,
    num: calc.num*-1,
    sign: ''
  })
}

const handleBtnClick = ()=>{
  // console.log(props.value)

 
 
  const results = {
    '.': commaClick,
    'C': userClickClear,
    '/': signClick,
    '+': signClick,
    '-': signClick,
    'x': signClick,
    '=': equalsClick,
    '%': percentClicked,
    '+/-': invertClick
  }

  // return results[props.value]()

  if(results[props.value]){
    return results[props.value]()
  }
  else{
    return handleClickButtton()
  }

}


  

  return (
    <button onClick={handleBtnClick} className={`button ${getClassName(props.value)}` }>
        {props.value}
    </button>
  )
}

export default Button
