import './App.css'
import Dashboard from './pages/dashboard'
import VerifyEmailPage from './pages/email-verification'
import { LoginForm } from './pages/Login-Page'

function App() {
  return <>
  <Dashboard/>
  <LoginForm/>
  <VerifyEmailPage></VerifyEmailPage>
  </>
}

export default App
