import styles from './Footer.module.scss'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className={styles.footer}>
      <p>TheBox Company © {currentYear}. All Rights Reserved</p>
    </div>
  )
}

export {Footer}