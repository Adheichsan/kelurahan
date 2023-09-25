import React from 'react'
import Product from './event/Product'
import MetaHead from '@/components/MetaHead'

function events() {
  return (
    <>
    <MetaHead 
      title="Events | smarteye.id"
    />
      <div>
        <Product/>
      </div>
    </>
  )
}

export default events