import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: ${props => props.bgColor}
  min-height:92vh;
  margin-top:60px;
  @media screen and (min-width:768px){
      margin-left:250px;
      margin-bottom:0px
  }

`

export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
`

export const NotFoundVideosImage = styled.img`
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NotFoundVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.noteColor};
  text-align: center;
`
