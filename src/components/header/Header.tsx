import "./Header.css";

export function Header() {
  return (
    <header className="site-header">
      <img
        className="logo"
        src="https://itsm-ace.ca/images/logo.svg"
        alt="Pixell River Financial logo"
      />

      <div>
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to the Pixell River Financial staff directory.</p>
      </div>
    </header>
  );
}