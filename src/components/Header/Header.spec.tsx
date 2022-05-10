import { render, screen } from "@testing-library/react"
import { Header } from "."

export {}

describe('<Header />', () => {
  it('should have a title and a paragraph on the screen', () => {
    render(<Header />);

    expect(screen.getByRole('heading', {name: /Cadastro de Desenvolvedor/i})).toBeInTheDocument();
    expect(screen.getByText(/faça seu cadastro na lista/i)).toBeInTheDocument();
  })

  it('should match snapshot', () => {
    const {container} = render(<Header />)

    expect(container.firstElementChild).toMatchSnapshot()
  })
})