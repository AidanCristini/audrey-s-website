import type { Metadata } from 'next'
import LegalFooter from '@/components/LegalFooter'

export const metadata: Metadata = {
  title: 'Termes et conditions — Audrey GREFFE',
}

export default function TermesEtConditions() {
  return (
    <>
      <div className="legal-page">
        <div className="legal-sage-bar" />
        <div className="legal-content">
          <h1>Termes et conditions</h1>
          <hr />

          <p>
            Ce modèle est un exemple de texte. Il n&apos;est pas complet et ne
            peut pas être publié.
          </p>

          <p>
            Les termes et conditions ont pour but de protéger les propriétaires
            de site. Ces derniers peuvent définir leurs propres conditions
            générales et répondre aux exigences qui s&apos;imposent à eux en
            matière d&apos;informations.
          </p>

          <p>
            Dans le cas d&apos;une boutique en ligne, les informations
            obligatoires peuvent être par exemple, l&apos;ajout de détails
            concernant les articles, les prix, les termes du contrat, la
            résiliation et l&apos;annulation. Les termes et conditions doivent
            également contenir des titres et être formulés en fonction des
            besoins de votre propre entreprise.
          </p>

          <p>
            Afin de vous assurer que vous respectez pleinement vos obligations
            légales, nous vous conseillons vivement de demander conseil à un
            professionnel afin de mieux comprendre quelles sont les exigences
            qui vous concernent spécifiquement.
          </p>
        </div>
      </div>
      <LegalFooter />
    </>
  )
}
