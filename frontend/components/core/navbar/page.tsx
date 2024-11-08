"use client";

import React, { useState } from 'react'
import styles from './styles.module.scss';
import logo from "@/public/logo.jpg";
import {MdClose, MdOutlineSegment} from 'react-icons/md';
import Link from 'next/link';

function Navbar() {
    const tabs = ['Home', 'Latest news', 'Politics' ,'Sports', 'Viral', 'Entertainment', 'Video News'];
    const [open, setOpen] = useState(false);

  return (
    <div className={styles.upper}>
    <Link href={"/"}>
    <div className={styles.logo}>
      <img src={logo.src} alt={"logo"} />
    </div>
    <h1>The InfoSphere</h1>
  </Link>

  <nav className={styles.nav}>
<ul className={open ? styles.open : styles.close}>
  <div className={styles.icons} style={open ? {position: 'absolute', top:'5%', right: '5%'} : {}}>
    {
      open ? <MdClose size={30} className={styles.icon} onClick={() => setOpen(false)}/> : 
      <MdOutlineSegment size={40} className={styles.icon} onClick={() => setOpen(true)}/>
    }
  </div>
  
   {tabs.map((tab) => <li key={tab} className={`${open ? styles.active : ''}`}>{tab}</li>)}
</ul>
</nav>
    </div>
  )
}

export default Navbar