import ReactDOM from 'react-dom/client'
import './style/index.css'
import Routes from './route/Routes'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Routes />
    </Provider>
)
