import React from 'react'

const Test = ({num, onClick}: any) => (
  <div id={'1'} onClick={() => {onClick(1)}}>Test{num}</div>
)

export default Test