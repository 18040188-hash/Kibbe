# METODOLOGÍA VÉNUS — MVP modular

**Versión:** 3.0  
**Implementación:** HTML, CSS y JavaScript vanilla  
**Alcance:** cuestionario orientativo de imagen personal; no es diagnóstico clínico ni certificación profesional.

## 1. Principio de diseño

VÉNUS separa cuatro capas que responden preguntas distintas. Ninguna debe corregir ni determinar los resultados de otra:

1. **Kibbe:** hipótesis de líneas y recomendaciones de silueta.
2. **Colorimetría:** hipótesis de familia estacional a partir de temperatura, valor y croma.
3. **Esencias de Kitchener:** mezcla descriptiva de siete lenguajes visuales.
4. **Venus astrológico:** recomendación creativa simbólica, ingresada manualmente.

La experiencia es modular y guarda respuestas, módulo y pregunta actual en `localStorage`. El almacenamiento es local al navegador y no sincroniza entre dispositivos.

## 2. Kibbe: observaciones → hipótesis

### Variables recogidas

- Línea vertical percibida en fotografía frontal de cuerpo entero.
- Contorno del armazón: anguloso, ancho/romo, redondeado o equilibrado.
- Distribución general de volumen: lineal, suave o mixta.
- Relación visual hombros/caderas.
- Escala de detalle.
- Impresión general de líneas.

### Regla de interpretación

La matriz de decisión prioriza la combinación de línea vertical y armazón. Las demás observaciones matizan el resultado y permiten reportar alternativas cercanas y contradicciones. La implementación es una heurística propia de VÉNUS, no una tabla de puntuación oficial ni una reproducción íntegra del método de Kibbe. La implementación no afirma reproducir el proceso completo de David Kibbe ni sustituye una evaluación experta de líneas y caída de prendas.

El nivel de evidencia es cualitativo:
- **Bajo:** pocas respuestas o contradicción entre la impresión general y las observaciones principales.
- **Medio:** observaciones suficientes sin contradicción fuerte.
- **Alto:** varias observaciones se corroboran entre sí.

Este nivel expresa consistencia interna de las respuestas, no probabilidad estadística de acertar.

### Límites

Kibbe es un sistema de imagen, no una clasificación científica del cuerpo. Las ilustraciones esquemáticas ayudan a comparar líneas; no son plantillas antropométricas ni pruebas diagnósticas. Peso, talla de ropa, belleza y celebridades no se usan como evidencia anatómica.

## 3. Colorimetría: 12 estaciones

La interfaz presenta comparaciones de swatches digitales en cinco pasos conceptuales:

- **Temperatura:** cálida frente a fría.
- **Valor:** clara frente a profunda.
- **Croma:** brillante frente a suavizada.
- **Familia estacional:** primavera, verano, otoño o invierno.

La familia estacional y las dimensiones se combinan para sugerir una subestación entre las doce: Light/True/Bright Spring; Light/True/Soft Summer; Soft/True/Deep Autumn; Bright/True/Deep Winter. La subestación sugerida combina la familia elegida con valor y croma observados; si la combinación es ambigua, el resultado queda pendiente de confirmar. Las estaciones vecinas se muestran como alternativas para revisión.

La dimensión primaria no debe interpretarse como un diagnóstico definitivo. La pantalla, el brillo, el perfil de color del dispositivo, la cámara y la iluminación alteran los swatches. **La prueba recomendada es el drapeado físico con telas, bajo luz neutra y sin maquillaje.**

El nivel de evidencia es bajo cuando las respuestas no son consistentes o faltan dimensiones. La estación es orientativa incluso cuando las respuestas coinciden.

## 4. Siete esencias

Se presentan siete lenguajes visuales: Dramatic, Natural, Classic, Gamine, Romantic, Ingenue y Angelic. Siete preguntas de armonía visual asignan una elección por pregunta. La distribución porcentual se calcula como frecuencia de elecciones sobre el total respondido.

Los porcentajes son una representación descriptiva del cuestionario, **no una escala psicométrica validada ni una medición objetiva de la identidad**. Las esencias pueden coexistir y las recomendaciones se deben probar en prendas reales.

## 5. Venus: recomendación creativa

La persona ingresa manualmente su signo de Venus o selecciona “No lo sé”. El signo solo genera una sugerencia estética simbólica de prendas, texturas o accesorios. No cambia Kibbe, colorimetría ni esencias.

