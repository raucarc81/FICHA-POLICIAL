# Ficha de Actuación Policial — PWA

Aplicación web progresiva (PWA) para agentes de Policía Municipal.  
Genera fichas de actuación policial para copiar y pegar en el chat de Claude,  
que las convierte en comparecencias oficiales en formato DOCX.

## Instalación en Android (5 pasos)

1. Sube esta carpeta a GitHub (ver instrucciones abajo)
2. Activa GitHub Pages en el repositorio
3. Abre Chrome en tu Android y ve a la URL del repositorio
4. Chrome mostrará un banner: **"Añadir a pantalla de inicio"** → pulsa Añadir
5. La app aparece en tu escritorio como una app nativa

## Despliegue en GitHub Pages

### Paso 1 — Crear cuenta GitHub
- Ve a https://github.com y crea una cuenta gratuita

### Paso 2 — Crear repositorio
- Pulsa el botón **"New"** (repositorio nuevo)
- Nombre: `ficha-policial` (o el que quieras)
- Visibilidad: **Public** (necesario para GitHub Pages gratuito)
- Pulsa **"Create repository"**

### Paso 3 — Subir archivos
- En la página del repositorio, pulsa **"uploading an existing file"**
- Arrastra TODOS estos archivos/carpetas:
  - `index.html`
  - `manifest.json`
  - `sw.js`
  - Carpeta `icons/` con los 3 PNG dentro
- Pulsa **"Commit changes"**

### Paso 4 — Activar GitHub Pages
- Ve a **Settings** → **Pages** (en el menú lateral izquierdo)
- En **"Source"**, selecciona **"Deploy from a branch"**
- Branch: **main** · Carpeta: **/ (root)**
- Pulsa **Save**
- Espera 1-2 minutos

### Paso 5 — Tu URL
Tu app estará disponible en:
```
https://TU_USUARIO.github.io/ficha-policial/
```

## Características

- ✅ Funciona 100% sin conexión a internet (offline)
- ✅ Se instala como app nativa en Android e iOS
- ✅ Guarda los datos automáticamente (no se pierden al cerrar)
- ✅ Botón "Limpiar" para empezar una nueva ficha
- ✅ Copia la ficha en el formato exacto para pegar en Claude
- ✅ Compatible con Chrome, Firefox, Safari y Edge

## Uso

1. Rellena los campos de la ficha
2. Pulsa **"⎘ Copiar ficha para generar comparecencia"**
3. Ve al chat de Claude y pega el texto
4. Claude genera el DOCX con la comparecencia oficial completa
