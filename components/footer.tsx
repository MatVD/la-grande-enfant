import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <span className={styles.footerLink}>© Copyright - Mat-Site-Web.com</span>
        <Link className='footerLink'href="/termsOfUses">Confidentialités</Link>
        <Link className='footerLink'href="/cgv">CGV</Link>
    </footer>
  )
}

export default Footer