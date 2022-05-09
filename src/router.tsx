import { BrowserRouter, Route } from 'react-router-dom'
import { FormStepOne } from './pages/formStepOne'

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path='/' element={<FormStepOne />} />
        </BrowserRouter>
    )
}