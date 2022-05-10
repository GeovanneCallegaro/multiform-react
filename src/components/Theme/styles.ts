import styled from 'styled-components'

export const Container = styled.div`
  background-color: #02044A;
  color: #fff;
  min-height: 100vh;
`

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 980px) {
    max-width: 780px;
  }

  @media (max-width: 790px) {
    max-width: 580px;
  }

`

export const Steps = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #16195C;

  @media (max-width: 580px) {
    display: none;
  }
`

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;

  @media (max-width: 790px) {
    padding-top: 20px;
    padding-left: 20px;
  }
`