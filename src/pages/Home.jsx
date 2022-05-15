import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import { AlertProvider } from '../context/alert/AlertContext'
import Alert from '../components/layout/Alert'

function HomePage() {
  return (
    <AlertProvider>
      <Alert />
      <UserSearch />
      <UserResults />
    </AlertProvider>
  )
}

export default HomePage
