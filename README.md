🚗 ParkSmart — Sistema Inteligente de Gestión de Parqueos

ParkSmart** es una aplicación web desarrollada como proyecto académico para visualizar y administrar la disponibilidad de espacios de estacionamiento. Permite consultar los espacios libres y ocupados por piso, además de gestionar su estado desde un panel administrativo.

Demo en línea:** [Ver ParkSmart](https://edgardodiaz.github.io/smartpark/)

📌 Características principales

- 🅿️ Visualización de 30 espacios de estacionamiento.
- 🟢 Identificación de espacios libres y ocupados.
- 🏢 Organización de espacios en tres pisos.
- 📊 Panel de estadísticas generales.
- 🔐 Acceso al panel administrativo.
- ⚙️ Administración del estado de los espacios.
- 🗄️ Almacenamiento compartido mediante Supabase.
- 📱 Interfaz adaptable a computadoras y dispositivos móviles.
- 🌐 Publicación web mediante GitHub Pages y Netlify.

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de las páginas |
| CSS3 | Diseño y estilos |
| JavaScript | Funcionalidad e interactividad |
| Supabase | Base de datos compartida |
| GitHub | Control de versiones y alojamiento del código |
| GitHub Pages | Publicación de la página web |
| Netlify | Alojamiento alternativo |

## 📂 Estructura del proyecto

```text
smartpark/
├── index.html             # Página pública
├── login-admin.html       # Inicio de sesión administrativo
├── panel.html             # Panel de administración
├── supabase-config.js     # Configuración de Supabase
├── Park.png               # Logo del proyecto
├── supabase-setup.sql     # Configuración inicial de la base de datos
└── README.md              # Documentación del proyecto
```

## 🚀 Instalación y ejecución

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/Edgardodiaz/smartpark.git
   ```

2. Entrá en la carpeta:

   ```bash
   cd smartpark
   ```

3. Configurá `supabase-config.js` con la URL de tu proyecto de Supabase y su clave pública.

4. Abrí `index.html` en un navegador o ejecutá el proyecto mediante un servidor web local.

5. Para habilitar la sincronización entre dispositivos, verificá que la tabla `parksmart_state` exista en Supabase y tenga los permisos correspondientes.

## 🗄️ Base de datos

ParkSmart utiliza Supabase para almacenar el estado de los espacios y compartir los cambios entre la página pública y el panel administrativo.

La configuración inicial se encuentra en `supabase-setup.sql`.

**Importante:** este proyecto utiliza una configuración de demostración. Las políticas de acceso y el inicio de sesión deben reforzarse antes de utilizar el sistema en un entorno real.

🔑 Acceso administrativo de demostración

- **Página de acceso:** [Iniciar sesión](https://edgardodiaz.github.io/smartpark/login-admin.html)
- **Panel administrativo:** [Abrir panel](https://edgardodiaz.github.io/smartpark/panel.html)

Las credenciales de demostración pueden cambiar según la configuración del proyecto. No se recomienda publicar contraseñas reales en el repositorio.

⚠️ Limitaciones actuales

- Los sensores físicos no están conectados; los estados de los espacios se administran mediante la interfaz.
- El sistema está diseñado para fines académicos y demostrativos.
- La autenticación y las políticas de acceso requieren mejoras para un despliegue de producción.

🎯 Objetivo del proyecto

Desarrollar una plataforma web que facilite la visualización y administración de espacios de estacionamiento, demostrando el uso de tecnologías web y una base de datos compartida para mantener actualizada la información.

👨‍💻 Autor

**Edgardo Díaz**

Proyecto académico — ParkSmart.

⭐ Si te resulta útil este proyecto, podés darle una estrella al repositorio.
