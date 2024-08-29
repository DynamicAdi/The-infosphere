import React, { useState } from 'react'
import styles from './styles.module.scss';
import {MdClose, MdOutlineSegment} from 'react-icons/md';
import ScrollingHeadlines from '@/components/ui/headlines/page';

function Navbar() {
    const tabs = ['Home', 'Latest news', 'Politics' ,'Sports', 'Viral', 'Entertainment', 'Video News'];
    const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
    <div className={styles.logo}>
        <ScrollingHeadlines />
        </div>

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
  )
}

export default Navbar