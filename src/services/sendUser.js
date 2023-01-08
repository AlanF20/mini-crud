export default async function sendUser (userData) {
  try {
    await fetch('http://localhost:3000/usuarios', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
  } catch (error) {
    return error
  }
}
