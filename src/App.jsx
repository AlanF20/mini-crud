
const submit = () => {
  console.log('hola')
}
function App () {
  return (
    <form action='POST'>
      <input type='text' placeholder='Inserte su email' />
      <input type='password' placeholder='Inserte su contra aqui' />
      <input type='button' value='Enviar mi informacion' onClick={submit()} />
    </form>
  )
}

export default App
