import Link from 'next/link'
import React from 'react'

function LinkMe({type, name, children}: {type: string, name: string, children: React.ReactNode }) {
  return (
    <Link href={`/${type}/${name}`} style={{textDecoration: 'none'}}>
        {children}
    </Link>
  )
}

export default LinkMe