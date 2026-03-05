import type { Metadata } from 'next'
import LegalFooter from '@/components/LegalFooter'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Audrey GREFFE',
}

export default function PolitiqueDeConfidentialite() {
  return (
    <>
      <div className="legal-page">
        <div className="legal-sage-bar" />
        <div className="legal-content">
          <h1>Politique de confidentialité</h1>
          <hr />

          <p>
            Ce modèle est un exemple de texte et ne peut pas être publié. Les
            explications et les informations fournies ici ne sont que des
            explications, des informations et des exemples généraux. Vous ne
            devez pas vous fier à ce modèle comme à un conseil juridique ou à
            des recommandations sur ce que vous devez faire. Nous vous
            recommandons de demander un avis juridique pour vous aider à
            comprendre et à élaborer votre politique de protection de
            confidentialité.
          </p>

          <p>
            Une politique de confidentialité est une déclaration qui divulgue
            tout ou partie des façons dont un site Web collecte, utilise,
            divulgue et gère les données de ses visiteurs et clients. Elle
            répond à une obligation légale de protéger la vie privée d&apos;un
            visiteur ou d&apos;un client. Le lien vers votre politique de
            confidentialité doit apparaître sur toutes les pages de votre site.
          </p>

          <p>
            Voici quelques exemples de contenu que vous pouvez inclure dans
            votre politique de confidentialité :
          </p>

          <ul>
            <li>Quelles informations vous recueillez</li>
            <li>Comment vous recueillez les informations</li>
            <li>Pourquoi vous recueillez les informations</li>
            <li>Avec qui vous partagez les informations</li>
            <li>Où sont stockées les informations</li>
            <li>Combien de temps vous conservez les informations</li>
            <li>Comment vous protégez les informations</li>
            <li>
              Les modifications ou mises à jour de la Politique de
              confidentialité.
            </li>
          </ul>
        </div>
      </div>
      <LegalFooter />
    </>
  )
}
