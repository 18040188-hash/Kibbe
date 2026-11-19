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


## 15. Incidencia de scroll y ejecución del test — 11 nov 2026

Se aisló una regla CSS `html, body { height:100%; overflow:hidden }` procedente del diseño de pantalla completa de Glow Up que se había aplicado globalmente. Esto bloqueaba el desplazamiento normal en Home, Test, Perfil y Archivo. Se limitó el bloqueo a `html:has(body.glowup-page)` y `body.glowup-page`; el contenedor `.scroll-area` conserva el scroll táctil interno únicamente en Glow Up.

En `app-v2.html`, la pregunta de familia estacional (`cl_family`) tenía un cierre de corchetes incorrecto dentro de las opciones de color. El error producía `SyntaxError: Unexpected token ')'` al analizar el script completo, impidiendo ejecutar `renderGenderScreen()`. Se corrigió el cierre y se validó el parseo de los scripts inline de las cinco páginas.

La validación anterior es estática (parseo JavaScript); queda pendiente la prueba de interacción real y la inspección visual en 375, 768 y 1440 px.


## 11. Navegación y retroceso del cuestionario

Cada pregunta, excepto la primera, ofrece una acción de retroceso al elemento anterior. En la primera pregunta se ofrece “Cambiar perfil”, que regresa a la pantalla inicial. Si la persona selecciona un perfil diferente, las respuestas anteriores se reinician para evitar combinar datos recogidos bajo perfiles distintos. El progreso se conserva localmente mientras se mantiene el mismo perfil.

Se eliminó una referencia a variables de resultado que estaban fuera del ámbito de la función de avance. La transición entre preguntas ya no intenta ejecutar el diálogo de revelación antes de calcular el moodboard final.

## 12. Presentación desglosada del resultado

El resultado se organiza como un atlas editorial en dos niveles:

- **Lectura metodológica:** hipótesis de silueta, observaciones usadas, alternativas cercanas y consistencia cualitativa; estación de color, dimensiones de temperatura/valor/croma y estaciones vecinas; porcentaje descriptivo de las siete esencias; recomendación simbólica Venus separada.
- **Aplicación al guardarropa:** figura esquemática, proporciones, prendas por categoría, capas, accesorios, texturas, elementos de expresión, cabello, maquillaje, puntos a ajustar y una receta orientativa de outfit.

La dirección gráfica toma como referencia la lámina Dark Romantic Academia compartida por la autora: paleta organizada, retícula editorial, captions y fichas por categoría. No se fuerza esa estética sobre todos los resultados. La fórmula y las recomendaciones se mantienen vinculadas a las respuestas individuales. Las sugerencias de prendas son exploratorias, no reglas obligatorias.


## 14. Revisión comparativa de fuentes y cambios VÉNUS V3

### Análisis de color estacional
La guía de The Concept Wardrobe estructura el análisis alrededor de temperatura (hue), valor y croma, y trata el contraste como un indicador relacionado con el valor. También explica que cabello, ojos y piel componen la coloración natural, y que la estación se obtiene comparando esas dimensiones, no asignando una temporada por un único rasgo. VÉNUS incorpora una ficha de color natural (cabello, ojos, profundidad y subtono de piel, contraste), mantiene preguntas comparativas de drapeado para temperatura/valor/croma y muestra una alerta si el subtono autoobservado no coincide con el resultado de las comparaciones. La pantalla se declara orientativa y recomienda confirmar con telas físicas y luz neutra. Se amplía la cobertura a doce etiquetas estacionales.
Fuente: https://theconceptwardrobe.com/colour-analysis-comprehensive-guides/seasonal-color-analysis-which-color-season-are-you

