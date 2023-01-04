export default function AlertMessage ({ status }) {
  const isUndefined = status === undefined
  const message = status ? <SuccessMessage /> : <ErrorMessage />
  return (
    <>
      {!isUndefined && <SetMessage>{message}</SetMessage>}
    </>
  )
}

function SetMessage ({ children }) {
  return (
    <>
      {children}
    </>
  )
}
function SuccessMessage () {
  return (
    <div className='success'>
      <p>En horabuena! tu informacion se a enviado💖</p>
    </div>
  )
}
function ErrorMessage () {
  return (
    <div className='error'>
      <p>Oh no! ah ocurrido un problema💀</p>
    </div>
  )
}
