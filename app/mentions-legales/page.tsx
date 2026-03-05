import type { Metadata } from 'next'
import LegalFooter from '@/components/LegalFooter'

export const metadata: Metadata = {
  title: 'Mentions légales — Audrey GREFFE',
}

export default function MentionsLegales() {
  return (
    <>
      <div className="legal-page">
        <div className="legal-sage-bar" />
        <div className="legal-content">
          <h1>Mentions légales</h1>
          <hr />

          <p>
            Impressum. Un impressum est légalement requis dans certaines
            régions. Ce modèle ne contient que des informations générales et des
            exemples de formulation, et il n&apos;est pas prêt à être publié.
            Les informations contenues dans l&apos;impressum varient en fonction
            de votre entreprise ou de votre type de site Web. Nous vous
            recommandons de demander un avis juridique pour vous aider à
            comprendre et à créer votre impressum.
          </p>

          <p>[Nom de l&apos;entreprise]</p>

          <ul>
            <li>Dénomination sociale ou raison sociale</li>
            <li>Adresse du siège social de l&apos;entreprise</li>
            <li>Noms des dirigeants de l&apos;entreprise</li>
            <li>
              Numéro de téléphone, numéro de fax et adresse e-mail de
              l&apos;entreprise
            </li>
            <li>
              Numéro d&apos;enregistrement au registre du commerce et des
              sociétés, ou autre autorité applicable à l&apos;activité
            </li>
            <li>Numéro d&apos;identification fiscale</li>
            <li>Forme juridique de l&apos;entreprise</li>
            <li>Montant du Capital Social</li>
            <li>
              Si votre site Web propose des services dans le cadre d&apos;une
              activité qui nécessite l&apos;approbation d&apos;une autorité
              publique, les coordonnées de l&apos;autorité de contrôle doivent
              être fournies
            </li>
            <li>
              Nom, dénomination ou raison sociale et adresse et numéro de
              téléphone de l&apos;hébergeur de son site
            </li>
            <li>
              Mentions relatives à l&apos;utilisation de données personnelles
            </li>
            <li>Mentions relatives à l&apos;utilisation de cookies</li>
          </ul>

          <p>
            La Commission européenne fournit une plateforme de règlement des
            litiges en ligne (OS). Cette plateforme est disponible à
            l&apos;adresse http://ec.europa.eu/consumers/odr/. En tant que
            client, vous avez toujours la possibilité de contacter le conseil
            d&apos;arbitrage de la Commission européenne. Nous ne sommes ni
            disposés à, ni obligés de, participer à une procédure de règlement
            des litiges devant un conseil d&apos;arbitrage de la consommation.
          </p>

          <div className="legal-contact-block">
            <p>
              E-mail :<br />
              Tél. :<br />
              Fax :<br />
              Adresse :
            </p>
          </div>
        </div>
      </div>
      <LegalFooter />
    </>
  )
}
