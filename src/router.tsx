import { Routes, Route } from 'react-router-dom'
import { FinalizedForm } from './pages/finalizedForm'

import { FormStepOne } from './pages/formStepOne'
import { FormStepThree } from './pages/formStepThree'
import { FormStepTwo } from './pages/formStepTwo'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/check' element={<FinalizedForm />}/>
      <Route path='/step3' element={<FormStepThree />} />
      <Route path='/step2' element={<FormStepTwo />} />
      <Route path='/' element={<FormStepOne />} />
    </Routes>
  )
}