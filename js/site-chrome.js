/**
 * Shared site chrome (header, nav, footer). Edit this file once; all pages load it.
 * Each page sets <body data-site-page="home|obras|tech"> for the active nav link.
 */
(function () {
  const page = document.body.dataset.sitePage || "home";

  const SITE_HEADER = `
<header>
  <h1>Rafael Lozano-Hemmer</h1>
  <p>Interactividad, espacio público y arte tecnológico</p>
</header>
`;

  const NAV_LINKS = [
    { id: "home", href: "index.html", label: "Inicio" },
    { id: "obras", href: "obras.html", label: "Obras" },
    {
      id: "tech",
      href: "tecnologia.html",
      label: "Tecnología e Interactividad",
    },
  ];

  function buildNav() {
    const items = NAV_LINKS.map((link) => {
      const current = page === link.id ? ' aria-current="page"' : "";
      return `        <li><a href="${link.href}"${current}>${link.label}</a></li>`;
    }).join("\n");
    return `
<nav aria-label="Principal">
  <ul>
${items}
  </ul>
</nav>`;
  }

  const SITE_FOOTER = `
<footer id="contacto">
  <address aria-label="Contacto">
    Para contactarse escribir a
    <a href="mailto:rafael@artedigital.com">rafael@artedigital.com</a>
  </address>
  <p>
    <small>
      Nota: Los textos fueron generados por ChatGPT y adaptados a la consigna.
      Pueden contener errores. Las imágenes fueron recopiladas de Internet
      únicamente para su uso en este parcial.
    </small>
  </p>
</footer>
`;

  function replaceWithTemplate(markerId, html) {
    const marker = document.getElementById(markerId);
    if (!marker) return;
    const tpl = document.createElement("template");
    tpl.innerHTML = html.trim();
    const nodes = [...tpl.content.children];
    marker.replaceWith(...nodes);
  }

  replaceWithTemplate(
    "site-chrome-top",
    `${SITE_HEADER.trim()}\n${buildNav().trim()}`
  );
  replaceWithTemplate("site-chrome-bottom", SITE_FOOTER);
})();
