export function Practice() {
    return (
      <>
        <div style={{display:"flex", justifyContent:"center"}}>
          <div style={{backgroundColor:"red"}}>hi</div>
          <div style={{backgroundColor:"green"}}>hi</div>
          <div style={{backgroundColor:"yellow"}}>hi</div>
          <div style={{backgroundColor:"orange"}}>hi</div>
        </div>
  
        <div className='sm:justify-between flex justify-center'>
          <div className='bg-red-500'>hi</div>
          <div className='bg-green-500'>hi</div>
          <div className='bg-yellow-500'>hi</div>
          <div className='bg-orange-500'>hi</div>
        </div>
  
        <div className='grid grid-cols-10'>
          <div className='bg-red-500 col-span-1'>hi</div>
          <div className='bg-green-500 col-span-4'>hi</div>
          <div className='bg-yellow-500 col-span-5'>hi</div>
        </div>
  
        <div className='grid grid-cols-1 sm:grid-cols-3'>
          <div className='bg-pink-500'>hi</div>
          <div className='bg-purple-500'>hi</div>
          <div className='bg-orange-500'>hi</div>
        </div>
      </>
    )
  }