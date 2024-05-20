import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Home, { dataLoader } from './Screens/Home'
import About from './Screens/About'
import Contact from './Screens/Contact'
import SideBar from "./Screens/SideBar";
import Details, { getPost } from './Screens/Details';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />} errorElement={<h2>Error......</h2>}>
        <Route>
          <Route index element={<Home />} loader={dataLoader} />
          <Route
            path=':id'
            element={<Details />}
            loader={getPost}
          />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

const Root = () => {
  return (
    <>
      <div className='flex'>
        <SideBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
