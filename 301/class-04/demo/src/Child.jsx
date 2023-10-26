export default function Child({ username }) {
  return (
    <div>
      <p>This is the users username: {username}</p>
      {/* Only hsow the username after its longer than 3 characters */}
      {/* <p>This is the users username: {username.length > 3 ? username : ""}</p> */}
    </div>
  );
}
