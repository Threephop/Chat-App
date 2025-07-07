import React from 'react'

const GenderCheckBox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex mt-4'>
        <div className='from-check ml-2'>
            <label className={`label gap-2 curson-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className='label-text text-white dark:text-gray-400'>Male</span>
                <input type="checkbox" className='checkbox checkbox-primary' 
                    checked={selectedGender === "male"}
                    onChange={() => onCheckboxChange("male")}
                />
            </label>
        </div>
        <div className='from-check ml-2'>
            <label className={`label gap-2 curson-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <span className='label-text text-white dark:text-gray-400'>female</span>
                <input type="checkbox" className='checkbox checkbox-primary' 
                    checked={selectedGender === "female"}
                    onChange={() => onCheckboxChange("female")}
                />
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