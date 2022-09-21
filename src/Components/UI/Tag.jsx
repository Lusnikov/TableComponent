import React from 'react'
import styles from './styles.module.scss'

export default function Tag({children, onClick=() =>{}}) {
  return (
    <button className={styles.tag} onClick={onClick}>
        {children}
    </button>
  )
}
