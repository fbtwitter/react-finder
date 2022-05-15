import { Outlet } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { GithubProvider } from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Outlet />
        </main>
        <Footer />
      </div>
    </GithubProvider>
  )
}

export default App
