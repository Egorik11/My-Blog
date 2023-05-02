import styled from '@emotion/styled'

const ButtonStyle = styled.button`
  background-color: #292E3D;
  color: #fff;
  font-size: 18px;
  padding: 10px 0;
  border: none;
  width: 207px;
`

function Button({children, onClick, disabled, style}) {
  return (
    <ButtonStyle onClick={onClick} disabled={disabled} style={style}>
        {children}
    </ButtonStyle>
  )
}
export {Button}