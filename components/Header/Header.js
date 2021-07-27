import React from "react"
import Image from 'next/image'
import styles from "./Header.module.css"
import logo from '../../public/img/logo.png'

export default function Header() {
	return (
		<section className={styles.hero}>
			<Image src={logo} alt="AWS User Group Punjab" width={150} height={150} />
			<h1 className={styles.title}>
				Welcome to <span>AWS User Group Punjab</span>
			</h1>

			<p className={styles.description}>
				A place where AWS enthusiasts meet, learn and share!
			</p>
		</section>
	)
}
