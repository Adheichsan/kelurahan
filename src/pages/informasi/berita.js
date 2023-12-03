import MetaHead from '@/components/MetaHead'
import News from '@/components/berita/News'
import React from 'react'

function berita() {
  return (
    <><MetaHead 
    title="Berita | Discord"/>
    <div>
      <News />
    </div></>
  )
}

export default berita