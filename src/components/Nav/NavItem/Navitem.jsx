import styles from "./NavItem.module.scss"

function Navitem({children, isActive, link}) {
  const activeClassName = isActive? styles.active : styles.navitem
  return (
    <li>
      <a className={activeClassName} href={link}>{children}</a>
    </li>
  )
}

export {Navitem}