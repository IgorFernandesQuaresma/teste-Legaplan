import Image from 'next/image';
import React from 'react';
import styles from '../../styles/header/header.module.scss';
import Logomark from '../../../public/assets/Logomark.png'
import Logotype from '../../../public/assets/Logotype.png'







export default function NavMenu() {
    return (
        <section className={styles.navBar} >
            <div className={styles.navBar_logos}>
                <Image src={Logomark} alt="Logo" className={styles.navBar_logo1}  />
                <Image src={Logotype} alt="Logo" className={styles.navBar_logo2}  />
            </div>

            <h1 className={styles.navBar_welcome}>Bem-vindo de volta, Marcus</h1>

            <h2 className={styles.navBar_data}>Segunda, 01 de dezembro de 2025</h2>
            
        </section>
    );
}