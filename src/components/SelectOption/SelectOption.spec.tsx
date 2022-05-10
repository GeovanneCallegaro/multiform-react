import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectOption } from ".";


describe('<SelectOption />', () => {
  it('should select option is rendered', () => {
    const fn = jest.fn()
    render(<SelectOption
      title = 'title 1'
      description = 'body 1'
      icon = 'icon 1'
      selected = {true}
      handleClick = {fn}
    />)

    expect(screen.getByText('title 1')).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
    expect(screen.getByText('icon 1')).toBeInTheDocument();
  })

  it('should be called the onclick function', () => {
    const fn = jest.fn()
    const {container} = render(<SelectOption
      title = 'title 1'
      description = 'body 1'
      icon = 'icon 1'
      selected = {true}
      handleClick = {fn}
    />);

    userEvent.click(container.firstElementChild);
    expect(fn).toBeCalledTimes(1);
  })

  it('should match snapshot', () => {
    const fn = jest.fn();
    const {container} = render(<SelectOption
      title = 'title 1'
      description = 'body 1'
      icon = 'icon 1'
      selected = {true}
      handleClick = {fn}
    />);

    expect(container.firstElementChild).toMatchSnapshot()
  })
})