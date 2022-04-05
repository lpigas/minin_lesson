import React from 'react'

 function ButtonClose() {
   const styles = {
     button:{
       color:'black',
       backgroundcolor:'red',
       border:'2px solid blue',
       borderRadius: '20px',
     }
   }
  const close = () =>{
    window.location.reload()
  }
  return (
    <div>
      <button onClick={close} style={styles.button}>Close</button>
      </div>
  )
}
export default ButtonClose

