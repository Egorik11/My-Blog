import styles from './Postitem.module.scss'

function Postitem({url}) {
  return (
    <div className={styles.postItem}>
    <div className={styles.postItemInner}>
      <img src={url} alt="" />
    </div>
  </div>
  )
}

export { Postitem }