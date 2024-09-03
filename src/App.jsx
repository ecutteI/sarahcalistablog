import { Homepage, BlogContentPage,GalleryPage, BlogsPage, AboutPage, ContactsPage } from "./pages"
import {Routes, Route} from 'react-router-dom'

 
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/blog/:id' element={<BlogContentPage />}></Route>
        <Route path='/gallery' element={<GalleryPage />}></Route>
        <Route path='/blogs' element={<BlogsPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contacts' element={<ContactsPage />}></Route>
      </Routes>
    
    </div>
   
  )
}