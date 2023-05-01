import {Navitem} from "../NavItem"
import styles from './Navlist.module.scss'

function Navlist() {
  return (
    <div className={styles.navlist}>
      <Navitem>Home</Navitem>
      <Navitem>About us</Navitem>
      <Navitem>Projects</Navitem>
      <Navitem>Services</Navitem>
      <Navitem isActive={true}>Contact Us</Navitem>
      {/* <Navitem navItem={'Home'}/>
      <Navitem navItem={'About us'}/>
      <Navitem navItem={'Projects'}/>
      <Navitem navItem={'Services'}/>
      <Navitem isActive={true} navItem={'Contact Us'}/> */}
    </div>
  )
}

export {Navlist};