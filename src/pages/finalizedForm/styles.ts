import styled from "styled-components";

export const Container = styled.div`

`

export const Title = styled.div`
  h1 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
    margin-top: 5px;
  }
`

export const UserInfos = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 40px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-weight: bold;
      margin-right: 10px;
      font-size: 15px;
    }
  }
`