### Línea y estructura corporal (Kibbe)
The Concept Wardrobe separa estructura ósea, carne corporal y rasgos faciales, y explica que la línea vertical es una percepción de proporción, no una conversión directa de centímetros. Our Fashion Garden propone observar fotos de cuerpo entero tomadas a la altura del pecho y comparar contornos ilustrados para reducir la influencia de sombras y perspectivas. VÉNUS añade una guía de captura y diez señales sobre línea, estructura, volumen, hombros/cadera, escala, extremidades, manos/pies, cintura y rasgos faciales. La estatura real se recoge por separado y no decide el tipo. El rostro tiene peso complementario, no sustituye las líneas del cuerpo. La puntuación muestra alternativas y evidencia cualitativa; no se presenta como una clasificación oficial ni como certeza científica.
Fuentes:
- https://theconceptwardrobe.com/kibbe-body-types/the-kibbe-body-type-test
- https://ourfashiongarden.com/kibbe-body-type-quiz/

### Esencias visuales
The Concept Wardrobe define las esencias como armonía entre líneas naturales del rostro/cuerpo y las líneas de la ropa, y advierte que no son un análisis de personalidad. VÉNUS conserva las siete esencias como capa descriptiva separada de la estética elegida por la persona, evitando deducir personalidad o valor estético de una puntuación.
Fuente: https://theconceptwardrobe.com/7-style-essences/what-are-style-essences

### Armario cápsula / guardarropa funcional
La guía de The Concept Wardrobe advierte que una cápsula no debe reducirse a una lista universal ni a un número mágico: debe responder al estilo, la apariencia, el gusto y la vida real de quien la usa. VÉNUS incorpora contexto de estudio/trabajo/vida diaria, clima, presupuesto y objetivo, y propone prendas prioritarias desde el resultado de silueta y color. La recomendación se formula como punto de partida editable, no como lista obligatoria.
Fuente: https://theconceptwardrobe.com/capsule-wardrobe-a-comprehensive-guide

### Experiencia y facilidad de uso
Se reorganizó el test en siete módulos progresivos y 38 preguntas:  rasgos naturales, silueta, color, esencias, dirección estética, contexto de guardarropa y capa astrológica opcional. Se añadió entrada numérica validada para estatura (opcional), guardado local V3, guía de fotografía, indicadores de progreso dinámicos, retroceso y opción de no declarar datos de color desconocidos. Las preguntas de perfil incluyen respuestas “No lo sé” para no obligar a adivinar. El resultado incluye ficha natural, informe metodológico, Style Atlas y propuesta de cápsula.


## 14. Style Lab / herramientas de experimentación

`atelier.html` conecta la fórmula guardada del test con un espacio de trabajo local. Incluye:

- **Style DNA:** recupera la fórmula y contexto guardados en `venusSavedLook` o `venusGlowUpProfile`. Si no hay resultado guardado, permite explorar el resto del laboratorio sin inventar un diagnóstico.
- **Armario digital:** registro de prendas, categorías, color, ocasión, notas y foto opcional. Las imágenes se redimensionan a un máximo aproximado de 900 px y se comprimen a JPEG antes de almacenarse.
- **Outfit formulas:** selecciona aleatoriamente prendas existentes de distintas categorías. No interpreta armonía ni utiliza IA; solo ayuda a combinar inventario registrado.
- **Moodboard:** referencias propias, URL, tags y notas. Las imágenes externas pueden dejar de cargar si la URL cambia o limita hotlinking.
- **Diario de experimentos:** registra título, fecha, sensación, intención de repetir y aprendizajes.
- **Shopping check:** compara categoría y color con el inventario y sugiere pensar en combinaciones/costo por uso. No es un recomendador financiero ni conoce el presupuesto real si no se introduce.
- **Exportaciones:** Style Card PNG y backup/importación JSON.

### Privacidad y límites

Los módulos usan `localStorage` del navegador. No se suben fotos ni notas a un servidor VÉNUS, no hay login, sincronización o IA. Las imágenes comprimidas siguen consumiendo la cuota local de almacenamiento; el usuario puede exportar sus datos antes de borrar el navegador. Los resultados de combinación son reglas heurísticas/aleatorias, no una evaluación profesional. El Style Lab no reemplaza la precisión del test ni pretende validar científicamente estilos.


## 15. Integración visual del Style Lab con el diagnóstico

