import Child from "./Child";

export default function Parent({ theme, setTheme }) {
  return (
    <div className="parent">
      <Child theme={theme} setTheme={setTheme} />
    </div>
  );
}
