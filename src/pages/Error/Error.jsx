import { Link } from "react-router-dom";

/**
 * @function Error
 * @export
 * @description Error page
 * @return {HTMLElement} component generated HTML
 */
export default function Error() {
  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <p className={"error__text"}>Whoops! This page doesn't exist.</p>
      <Link to="/" className={"error__link"}>
        Return to the home page.
      </Link>
    </main>
  );
}
