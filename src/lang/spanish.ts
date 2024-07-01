export const translations = {
    global: {
        main: "Principal",
        rare: "Raro",
        plat: "100%",
        topleft: "Arriba Izquierda",
        topcenter: "Arriba Centro",
        topright: "Arriba Derecha",
        bottomleft: "Abajo Izquierda",
        bottomcenter: "Abajo Centro",
        bottomright: "Abajo Derecha",
        ok: "Aceptar",
        preview: "Vista Previa",
        save: "Guardar",
        back: "Volver",
        settings: "Configuración",
        appversion: "Versión de la Aplicación",
        image: "Imagen",
        audio: "Audio",
        folder: "Carpeta",
        font: "Fuente",
        select: "Seleccionar",
        gametitle: "Título del Juego",
        congrats: "¡Felicidades!",
        achievementunlocked: "Logro Desbloqueado",
        gamecomplete: "100% Completado",
        achievementdesc: "Hizo clic en el botón para mostrar la notificación de prueba",
        gamecompletedesc: "¡Has desbloqueado todos los logros!",
        defaultcustomfont: "Por Defecto (Ninguna Fuente Seleccionada)",
        defaultsoundfile: "Por Defecto (Ningún Archivo Seleccionado)",
        defaultsounddir: "Por Defecto (Ninguna Carpeta Seleccionada)",
        nowtracking: "Siguiendo logros para:",
        nopreview: "Vista previa no disponible para el sistema operativo nativo",
        options: "Opciones",
        resetwindow: "Restablecer Ventana",
        show: "Mostrar",
        exit: "Salir",
        releasegame: "Liberar Juego",
        releasegamesub: [
            `Reinicia el proceso Worker en segundo plano y libera el juego actual de ser rastreado`,
            `Prueba esta opción si has cerrado recientemente un juego pero Steam aún lo muestra como en ejecución, o si Steam Achievement Notifier aún muestra que está rastreando un juego que ya ha sido cerrado`
        ],
        noupdateavailable: "No hay actualizaciones disponibles",
        latestversion: "Última versión instalada",
        missingdeps: "Dependencia faltante",
        restartapp: "Reiniciar Aplicación",
        restartappsub: [
            `Si las cosas no funcionan correctamente, utiliza esta opción para cerrar y volver a abrir la aplicación`,
            `Si el problema persiste después de reiniciar la aplicación, considera reportarlo usando los enlaces integrados en la pantalla de inicio`
        ],
        suspend: "Suspender",
        resume: "Reanudar",
        new: "Nuevo...",
        nodata: "Sin Datos",
        findappid: "Buscar AppID",
        findappidsub: [
            `Cada juego de Steam tiene un número único asociado a él, llamado <span class="hl">AppID</span>. Puedes encontrar el AppID asociado a cualquier juego de Steam verificando uno de los siguientes métodos:`,
            `En el <span class="hl">cliente de Steam</span>, haz clic derecho en un juego en tu <span class="hl">Biblioteca</span> y selecciona <i>Propiedades</i> > <i>Actualizaciones</i> - aquí se listarán los AppID`,
            `La <span class="hl">URL</span> de la página de la <span class="hl">tienda</span> del juego - será el número listado después de <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Sitios web como <span class="hl">SteamDB</span> - la sección de <span class="hl">Información de la Aplicación</span> listará el AppID para cada juego`
        ]
    },
    app: {
        content: {
            game: "No se detectó ningún juego",
            customise: "Personalizar",
            test: "Mostrar notificación de prueba"
        }
    },
    settings: {
        language: {
            title: "Idioma"
        },
        os: {
            title: "Sistema operativo",
            content: {
                desktop: "Crear acceso directo en el escritorio",
                startwin: "Iniciar al iniciar sesión",
                startmin: "Iniciar minimizado",
                nohwa: "Desactivar aceleración de hardware",
                litemode: "Modo ligero"
            }
        },
        notifications: {
            title: "Notificaciones",
            content: {
                rarity: "Porcentaje de rareza",
                rareonly: "Solo raras",
                all: "Todas",
                off: "Apagado",
                showpercent: "Mostrar porcentaje",
                soundonly: "Solo sonido",
                extwin: "Notificaciones de transmisión",
                audiosrc: "Fuente de audio",
                notify: "Notificar",
                app: "Aplicación",
                nowtracking: "Mostrar Notificación de Seguimiento",
                nowtrackingscale: "Escala de Seguimiento",
                nowtrackingpos: "Posición de Seguimiento",
                shortcuts: "Accesos directos de notificación",
                noiconcache: "Desactivar caché de iconos"
            }
        },
        media: {
            title: "Medios",
            content: {
                steamss: "Tomar captura de pantalla de Steam",
                screenshots: "Medios adicionales",
                off: "Apagado",
                overlay: "Captura de pantalla con superposición de notificación",
                monitors: "Origen de la captura de pantalla",
                hdrmode: "Modo HDR",
                ovpos: "Posición de superposición",
                ovmatch: "Coincidir con la posición personalizada",
                ovx: "Desplazamiento Horizontal",
                ovy: "Desplazamiento Vertical",                
                ovpath: "Ruta de la captura de pantalla",
                ssdelay: "Retraso de la captura de pantalla",
                notifyimg: "Imagen de Notificación",
                imgpath: "Ruta de la Imagen"
            }
        },
        games: {
            title: "Juegos",
            content: {
                linkedgames: "Juegos Enlazados",
                exclusionlist: "Lista de Exclusión"
            }
        },
        accessibility: {
            title: "Accesibilidad",
            content: {
                noanim: "Desactivar animaciones de la ventana de la aplicación",
                noupdatedialog: "Desactivar diálogo de actualización",
                nvda: "Activar soporte de NVDA",
                tooltips: "Mostrar consejos de herramientas"
            }
        },
        advanced: {
            title: "Avanzado",
            content: {
                pollrate: "Tasa de Encuestas",
                initdelay: "Retraso de seguimiento",
                releasedelay: "Retraso de Lanzamiento",
                maxretries: "Número Máximo de Reintentos de Proceso",
                debug: "Panel de Depuración",
                userust: "Modo de Procesamiento Alternativo",
                notifydebug: "Mostrar Notificaciones de Depuración",
                usecustomfiles: "Utilizar Archivos de Aplicación Personalizados",
                showcustomfiles: "Mostrar Archivos de Aplicación Personalizados"
            }
        },        
        misc: {
            title: "Misceláneo",
            content: {
                checkforupdates: "Buscar Actualizaciones",
                log: "Registro de la Aplicación",
                reset: "Restablecer aplicación"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Preconfiguración",
            content: {
                preset: "Preconfiguración de Notificaciones",
                iconanim: "Animación de Icono Raro",
                alldetails: "Mostrar Todos los Detalles",
                usepercent: "Usar Porcentaje",
                displaytime: "Tiempo de Visualización",
                scale: "Escala",
                customtext: "Texto Personalizado",
                usegametitle: "Usar Título del Juego",
                customfont: "Fuente Personalizada"
            }
        },
        sound: {
            title: "Sonido",
            content: {
                soundmode: "Modo de Sonido",
                file: "Archivo",
                folder: "Aleatorio",
                soundfile: "Archivo de Sonido",
                sounddir: "Carpeta de Sonido",
                volume: "Volumen"
            }
        },
        style: {
            title: "Estilo",
            content: {
                bgstyle: "Estilo de Fondo",
                solid: "Sólido",
                gradient: "Degradado",
                img: "Imagen",
                gameart: "Arte del Juego",
                gradientangle: "Ángulo de Degradado",
                bgimg: "Imagen de Fondo",
                bgimgbrightness: "Brillo",
                brightness: "Brillo",
                blur: "Desenfoque",
                roundness: "Redondez",
                fontsize: "Tamaño de Fuente",
                opacity: "Opacidad",
                bgonly: "Solo Fondo",
                glow: "Brillo",
                glowcolor: "Color",
                glowsize: "Tamaño",
                glowx: "Desplazamiento Horizontal",
                glowy: "Desplazamiento Vertical",
                glowopacity: "Opacidad",
                glowanim: "Animación",
                glowspeed: "Velocidad",
                off: "Ninguno",
                pulse: "Pulso",
                rainbow: "Arcoíris",
                mask: "Máscara",
                maskimg: "Imagen de máscara"
            }
        },
        colors: {
            title: "Colores",
            content: {
                primarycolor: "Color Primario",
                secondarycolor: "Color Secundario",
                tertiarycolor: "Color Terciario",
                fontcolor: "Color de Fuente",
                fontoutline: "Contorno de Fuente",
                fontoutlinecolor: "Color de Contorno de Fuente",
                fontshadow: "Sombra de Fuente",
                fontshadowcolor: "Color de Sombra de Fuente"
            }
        },
        icons: {
            title: "Iconos",
            content: {
                iconroundness: "Redondez del Icono",
                plat: "Logotipo 100%",
                usegameicon: "Usar Icono del Juego",
                logo: "Logotipo",
                decoration: "Decoración",
                showdecoration: "Mostrar Decoración",
                rarity: "Rareza",
                showhiddenicon: "Mostrar Icono Oculto",
                hiddenicon: "Icono Oculto",
                replacelogo: "Reemplazar Logo"
            }
        },
        position: {
            title: "Posición",
            content: {
                pos: "Posición en Pantalla",
                usecustompos: "Usar Posición Personalizada",
                setcustompos: "Establecer",
                resetcustompos: "Restablecer"
            }
        },
        theme: {
            title: "Tema",
            content: {
                updatetheme: "Actualizar Tema",
                savetheme: "Guardar Tema",
                sub: [
                    `Los <span class="hl">Temas de Usuario</span> guardados se pueden seleccionar desde el menú <span class="hl">Seleccionar Tema</span> en la pantalla de inicio.`,
                    `¡Asegúrese de que el <span class="hl">Nombre del Tema</span> sea <u>único</u> - un nombre que coincida con un tema existente <u>sobrescribirá el anterior</u>!`
                ],
                placeholder: "Nombre del Tema",
                theme: "Tema",
                importtheme: "Importar Tema",
                import: "Importar",
                importsub: [
                    `Importar un archivo de <span class="hl">tema creado por el usuario</span>`,
                    `Los <span class="hl">temas importados</span> se cargarán automáticamente una vez importados correctamente y se pueden seleccionar desde el menú <span class="hl">Seleccionar Tema</span>`,
                ],
                importidle: `Seleccione un archivo de <span class="hl">tema para importar</span>`,
                importcopied: `Tema copiado correctamente`,
                importrenamed: `Tema renombrado correctamente`,
                importextracted: `Tema extraído correctamente`,
                importrewriting: `Reescribiendo rutas de archivos del tema...`,
                importconverting: `Convirtiendo tema...`,
                importcreating: `Creando tema...`,
                importdone: `Tema importado correctamente`,
                importfailed: `Error al importar el archivo de tema seleccionado!`,
                exporttheme: "Exportar Tema",
                export: "Exportar"                
            }
        }
    },
    logwin: {
        content: {
            tagline: "Esto es lo que ha sucedido desde que se inició la aplicación",
            copylog: "Copiar Contenido del Registro"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>¿Estás seguro?</span>
                    <span>Todos los datos configurados previamente, <u>incluidas las Personalizaciones</u>, se restablecerán a los valores predeterminados.</span>
                    <span>🛑 ¡Esta acción no se puede deshacer!</span>
                </div>
            `,
            reset: "Restablecer"
        }
    },
    error: {
        content: {
            subtitle: "El Notificador de Logros de Steam encontró un problema y necesita cerrarse.",
            details: "Aquí están los detalles del error:",
            sub: "Haga clic en los botones a continuación para informar sobre este problema a través de su plataforma preferida.",
            report: "Reportar",
            log: "Registro de Aplicación",
            exit: "Salir"
        }
    },    
    tooltips: {
        game: "El juego para el cual se están rastreando los logros actualmente",
        usertheme: "Seleccionar un tema guardado previamente",
        customise: "Personalizar las notificaciones de logros",
        test: "Mostrar una notificación de prueba, incluyendo cualquier personalización",
        kofi: "¡Donar en Ko-Fi!",
        discord: "¡Unirse a Discord!",
        github: "Informar un problema",
        lang: "Seleccionar el idioma de la interfaz de usuario utilizado en la aplicación",
        desktop: "Alternar un acceso directo en el escritorio para ejecutar la aplicación",
        startwin: "Iniciar Steam Achievement Notifier automáticamente después de iniciar sesión",
        startmin: "Después de iniciar, ocultar la ventana de la interfaz de usuario de la aplicación hasta que se abra desde la bandeja del sistema",
        nohwa: `Desactivar la aceleración de hardware, lo que puede mejorar el rendimiento en sistemas con recursos limitados o sistemas sin una GPU dedicada<br><br><span class="ttdesc">La aplicación se reiniciará después de activar/desactivar esta opción</span>`,
        litemode: "Desactivar todos los elementos interactivos de la interfaz de usuario, proporcionando solo funcionalidad limitada de la aplicación a través del icono de la bandeja del sistema. Puede mejorar los recursos consumidos por la aplicación",
        rarity: "El porcentaje en el cual se activarán las notificaciones de logros raros. Cualquier logro con un porcentaje de desbloqueo superior a este valor se mostrará como una notificación principal",
        showpercent: "Mostrar el porcentaje de desbloqueo del logro en la notificación para el/los tipo(s) seleccionado(s)",
        soundonly: "Desactivar las notificaciones, reproduciendo solo los sonidos establecidos a través del Personalizador",
        extwin: "Crear una ventana de fondo oculta que duplica cualquier notificación que se esté mostrando actualmente en pantalla. Esta ventana se puede agregar como una fuente de captura de ventana para su uso en software de transmisión, como OBS",
        audiosrc: "Seleccionar la fuente de (o desactivar) el audio generado por la aplicación",
        nowtracking: "Mostrar una notificación que informa al usuario que se están rastreando los logros de un juego en ejecución",
        nowtrackingscale: `Establecer el tamaño de la notificación de seguimiento`,
        nowtrackingpos: `Establecer la posición de la notificación de seguimiento`,
        shortcuts: "Activar una notificación de prueba a través de un acceso directo de teclado. Los accesos directos se pueden personalizar para cada tipo de notificación",
        noiconcache: `Desactiva la caché de iconos de logros al iniciar los juegos.<br><br><span class="ttdesc">Esto puede mejorar significativamente el rendimiento de la aplicación al iniciar los juegos y también puede resolver problemas de seguimiento con juegos que tienen un gran número de logros. Sin embargo, en casos raros, desactivar la caché de iconos puede resultar en la ausencia de iconos de logros en las notificaciones</span>`,
        steamss: "Tomar una captura de pantalla de Steam cuando se desbloquee un logro",
        screenshots: "Seleccionar el tipo de medios adicionales que se crearán cuando se muestre una notificación",
        monitors: "El monitor que se capturará al tomar la captura de pantalla",
        hdrmode: `Captura de pantalla utilizando un método compatible con monitores que utilizan High Dynamic Range (HDR)`,
        ovpos: "La posición de la superposición de notificación dentro de la captura de pantalla",
        ovmatch: "Coincidir con la posición de pantalla establecida en el Personalizador para este tipo de notificación",
        ovpath: "La ubicación donde se guardarán las capturas de pantalla generadas por esta opción",
        ssdelay: "Agregar un retraso desde que ocurre la notificación hasta que se toma la captura de pantalla",
        sspreview: "Mostrar una vista previa de cómo se verá la captura de pantalla al guardarla",
        noanim: "Desactivar todas las animaciones y efectos de transición de ventanas en la aplicación",
        noupdatedialog: `Evita que el diálogo <span class="hl">Actualización disponible</span> se muestre automáticamente y obtenga el enfoque<br><br><span class="ttdesc">El diálogo aún se puede abrir haciendo clic en el botón de actualización cuando esté disponible</span>`,
        nvda: "Habilitar la copia de información de logros al portapapeles cuando se desbloquea un logro, para que pueda ser leída por software de lectura de pantalla, como NVDA",
        tooltips: "Mostrar consejos de herramientas al pasar el cursor sobre ciertos elementos de la interfaz de usuario",
        pollrate: `Establecer el intervalo de actualización para los datos de logros durante el juego<br><br><span class="ttdesc">El rendimiento puede aumentar/disminuir dependiendo del valor o del hardware del sistema. Valores más altos suelen resultar en una carga del sistema más baja, pero pueden causar retrasos en las notificaciones</span>`,
        initdelay: `Establece el retraso entre la detección del <span class="hl">AppID</span> actual y el inicio del seguimiento de procesos/logros<br><br><span class="ttdesc">Aumentar este valor puede evitar escenarios en los que Steam no puede iniciar el juego actual (debido a la inicialización de la aplicación en Steamworks antes de que se inicie el juego)</span><br><br><span class="ttdesc">Alternativamente, aumentar este valor también puede utilizarse para evitar la detección incorrecta de procesos de prelanzamiento del juego</span>`,
        releasedelay: `Establece cuánto tiempo espera el proceso en segundo plano para reiniciarse después de que el juego actual haya sido lanzado. Afecta tanto al seguimiento automático de procesos como a los juegos vinculados manualmente.<br><br><span class="ttdesc">Proporciona un período más largo para liberar completamente Steamworks de la aplicación. Aumentar este valor puede prevenir comportamientos inusuales, como rastrear un juego previamente cerrado</span>`,
        maxretries: `Establece el número máximo de intentos para vincular un proceso en ejecución a un AppID detectado. Afecta tanto al seguimiento automático de procesos como a los juegos vinculados manualmente.<br><br><span class="ttdesc">Los intentos de vinculación se realizan una vez por segundo. Si un proceso en ejecución no está vinculado al AppID actual después de este número de intentos, se devolverá un proceso no válido. En tales casos, el juego deberá ser liberado manualmente a través del Área de notificación del sistema > Opciones > Liberar Juego</span>`,
        debug: "Abre el Panel de Depuración, que muestra información detallada de seguimiento de procesos",
        userust: "Utiliza una función alternativa basada en Rust para verificar si los procesos de juego rastreados están actualmente en ejecución en el sistema. Cuando no esté marcado, se utilizará en su lugar la comprobación de procesos predeterminada basada en NodeJS.",
        notifydebug: "Crear una ventana de herramientas de desarrollo para todas las notificaciones. Útil para depurar/solucionar problemas de notificación",
        usecustomfiles: "Permite que las notificaciones carguen archivos personalizables por el usuario. Se recomienda precaución para los usuarios regulares",
        showcustomfiles: "Abrir la ubicación de los archivos personalizados",
        log: "Abrir la ventana de registro de la aplicación, que muestra información sobre la actividad del proceso, advertencias y errores",
        reset: "Eliminar todos los datos de configuración y reiniciar la aplicación",
        playback: "Pausar/reanudar la animación de la vista previa de la notificación",
        replay: "Reiniciar la animación de la vista previa de la notificación",
        preset: "Seleccionar el ajuste preestablecido de notificación para personalizar",
        iconanim: "Alternar el borde y la animación del icono de logro raro",
        alldetails: "Mostrar todos los elementos de texto dentro de la notificación, incluidos los ocultos de forma predeterminada para este ajuste preestablecido",
        usepercent: "Mostrar el porcentaje de desbloqueo del logro, en lugar del valor XP/S",
        displaytime: "Establecer la cantidad de segundos que se mostrará la notificación",
        scale: "Aumentar o disminuir el tamaño de la notificación",
        customtext: "Establecer un mensaje personalizado que se mostrará dentro de la notificación",
        usegametitle: "Mostrar el título del juego actual dentro de la notificación",
        customfont: "Cargar una fuente personalizada para usar dentro de la notificación",
        soundmode: "Seleccionar un archivo de audio único o un archivo de audio seleccionado al azar de una carpeta que contiene varios archivos de audio, cuando ocurre una notificación",
        soundfile: "Seleccionar un archivo de audio para reproducir cuando ocurre una notificación",
        sounddir: "Seleccionar una carpeta de la cual se seleccionará al azar un archivo de audio cuando ocurra una notificación",
        volume: "Establecer el volumen de reproducción del archivo de audio",
        preview: "Previsualizar el archivo de audio seleccionado o un archivo de audio seleccionado al azar de la carpeta",
        bgstyle: "Seleccionar el estilo para el fondo de la notificación",
        gradientangle: "Establecer el ángulo del degradado",
        bgimg: "Cargar un archivo de imagen para usar como fondo de la notificación",
        bgimgbrightness: "Establece el brillo de la imagen utilizada como fondo de la notificación",
        brightness: "Establecer el brillo del arte del juego utilizado como fondo de la notificación",
        blur: "Establecer el nivel de desenfoque aplicado al fondo de la notificación",
        roundness: "Establecer la redondez de los bordes de la notificación",
        fontsize: "Establecer el tamaño de la fuente utilizada en la notificación",
        opacity: "Establecer la opacidad general de la notificación",
        bgonly: "Establecer solo la opacidad para el fondo de la notificación, manteniendo los demás elementos a plena opacidad",
        glow: "Activar un efecto de resplandor que rodea la notificación",
        glowcolor: "Establecer el color del efecto de resplandor",
        glowsize: "Establecer el tamaño del efecto de resplandor",
        glowx: "Desplazar el efecto de resplandor horizontalmente",
        glowy: "Desplazar el efecto de resplandor verticalmente",
        glowopacity: "Establecer la opacidad del efecto de resplandor",
        glowanim: "Seleccionar una animación predefinida para aplicar al efecto de resplandor",
        glowspeed: "Establecer la velocidad de la animación aplicada al efecto de resplandor",
        mask: "Activar el enmascaramiento de partes de la notificación con una imagen personalizada",
        maskimg: `Cargar un archivo de imagen para usar como máscara<br><br><span class="ttdesc">En CSS, <code class="ttcode">mask-mode: alpha</code> funciona de manera opuesta a lo que generalmente se espera: las áreas de transparencia en el archivo de imagen serán oscurecidas, y las áreas negras/grises permitirán que los elementos debajo sean visibles</span>`,
        primarycolor: "Establecer el color primario de la notificación",
        secondarycolor: "Establecer el color secundario de la notificación",
        tertiarycolor: "Establecer el color terciario de la notificación",
        fontcolor: "Establecer el color de todo el texto que se muestra dentro de la notificación",
        fontoutline: "Agregar un contorno a todo el texto que se muestra dentro de la notificación",
        fontoutlinecolor: "Establecer el color del contorno del texto",
        fontshadow: "Agregar una sombra a todo el texto que se muestra dentro de la notificación",
        fontshadowcolor: "Establecer el color de la sombra del texto",
        iconroundness: "Establecer la redondez del icono de logro/juego que se muestra dentro de la notificación",
        plat: "Cargar un archivo de imagen para usar como el icono del 100%",
        usegameicon: "Reemplazar el icono de notificación predeterminado con el icono del juego actual",
        showhiddenicon: "Mostrar una imagen que indique que el logro está oculto en la notificación",
        hiddenicon: "Cargar un archivo de imagen para reemplazar el icono del logro oculto",
        logo: "Cargar un archivo de imagen para reemplazar el icono de Logotipo",
        decoration: "Cargar un archivo de imagen para reemplazar el icono de Decoración",
        showdecoration: "Alternar la visibilidad del icono de Decoración",
        replacelogo: "Reemplace el icono del logotipo en la notificación con la decoración seleccionada",
        pos: "Establecer la posición en pantalla de la notificación",
        usecustompos: "Habilitar el posicionamiento personalizado para la notificación",
        setcustompos: "Establecer la posición personalizada para la notificación",
        resetcustompos: "Restablecer la posición de la notificación a la posición personalizada predeterminada",
        updatetheme: "Actualizar el tema actual con las opciones de personalización seleccionadas",
        savetheme: "Guardar todas las opciones de personalización configuradas como un nuevo tema",
        visibilitybtn: "Alternar la visibilidad del elemento en las vistas previas personalizadas y las notificaciones de prueba",
        delbtn: "Restablecer el elemento al valor predeterminado",
        link: `Abrir <span class="hl">Menú de Administración de Juegos Vinculados</span>`,
        imgpath: "La ubicación donde se guardarán las imágenes de notificación generadas por esta opción",
        linkedgames: `Evitar el <span class="hl">seguimiento automático de procesos</span> para juegos específicos de Steam<br><br><span class="ttdesc">Esta opción debería utilizarse solo en escenarios muy específicos. Los usuarios no deberían necesitar usar esta opción en circunstancias normales.</span>`,
        exclusionlist: `Prevenir que la aplicación rastree los logros en juegos específicos de Steam<br><br><span class="ttdesc">Esta opción debería utilizarse solo en escenarios muy específicos. Los usuarios no deberían necesitar usar esta opción en circunstancias normales.</span>`,
        ovx: "Desplazar la notificación mostrada en la captura de pantalla horizontalmente",
        ovy: "Desplazar la notificación mostrada en la captura de pantalla verticalmente",
        importtheme: `Importar personalizaciones mediante un archivo de <span class="hl">tema creado por el usuario</span>`,
        exporttheme: `Exportar el <span class="hl">tema</span> seleccionado actualmente para compartir<br><br><span class="ttdesc">Antes de intentar exportar, asegúrese de que el <span class="hl">tema</span> deseado esté seleccionado (a través del menú <span class="hl">Seleccionar Tema</span>). También asegúrese de que las personalizaciones hayan sido guardadas en el <span class="hl">tema</span> seleccionado (a través del menú <span class="hl">Guardar Tema</span>)<br><br><u>Cualquier personalización no guardada en el <span class="hl">tema</span> actual no será exportada!</u></span>`        
    },
    update: {
        updateavailable: "Actualización disponible",
        sub: [
            `<span id="newversion"></span>`,
            "¡Hay una nueva actualización de Steam Achievement Notifier disponible!",
            `Notas completas de la versión disponibles en <span id="discordreleasenotes"></span> y <span id="githubreleasenotes"></span>`
        ],
        update: "Actualizar"
    },
    linkgame: {
        content: {
            exepath: "Ruta del Ejecutable",
            managesub: [
                `Asocia manualmente el <span class="hl">archivo ejecutable</span> de un juego a un <span class="hl">AppID</span> específico, o <span class="hl">desvincula</span> uno existente`,
                `Steam Achievement Notifier ya no utilizará el <span class="hl">seguimiento automático de procesos</span> para ningún <span class="hl">juego asociado</span> - en su lugar, el <span class="hl">archivo ejecutable</span> especificado se rastreará cada vez que se detecte el <span class="hl">AppID</span> asociado`,
                `<span class="hl" id="appidhelp"><u>¿Cómo encuentro el AppID de un juego de Steam?</u></span>`
            ],
            linknew: "Nuevo Juego Asociado",
            linknewsub: [
                `Crea un nuevo enlace entre un <span class="hl">archivo ejecutable del juego</span> y el <span class="hl">AppID</span> asociado`,
                `Una vez creado, los enlaces pueden ser <span class="hl">desvinculados</span> a través del cuadro de diálogo <span class="hl">Administrar Juegos Asociados</span>`
            ],
            link: "Vincular",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Agregar el <span class="hl">AppID</span> de cualquier juego de Steam a la <span class="hl">Lista de Exclusión</span>`,
                `Steam Achievement Notifier no intentará rastrear datos de logros para ningún juego cuyo <span class="hl">AppID</span> haya sido agregado a la <span class="hl">Lista de Exclusión</span>`,
                `<span class="hl" id="appidhelp"><u>¿Cómo encuentro el AppID de un juego de Steam?</u></span>`
            ],
            exclusionnew: "Nueva Exclusión",
            exclusionnewsub: [
                `Ingrese el <span class="hl">AppID</span> para agregar a la <span class="hl">Lista de Exclusión</span>`
            ]
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Parece que estás intentando activar la opción <span class="hl">${opt}</span>. Sin embargo, en sistemas Linux, no se pueden habilitar las capturas de pantalla sin instalar primero el paquete <code class="dialogcode">${dep}</code>`,
    `Por favor, ejecuta <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> para instalar esta dependencia. Esto asegurará que se puedan tomar capturas de pantalla en este dispositivo`
]