import { v4 as uuidv4 } from "uuid";

import { Navlist, Navitem } from "../Nav";

import styles from "./Header.module.scss"
import logo from "../../assets/img/logo-01.png"

const navItems= [
  {
    name: "Home",
    link: "#",
    isActive: false,
  },
  {
    name: "About us",
    link: "#",
    isActive: false,
  },
  {
    name: "Blog",
    link: "#",
    isActive: false,
  },
  {
    name: "Post",
    link: "#",
    isActive: false,
  },
  {
    name: "Contact Us",
    link: "#",
    isActive: true,
  },
]

function Header() {
  return (
    <div className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} alt="The Box" />
    </div>
    <Navlist>
      {navItems.map((item) => {
        return (
          <Navitem key={uuidv4()} link={item.link} isActive={item.isActive}>
            {item.name}
          </Navitem>
        );
      })}
    </Navlist>
  </div>
  )
}

export {Header};