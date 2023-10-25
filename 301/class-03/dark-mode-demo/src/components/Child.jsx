export default function Child({ theme, setTheme }) {
  function handleClick() {
    if (theme === "light") {
      setTheme("dark"); //
    } else {
      setTheme("light"); //
    }
  }

  return (
    <div className="child">
      <button onClick={handleClick}>Change the colour of the header</button>
    </div>
  );
}
