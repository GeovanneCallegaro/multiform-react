import { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { SelectOption } from '../../components/SelectOption'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import * as C from './styles'

export const FormStepTwo = () => {
  const navigate = useNavigate()
  const {state, dispatch} = useForm()

  useEffect(() => {
    if(state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      })
    }
  }, [dispatch, navigate, state.name])

  const handleNextStep = () => {
    if(state.name !== '') {
      navigate('/step3')
    } else {
      alert('Preencha os dados!')
    }
  }

  const setLevel = (level: number) => {
    if(level !== state.level) {
      level === 0 ? state.level = 0 : state.level = 1
    }
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

    return (
      <Theme>
        <C.Container>
          <p>Passo 2/3</p>
          <h1>{state.name}, o que melhor descreve você?</h1>
          <p>Escolha a opção que melhor condiz com seu estado atual profissionalmente</p>

          <hr />

          <SelectOption
            title="Sou iniciante"
            description="Comecei a programar há menos de um ano"
            icon='🥳'
            selected={state.level === 0}
            handleClick={() => setLevel(0)}
          />
          <SelectOption
            title="Sou programador"
            description="Já programo há mais de um ano"
            icon='😎'
            selected={state.level === 1}
            handleClick={() => setLevel(1)}
          />

          <Link to='/' className='backButton'>Voltar</Link>
          <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
    </Theme>
    )
}