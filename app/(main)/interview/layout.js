import React from 'react'
import { Suspense } from 'react'
import { BarLoader } from 'react-spinners'
const layout = ({ children }) => {
    return (
        <div className='px-5'>
            <Suspense fallback={<BarLoader color='gray' className='mt-4' width={"100%"} />}>
                {children}
            </Suspense>
        </div>
    )
}

export default layout
