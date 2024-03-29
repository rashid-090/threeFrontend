import React from 'react';
import PuffLoader from "react-spinners/PuffLoader";

function Loading() {
  return (
    <>
    <div className='h-[90vh] w-full grid place-items-center'>
         <PuffLoader color='#007D9B' size={50}/>
    </div>
    </>
  )
}

export default Loading