import styled from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  border: 2px solid ${props => props.selected ? '#25cd89' : '16195c'};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid #496459;
  }

  @media (max-width: 580px) {
    padding: 10px;
    width: 300px;
  }

  @media (max-width: 340px) {
    width: 260px;
  }
`

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #191a59;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  @media (max-width: 580px) {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }
`

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`

export const Description = styled.div`
  font-size: 14px;
  color: #b8b8d4;

  @media (max-width: 580px) {
    font-size: 12px;
  }
`