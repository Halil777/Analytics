import  { FC } from 'react'
import { BrowserRouter,Routes as Routess, Route } from 'react-router-dom';
import Index from '../components/Index';
import { useThemeOptions } from '../hooks/useThemeOptions';
import Dashboard from '../pages/dashboard/Dashboard';
import Cars from '../pages/cars/Cars';

const Routes: FC = () => {
const themeOptions = useThemeOptions()
    

      const themeStyles = {
        backgroundColor: themeOptions.background,
        color:themeOptions.textColor
    };
    
  return (
 <div style={themeStyles} className='h-screen'>
      {/* <h1 style={{color:themeOptions.activeColor}}>Admin Panel</h1> */}
      <BrowserRouter>
        <Routess>
          <Route path='/' element={<Index />}>
            <Route index element={<Dashboard />} />
            <Route path='/cars' element={<Cars />} />
          </Route>
        </Routess>
      </BrowserRouter>
     
    </div>
  )
}

export default Routes
