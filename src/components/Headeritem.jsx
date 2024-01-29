import React from 'react'

function Headeritem({name, Icon}) {
  return (
    <div className='flex items-center gap-3 font-semibold cursor-pointer text-[15px] text-white hover:underline hover:underline-offset-8'>
      <Icon/>
      <h2>
        {name}
      </h2>
    </div>
  )
}

export default Headeritem
