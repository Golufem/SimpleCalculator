import React from 'react'
import styles from './Buttonbox.module.css'

const Buttonbox = ({children}) => {
  return (
    <div className={styles.buttonbox}>
    {children}
      
    </div>
  )
}

export default Buttonbox
