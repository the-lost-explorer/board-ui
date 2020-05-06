import React from 'react'

export default function Block({children}: {children: any}) {
  return (
    <div className='build_ui__block'>
      {children}
    </div>
  )
}

export function FullLayout({children}: {children: any}) {
  return (
    <div className='build_ui__fullscreen'>
      {children}
    </div>
  )
}