La interfaz de `atelier.html` incorpora un hero editorial, contador de inventario/referencias/experimentos, dashboard Style DNA, swatches de la paleta y selección de prendas sugeridas desde `profile.garments`. En el resultado de `app-v2.html` aparece un puente visual hacia el laboratorio que muestra la paleta y silueta/color/expresión del diagnóstico. El CTA guarda el perfil en localStorage antes de navegar para que el laboratorio recupere la fórmula.

La intención es convertir el resultado en acciones de estilo cotidianas: registrar prendas, crear combinaciones, guardar referencias y experimentar. Las recomendaciones siguen siendo heurísticas y las sugerencias de prendas provienen del propio perfil calculado, no de una evaluación visual nueva.

## 16. Refinamiento adaptativo y uso práctico

La prueba conserva respuestas repetidas para comparar autoobservaciones cromáticas. Cuando las dos respuestas de temperatura, valor o croma no coinciden, se incorpora una pregunta de aclaración específica para esa dimensión. La aclaración reemplaza la señal mixta solo para construir una hipótesis de temporada; si no existe una respuesta clara, el resultado conserva la incertidumbre. El método sigue siendo heurístico y no ha sido validado como instrumento psicométrico.

El inicio distingue **Comenzar desde cero** y **Continuar mi test**. El guardado local se restaura de forma explícita, evitando sobrescribir respuestas por seleccionar un perfil de género. La capa astrológica puede omitirse.

El plan cápsula amplía la orientación a tres fórmulas de outfit que combinan prendas sugeridas, contexto y paleta. Incluye una lista de auditoría para marcar prendas que la persona ya posee; su estado se guarda localmente y puede reiniciarse. Esto busca reducir compras innecesarias y convertir el diagnóstico en una acción cotidiana.

La interfaz comunica el tiempo estimado, la privacidad del guardado local y el carácter opcional de la foto/análisis facial. Se mantienen alternativas de respuesta y la navegación hacia atrás.


## 17. Refinamientos de UX y recomendaciones accionables

El inicio indica una duración estimada de 8–12 minutos, explica el almacenamiento local y distingue la acción de retomar del inicio desde cero. La restauración limpia el objeto de respuestas antes de cargar el progreso y limita los índices guardados al cuestionario vigente. Esto evita respuestas residuales y estados fuera de rango.

Las comparaciones de color se repiten en temperatura, valor y croma. Cuando las dos respuestas de una dimensión divergen, VÉNUS añade una pregunta adaptativa y utiliza esa respuesta como aclaración; no elimina la discrepancia original del método. Las conclusiones cromáticas continúan siendo hipótesis para confirmar físicamente. La dirección estética tiene como alternativa ecléctica y el valor por defecto no fuerza Romantic Mystery.

El resultado de cápsula ofrece tres fórmulas de combinación y una checklist de prendas sugeridas. Marcar una pieza no implica comprarla: se usa como auditoría de lo que ya existe. El estado persiste localmente bajo identificadores de prenda para evitar que el progreso se transfiera por posición entre perfiles. Se puede reiniciar. El capítulo astrológico es omitible.

El desglose Kibbe ahora presenta 10 señales, corrigiendo el contador de observaciones. La consistencia se etiqueta como heurística, no como precisión estadística. Las recomendaciones se mantienen exploratorias, sin reglas de prohibición.


## 18. Auditoría de experiencia de usuario y resiliencia

La revisión estática detectó rutas de imagen incorrectas: las referencias pedían `/assets/img/PDF/pagina-XX/fig-XX-YY.png`, mientras que los archivos existentes están en `/assets/venus_referencias_pdf_paginas_01_11/pagina-XX/fig-XX-YY.png`. Se corrigieron las 50 referencias en home, test, Glow Up y Archivo.

Glow Up ahora permite volver entre pasos del onboarding, valida el nombre en el primer paso y preserva las selecciones. El perfil se puede recuperar desde localStorage y el puente del test (`venusGlowUpProfile`), y el progreso del plan tiene respaldo local. Esto evita que el flujo dependa exclusivamente del proveedor DB.

El diario usa un respaldo local: fusiona registros locales y cloud cuando ambos existen, guarda entradas y permite eliminarlas sin DB. Se limita a 25 entradas; conserva fotos de las cuatro entradas más recientes, máximo dos por entrada, para reducir el riesgo de exceder cuota de almacenamiento. Si falla el guardado local y cloud, se informa y no se limpia el borrador.

