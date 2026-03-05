import type { Metadata } from 'next'
import LegalFooter from '@/components/LegalFooter'

export const metadata: Metadata = {
  title: 'Politique de cookies — Audrey GREFFE',
}

export default function PolitiqueDeCookies() {
  return (
    <>
      <div className="legal-page">
        <div className="legal-sage-bar" />
        <div className="legal-content">
          <h1>Politique de cookies</h1>
          <hr />

          <p>
            Cette politique de cookies explique comment le site Web
            d&apos;Audrey GREFFE utilise les cookies et technologies similaires
            pour vous reconnaître lorsque vous visitez notre site.
          </p>

          <h2>Que sont les cookies ?</h2>
          <p>
            Les cookies sont de petits fichiers texte qui sont stockés sur votre
            ordinateur ou appareil mobile lorsque vous visitez un site Web. Ils
            permettent au site de mémoriser vos actions et préférences (comme la
            connexion, la langue, la taille de la police et d&apos;autres
            préférences d&apos;affichage) sur une période donnée, afin que vous
            n&apos;ayez pas à les saisir à chaque fois que vous revenez sur le
            site ou naviguez d&apos;une page à l&apos;autre.
          </p>

          <h2>Comment utilisons-nous les cookies ?</h2>
          <p>
            Nous utilisons les cookies pour les finalités suivantes :
          </p>
          <ul>
            <li>
              <strong>Cookies essentiels :</strong> Ces cookies sont nécessaires
              au fonctionnement du site Web et ne peuvent pas être désactivés
              dans nos systèmes.
            </li>
            <li>
              <strong>Cookies analytiques :</strong> Ces cookies nous permettent
              de compter les visites et les sources de trafic afin de mesurer et
              d&apos;améliorer les performances de notre site (Vercel Analytics).
            </li>
          </ul>

          <h2>Comment gérer les cookies ?</h2>
          <p>
            Vous pouvez configurer votre navigateur pour refuser tous les
            cookies ou pour indiquer quand un cookie est envoyé. Toutefois, si
            vous n&apos;acceptez pas les cookies, vous ne pourrez peut-être pas
            utiliser certaines parties de notre site.
          </p>

          <h2>Modifications de cette politique</h2>
          <p>
            Nous pouvons mettre à jour cette politique de cookies de temps à
            autre. Nous vous encourageons à consulter régulièrement cette page
            pour prendre connaissance de toute modification.
          </p>

          <div className="legal-contact-block">
            <p>
              Pour toute question relative à cette politique, veuillez nous
              contacter à l&apos;adresse figurant dans nos mentions légales.
            </p>
          </div>
        </div>
      </div>
      <LegalFooter />
    </>
  )
}
