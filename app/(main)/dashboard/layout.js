import React from 'react'
import { Suspense } from 'react'
import { BarLoader } from 'react-spinners'
const layout = ({children}) => {
  return (
    <div className='px-5'>
        <div className="flex items-center justify-between mb-5">
<h1 className="text-6xl gradient-title font-bold">
    Industry Insights
</h1>
        </div>
        <Suspense fallback={<BarLoader color='gray' className='mt-4' width={"100%"}/>}>
      {children}
        </Suspense>
    </div>
  )
}

export default layout