El onboarding de Glow Up ofrece botones para volver y chips navegables por teclado. Estas mejoras no sustituyen una prueba manual con navegador: el navegador conectado no estuvo disponible durante esta auditoría, así que la validación interactiva y visual se declara pendiente.

La página heredada `visual-test.html` contenía un cierre incorrecto en la lista de opciones de la pregunta de familia estacional, lo que detenía la ejecución del JavaScript. Se corrigió y se incorporó esa página al smoke test, que compila los scripts inline de las nueve rutas.


## 19. Seguridad de contenido dinámico y carga de imágenes

La revisión detectó que el nombre del onboarding, las intenciones y las entradas del diario se insertaban directamente en HTML. Se añadió `escapeHTML` antes de renderizar esos datos para reducir el riesgo de inyección de HTML/XSS. El análisis facial generado por IA también se trata como contenido no confiable y se escapa antes de insertarlo en el moodboard. La selfie acepta únicamente JPG, PNG y WEBP, con límite de 8 MB, y comunica el motivo cuando el archivo no es compatible o excede el límite. El smoke test ahora comprueba estos guardarraíles.


## 20. Importación del Style Lab

Las imágenes de prendas y moodboard se comprimen al guardarse; al importar respaldos se valida que las fotos sean data URLs de imagen JPG/PNG/WEBP codificadas en base64 y con longitud máxima de 3 MB. Los colores del perfil se restringen a valores hexadecimales. Esto evita que datos de un backup se inserten como atributos o estilos sin validar.


## 21. Flujo de desempate del test

La pregunta de desempate de silueta debe continuar al módulo de color (índice 1), no al módulo de esencias. El botón Atrás vuelve a la última pregunta de silueta, limpia el desempate previo y guarda el progreso para que la persona pueda modificar su decisión. El smoke test verifica ambas transiciones.


## 22. Títulos del perfil importado

El título del ADN en Style Lab se construye con texto escapado para evitar que valores importados del perfil se interpreten como HTML. El smoke test incluye esta ruta.


## 23. Normalización de respuestas de análisis facial

La respuesta de la IA se valida como objeto y se normalizan sus campos antes de mostrarlos: se aceptan cadenas, se limitan longitudes y cantidades de elementos y se descartan estructuras inesperadas. Si la respuesta no es válida, el resultado continúa sin el bloque facial.


## 24. Silueta sin datos

Si la persona omite el capítulo de silueta, el test ya no asigna por defecto Dramatic (resultado de empate numérico de cero). Presenta “Pendiente de confirmar”, recomendaciones neutrales y dos tipos como posibilidades exploratorias, con confianza baja. Así no se convierte un capítulo omitido en una conclusión falsa.


## 25. Fotografías del diario

El diario de Glow Up limita cada entrada a dos fotos, acepta JPG/PNG/WEBP y rechaza archivos mayores de 8 MB. Las imágenes se reducen a máximo 900 px y se recomprimen como JPEG antes de almacenarse. Las fotos recuperadas de localStorage se validan por tipo y tamaño codificado. La eliminación se gestiona con delegación de eventos y un atributo de datos, no con JavaScript inline.


## 26. Resiliencia del diario

Los datos del diario se normalizan al leer tanto localStorage como la base cloud. Campos inesperados se sustituyen por valores seguros y las fotos se filtran por formato, longitud y cantidad antes de renderizar. El respaldo local también valida que el contenido tenga estructura de lista.


## 27. Accesibilidad de Style Lab

Las seis pestañas del laboratorio ahora enlazan explícitamente a su panel mediante `aria-controls` y `aria-labelledby`, y todos los paneles tienen `role="tabpanel"`. Se mantiene navegación con flechas izquierda/derecha, con un único listener.


## 28. Perfil e integridad de respaldos

La página Perfil valida que la paleta sea una lista de códigos hexadecimales y que las recomendaciones de prendas sean arreglos antes de renderizarlas. Los colores se usan únicamente después de validarlos, evitando estilos dinámicos desde datos importados.
