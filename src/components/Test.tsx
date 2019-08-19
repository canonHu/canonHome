import React from 'react'

const Test = ({num, onClick}: any) => (
  <div onClick={() => {onClick(num)}}>Test{num}</div>
)

export default Test