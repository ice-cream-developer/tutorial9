import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
`

export const FailedImage = styled.img`
  width: 240px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const FailedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const FailedNote = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.noteColor};
  text-align: center;
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f4f6e5;
  border-radius: 2px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  font-family: 'Roboto';
  font-size: 15px;
`
