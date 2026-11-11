# VÉNUS — Asesor de imagen y archivo personal

VÉNUS cruza el sistema Kibbe, colorimetría y una capa de expresión astrológica/estética para construir una dirección visual personal. La experiencia está pensada para explorar el estilo, no para imponer una estética única.

## Sistema editorial VÉNUS

La dirección visual toma como referencia el lenguaje de Chrome Hearts Magazine (capturas de la referencia compartida, siete páginas): identidad tipográfica blackletter para acentos y masthead, titulares editoriales de alto contraste, texto funcional sans serif, dobles páginas visuales, composiciones asimétricas, fotografía de archivo, collage, fondos con textura de papel y microtipografía de índice/caption.

La traducción a VÉNUS es deliberadamente propia: la marca conserva una paleta de papel cálido, tinta carbón, acento oxblood y oliva apagado; usa UnifrakturMaguntia como acento display, Cormorant Garamond para titulares y DM Sans para interfaz. El sistema alterna espacios abiertos con bloques densos, numeración editorial, reglas finas, captions y tratamiento fotográfico selectivo (grayscale, sepia o color según el contenido). No se aplica un filtro único a todas las imágenes.

### Arquitectura CSS

- **`styles.css`** contiene tokens, tipografías, textura de papel, reglas, estados de foco, controles, componentes y ajustes responsive compartidos.
- Las páginas HTML cargan el archivo compartido desde el mismo directorio.
- **`index.html`** tiene composición editorial propia: retícula rota, hero asimétrico, placas visuales, numeración, índice y cierre tipo doble página.
- El test, resultados, perfil y Glow Up reciben el lenguaje visual desde `styles.css`. Los estilos locales se consolidan en la hoja compartida; las páginas mantienen JavaScript inline vanilla.

### Responsive y accesibilidad

El sistema incluye breakpoints para móvil (hasta 767 px), tablet (768–1100 px) y escritorio (desde 1200 px), con una composición móvil que conserva jerarquía, asimetría y contraste entre texto e imagen. Se incluyen foco visible, enlace para saltar al contenido, textos alternativos en imágenes y soporte para `prefers-reduced-motion`.

La hoja compartida incluye reglas para 375, 768 y 1440 px. La prueba visual manual en esos tres viewports y la revisión con teclado deben registrarse antes de declarar validado el responsive. No se afirma haber completado capturas de QA sin una inspección real.

## Experiencia principal

- **Test modular VÉNUS:** observaciones Kibbe, comparaciones cromáticas, siete esencias de estilo y Venus astrológico ingresado manualmente.
- **Kibbe:** hipótesis orientativa a partir de línea vertical, estructura, distribución de volumen, proporciones y escala. El resultado muestra alternativas cercanas y nivel cualitativo de evidencia.
- **Colorimetría:** dimensiones de temperatura, valor y croma, con una comparación estacional complementaria. Las 12 estaciones se presentan como hipótesis que requieren confirmación física.
- **Esencias:** mezcla relativa de Dramatic, Natural, Classic, Gamine, Romantic, Ingenue y Angelic.
- **Venus:** recomendación creativa separada que no modifica los resultados de silueta o color.
- **Progreso:** las respuestas y el módulo actual se guardan en `localStorage` para retomar el cuestionario en el mismo navegador.
- **Resultados:** explicación de señales, alternativas cercanas, observaciones mixtas y limitaciones.
- **Perfil y Glow Up:** conservan sus flujos previos y el puente de perfil local.

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


## Dirección editorial impresa — Part 07

La portada ahora funciona como una cubierta editorial a doble página: fotografía a sangre en una página y bloque negro tipográfico en la otra, con lomo central, folios, marcas de corte, cruces, créditos de imagen y microtipografía. El resto de la home continúa con spreads asimétricos, departamentos visuales y un cierre de contraportada. La textura combina grano fotográfico y papel gris, con acentos rojo oscuro y plata; las imágenes de Unsplash reciben tratamientos monocromos de alto contraste y duotono discreto.

