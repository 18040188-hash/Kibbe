# VÉNUS — Asesor de imagen y archivo personal

VÉNUS cruza el sistema Kibbe, colorimetría y una capa de expresión astrológica/estética para construir una dirección visual personal. La experiencia está pensada para explorar el estilo, no para imponer una estética única.

## Sistema editorial VÉNUS

La dirección visual toma como referencia el lenguaje de Chrome Hearts Magazine (capturas de la referencia compartida, siete páginas): identidad tipográfica blackletter para acentos y masthead, titulares editoriales de alto contraste, texto funcional sans serif, dobles páginas visuales, composiciones asimétricas, fotografía de archivo, collage, fondos con textura de papel y microtipografía de índice/caption.

La traducción a VÉNUS es deliberadamente propia: la marca conserva una paleta de papel cálido, tinta carbón, acento oxblood y oliva apagado; usa UnifrakturMaguntia como acento display, Cormorant Garamond para titulares y DM Sans para interfaz. El sistema alterna espacios abiertos con bloques densos, numeración editorial, reglas finas, captions y tratamiento fotográfico selectivo (grayscale, sepia o color según el contenido). No se aplica un filtro único a todas las imágenes.

### Arquitectura CSS

- **`styles.css`** contiene tokens, tipografías, textura de papel, reglas, estados de foco, controles, componentes y ajustes responsive compartidos.
- Las páginas HTML cargan el archivo compartido desde el mismo directorio.
- **`index.html`** tiene composición editorial propia: retícula rota, hero asimétrico, placas visuales, numeración, índice y cierre tipo doble página.
- El test, resultados, perfil y Glow Up conservan su estructura y comportamiento, pero reciben el lenguaje visual compartido mediante `styles.css`.

### Responsive y accesibilidad

El sistema incluye breakpoints para móvil (hasta 767 px), tablet (768–1100 px) y escritorio (desde 1200 px), con una composición móvil que conserva jerarquía, asimetría y contraste entre texto e imagen. Se incluyen foco visible, enlace para saltar al contenido, textos alternativos en imágenes y soporte para `prefers-reduced-motion`.

La hoja compartida está preparada para 375, 768 y 1440 px. La revisión automatizada o manual en navegador de esos tres viewports debe completarse antes de considerar validada la presentación responsive; la presencia de media queries no equivale por sí sola a una prueba visual.

## Experiencia principal

- **Test de estilo:** el cuestionario actual de Kibbe y colorimetría conserva su lógica y sus criterios originales.
- **Reveal cinematográfico:** al terminar el test, aparece una pantalla de resultados con arquetipo, fórmula y swatches.
- **Guardar identidad VÉNUS:** el nombre es opcional. La fórmula, paleta, prendas y metadatos se guardan en `localStorage`.
- **Mi perfil VÉNUS:** `perfil.html` recupera la identidad guardada.
- **Story Card:** genera una imagen PNG vertical de 1080 × 1920, descargable o compartible mediante Web Share API cuando el navegador lo permite.
- **Inspiración:** búsquedas personalizadas de Pinterest, referencias visuales y acceso manual a ALTA.
- **Glow Up:** conserva el flujo de plan, diario, evolución y chat.

## Archivos principales

| Archivo | Función |
|---|---|
| `index.html` | Portada editorial |
| `styles.css` | Sistema visual compartido |
| `app.html` | Ruta de compatibilidad al test |
| `app-v2.html` | Test y resultados |
| `perfil.html` | Perfil personal y Story Card |
| `glowup.html` | Experiencia Glow Up |
| `test.html` | Ruta de compatibilidad |
| `visual-test.html` | Pruebas visuales del test |

## Ejecutar localmente

Abre `index.html` para la portada o `app-v2.html` para iniciar el test. Para probar guardado y compartir, utiliza localhost o el deploy HTTPS, ya que algunas APIs del navegador requieren un contexto seguro.

## Tecnologías

HTML, CSS y JavaScript vanilla; Google Fonts; imágenes de Unsplash; `localStorage`; Canvas 2D; Web Share API con fallback de descarga. No se añadieron frameworks ni dependencias de JavaScript.

## Privacidad y límites

El perfil se guarda localmente en el navegador. No existe sincronización entre dispositivos ni cuenta de usuario en servidor. Si se borra el almacenamiento del navegador, el perfil local puede perderse. La Story Card se genera en el dispositivo. La información astrológica solo se presenta si el resultado del test la proporciona; esta versión no calcula una carta natal a partir de fecha, hora y lugar de nacimiento.


## Dirección editorial ampliada — Issue 02

La experiencia se acerca más a una revista independiente: el test se presenta como una sección interactiva de la publicación, con masthead, folios, jerarquía editorial, retícula asimétrica en escritorio, numeración de progreso y resultados construidos como una portada y una serie de páginas editoriales. La lectura del cuestionario conserva prioridad funcional: opciones legibles, estados seleccionados claros, controles rectangulares y foco visible.

La galería de inspiración del resultado utiliza una selección más coherente de fotografía de moda editorial alojada en Unsplash. En el test visual, las imágenes dejaron de depender del endpoint aleatorio retirado `source.unsplash.com` y usan identificadores estables de imágenes. Los textos alternativos y captions siguen siendo específicos de cada resultado. El tratamiento fotográfico es selectivo: monocromo, contraste y sepia moderados, sin aplicar un filtro idéntico a todas las imágenes.

En Glow Up, el panel principal adopta una presentación de archivo/editorial mientras conserva la navegación inferior y las interacciones de seguimiento. La capa visual no modifica los datos, cálculos ni el almacenamiento local del producto.
