import styles from './Cta.module.scss'
import { Button } from '../Button'
function Cta() {
  const styleButton = { 
    backgroundColor: '#2947A9',
    width: '271px',
    display: 'flex',
    justifyContent: 'center',
  }

  const handleSubmit = e=>{
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.ctaWrapper}>
        <div className={styles.cta}>
          <h2>What can us do for you?</h2>
          <p>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
          <div className={styles.inputs}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className={styles.inputs}>
            <input type="text" placeholder="Reason for Contacting" />
            <input type="text" placeholder="Phone" />
          </div>
          <div className={styles.textarea}>
            <input type="text" placeholder="Message" />
          </div>
          <Button type="submit" style={styleButton}>Submit</Button>
        </div>
      </div>
    </form>
  )
}

export {Cta}