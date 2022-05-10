import { render, screen } from "@testing-library/react"
import { SidebarItem } from "."
import {BrowserRouter} from 'react-router-dom'

describe('<SidebarItem />', () => {
  it('should be on screen', () => {
    render(
      <BrowserRouter>
        <SidebarItem
          title = 'title1'
          description = "body1"
          icon = "profile"
          path = '/'
          active = {false}
        />
      </BrowserRouter>)

    expect(screen.getByText('title1')).toBeInTheDocument();
    expect(screen.getByText('body1')).toBeInTheDocument();
    expect(screen.getByText('profile.svg')).toBeInTheDocument();
    expect(screen.queryByText('book.svg')).not.toBeInTheDocument();
  })

  it('should render an other svg from icon atributte is book', () => {
    render(
      <BrowserRouter>
        <SidebarItem
          title = 'title1'
          description = "body1"
          icon = "book"
          path = '/'
          active = {false}
        />
      </BrowserRouter>)

    expect(screen.getByText('book.svg')).toBeInTheDocument();
  })

  it('should render an other svg from icon atributte is mail', () => {
    render(
      <BrowserRouter>
        <SidebarItem
          title = 'title1'
          description = "body1"
          icon = "mail"
          path = '/'
          active = {false}
        />
      </BrowserRouter>)

    expect(screen.getByText('mail.svg')).toBeInTheDocument();
  })

  it('should render an other svg from icon atributte is check', () => {
    render(
      <BrowserRouter>
        <SidebarItem
          title = 'title1'
          description = "body1"
          icon = "check"
          path = '/'
          active = {false}
        />
      </BrowserRouter>)

    expect(screen.getByText('check.svg')).toBeInTheDocument();
  })

  it('should match snapshot', () => {
    const {container} = render(
      <BrowserRouter>
        <SidebarItem
          title = 'title1'
          description = "body1"
          icon = "check"
          path = '/'
          active = {false}
        />
      </BrowserRouter>)

    expect(container.firstElementChild).toMatchSnapshot()
  })
})