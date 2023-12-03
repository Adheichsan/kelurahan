import MetaHead from '@/components/MetaHead'
import Agenda from '@/components/agenda/Agenda'
import React from 'react'

function agenda() {
  return (
    <><MetaHead 
    title="Agenda | Discord"/>
    <div>
      <Agenda />
    </div></>
  )
}

export default agenda