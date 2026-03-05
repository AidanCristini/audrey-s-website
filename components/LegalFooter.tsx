import Link from 'next/link'

export default function LegalFooter() {
  return (
    <>
      <div className="legal-dark-bar" />
      <footer className="footer">
        <div className="footer-links">
          <Link href="/politique-de-confidentialite">
            Politique de confidentialité
          </Link>
          <Link href="/termes-et-conditions">Termes et conditions</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-de-cookies">Politique de cookies</Link>
        </div>
        <p className="footer-copy">© 2025 par Audrey GREFFE.</p>
      </footer>
    </>
  )
}
