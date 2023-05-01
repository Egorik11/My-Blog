import styles from "./NavItem.module.scss"

function Navitem({children, isActive}) {
  const activeClassName = isActive? styles.active : styles.navitem
  return (
    <div className={activeClassName}>{children}</div>
  )
}

export {Navitem}