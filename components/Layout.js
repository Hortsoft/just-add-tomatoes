import NavBar from '../components/NavBar'
import Footer from '../components/Footer' 


export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
         

      <div className="page-content">
        { children }
      </div>
       
      <Footer />
    </div>
  )
}