El mismo archivo `styles.css` se carga desde la portada, el test, el archivo visual, Glow Up y el perfil. En escritorio, el sistema conserva la lectura enfrentada; en móvil, cada spread se convierte en una secuencia vertical para evitar columnas comprimidas. Se mantienen HTML, CSS y JavaScript vanilla, sin nuevas dependencias de ejecución. La lógica de preguntas, resultados y cálculo del test no se modifica en esta entrega.


## Capturas de QA

Pendientes de generar tras la inspección visual real de los viewports 375, 768 y 1440 px. No se incluyen capturas simuladas ni placeholders presentados como evidencia.


## Modelo metodológico V3

Consulta `METODOLOGIA.md` para el detalle de fuentes, variables, reglas de interpretación, límites y roadmap. El test separa cuatro capas:

1. **Kibbe:** hipótesis de imagen basada en observaciones de línea, estructura y proporción; no diagnóstico anatómico.
2. **Colorimetría:** temperatura, valor y croma, con una pregunta de familia estacional para orientar una de las doce subestaciones.
3. **Esencias:** distribución relativa de siete lenguajes visuales, basada en elecciones de armonía.
4. **Venus:** inspiración simbólica opcional, ingresada manualmente.

La confianza se expresa como nivel cualitativo de evidencia y consistencia. No se publican porcentajes de exactitud ni se afirma validación científica.

## Capturas de la interfaz

Las capturas de escritorio y móvil deben añadirse después de la verificación visual final. No se incluyen imágenes simuladas como evidencia de QA.

## Archivo / Referencias y derechos de imagen

Se añadió `archivo.html`, un índice editorial que documenta las once páginas del PDF de referencias, con folios, captions y notas de procedencia. La página registra 32 fotografías en las páginas 8–11 mediante fichas individuales; no las reproduce públicamente por falta de licencias verificables. El PDF contiene 39 objetos rasterizados extraíbles: un recurso de página en cada una de las páginas 1–7 y ocho fotografías independientes en cada una de las páginas 8–11 (32 fotografías). El PDF no aporta créditos verificables completos ni licencias de publicación para cada imagen, así que esas fotografías se documentan como referencias, pero no se copian al sitio público ni al deploy.

En lugar de republicar fotografías de terceros, se añadieron tres ilustraciones vectoriales originales en `assets/img/`, reutilizadas en home, test, moodboard de resultados y Glow Up:
- `venus-editorial-punk.svg`
- `venus-editorial-lace.svg`
- `venus-editorial-romantic.svg`

Estas placas reinterpretan la dirección de arte general (punk, corsetería, encaje sugerido, romanticismo y burgundy) sin copiar las imágenes fuente. Se retiraron las URLs de Unsplash de home y del test.

### Extracción local para estudio privado

Para extraer las imágenes originales del PDF en una carpeta local, instala Poppler y ejecuta desde la raíz del repositorio:

```bash
mkdir -p reference-source/pages-08-11
pdfimages -f 1 -l 11 -all "referencias visuales.pdf" reference-source/plate
```

Esto genera 39 archivos `plate-000.*` en adelante. Los recursos 1–7 son composiciones rasterizadas de página completa; las páginas 8–11 contienen ocho fotografías independientes por página. Para organizarlos por página, usa `pdfimages -list` y conserva el orden de los objetos. No subas esa carpeta a GitHub/Vercel hasta tener autorización de los titulares de derechos. El índice público no necesita esos archivos.

## Mejoras adicionales

- Se añadió navegación directa a Archivo desde home, test, perfil y Glow Up.
- Glow Up integra un pequeño moodboard de las tres placas originales para conectar el archivo con el diario y el plan de estilo.
- Se añadieron microinteracciones discretas en imágenes y spreads; respetan `prefers-reduced-motion`.
- Se reforzó el foco visible para navegación por teclado.
- Glow Up ya contiene un diario de estilo y la Story Card de perfil conserva su función de compartir/descargar; ahora conviven con el archivo editorial.
- Se documenta el límite de derechos en vez de inventar créditos fotográficos.
