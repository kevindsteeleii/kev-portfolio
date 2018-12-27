import React from 'react'

export default function SVG(props) {
  console.log(props)
  debugger
  return (
    <svg>
      {props.children}
    </svg>
  )
}
