import { createRoot } from "react-dom/client";

// @ts-expect-error vite option to import as string
import styles from "./styles.css?inline";

function Footer() {
  return (
    <footer id="main-footer" className="site-footer">
      <div className="brand-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-12 col-lg-2 col-xl-1 text-center text-lg-start">
              <a
                href="https://www.knighttrans.com/"
                className="custom-logo-link"
                rel="home"
                aria-current="page"
              >
                <img
                  height="70"
                  src="/Primary-Horizontal-K-on-dark.svg"
                  className="custom-logo"
                  alt="Knight Transportation"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <a href="/" className="brand-logo-wrapper">
              <span className="brand-logo-positive">
                <img
                  fetchPriority="high"
                  height="70"
                  src="/Primary-Horizontal-K-on-light.svg"
                  className="attachment-full size-full"
                  alt=""
                  decoding="async"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export function load(
  headerContainer: HTMLDivElement,
  footerContainer: HTMLDivElement,
  nonce: string
) {
  const style = document.createElement("style");
  style.nonce = nonce;
  style.textContent = styles;
  document.head.append(style);

  const header = createRoot(headerContainer);
  header.render(<Header />);

  const footer = createRoot(footerContainer);
  footer.render(<Footer />);
}
