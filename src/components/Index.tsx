import  { FC } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Index: FC = () => {
  return (
      <div className='flex min-h-screen'>
          <Sidebar />
          <div className='flex flex-col w-full pt-3 pr-10 min-h-screen'>
              <Header />
              <Outlet />
      </div>
    </div>
  )
}

export default Index
