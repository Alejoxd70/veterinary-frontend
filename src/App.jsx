import { Login } from './components/Login'
import { PetList } from './components/PetList'
import { MainBar } from './components/MainBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainBar />}>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/pets' element={<PetList />} />

          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}
