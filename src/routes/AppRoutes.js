import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../../src/pages/Main'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
      <Routes>
        <Route path='*' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
