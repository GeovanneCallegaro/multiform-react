import { createContext, useReducer, useContext, ReactNode } from 'react'

// Types

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
}

type Action = {
  type: FormActions;
  payload: any;
}

type ContextType = {
  state: State;
  dispatch: (action: Action) => void
}

type FormProviderProps = {
  children: ReactNode;
}

// initial data for reducer
const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: ''
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub
}

const formReducer = (state: State, action: Action) => {
  switch(action.type) {
    case FormActions.setCurrentStep:
      return {...state, currentStep: action.payload}
    case FormActions.setName:
      return {...state, setName: action.payload}
    case FormActions.setLevel:
      return {...state, setLevel: action.payload}
    case FormActions.setEmail:
      return {...state, setEmail: action.payload}
    case FormActions.setGithub:
      return {...state, setGithub: action.payload}
    default:
      return state
  }
}

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = {state, dispatch}

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

// Context Hook
export const useForm = () => {
  const context = useContext(FormContext)
  if(context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider')
  }
  return context;
}
