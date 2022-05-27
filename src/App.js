import './App.css'
import AppRoutes from './routes/AppRoutes'
import {store} from './reducer/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
      <AppRoutes></AppRoutes>
    </Provider>
    </>
  )
}

export default App
