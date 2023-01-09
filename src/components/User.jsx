export function User ({ user }) {
  return (
    <div>
      <h2>{user.user_name}</h2>
      <p>{user.user_email}</p>
    </div>
  )
}
