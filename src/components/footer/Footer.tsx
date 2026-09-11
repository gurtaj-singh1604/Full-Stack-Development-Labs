import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      Copyright Pixell River Financial {currentYear}.
    </footer>
  );
}