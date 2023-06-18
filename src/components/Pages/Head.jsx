import React from 'react'
import ResponsiveDrawer from './Dashboard';
import { CImage } from '@coreui/react'


function Head() {
  return (
    <div>
      <ResponsiveDrawer />
      <CImage fluid src="/images/react.jpg" />
    </div>
  )
}

export default Head