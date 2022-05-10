import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { useForm } from '../../contexts/FormContext'
import * as C from './styles'

export const FinalizedForm = () => {
  const {state} = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if(state.name === '') {
      navigate('/')
    } else {
      state.currentStep = 4
    }

  }, [navigate, state])

  return (
    <Theme>
      <C.Container>
        <C.Title>
          <h1>Parabéns, {state.name}! Seu cadastro foi realizado com sucesso!</h1>
          <p>Acompanhe seus dados abaixo: </p>
        </C.Title>
        <C.UserInfos>
          <div>
            <span>Experiência:</span> {state.level === 0 ? (<p>Sou iniciante!</p>) : (<p>Sou um programador!</p>)}
          </div>
          <div>
            <span>Email:</span> <p>{state.email}</p>
          </div>
          <div>
            <span>Github:</span> <p>{state.github}</p>
          </div>
        </C.UserInfos>
      </C.Container>
    </Theme>
  )
}