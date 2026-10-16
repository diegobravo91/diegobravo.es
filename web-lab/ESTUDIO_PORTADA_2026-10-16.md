# Estudio de portada · diegobravo.es · 16.10.2026

**Estado:** propuesta de diseño, no publicada. **Rama:** \`design/portada-editorial-2026-10-16\`. **Archivo:** \`web-lab/estudio-portada-2026-10-16.html\`.

## Tesis editorial

La web debe ser una superficie pública selectiva de una práctica artística en desarrollo, no una metáfora visual de un gran sistema ni un portfolio que finja piezas terminadas. La pregunta principal de una visita es: **¿Qué se puede mirar, leer, poner a prueba o discutir aquí y ahora?**

No es una nueva arquitectura maestra. El Sistema Maestro vigente sigue gobernando qué se publica. La infraestructura pública actual alcanza v0.16.1, con Libro, Atlas, Diccionario, Práctica, Notas, Mapa, Sobre e índice Investigaciones. **No se propone rehacer ese trabajo.**

## Auditoría de la portada principal (línea base)

1. En la portada actual el índice de unidades aparece mezclado con dos investigaciones destacadas, evidencia visual prestada, procedimientos, consecuencias, conceptos, fragmentos y contacto. La densidad diluye el primer recorrido.
2. La escala tipográfica y las retículas funcionan, pero las páginas están muy basadas en explicar su propio método; faltan variaciones de ritmo visual y posiciones claras de lectura.
3. El documento HTML de portada tiene estilos grandes en línea, mientras \`assets/site.css\` contiene salvaguardas globales. Esto favorece divergencias entre páginas (se observa en la variación de nav, hero y tamaños) y complica mantenimiento.
4. La continuidad de los vínculos está lograda: Atlas↔Diccionario↔Notas↔Práctica. Debe mantenerse, pero abrirse por capas, no mostrarlo todo a la vez.
5. Hay procedimientos aún no ejecutados. No pueden ilustrarse como si fueran documentación de obra. Las imágenes de terceros del Atlas necesitan siempre fuente, procedencia y condiciones, no reutilización estética genérica.

## Diseño propuesto

**Portada en cinco actos:**
1. Posición clara: título + frase legible y una composición editorial identificada como esquema, no obra.
2. Selección de tres unidades que representan diferencias reales: F-001 investigación, A-023 relación y P-001 protocolo aún no realizado.
3. Índice público breve y filtrable: muestra trazable, no inventario que ocupa toda la portada. El índice existente \`investigaciones.html\` sigue siendo fuente completa.
4. Tríptico Libro / Atlas / Diccionario: explica su función en una frase cada uno y conduce al material real.
5. Nota de lectura + contacto; correo explícito, sin formularios externos ni captura de datos.

**Jerarquía:**
- Primero *qué se puede consultar*, después *qué dispositivo lo sostiene*.
- No confundir investigación, ensayo, protocolo, obra y archivo.
- Mostrar estado y fecha en cada unidad relevante.
- Contacto accesible en dos interacciones; no obligar a conocer el vocabulario del proyecto.
- Reducir navegación primaria a 5 destinos en el prototipo; las páginas existentes no desaparecen.

**Identidad:**
- Continuidad de hueso \`#eceae4\`, negro, naranja controlado, sans + mono.
- Tipografía grande para una tesis y miniatura de expediente para datos; contraste sin espectáculo.
- Ilustraciones vectoriales generativas de interfaz hechas en CSS, **rotuladas como diagramas editoriales, no arte propio/documentación**.
- Sin imágenes de terceros nuevas, sin fuentes externas, analítica, cookies, servicios externos ni frameworks.
- Accesibilidad: salto a contenido, foco, botones nativos, \`aria-pressed\` y recuento de filtro con \`aria-live\`, media queries y respeto a movimiento reducido.

## Riesgo y límites

La web no puede adelantarse al cuerpo de obra. La decisión vigente \`DEC-2026-09-27-02\` exige mantener circulación discreta hasta 3 pruebas propias realizadas y documentadas. Este estudio **mejora una interfaz en privado; no amplía el corpus público**. Como no hay fotografías materiales nuevas con autoría comprobada, no se inventan.

No publicar por ahora el rediseño como sustituto de \`index.html\`. Tampoco trasladar automáticamente a GitHub documentos de Drive, correspondencia privada, borradores del libro o imágenes de procedencia incierta.

## Antes de integrar en producción

- [ ] Ver el prototipo en Android real y escritorio; medir desbordes en 360, 390, 768 y 1440 px.
- [ ] Probar filtro con teclado, lector de pantalla y sin JavaScript (todas las entradas permanecen visibles).
- [ ] Auditar los enlaces contra la versión pública vigente, en especial las anclas \`#stress-test-001\`, \`#oa-020\` y \`#exposicion-zona-contacto\`.
- [ ] Comprobar contraste WCAG AA, tamaños táctiles, foco y contraste de metadatos.
- [ ] Sustituir sólo cuando exista material propio autoral validado la visualización conceptual de portada por imágenes de práctica realizadas, con ficha, fecha, técnica y contexto.
- [ ] Revisar lenguaje con lectura hostil: ¿se infla una operación? ¿se finge una obra?
- [ ] Separar CSS reutilizable, evitar duplicación de estilos, medir Core Web Vitals y confirmar 404, canonicals, RSS, sitemap, schema y colofón actuales.
- [ ] Si se aprueba, dividir integración por componentes con PR de producción distinto de este estudio. No fusionar automáticamente esta rama experimental.

## Criterios de aceptación

Una persona que entra por primera vez debe poder responder en 15 segundos: quién trabaja, qué investiga y dónde hay una unidad concreta que se puede leer. Una persona especializada debe localizar fuente, estado, versión y vías de interlocución. La página debe funcionar sin imágenes externas, sin seguimiento y en pantalla móvil.

## Siguiente tensión productiva

La estructura por sí sola no resolverá la carencia principal: imágenes y operaciones materiales propias. El rediseño debe quedar listo para recibir una pieza documentada, pero **no simular su existencia**. El próximo salto visual auténtico depende del taller, no de añadir efectos web.
