import React, {useContext} from 'react'
import { CalcContext } from '../Calcontext';
import classn from "./Display.module.css"

const Display = () => {
  const{ calc} = useContext(CalcContext);
  return (
    <div className={classn.display}>
      {calc.num? calc.num : calc.res}
    </div>
  )
}

export default Display
