import * as C from './styles'

type Props = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  handleClick: () => void;
}

export const SelectOption = ({title, description, icon, selected, handleClick}: Props) => {
  return (
    <C.Container selected={selected} onClick={handleClick}>
      <C.Icon>{icon}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  )
}