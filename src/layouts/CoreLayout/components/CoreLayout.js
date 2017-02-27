import React from 'react'
import '../../../styles/core.scss'
import './CoreLayout.scss'
import Header from './Header'
import Footer from './Footer'

export const CoreLayout = ({ children }) => (
  <div className='core-layout'>
    <Header />
    <main>
      { children }
    </main>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
