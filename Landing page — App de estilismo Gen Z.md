```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>VÉNUS — Tu estilo, escrito en las estrellas</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap" rel="stylesheet">

  <style>
    :root {
      --cream: #f6f0e8;
      --black: #171516;
      --wine: #641f38;
      --plum: #40203f;
      --pink: #d99ab4;
      --lavender: #c7b6d9;
      --gold: #c9a66b;
      --white: #fffaf6;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--cream);
      color: var(--black);
      font-family: "DM Sans", sans-serif;
      overflow-x: hidden;
    }

    /* ---------- NAV ---------- */

    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
      padding: 20px 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      background: rgba(246,240,232,.82);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(23,21,22,.08);
    }

    .logo {
      font-family: "Playfair Display", serif;
      font-size: 25px;
      font-weight: 600;
      letter-spacing: 5px;
    }

    .nav-links {
      display: flex;
      gap: 30px;
      list-style: none;
    }

    .nav-links a {
      color: var(--black);
      text-decoration: none;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .nav-button {
      border: 1px solid var(--black);
      padding: 11px 20px;
      border-radius: 30px;
      background: transparent;
      cursor: pointer;
      transition: .3s;
    }

    .nav-button:hover {
      background: var(--black);
      color: white;
    }

    /* ---------- HERO ---------- */

    .hero {
      min-height: 100vh;
      padding: 150px 7% 80px;

      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 50px;

      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: "";
      position: absolute;
      width: 600px;
      height: 600px;
      background: var(--pink);
      border-radius: 50%;
      filter: blur(80px);
      opacity: .35;
      right: -150px;
      top: 80px;
      z-index: -1;
    }

    .eyebrow {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 25px;
      color: var(--wine);
      font-weight: 700;
    }

    h1 {
      font-family: "Playfair Display", serif;
      font-size: clamp(55px, 7vw, 105px);
      line-height: .88;
      font-weight: 500;
      letter-spacing: -4px;
    }

    h1 em {
      color: var(--wine);
    }

    .hero-text {
      max-width: 500px;
      margin-top: 35px;
      font-size: 18px;
      line-height: 1.6;
      color: #514a4c;
    }

    .hero-buttons {
      display: flex;
      gap: 15px;
      margin-top: 35px;
    }

    .primary-btn,
    .secondary-btn {
      padding: 16px 27px;
      border-radius: 50px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      font-size: 14px;
      transition: .3s;
    }

    .primary-btn {
      background: var(--black);
      color: white;
    }

    .primary-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0,0,0,.18);
    }

    .secondary-btn {
      background: transparent;
      border: 1px solid #aaa;
    }

    /* ---------- HERO VISUAL ---------- */

    .hero-visual {
      position: relative;
      height: 650px;
    }

    .fashion-card {
      position: absolute;
      width: 310px;
      height: 430px;
      border-radius: 180px 180px 20px 20px;
      overflow: hidden;
      box-shadow: 0 25px 70px rgba(0,0,0,.15);
    }

    .card-main {
      right: 10%;
      top: 60px;

      background:
        linear-gradient(140deg, rgba(60,20,45,.1), rgba(60,20,45,.6)),
        url("https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85")
        center/cover;
    }

    .card-small {
      width: 180px;
      height: 240px;
      right: 58%;
      top: 360px;
      border-radius: 100px 100px 15px 15px;

      background:
        url("https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=85")
        center/cover;

      transform: rotate(-8deg);
    }

    .floating {
      position: absolute;
      padding: 12px 18px;
      background: rgba(255,250,246,.85);
      backdrop-filter: blur(10px);
      border-radius: 30px;
      font-size: 13px;
      box-shadow: 0 8px 25px rgba(0,0,0,.1);
    }

    .tag-kibbe {
      top: 50px;
      left: 5%;
    }

    .tag-color {
      top: 270px;
      right: 0;
    }

    .tag-venus {
      bottom: 80px;
      left: 20%;
    }

    /* ---------- MARQUEE ---------- */

    .marquee {
      background: var(--black);
      color: white;
      padding: 16px 0;
      overflow: hidden;
      white-space: nowrap;
    }

    .marquee-inner {
      display: inline-block;
      animation: scroll 18s linear infinite;
      font-family: "Playfair Display", serif;
      font-size: 22px;
      font-style: italic;
    }

    @keyframes scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    /* ---------- INTRO ---------- */

    .intro {
      padding: 140px 8%;
      text-align: center;
      max-width: 1100px;
      margin: auto;
    }

    .section-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: var(--wine);
      margin-bottom: 20px;
    }

    .intro h2,
    .section-heading {
      font-family: "Playfair Display", serif;
      font-size: clamp(40px, 5vw, 70px);
      font-weight: 500;
      line-height: 1;
    }

    .intro p {
      max-width: 650px;
      margin: 30px auto;
      font-size: 17px;
      line-height: 1.7;
      color: #625b5c;
    }

    /* ---------- SYSTEM ---------- */

    .system {
      padding: 100px 7%;
      background: var(--white);
    }

    .system-header {
      display: flex;
      justify-content: space-between;
      align-items: end;
      margin-bottom: 60px;
    }

    .system-header p {
      max-width: 350px;
      line-height: 1.6;
      color: #625b5c;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .system-card {
      min-height: 430px;
      padding: 35px;
      border-radius: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: .4s;
    }

    .system-card:hover {
      transform: translateY(-10px) rotate(-1deg);
    }

    .kibbe {
      background: #ead8dc;
    }

    .color {
      background: #d7d0e3;
    }

    .astro {
      background: #29202d;
      color: white;
    }

    .card-number {
      font-size: 12px;
      letter-spacing: 2px;
    }

    .system-card h3 {
      font-family: "Playfair Display", serif;
      font-size: 42px;
      font-weight: 500;
    }

    .system-card p {
      line-height: 1.6;
      font-size: 15px;
      opacity: .8;
    }

    .card-symbol {
      font-size: 70px;
      font-family: "Playfair Display", serif;
      text-align: right;
    }

    /* ---------- EXPERIENCE ---------- */

    .experience {
      padding: 140px 7%;
    }

    .experience-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
      align-items: center;
    }

    .experience-copy p {
      margin-top: 30px;
      line-height: 1.7;
      color: #625b5c;
      max-width: 500px;
    }

    .steps {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .step {
      display: flex;
      gap: 20px;
      align-items: flex-start;
    }

    .step-num {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: var(--wine);
      color: white;
      display: grid;
      place-items: center;
      flex-shrink: 0;
    }

    .step h4 {
      margin-bottom: 5px;
    }

    .step p {
      margin: 0;
      font-size: 14px;
    }

    /* ---------- PHONE ---------- */

    .phone-wrapper {
      display: flex;
      justify-content: center;
    }

    .phone {
      width: 290px;
      height: 590px;
      background: #171516;
      border: 8px solid #171516;
      border-radius: 40px;
      padding: 10px;
      box-shadow: 0 30px 70px rgba(0,0,0,.2);
      transform: rotate(4deg);
    }

    .phone-screen {
      height: 100%;
      border-radius: 30px;
      overflow: hidden;
      background: var(--cream);
      padding: 25px 18px;
    }

    .phone-logo {
      font-family: "Playfair Display", serif;
      letter-spacing: 3px;
      text-align: center;
      margin-bottom: 25px;
    }

    .profile-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: auto;

      background:
        url("https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80")
        center/cover;
    }

    .result-title {
      text-align: center;
      font-family: "Playfair Display", serif;
      font-size: 27px;
      margin-top: 18px;
    }

    .result-sub {
      text-align: center;
      font-size: 11px;
      margin-top: 6px;
      color: var(--wine);
      letter-spacing: 1px;
    }

    .result-box {
      margin-top: 20px;
      padding: 15px;
      border-radius: 15px;
      background: white;
      font-size: 12px;
      line-height: 1.5;
    }

    .palette {
      display: flex;
      gap: 7px;
      margin-top: 12px;
    }

    .dot {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }

    .dot:nth-child(1) { background:#3d1728; }
    .dot:nth-child(2) { background:#75314c; }
    .dot:nth-child(3) { background:#a86b57; }
    .dot:nth-child(4) { background:#c49b63; }
    .dot:nth-child(5) { background:#29202d; }

    /* ---------- CTA ---------- */

    .cta {
      margin: 50px 5%;
      padding: 100px 30px;
      border-radius: 35px;

      background:
        radial-gradient(circle at 80% 20%, #9d709b, transparent 30%),
        radial-gradient(circle at 20% 80%, #87354f, transparent 30%),
        #281b29;

      color: white;
      text-align: center;
      overflow: hidden;
    }

    .cta h2 {
      font-family: "Playfair Display", serif;
      font-size: clamp(45px, 7vw, 90px);
      font-weight: 500;
      line-height: .95;
    }

    .cta p {
      max-width: 500px;
      margin: 25px auto;
      opacity: .8;
      line-height: 1.6;
    }

    .cta button {
      background: white;
      color: var(--black);
      border: none;
      padding: 17px 35px;
      border-radius: 50px;
      font-weight: 700;
      cursor: pointer;
      margin-top: 15px;
      transition: .3s;
    }

    .cta button:hover {
      transform: scale(1.05);
    }

    /* ---------- FOOTER ---------- */

    footer {
      padding: 50px 7%;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #71696b;
    }

    /* ---------- MODAL ---------- */

    .modal {
      position: fixed;
      inset: 0;
      background: rgba(20,15,18,.7);
      backdrop-filter: blur(8px);
      display: none;
      place-items: center;
      z-index: 200;
      padding: 20px;
    }

    .modal.active {
      display: grid;
    }

    .modal-content {
      background: var(--cream);
      max-width: 500px;
      width: 100%;
      padding: 45px;
      border-radius: 30px;
      text-align: center;
      position: relative;
    }

    .modal-content h2 {
      font-family: "Playfair Display", serif;
      font-size: 42px;
      margin-bottom: 15px;
    }

    .modal-content p {
      color: #625b5c;
      line-height: 1.6;
    }

    .close {
      position: absolute;
      right: 20px;
      top: 15px;
      background: none;
      border: none;
      font-size: 25px;
      cursor: pointer;
    }

    .email-input {
      width: 100%;
      margin-top: 25px;
      padding: 16px;
      border-radius: 30px;
      border: 1px solid #ccc;
      background: white;
      font-family: inherit;
    }

    .modal-button {
      width: 100%;
      margin-top: 10px;
      padding: 16px;
      border: none;
      border-radius: 30px;
      background: var(--black);
      color: white;
      cursor: pointer;
      font-weight: 700;
    }

    /* ---------- RESPONSIVE ---------- */

    @media(max-width: 850px) {

      .nav-links {
        display: none;
      }

      .hero {
        grid-template-columns: 1fr;
        padding-top: 130px;
      }

      .hero-visual {
        height: 500px;
      }

      .card-main {
        right: 12%;
      }

      .system-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }

      .cards {
        grid-template-columns: 1fr;
      }

      .experience-grid {
        grid-template-columns: 1fr;
        gap: 60px;
      }

      footer {
        flex-direction: column;
        gap: 15px;
      }
    }

    @media(max-width: 500px) {

      h1 {
        letter-spacing: -2px;
      }

      .hero {
        padding-left: 6%;
        padding-right: 6%;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .hero-visual {
        transform: scale(.85);
        margin-left: -25px;
      }

      .system-card {
        min-height: 350px;
      }

      .cta {
        margin: 20px;
        padding: 80px 20px;
      }

      .modal-content {
        padding: 35px 25px;
      }
    }
  </style>
</head>

<body>

  <!-- NAVIGATION -->

  <nav>
    <div class="logo">VÉNUS</div>

    <ul class="nav-links">
      <li><a href="#como">Cómo funciona</a></li>
      <li><a href="#sistema">El sistema</a></li>
      <li><a href="#resultado">Tu resultado</a></li>
    </ul>

    <button class="nav-button" onclick="openModal()">
      Entrar
    </button>
  </nav>


  <!-- HERO -->

  <section class="hero">

    <div class="hero-copy">

      <div class="eyebrow">
        Your style. Your rules. ✦
      </div>

      <h1>
        Tu estilo<br>
        no debería<br>
        <em>ser genérico.</em>
      </h1>

      <p class="hero-text">
        Descubre qué prendas, colores, siluetas y estéticas
        realmente funcionan contigo combinando
        Kibbe, colorimetría y astrología.
      </p>

      <div class="hero-buttons">

        <button class="primary-btn" onclick="openModal()">
          Descubrir mi estilo →
        </button>

        <button class="secondary-btn" onclick="document.querySelector('#como').scrollIntoView()">
          ¿Cómo funciona?
        </button>

      </div>

    </div>


    <div class="hero-visual">

      <div class="fashion-card card-main"></div>

      <div class="fashion-card card-small"></div>

      <div class="floating tag-kibbe">
        ✦ Soft Gamine
      </div>

      <div class="floating tag-color">
        ◉ Deep Autumn
      </div>

      <div class="floating tag-venus">
        ♡ Venus in Cancer
      </div>

    </div>

  </section>


  <!-- MARQUEE -->

  <div class="marquee">
    <div class="marquee-inner">
      KIBBE ✦ COLORIMETRÍA ✦ VENUS ✦ LILITH ✦ ESTILO PERSONAL ✦ KIBBE ✦ COLORIMETRÍA ✦ VENUS ✦ LILITH ✦ ESTILO PERSONAL ✦
    </div>
  </div>


  <!-- INTRO -->

  <section class="intro">

    <div class="section-label">
      Not another personality test
    </div>

    <h2>
      Porque tu outfit también<br>
      cuenta quién eres.
    </h2>

    <p>
      VÉNUS transforma datos sobre tu cuerpo, tus colores
      y tu carta astral en una identidad visual.
      No para decirte qué debes usar.
      Para ayudarte a descubrir qué se siente como tú.
    </p>

  </section>


  <!-- SYSTEM -->

  <section class="system" id="sistema">

    <div class="system-header">

      <div>
        <div class="section-label">The formula</div>

        <h2 class="section-heading">
          Tres capas.<br>
          Una identidad.
        </h2>
      </div>

      <p>
        Tu estilo no cabe en una sola etiqueta.
        Por eso combinamos estructura, color y personalidad.
      </p>

    </div>


    <div class="cards">

      <div class="system-card kibbe">

        <div class="card-number">01 / SILUETA</div>

        <div>
          <h3>Kibbe</h3>

          <p>
            Descubre las líneas, proporciones y
            siluetas que mejor acompañan tu estructura.
          </p>
        </div>

        <div class="card-symbol">♢</div>

      </div>


      <div class="system-card color">

        <div class="card-number">02 / COLOR</div>

        <div>
          <h3>Colorimetría</h3>

          <p>
            Encuentra tu paleta ideal para ropa,
            maquillaje, accesorios y cabello.
          </p>
        </div>

        <div class="card-symbol">◐</div>

      </div>


      <div class="system-card astro">

        <div class="card-number">03 / ENERGY</div>

        <div>
          <h3>Astrología</h3>

          <p>
            Venus, Lilith y otros placements se
            convierten en referencias de estética,
            expresión y mood.
          </p>
        </div>

        <div class="card-symbol">☽</div>

      </div>

    </div>

  </section>


  <!-- EXPERIENCE -->

  <section class="experience" id="como">

    <div class="experience-grid">

      <div class="experience-copy">

        <div class="section-label">
          Your algorithm
        </div>

        <h2 class="section-heading">
          Tu estilo.<br>
          Pero con<br>
          <em>data.</em>
        </h2>

        <p>
          Respondes unas preguntas, agregas tus datos
          y VÉNUS cruza los resultados para construir
          un perfil visual completamente personalizado.
        </p>


        <div class="steps">

          <div class="step">

            <div class="step-num">1</div>

            <div>
              <h4>Haz los tests</h4>

              <p>
                Silueta + color + astrología.
              </p>
            </div>

          </div>


          <div class="step">

            <div class="step-num">2</div>

            <div>
              <h4>Descubre tu fórmula</h4>

              <p>
                La app cruza tus resultados.
              </p>
            </div>

          </div>


          <div class="step">

            <div class="step-num">3</div>

            <div>
              <h4>Construye tu aesthetic</h4>

              <p>
                Looks, maquillaje, cabello y shopping.
              </p>
            </div>

          </div>

        </div>

      </div>


      <!-- PHONE MOCKUP -->

      <div class="phone-wrapper" id="resultado">

        <div class="phone">

          <div class="phone-screen">

            <div class="phone-logo">
              VÉNUS
            </div>

            <div class="profile-circle"></div>

            <div class="result-title">
              Romantic Rebel
            </div>

            <div class="result-sub">
              SOFT GAMINE · DEEP AUTUMN · VENUS CANCER
            </div>


            <div class="result-box">

              <strong>Your colors</strong>

              <div class="palette">

                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>

              </div>

            </div>


            <div class="result-box">

              <strong>Your silhouettes</strong>

              <p>
                Waist definition · cropped jackets ·
                playful details · structured curves
              </p>

            </div>


            <div class="result-box">

              <strong>Your energy</strong>

              <p>
                Romantic + mysterious + playful.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>


  <!-- CTA -->

  <section class="cta">

    <div class="section-label" style="color:#d99ab4;">
      Ready?
    </div>

    <h2>
      Stop dressing<br>
      for everyone else.
    </h2>

    <p>
      Empieza a construir una estética que se sienta
      como tu propia firma.
    </p>

    <button onclick="openModal()">
      Quiero descubrir mi estilo ✦
    </button>

  </section>


  <!-- FOOTER -->

  <footer>

    <div>
      © 2026 VÉNUS
    </div>

    <div>
      Style is personal. The algorithm is just the beginning.
    </div>

  </footer>


  <!-- MODAL -->

  <div class="modal" id="modal">

    <div class="modal-content">

      <button class="close" onclick="closeModal()">
        ×
      </button>

      <div class="section-label">
        VÉNUS / EARLY ACCESS
      </div>

      <h2>
        Tu aesthetic<br>
        te está esperando.
      </h2>

      <p>
        Déjanos tu correo y sé de las primeras personas
        en probar VÉNUS.
      </p>

      <input
        class="email-input"
        type="email"
        placeholder="tu@email.com"
      >

      <button
        class="modal-button"
        onclick="joinWaitlist()"
      >
        Entrar a la waitlist →
      </button>

    </div>

  </div>


  <script>

    function openModal() {
      document.getElementById("modal").classList.add("active");
    }

    function closeModal() {
      document.getElementById("modal").classList.remove("active");
    }

    function joinWaitlist() {

      const input = document.querySelector(".email-input");

      if (!input.value || !input.value.includes("@")) {

        input.style.borderColor = "#641f38";

        return;

      }

      document.querySelector(".modal-content").innerHTML = `

        <div class="section-label">
          YOU'RE IN ✦
        </div>

        <h2>
          Welcome<br>
          to VÉNUS.
        </h2>

        <p>
          Te avisaremos cuando tu nueva era
          esté lista para comenzar.
        </p>

      `;
    }


    // Cerrar modal al hacer click fuera

    document.getElementById("modal").addEventListener("click", function(e) {

      if(e.target === this) {
        closeModal();
      }

    });


    // Pequeño efecto de movimiento en las etiquetas

    document.addEventListener("mousemove", function(e) {

      const tags = document.querySelectorAll(".floating");

      const x = (window.innerWidth / 2 - e.clientX) / 80;
      const y = (window.innerHeight / 2 - e.clientY) / 80;

      tags.forEach((tag, index) => {

        const factor = (index + 1) * .5;

        tag.style.transform =
          `translate(${x * factor}px, ${y * factor}px)`;

      });

    });

  </script>

</body>
</html>
```