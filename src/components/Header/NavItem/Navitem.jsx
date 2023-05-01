import styles from "./NavItem.module.scss"

export default function Navitem(props) {
  return (
    <div className={props.isActive? styles.active : styles.navitem}>{props.navItem}</div>
  )
}
