import React from 'react'
import PropTypes from 'prop-types';
function Layout({children}) {
  return (
    <div>
        <div className='bg-red-400'>{children}</div>
    </div>
  )
}
Layout.proptypes={
    children:PropTypes.any
}
export default Layout