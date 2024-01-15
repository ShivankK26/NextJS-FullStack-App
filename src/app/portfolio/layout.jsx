// Creating this page becasue we have the title "Our Works" same throughout all sub pages like Websites, Application, Illustrations, etc. So, we'll import page.module.css here to apply the stiles from there only.
import React from 'react'
import styles from './page.module.css'


const Layout = ({children}) => {
  return (
    <div>
        <h1 className={styles.mainTitle}>Our Works</h1>
        {children} {/* Used to import all the data written in page.jsx file. */}
    </div>
  )
}

export default Layout