"use client"
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  // console.log("hello");  This is not printed in the brwoser console but is printed in the terminal, i.e this is server side rendering. By default,nextjs has server side rendering (SSR). To convert it into Client side rendering (CSR) write "use client at the top of that component." These type of renderings can be applied to individual components. 
  return (
    <div className={styles.container}>
      <div>© BuildBuddy. All rights reserved.</div>
      <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt='BuildBuddy'/>
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt='BuildBuddy'/>
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt='BuildBuddy'/>
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt='BuildBuddy'/>
      </div>
    </div>
  )
}

export default Footer

// When we define Image tag then you need to define width and height of it. If you directly import the image then if you dont even define the width and height then it is okay.
// When you need user interaction then use CSR, otherwise SSR.