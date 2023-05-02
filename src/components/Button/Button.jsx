function Button({children, onClick, disabled, style}) {
  return (
    <button onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  )
}

Button.defaultProps ={
  style: {
    backgroundColor: '#292E3D',
    color: '#fff',
    fontSize: '18px',
    padding: '10px 0',
    border: 'none'
  }
}
export {Button}