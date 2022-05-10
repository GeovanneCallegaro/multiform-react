import styled from 'styled-components'

export const Container = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #16195C;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 28px;
  }

  p {
    font-size: 14px;
    color: #b8b8d4;
  }

  @media (max-width: 580px) {
    padding: 15px 0;
    margin-left: 20px;
  }
`