**Fuera del MVP:** cálculo automático de carta natal mediante fecha, hora y lugar de nacimiento. Se considera trabajo futuro, sujeto a una fuente astronómica/astrológica fiable, consentimiento y explicación de la incertidumbre de la hora de nacimiento.

## 6. Experiencia y privacidad

- Cuatro módulos: Kibbe, color, esencias y Venus. El tiempo estimado depende del ritmo de observación y no está validado con participantes.
- Progreso por módulo y pregunta; guardado local en `localStorage`.
- La persona puede cerrar y retomar en el mismo navegador.
- No hay cuenta ni sincronización en servidor.
- No introducir datos sensibles innecesarios.
- Los resultados se presentan por separado y explican observaciones, alternativas y límites.

## 7. Fuentes consultadas

Estas fuentes orientan la organización conceptual. No implican aval ni validación del algoritmo de VÉNUS.

- The Concept Wardrobe, [Seasonal Color Analysis: Which Colour Season Are You?](https://theconceptwardrobe.com/colour-analysis-comprehensive-guides/seasonal-color-analysis-which-color-season-are-you)
- The Concept Wardrobe, [The Kibbe Body Type Test](https://theconceptwardrobe.com/kibbe-body-types/the-kibbe-body-type-test)
- Our Fashion Garden, [Kibbe Body Type Quiz](https://ourfashiongarden.com/kibbe-body-type-quiz/)
- The Concept Wardrobe, [Capsule Wardrobe: A Comprehensive Guide](https://theconceptwardrobe.com/capsule-wardrobe-a-comprehensive-guide)
- The Concept Wardrobe, [What Are the 7 Style Essences?](https://theconceptwardrobe.com/7-style-essences/what-are-style-essences)
- Glamour España, [Qué es el signo Venus y por qué hay que vestir de acuerdo con él](https://www.glamour.es/articulos/que-es-el-signo-venus-y-por-que-hay-que-vestir-de-acuerdo-con-el)

## 8. Capturas

No se añaden capturas ficticias. Las capturas de escritorio y móvil deben incorporarse después de ejecutar y revisar la interfaz real en 375, 768 y 1440 px.

## 9. Validación pendiente

La existencia de breakpoints y reglas responsive no equivale a una prueba visual. Antes de declarar el MVP validado deben completarse pruebas manuales en 375, 768 y 1440 px, además de comprobar navegación por teclado, lector de pantalla, recuperación de progreso, reinicio y contraste. El proyecto no incluye aún un estudio con participantes ni validación externa de resultados.

## 10. Roadmap

- Sesiones de prueba moderadas con participantes diversos.
- Comparación de resultados con asesoría profesional independiente.
- Refinamiento de ilustraciones originales y documentación de sus proporciones.
- Prueba de drapeado físico como complemento de colorimetría.
- Capturas verificadas de 375, 768 y 1440 px.
- Cálculo opcional de carta natal con fecha, hora y lugar, fuera del MVP actual.


## 11. Archivo visual y procedencia

El PDF “referencias visuales.pdf” contiene once páginas. Para el inventario se extrajeron 39 objetos rasterizados: una composición por página en las páginas 1–7 y ocho imágenes independientes por página en las páginas 8–11 (32 fotografías). El índice documental conserva la numeración de página y figura, captions y notas de procedencia. La autoría individual que no aparece acreditada se identifica como desconocida; no se inventan créditos.

Las tres placas vectoriales originales (`assets/img/venus-editorial-punk.svg`, `venus-editorial-lace.svg` y `venus-editorial-romantic.svg`) son reinterpretaciones de dirección de arte y deben permanecer diferenciadas de las fotografías de referencia. No forman parte del logotipo ni representan a Chrome Hearts u otra marca externa. VÉNUS no afirma afiliación, patrocinio ni autorización de esas marcas.


## 12. Mejoras UX y accesibilidad añadidas

- Navegación persistente al Archivo desde home, test, perfil y Glow Up para conectar la dirección de arte con el producto.
- Microinteracciones de hover en spreads e imágenes para dar respuesta táctil al lenguaje editorial, sin animación obligatoria.
- Refuerzo de `:focus-visible` para enlaces, controles y elementos interactivos.
- Regla `prefers-reduced-motion` para minimizar transiciones y animaciones cuando el sistema lo solicita.
- Se conserva el diario de estilo existente en Glow Up y la Story Card existente en perfil; no se duplican funcionalidades.
- Se retiraron las referencias remotas a Unsplash de home y test y se reemplazaron por placas vectoriales originales.


Las placas vectoriales originales se integran también en la home, en el moodboard del resultado y en el inicio de Glow Up. La mejora conecta la referencia con la experiencia práctica sin convertir la fotografía de terceros en un recurso público sin licencia.

## 13. Política de uso de imágenes de referencia

El proyecto VÉNUS es un proyecto final escolar de evaluación académica, sin distribución comercial prevista y destinado a revisión por la autora y el profesor evaluador. Dentro de ese contexto, las imágenes del PDF se consideran material de estudio para análisis de dirección de arte. La política de uso del proyecto es:

- Rotular cada aparición de las imágenes con el texto: “Material de referencia visual con fines académicos. Reproducido bajo uso educativo para análisis de dirección de arte en el marco del proyecto VÉNUS.”
- En `archivo.html`, presentar las imágenes como índice documental, numeradas y acompañadas por una ficha/caption y por la procedencia disponible.
- En moodboards, resultados y Glow Up, seleccionar referencias de las páginas 8–11 e incluir el rótulo académico en la sección visible.
- No utilizar las fotografías como identidad de marca, logotipo ni activos originales. No registrarlas como creaciones de VÉNUS ni borrar su procedencia.
- Mantener las tres ilustraciones SVG originales como interpretación de dirección de arte, diferenciadas visualmente de las fotografías fuente.
- Si el autor o titular no puede identificarse a partir del documento, declararlo expresamente como no identificado; no inventar nombres ni créditos.

Esta política describe el propósito, el alcance y el tratamiento interno de las imágenes dentro del proyecto. No constituye una determinación legal de *fair use* o de una excepción equivalente en todas las jurisdicciones. El rótulo académico documenta el contexto de uso, pero no sustituye una licencia ni garantiza por sí solo la legalidad de cualquier reproducción. La app incluye directivas `noindex,nofollow,noarchive` y un `robots.txt` restrictivo para desalentar la indexación; estas medidas no convierten una URL pública en un espacio privado ni impiden que terceros accedan al contenido si conocen la dirección.



## 9. Referencias visuales y trazabilidad

El PDF de inspiración entregado para este proyecto tiene 11 páginas. La inspección del archivo confirmó siete imágenes/placas en las páginas 1–7 y 32 fotografías individuales en las páginas 8–11. Estas referencias se consideran material de dirección de arte, no evidencia para clasificar tipos corporales, estaciones cromáticas o esencias. No deben intervenir en el scoring ni presentarse como validación empírica de los sistemas.

Las fotografías individuales no tienen atribución completa de autoría/licencia visible en el documento. La nota de uso académico y no comercial es una declaración de contexto, no una autorización ni una sustitución de créditos. Antes de una publicación pública o comercial se deben obtener permisos/licencias o reemplazar las imágenes por material con derechos documentados.

## 10. Navegación y validación

La navegación compartida se implementa en `assets/js/navigation.js`. Los cinco destinos principales son Inicio, Test, Perfil, Glow Up y Archivo. El script asigna `aria-current="page"`, controla el menú móvil y actualiza `aria-expanded`. Los breakpoints de navegación se sitúan en 680 px y 375 px.

La revisión de código confirma que las cinco páginas cargan el script común. El deployment asociado al commit `37c967b79b540ab9cf5469a991248c73c76b9279` fue reportado como READY por Vercel. La comprobación manual de cada clic y las capturas de QA en 375, 768 y 1440 px quedan pendientes de una sesión de navegador interactiva; no se infiere su éxito a partir de que el build esté listo.


## 14. Registro técnico de navegación y activos — 11 nov 2026

El menú compartido se inicializa sobre los elementos `[data-global-nav]`, con independencia de que el contenedor sea un `nav` dentro del masthead o del topbar. El script marca la página activa, expone el estado con `aria-expanded`, admite cierre con Escape y cierra el menú al seguir un enlace en móvil. Se corrigió el cierre explícito del `nav` en el masthead de Home.

El PDF adjunto se inspeccionó directamente: 11 páginas, siete placas rasterizadas en las páginas 1–7 y 32 fotografías individuales en las páginas 8–11. Se generaron 39 JPEG locales para preparar su incorporación. **La publicación de esos binarios en `assets/img/pdf/` y su aparición en los moodboards/galerías todavía no está completada**; hasta entonces las páginas conservan las ilustraciones SVG originales. El rótulo académico del Archivo documenta el contexto de uso, pero no se presenta como autorización de terceros.

La revisión realizada en esta entrega es estática. No equivale a una prueba manual de clics ni a QA visual en 375, 768 y 1440 px; esas verificaciones permanecen pendientes.
