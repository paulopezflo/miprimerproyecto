import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import closeIcon from './assets/closeIcon.svg'
import saveIcon from './assets/saveIcon.svg'
import '@fontsource-variable/archivo';
import styles from './config.module.css';
import arrow from './assets/arrow.svg';

function App() {
const [toggleStatus,setToggleStatus]=useState(false)
const [toggleStatus2,setToggleStatus2]=useState(false)
  return (
    <section className={'backgroundSection'}>
      <div id={'modalextContainer'}>
        <div id={'buttonContainer'}>
          <button id={'buttonClear'}><img src={closeIcon}></img></button>
        </div>
        <div id={'modalintContainer'}>
         <h2>Periodo operativo</h2>
         <div id={'cardContainer'}>
          <div id={'infoContainer'}>
            <div id={'selectContainer'}>
              <p>Apertura automática a las</p>
              <div className={styles.containerInput}>
<div className={styles.categoriesSelect}>
<div className={styles.customSelect} onClick={()=>{setToggleStatus(!toggleStatus)}}>
<div className={styles.selectTrigger}>
<span> 05:00 </span>
<img src={arrow} alt="" className={styles.arrowSelect} />
</div>
<div className={toggleStatus ? styles.options : styles.hidden}>
<span className={styles.option}>05:00</span>
<span className={styles.option}>06:00</span>
<span className={styles.option}>07:00</span>
</div>
</div>
</div>
</div>
              
            </div>
            <div id={'selectContainer'}>
              <p>Cierre automático a las</p>
              <div className={styles.containerInput}>
<div className={styles.categoriesSelect}>
<div className={styles.customSelect} onClick={()=>{setToggleStatus2(!toggleStatus2)}}>
<div className={styles.selectTrigger}>
<span> 05:00 </span>
<img src={arrow} alt="" className={styles.arrowSelect} />
</div>
<div className={toggleStatus2 ? styles.options : styles.hidden}>
<span className={styles.option}>05:00</span>
<span className={styles.option}>06:00</span>
<span className={styles.option}>07:00</span>
</div>
</div>
</div>
</div>
              
            </div>
          </div>
           <div id={'infoContainer'}>
            <div id={'lineContainer'}>
            <div className={styles.inputOne}> <label className={styles.label}> <input type="checkbox" className={styles.check} />Solicitar contraseña para el cierre manual</label> </div>
            </div>
          </div>
         </div>
         <div id={'rightAlignContainer'}>
          <button>
            <img src={saveIcon}></img>
            Guardar
            </button>
         </div>
        </div>
      </div>  
    </section>
  )
}

export default App
