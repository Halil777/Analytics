import  { FC } from 'react'
import ThemeSelector from '../../redux/features/theme/ThemeSelector'

const Header:FC = () => {
  return (
      <div className='relative'>
           <div  className='flex justify-end w-full absolute'>
       <ThemeSelector />
    </div>
   </div>
  )
}

export default Header
