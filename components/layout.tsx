import React from 'react'
import styles from '../styles/Layout.module.css'


export default function Layout(props: {children: any}) {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}
