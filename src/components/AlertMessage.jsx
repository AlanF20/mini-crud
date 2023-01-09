export default function AlertMessage ({ status }) {
  const isUndefined = status === undefined
  const message = status ? <SuccessMessage /> : <ErrorMessage />
  return (
    <>
      {!isUndefined && status != null && <SetMessage>{message}</SetMessage>}
      {status == null && !isUndefined && <SetMessage />}
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
    <div className='success display'>
      <p>En horabuena! tu informacion se a enviado💖</p>
    </div>
  )
}
function ErrorMessage () {
  return (
    <div className='error display'>
      <p>Oh no! ah ocurrido un problema💀</p>
    </div>
  )
}
