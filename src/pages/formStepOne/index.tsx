import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'

export const FormStepOne = () => {
  const navigate = useNavigate()
  const {state, dispatch} = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [dispatch])

  const handleNextStep = () => {
    if(state.name !== '') {
      navigate('/step2')
    } else {
      alert('Preencha os dados!')
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    state.name = e.target.value
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type='text'
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}