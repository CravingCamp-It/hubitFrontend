import PropTypes from 'prop-types'
import React from 'react'

function Moto({icon,title,description}) {
  return (
    <div>
        {title}
        {icon}
        {description}
    </div>
  )
}
Moto.prototypes={
    title:PropTypes.string,
    icon:PropTypes.string,
    description:PropTypes.string
}
Moto.defaultProps={
    title:'error',
    icon:'error',
    description:'error'
}

export default Moto