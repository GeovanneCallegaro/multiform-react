import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const FormStepThree= () => {
  const navigate = useNavigate()
  const {state, dispatch} = useForm()

  useEffect(() => {
    if(state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
    }
  }, [dispatch, navigate, state.name])

  const handleCompletionPage = () => {
    if(state.email !== '' && state.github !== '') {
      navigate('/check')
    } else {
      alert('Preencha os dados')
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    state.email = e.target.value
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    state.github = e.target.value
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com suas informações de contato para que possamos falar com você</p>

        <hr />

        <label>
          Qual seu email?
          <input
            type='email'
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu Github?
          <input
            type='url'
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <Link to='/step2' className='backButton'> Voltar </Link>
        <button onClick={handleCompletionPage}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  )
}