import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

// This is used for SEO Purposes. For changing the title headings and stuff like that. 
export const metadata = {
  title: 'Contact Information',
  description: 'This is Contact Page.',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea className={styles.textArea} placeholder='message' id="" cols="30" rows="10"></textarea>
          <Button url="#" text="Send"></Button>
        </form>
      </div>
    </div>
  )
}

export default Contact