'use client'

import Script from 'next/script'

export default function Home() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section id="accueil" className="hero">
        <img
          src="/images/kinesiologie.jpeg"
          alt="Kinésiologie Adaptogenèse — séance"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Kinésiologie Adaptogenèse</h1>
          <a
            href="#contact"
            className="hero-cta"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="hero-cta-text">Prendre un rendez-vous</span>
            <span className="hero-chevron">
              <svg viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="about">
        <h2 className="about-name">Audrey GREFFE</h2>
        <hr className="about-divider" />
        <h3 className="about-subtitle">
          Kinésiologue praticienne en Adaptogenèse
        </h3>
        <p className="about-text">Pour soutenir votre équilibre.</p>
        <p className="about-text">
          Ensemble, nous clarifions vos besoins, libérons votre énergie et
          rétablissons une harmonie durable.
        </p>
      </section>

      {/* ==================== LA KINÉSIOLOGIE ==================== */}
      <section id="kinesiologie" className="kinesiologie">
        <h2 className="section-title">La Kinésiologie</h2>

        <div id="kinesio-sub" className="kinesio-block">
          <h3 className="kinesio-subtitle">La Kinésiologie</h3>
          <p className="kinesio-text">
            La kinésiologie s&apos;attache à libérer et à réhabiliter notre
            pouvoir inné d&apos;autoguérison et notre capacité de choix.
          </p>
          <p className="kinesio-text">
            Le terme « kinésiologie » signifie l&apos;étude du mouvement, des
            déplacements dans l&apos;espace, de la cinétique des muscles et des
            articulations.
          </p>
          <p className="kinesio-text">
            Ce que n&apos;est pas la kinésiologie : la kinésiologie n&apos;est
            pas une médecine ni une thérapie. Le kinésiologue® n&apos;établit
            aucun diagnostic médical, ne prescrit pas et ne traite pas. Il ne
            demande jamais de suspendre un traitement médical en cours.
          </p>
        </div>

        <div id="adaptogenese-sub" className="kinesio-block">
          <h3 className="kinesio-subtitle">L&apos;Adaptogenèse</h3> 
          <p className="kinesio-text">
            <a href="https://www.adaptogenese.fr/accueil/" target="_blank" rel="noopener noreferrer">L&apos;Adaptogenèse®</a> a été créée et développée par Francis VIEULES,
            directeur de l&apos;école de kinésiologie et d&apos;Adaptogenèse{' '}
            <a
              href="https://www.kinesiologie-formation.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              EDUtm
            </a>
            .
          </p>
          <p className="kinesio-text italic">
            Le terme « Adaptogenèse » signifie « générer ou restaurer les
            capacités adaptatives de l&apos;individu ». L&apos;Adaptogenèse est
            une kinésiologie extrêmement élaborée qui vise le développement des
            capacités adaptatives de l&apos;individu.
          </p>
          <p className="kinesio-text italic">
            Son but est d&apos;aider à acquérir ou à conserver un état
            d&apos;équilibre et de bien-être global.
            <br />
            Il n&apos;est pas nécessaire de ressentir un mal-être (physique ou
            mental) pour consulter un adaptopraticien, il suffit de vouloir
            améliorer quelque chose dans sa vie !
          </p>
        </div>
      </section>

      {/* ==================== DÉROULEMENT D'UNE SÉANCE ==================== */}
      <section id="seance" className="seance">
        <div className="seance-green-bar" />
        <h2 className="seance-title">Déroulement d&apos;une séance</h2>

        <div
          className="seance-content"
          style={{ backgroundImage: 'url(/images/cabinet.jpg)' }}
        >
          <div className="seance-cards">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-body">
                <h3 className="step-title">Début de la séance</h3>
                <div className="step-text">
                  <p>
                    La séance débute par un échange afin de définir votre
                    objectif et les changements souhaités.
                  </p>
                  <p style={{ marginTop: 12 }}>
                    Ensuite, vous serez installé sur une table de consultation,
                    habillé, déchaussé et sans objets métalliques (bijoux,
                    ceinture…).
                  </p>
                  <p style={{ marginTop: 12 }}>
                    Prévoyez une tenue souple dans laquelle vous serez libre de
                    vos mouvements.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-number">11</div>
              <div className="step-body">
                <h3 className="step-title">La parole du corps</h3>
                <div className="step-text">
                  <p>
                    A l&apos;aide du test musculaire, outil de dialogue avec le
                    corps du kinésiologue, et en lien avec votre objectif :
                  </p>
                  <ul>
                    <li>
                      On montre au « corps » ce qui le déséquilibre ;
                    </li>
                    <li>
                      On montre au « corps » ce qui le rééquilibre ;
                    </li>
                    <li>On effectue l&apos;équilibrage ;</li>
                    <li>
                      On montre au « corps » que l&apos;équilibre est rétabli.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-number">111</div>
              <div className="step-body">
                <h3 className="step-title">Les corrections</h3>
                <div className="step-text">
                  <p>
                    Les corrections peuvent inclure des techniques variées comme
                    des stimulations de points d&apos;acupuncture, des
                    mouvements, des libérations de stress émotionnels.
                  </p>
                  <p style={{ marginTop: 10 }}>
                    Vous participez activement à la séance ce qui vous permettre
                    de :
                  </p>
                  <ul>
                    <li>
                      Redéfinir vos capacités décisionnelles /
                      d&apos;adaptation ;
                    </li>
                    <li>Rétablir l&apos;estime de soi ;</li>
                    <li>
                      Lever les blocages / schémas qui freinent votre capacité
                      de choix ;
                    </li>
                    <li>
                      Retrouver un équilibre émotionnel, physique et
                      énergétique.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="seance-note">
          Chaque individu avance à son rythme, et les blocages ne se lèvent pas
          toujours en une seule séance. Un objectif peut justifier une ou
          plusieurs séances.
        </p>
      </section>

      {/* ==================== AVIS CLIENTS ==================== */}
      <section id="avis" className="avis">
        <div className="avis-header">
          <hr className="avis-divider" />
          <h2 className="avis-title">Avis Clients</h2>
          <hr className="avis-divider-bottom" />
        </div>
        {/* Elfsight Google Reviews widget */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-af710f26-c4b9-4cac-a063-1665e031ff90" data-elfsight-app-lazy />
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="contact">
        <div className="contact-appointment">
          <h2 className="contact-title">Prendre rendez-vous</h2>
          <p className="contact-intro">
            Prenez RDV directement sur l&apos;agenda suivant :{' '}
            <a
              href="https://calendly.com/audreygreffe/rdv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calendly
            </a>
          </p>
          <p className="contact-intro">
            Vous pouvez également me contacter au{' '}
            <a href="tel:+33617701354">06 17 70 13 54</a> (SMS ou message
            téléphonique) 
            <br></br>
            ou par le formulaire de contact ci-dessous.
          </p>

          {/*
            Contact form — ready for Resend integration.
            Create an API route at /api/contact that uses Resend to send emails.
            Then replace onSubmit with a fetch('/api/contact', ...) call.
          */}
          <form
            className="contact-form"
            action="/api/contact"
            method="POST"
            onSubmit={async (e) => {
              e.preventDefault()
              const form = e.currentTarget
              const data = new FormData(form)
              try {
                const res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: data.get('name'),
                    email: data.get('email'),
                    subject: data.get('subject'),
                    message: data.get('message'),
                  }),
                })
                if (res.ok) {
                  form.reset()
                  alert('Message envoyé avec succès !')
                } else {
                  alert('Erreur lors de l\'envoi. Veuillez réessayer.')
                }
              } catch {
                alert('Erreur lors de l\'envoi. Veuillez réessayer.')
              }
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Nom"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  placeholder="E-mail"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className="form-group full" style={{ marginBottom: 20 }}>
              <input
                type="text"
                className="form-input"
                placeholder="Objet"
                name="subject"
              />
            </div>
            <div className="form-group full">
              <textarea
                className="form-textarea"
                placeholder="Message"
                name="message"
                rows={5}
                required
              />
            </div>
            <button type="submit" className="form-submit">
              Envoyer
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h2 className="contact-info-title">Informations de contact</h2>
          <hr className="contact-info-divider" />
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <h3>Téléphone</h3>
              <a href="tel:+33617701354">06 17 70 13 54</a>
            </div>
            <div className="contact-info-item">
              <h3>E-mail</h3>
              <a href="mailto:contact@audrey-greffe.fr">
                contact@audrey-greffe.fr
              </a>
            </div>
            <div className="contact-info-item">
              <h3>Adresse</h3>
              <a
                href="https://www.google.com/maps/search/18+rue+du+Clos+Fongautier+31570+Sainte+Foy+d%27Aigrefeuille"
                target="_blank"
                rel="noopener noreferrer"
              >
                18 rue du Clos Fongautier 31570 Sainte Foy d&apos;Aigrefeuille
              </a>
            </div>
          </div>
        </div>

        <iframe
          className="contact-map"
          src="https://maps.google.com/maps?q=18+rue+du+Clos+Fongautier+31570+Sainte+Foy+d%27Aigrefeuille&t=&z=13&ie=UTF8&iwloc=&output=embed"
          title="Localisation — Audrey GREFFE"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/politique-de-confidentialite">
            Politique de confidentialité
          </a>
          <a href="/termes-et-conditions">Termes et conditions</a>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-de-cookies">Politique de cookies</a>
        </div>
        <p className="footer-copy">© 2026 par Audrey GREFFE.</p>
      </footer>
    </>
  )
}
