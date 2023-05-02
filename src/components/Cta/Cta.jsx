import styles from './Cta.module.scss'
import { Button } from '../Button'
function Cta() {
  return (
    <div className={styles.ctaWrapper}>
      <div className={styles.cta}>
        <h2>What can us do for you?</h2>
        <p>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
        <div className={styles.inputs}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className={styles.inputs}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea name="Message" cols="30" rows="10" placeholder='Message'></textarea>
        <Button style={{ backgroundColor: '#2947A9' }}>Submit</Button>
      </div>

    </div>
  )
}

export {Cta}