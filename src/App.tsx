import { BrowserRouter as Router } from "react-router-dom"
import { MainRoutes } from "./router"
import { FormProvider } from './contexts/FormContext'

const App = () => {
  return (
    <FormProvider>
      <Router>
        <MainRoutes />
      </Router>
    </FormProvider>
  )
}

export default App