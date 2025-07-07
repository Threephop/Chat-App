import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex mt-4'>
        <div className='from-check ml-2'>
            <label className={`label gap-2 curson-pointer`}>
                <span className='label-text'>Male</span>
                <input type="checkbox" className='checkbox checkbox-primary' />
            </label>
        </div>
        <div className='from-check ml-2'>
            <label className={`label gap-2 curson-pointer`}>
                <span className='label-text'>female</span>
                <input type="checkbox" className='checkbox checkbox-primary' />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox

//start code

// const GenderCheckBox = () => {
//   return (
//     <div className='flex mt-4'>
//         <div className='from-check ml-2'>
//             <label className={`label gap-2 curson-pointer`}>
//                 <span className='label-text'>Male</span>
//                 <input type="checkbox" className='checkbox checkbox-primary' />
//             </label>
//         </div>
//         <div className='from-check ml-2'>
//             <label className={`label gap-2 curson-pointer`}>
//                 <span className='label-text'>female</span>
//                 <input type="checkbox" className='checkbox checkbox-primary' />
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckBox