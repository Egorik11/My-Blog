import styles from './Navlist.module.scss'

function Navlist({children}) {
  return (
    <nav className={styles.navlist}>
     <ul className={styles.navlist}>{children}</ul>
   </nav>
  )
}

export {Navlist};