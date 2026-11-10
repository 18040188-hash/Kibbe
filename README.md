# VÉNUS — Asesor de imagen y archivo personal

VÉNUS cruza el sistema Kibbe, colorimetría y una capa de expresión astrológica/estética para construir una dirección visual personal. Es una experiencia editorial pensada para explorar el estilo, no para imponer una estética única.

## Experiencia principal

- **Test de estilo:** el cuestionario actual de Kibbe y colorimetría conserva su lógica y sus criterios originales.
- **Reveal cinematográfico:** al terminar el test, aparece una pantalla oscura con entrada editorial, arquetipo, fórmula y swatches animados.
- **Guardar identidad VÉNUS:** el nombre es opcional. La fórmula, paleta, prendas y metadatos del resultado se guardan en `localStorage` del navegador.
- **Mi perfil VÉNUS:** `perfil.html` recupera la identidad guardada y presenta arquetipo, paleta y prendas sugeridas.
- **Story Card:** genera una imagen PNG vertical de 1080 × 1920, descargable o compartible mediante Web Share API cuando el navegador lo permite.
- **Inspiración:** búsquedas personalizadas de Pinterest, referencias visuales y acceso manual a ALTA.
- **Glow Up:** el perfil guardado mantiene el puente con `glowup.html`.

## Ejecutar localmente

Abre `app-v2.html` en un navegador moderno. Para probar guardado y compartir, utiliza localhost o el deploy HTTPS, ya que algunas APIs del navegador requieren un contexto seguro.

## Archivos principales

| Archivo | Función |
|---|---|
| `index.html` | Landing de entrada |
| `app.html` | Ruta de compatibilidad |
| `app-v2.html` | Test y resultados VÉNUS |
| `perfil.html` | Perfil personal y Story Card |
| `glowup.html` | Experiencia Glow Up |
| `test.html` | Ruta de compatibilidad |
| `visual-test.html` | Pruebas visuales |

## Tecnologías

HTML, CSS y JavaScript vanilla; Google Fonts; imágenes de Unsplash; `localStorage`; Canvas 2D; Web Share API con fallback de descarga.

## Privacidad y límites

El perfil se guarda localmente en el navegador. No existe sincronización entre dispositivos ni cuenta de usuario en servidor. Si se borra el almacenamiento del navegador, el perfil local puede perderse. La Story Card se genera en el dispositivo. La información astrológica solo se presenta si el resultado del test la proporciona; esta versión no calcula una carta natal a partir de fecha, hora y lugar de nacimiento.

## Estado de implementación

La versión actual incluye el reveal de resultados y el perfil local con exportación de Story Card. Las funciones de comunidad, sincronización en nube, API de explicación con IA y PWA quedan como siguientes etapas y no deben presentarse como ya disponibles.
