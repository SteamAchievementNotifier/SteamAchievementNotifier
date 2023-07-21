export const translations = () => {
    const winlbl = window.__TAURI__.window.getCurrent().label

    if (winlbl === "main") {
        const { user } = JSON.parse(localStorage.getItem("accounts")).find(account => account.id === config.steam64id) || {}
        const custom = config.customisation[GetTabType()]
    
        const translations = {
            userlbl: {
                elem: user || "No se detectó usuario",
                tt: "El usuario de Steam para el cual se están rastreando los logros actualmente"
            },
            gamelbl: {
                elem: gameName ? gameName : "No se detectó juego",
                tt: "El juego para el cual se están rastreando los logros actualmente"
            },
            previewbtn: {
                tt: "Previsualizar el sonido seleccionado"
            },
            soundfilelbl: {
                elem: custom.mode === "file" ? custom.soundfile ? custom.soundfile : "Predeterminado (Ningún archivo de sonido seleccionado)" : custom.sounddir ? custom.sounddir : "Predeterminado (Ninguna carpeta de sonido seleccionada)"
            },              
            soundmodelbl: {
                elem: "Modo de sonido:"
            },
            searchbtn: {},
            modelbl: {
                elem: custom.mode === "file" ? "archivo" : "aleatorio"
            },
            togglemain: {
                elem: "Principal",
                tt: "Notificación de logro principal"
            },
            togglerare: {
                elem: "Raro",
                tt: "Notificación de logro raro"
            },
            toggleplat: {
                elem: "100%",
                tt: "Notificación de logro al 100%"
            },
            progresscirclewrapper: {
                tt: "Mostrar una previsualización de la notificación personalizada"
            },
            testbtnwrapper: {
                elem: "Mostrar notificación de prueba",
                tt: "Mostrar una previsualización de la notificación personalizada",
                query: ".rectlbl"
            },
            customiserbtnwrapper: {
                elem: "Personalizar...",
                tt: "Abrir el menú de personalización de notificaciones",
                query: ".rectlbl"
            },
            steamstatus: {
                tt: "Steam no se está ejecutando"
            },
            updatebtn: {
                tt: "Actualización disponible"
            },
            kofibtn: "¡Donar en Ko-Fi!",
            discordbtn: "¡Unirse a Discord!",
            githubbtn: "Informar problema en GitHub!",
            settingstitlelbl: {
                elem: "Configuración"
            },
            configuration: {
                elem: "Configuración",
                query: `.sanboxtitle > label`
            },
            language: {
                elem: "Idioma",
                query: `.sanboxtitle > label`
            },
            os: {
                elem: "SO",
                query: `.sanboxtitle > label`
            },
            notifications: {
                elem: "Notificaciones",
                query: `.sanboxtitle > label`
            },
            screenshots: {
                elem: "Capturas de pantalla",
                query: `.sanboxtitle > label`
            },
            accessibility: {
                elem: "Accesibilidad",
                query: `.sanboxtitle > label`
            },
            other: {
                elem: "Otros",
                query: `.sanboxtitle > label`
            },
            apprevlbl: {
                elem: "Revisión de la aplicación"
            },
            apikeybtn: {
                tt: "Haz clic aquí para obtener tu clave de API web de Steam"
            },
            apikey: {
                placeholder: "Ingrese su clave API",
                tt: "La clave de API web de Steam asociada con tu cuenta de Steam"
            },
            eyebtn: {
                tt: "Alternar visibilidad de la clave de API"
            },
            apikeylbl: {
                elem: "Obtener clave de API"
            },
            steam64idbtn: {
                tt: "Haz clic aquí para obtener tu ID de Steam64"
            },
            steam64id: {
                placeholder: "Ingrese su ID Steam64",
                tt: "El ID de Steam64 asociado con tu cuenta de Steam"
            },
            steam64idlbl: {
                elem: "Obtener ID de Steam64"
            },
            switchaccountspan: {
                elem: "Cambiar Cuentas"
            },
            switchaccountbtn: {
                tt: "Cambiar entre cuentas de Steam vinculadas"
            },
            testconnectionlbl: {
                elem: "Probar Conexión",
                tt: "Prueba tu conexión con la API web de Steam"
            },
            lang: {
                tt: "Establecer idioma para la interfaz de usuario y las notificaciones"
            },
            desktop: {
                elem: "Crear acceso directo",
                tt: "Crear un acceso directo en el escritorio para iniciar la aplicación",
                query: ".sanboxlbl"
            },
            startwin: {
                elem: "Iniciar con Windows",
                tt: "Ejecutar la aplicación automáticamente al iniciar Windows",
                query: ".sanboxlbl"
            },
            startmin: {
                elem: "Iniciar minimizado",
                tt: "Minimizar la aplicación en la bandeja del sistema después de iniciarla",
                query: ".sanboxlbl"
            },
            hwa: {
                elem: "Desactivar aceleración de hardware",
                tt: "Desactivar la aceleración de hardware para la ventana de la aplicación",
                query: ".sanboxlbl"
            },
            litemode: {
                elem: "Modo Lite",
                tt: "Deshabilita la ventana principal de la aplicación para ahorrar recursos del sistema. Se mantendrán disponibles opciones mínimas a través del icono de la bandeja del sistema para interactuar con la aplicación",
                query: ".sanboxlbl"
            },
            rarity: {
                elem: "Porcentaje de rareza",
                tt: `Solo se mostrarán como notificaciones "Raro" los logros con un porcentaje de desbloqueo global inferior a este número`,
                query: ".sanboxlbl"
            },
            soundonly: {
                elem: "Modo solo sonido",
                tt: "Deshabilitar las notificaciones, pero reproducir el sonido seleccionado al desbloquear un logro",
                query: ".sanboxlbl"
            },
            allpercent: {
                elem: "Mostrar todos los porcentajes",
                tt: "Mostrar los porcentajes de desbloqueo global en todos los tipos de notificación",
                query: ".sanboxlbl"
            },
            extwin: {
                elem: "Duplicar a ventana externa",
                tt: "Duplicar a ventana externa",
                query: ".sanboxlbl"
            },
            statwin: {
                elem: "Mostrar ventana de estadísticas",
                tt: "Mostrar ventana de estadísticas de logros",
                query: ".sanboxlbl"
            },
            track: {
                elem: `Mostrar notificación "Ahora rastreando"`,
                tt: `Alternar la notificación "Ahora rastreando" al iniciar un juego`,
                query: ".sanboxlbl"
            },
            screenshotmode: {
                tt: "Selecciona el modo para las capturas de pantalla automáticas de logros"
            },
            displayscreenshot: {
                elem: "Mostrar captura de pantalla",
                tt: "Mostrar una previsualización de las capturas de pantalla en la notificación de logro",
                query: ".sanboxlbl"
            },
            keybind: {
                elem: "Atajo de Steam",
                tt: "Asigna tu atajo de captura de pantalla de Steam para tomar capturas de pantalla nativas de Steam al desbloquear logros",
                query: ".sanboxlbl"
            },
            ovtabmain: {
                tt: "Superposición de notificación principal"
            },
            ovtabrare: {
                tt: "Superposición de notificación rara"
            },
            ovtabplat: {
                tt: "Superposición de notificación al 100%"
            },
            monitor: {
                elem: "Monitor",
                tt: "Selecciona el monitor para usar como fuente de capturas de pantalla",
                query: ".sanboxlbl"
            },
            overlayposdropdown: {
                elem: "Posición",
                tt: "Establece la posición de la superposición de notificaciones",
                query: ".sanboxlbl"
            },
            ovpathbtn: {
                elem: "Ruta",
                tt: "Establece la ruta donde se guardarán las capturas de pantalla",
                query: ".sanboxlbl"
            },
            ovpreviewbtn: {
                elem: "Previsualización",
                tt: "Previsualiza la superposición de notificaciones",
                query: "label"
            },
            noanim: {
                elem: "Desactivar animaciones de la ventana",
                tt: "Desactiva las animaciones de transición dentro de la ventana de la aplicación",
                query: ".sanboxlbl"
            },
            nvda: {
                elem: "Activar soporte para NVDA",
                tt: "Copia el contenido de la notificación al portapapeles para que pueda ser leído por el software lector de pantalla NVDA",
                query: ".sanboxlbl"
            },
            tooltips: {
                elem: "Mostrar descripciones emergentes",
                tt: "Alternar las descripciones emergentes al pasar el cursor sobre los elementos de la aplicación",
                query: ".sanboxlbl"
            },
            debug: {
                elem: "Mostrar DevTools de notificaciones",
                tt: "Abre el panel de DevTools de la notificación cuando se active",
                query: ".sanboxlbl"
            },
            ppbtn: {
                elem: "Ver política de privacidad",
                tt: "Ver la política de privacidad de Steam Achievement Notifier",
                query: ".sanboxlbl"
            },
            betabtn: {
                elem: "Unirse al canal beta",
                tt: "",
                query: "label"
            },
            logbtn: {
                elem: "Abrir registro de la aplicación",
                tt: "Ver y compartir el contenido del registro de la aplicación",
                query: "label"
            },
            resetbtn: {
                elem: "Restablecer aplicación",
                tt: "Eliminar todos los datos almacenados y reiniciar la aplicación",
                query: "label"
            },            
            customiserplaystate: {
                tt: "Pausar/reproducir la animación de la notificación"
            },
            customiserreplay: {
                tt: "Reproducir de nuevo la animación de la notificación"
            },
            customisersavepreset: {
                tt: "Guardar las personalizaciones actuales como un nuevo Preset de Notificación"
            },
            tabbtnnext: {
                tt: "Siguiente"
            },
            tabbtnprev: {
                tt: "Atrás"
            },
            notificationpreset: {
                elem: "Preset",
                query: `.sanboxtitle > label`
            },
            preset: {
                elem: "Preset de Notificación",
                tt: "Selecciona un preset de notificación para personalizar",
                query: ".sanboxlbl"
            },
            iconanim: {
                elem: "Animación de Icono Raro",
                tt: "Alternar la animación del fondo del icono",
                query: ".sanboxlbl"
            },
            alldetails: {
                elem: "Todos los Detalles",
                tt: `Mostrar todos los detalles disponibles de las notificaciones`,
                query: ".sanboxlbl"
            },
            displaytime: {
                elem: "Tiempo de Visualización",
                tt: "La duración de tiempo en que se mostrará la notificación",
                query: ".sanboxlbl"
            },
            scale: {
                elem: "Escala",
                tt: "El tamaño de la notificación<br><i>*No se refleja en la ventana de vista previa</i>",
                query: ".sanboxlbl"
            },
            customtext: {
                elem: "Texto Personalizado",
                tt: "Mostrar un mensaje personalizado en la notificación",
                query: ".sanboxlbl"
            },
            usegametitle: {
                elem: "Usar Título del Juego",
                tt: "Mostrar el título del juego actual en la notificación",
                query: ".sanboxlbl"
            },
            style: {
                elem: "Estilo",
                query: `.sanboxtitle > label`
            },
            bgstyle: {
                elem: "Estilo de Fondo",
                tt: "Establecer el estilo del fondo de la notificación",
                query: ".sanboxlbl"
            },
            angle: {
                elem: "Ángulo del Degradado",
                tt: "Establecer el ángulo del degradado de color",
                query: ".sanboxlbl"
            },
            bgimgbtn: {
                elem: "Imagen de Fondo",
                tt: "Seleccionar un archivo de imagen para establecerlo como fondo de la notificación",
                query: ".sanboxlbl"
            },
            brightness: {
                elem: "Brillo",
                tt: "Establecer el brillo del arte del juego en el fondo",
                query: ".sanboxlbl"
            },
            roundness: {
                elem: "Redondez",
                tt: "Establecer la redondez de las esquinas de la notificación",
                query: ".sanboxlbl"
            },
            fontsize: {
                elem: "Tamaño de Fuente",
                tt: "Establecer la escala de la fuente",
                query: ".sanboxlbl"
            },
            opacity: {
                elem: "Opacidad",
                tt: "Establecer la opacidad de la notificación",
                query: ".sanboxlbl"
            },
            bgonly: {
                elem: "Solo Fondo",
                tt: "Aplicar opacidad solo al fondo, dejando el texto y las imágenes completamente opacos",
                query: ".sanboxlbl"
            },
            colors: {
                elem: "Colores",
                query: `.sanboxtitle > label`
            },
            primarycolor: {
                elem: "Color Principal",
                tt: "Establecer el color principal de la notificación",
                query: ".sanboxlbl"
            },
            secondarycolor: {
                elem: "Color Secundario",
                tt: "Establecer el color secundario de la notificación",
                query: ".sanboxlbl"
            },
            textcolor: {
                elem: "Color del Texto",
                tt: "Establecer el color del texto",
                query: ".sanboxlbl"
            },
            textoutline: {
                elem: "Contorno del Texto",
                tt: "Aplicar un contorno a todo el texto de la notificación",
                query: ".sanboxlbl"
            },
            outlinecolor: {
                elem: "Color del Contorno",
                tt: "Establecer el color del contorno del texto",
                query: ".sanboxlbl"
            },
            textshadow: {
                elem: "Sombra del Texto",
                tt: "Aplicar una sombra a todo el texto de la notificación",
                query: ".sanboxlbl"
            },
            shadowcolor: {
                elem: "Color de la Sombra",
                tt: "Establecer el color de la sombra del texto",
                query: ".sanboxlbl"
            },
            icon: {
                elem: "Icono",
                query: `.sanboxtitle > label`
            },
            iconroundness: {
                elem: "Redondez del Icono",
                tt: "Establecer la redondez del icono de la notificación",
                query: ".sanboxlbl"
            },
            usecustomicon: {
                elem: "Icono Personalizado",
                tt: "Usar un archivo de imagen como icono personalizado",
                query: ".sanboxlbl"
            },
            customiconbtn: {
                elem: "Icono Personalizado",
                tt: "Seleccionar un archivo de imagen para establecerlo como icono personalizado",
                query: ".sanboxlbl"
            },
            deletecustomiconbtn: {
                tt: `Restablecer Icono Personalizado`,
                query: ".sanboxlbl"
            },
            useplaticon: {
                elem: "Ícono Personalizado 100%",
                tt: `Usar un archivo de imagen como ícono personalizado al 100%`,
                query: ".sanboxlbl"
            },
            platiconbtn: {
                elem: "Ícono Personalizado 100%",
                tt: `Seleccionar un archivo de imagen para establecer como ícono personalizado al 100%`,
                query: ".sanboxlbl"
            },
            deleteplaticonbtn: {
                tt: `Restablecer el ícono personalizado al 100%`,
                query: ".sanboxlbl"
            },                
            usegameicon: {
                elem: "Icono del Juego",
                tt: "Usar el icono del juego actual",
                query: ".sanboxlbl"
            },
            position: {
                elem: "Posición",
                query: `.sanboxtitle > label`
            },
            pos: {
                elem: "Posición",
                tt: "Establecer la posición de la notificación en la pantalla",
                query: ".sanboxlbl"
            },
            usecustompos: {
                elem: "Posición Personalizada",
                tt: "Usar una posición personalizada para la notificación",
                query: ".sanboxlbl"
            },
            setcustompos: {
                elem: "Establecer Posición",
                tt: "Establecer una posición personalizada para la notificación",
                query: "label"
            },
            animdir: {
                elem: "Dirección de Animación",
                tt: "Establecer la dirección de la animación de la notificación",
                query: ".sanboxlbl"
            },       
            pptitle: {
                elem: "POLÍTICA DE PRIVACIDAD"
            },
            ppusagetitle: {
                elem: "USO DE DATOS DE LA API WEB DE STEAM"
            },
            ppusagecontent: {
                elem: `Steam Achievement Notifier utiliza la <span class="link" onclick="shell.open('https://steamcommunity.com/dev')">API Web de Steam</span> de Valve para obtener y mostrar datos relacionados con la cuenta de Steam del usuario, a través de la combinación de la Clave de API de Steam/ID de Steam64 proporcionada a la aplicación por el usuario. Estos datos incluyen:`
            },
            ppstats: {
                elem: "Estadísticas de logros bloqueados y desbloqueados"
            },
            ppusername: {
                elem: "Tu nombre de usuario de Steam"
            },
            ppsteamgames: {
                elem: "Tus juegos jugados en Steam"
            },
            ppusagefooter: {
                elem: "Steam Achievement Notifier puede utilizar más datos de la API Web de Steam en el futuro para proporcionar funciones adicionales y actualizaciones de la aplicación."
            },
            ppkey64title: {
                elem: "USO DE LA CLAVE DE API DE STEAM/ID DE STEAM64"
            },
            ppauth: {
                elem: "Steam Achievement Notifier requiere que el usuario ingrese la combinación de Clave de API de Steam/ID de Steam64 para acceder autenticadamente a la API Web de Steam."
            },
            ppnoauth: {
                elem: "Sin esta información, los enlaces web (proporcionados para que Valve acceda a la API Web de Steam) utilizados para obtener datos relacionados con la cuenta de Steam del usuario, incluidos los datos de logros, no se pueden acceder."
            },
            ppstoragetitle: {
                elem: "ALMACENAMIENTO DE DATOS DE LA API WEB DE STEAM"
            },
            ppstorage: {
                elem: "Steam Achievement Notifier almacena temporalmente los datos de la API Web de Steam localmente en la PC del usuario únicamente para su uso dentro de la aplicación. Cualquier almacenamiento temporal de estos datos está destinado únicamente a Steam Achievement Notifier, y en circunstancias normales, todos los datos no persistentes de la API Web de Steam se eliminarán del almacenamiento local al salir de la aplicación."
            },
            pppersist: {
                elem: "Los datos persistentes almacenados en el dispositivo del usuario solo incluyen datos almacenados por la aplicación para la comodidad del usuario, como la Clave de API de Steam y el ID de Steam64 del usuario."
            },
            ppdelete: {
                elem: "Estos datos también se pueden eliminar manualmente por el usuario en cualquier momento si es necesario. Los archivos creados por Steam Achievement Notifier se encuentran en el siguiente directorio:"
            },
            ppwinpath: {
                elem: "%localappdata%\\SteamAchievementNotifier(Vx.x)"
            },
            pplinuxpath: {
                elem: "~/.local/share/SteamAchievementNotifier(Vx.x)"
            },
            ppmacpath: {
                elem: "Actualmente no compatible"
            },
            ppcollecttitle: {
                elem: "POSTURA SOBRE LA RECOPILACIÓN DE DATOS"
            },
            ppnosend: {
                elem: "Steam Achievement Notifier <u>no enviará</u> ni almacenará datos del usuario fuera del sistema de archivos local del usuario sin el permiso explícito del usuario para hacerlo. Esto incluye cualquier información obtenida a través de la API Web de Steam para su uso dentro de la aplicación, incluida la combinación de Clave de API de Steam/ID de Steam64 proporcionada a la aplicación para acceder a la API Web de Steam."
            },
            ppconsent: {
                elem: "A través de la confirmación del consentimiento y el uso posterior de las implementaciones de funciones existentes o futuras diseñadas para enviar información externamente, el usuario otorga implícitamente el permiso para hacerlo. En estos casos, siempre se informará al usuario sobre la naturaleza de los datos que se envían y se le pedirá que confirme su consentimiento para enviar datos fuera de la aplicación."
            },
            ppexclude: {
                elem: "Steam Achievement Notifier excluye intencionalmente cualquier medio para acceder, ver o recopilar externamente cualquier información proporcionada a la aplicación por el usuario, pero a través de implementaciones de funciones existentes o futuras, la aplicación puede enviar datos externamente en nombre del usuario, pero solo con su consentimiento para hacerlo."
            },
            pprequests: {
                elem: "Las solicitudes de acceso a datos de la API Web de Steam se realizan desde la propia aplicación utilizando métodos incorporados, similares a la funcionalidad proporcionada por los navegadores web. Estas solicitudes contienen la combinación de Clave de API de Steam/ID de Steam64 del usuario, según lo requerido por la API Web de Steam, pero nunca se hacen intencionalmente disponibles para su uso o interceptación por otras aplicaciones."
            },
            ppusertitle: {
                elem: "RESPONSABILIDAD DEL USUARIO"
            },
            ppsteamtou: {
                elem: `AL DESCARGAR Y UTILIZAR CUALQUIER VERSIÓN OFICIALMENTE PUBLICADA DE STEAM ACHIEVEMENT NOTIFIER A TRAVÉS DEL <span class="link" onclick="shell.open('https://github.com/steamachievementnotifier/steamachievementnotifier/releases')">REPOSITORIO OFICIAL DE GITHUB</span>, TÚ, EL USUARIO, POR EXTENSIÓN, TE ADHIERES A LAS SECCIONES 7 Y 8 DE LOS <span class="link" onclick="shell.open('https://steamcommunity.com/dev/apiterms')">TÉRMINOS DE USO DE LA API WEB DE STEAM</span>.`
            },
            gamedetails: "Detalles del juego",
            mustbepublic: "debe establecerse como Público",            
            nosoundfile: "Predeterminado (Ningún archivo de sonido seleccionado)",
            nosoundfolder: "Predeterminado (Ninguna carpeta de sonido seleccionada)",
            file: "Archivo",
            randomised: "Aleatorio",            
            audioselectdialog: `Seleccionar ${custom.mode === "file" ? "Archivo" : "Carpeta"} de Sonido`,
            imgselectdialog: "Seleccionar Archivo de Imagen",
            unsupported: "¡Archivo no compatible!",
            novalidaudiofiles: "¡No se encontraron archivos de sonido válidos!",
            nolocate: "¡No se pudo encontrar el archivo!",
            switchaccountstitle: "Cambiar cuentas",
            noaccounts: "¡Agrega una cuenta para comenzar!",
            connecting: "Conectando...",
            connected: "Conectado",
            testsuccessuser: "Estás listo para continuar",
            testsuccess1: `Asegúrate de que tus <span>Detalles del juego</span> estén configurados como <span>Público</span> en <a href="${privacysettings}">Configuración de privacidad de Steam</a>`,
            testsuccess2: "Verifica que el modo de visualización en el juego esté configurado como <span>Sin bordes</span> para que las notificaciones se muestren encima de la ventana del juego",
            noapikeytitle: "Sin Clave de API",
            noapikeytxt: "Por favor, ingresa tu Clave de API",
            noapikeyhint: `Haz clic en el icono <img src="./icon/key.svg" alt=""> para obtener tu Clave de API`,
            nosteam64idtitle: "Sin Steam64 ID",
            nosteam64idtxt: "Por favor, ingresa tu Steam64 ID",
            nosteam64idhint: `Haz clic en el icono <img src="./icon/id.svg" alt=""> para obtener tu Steam64 ID`,
            invalidapikeytitle: "¡Clave de API inválida!",
            invalidapikeymsg: "No se puede acceder a la Steam Web API con la Clave de API proporcionada",
            invalidapikeydetail1: "Verifica que tu Clave de API sea correcta",
            invalidapikeydetail2: "Genera una nueva Clave de API para tu cuenta",
            invalidsteam64idtitle: "¡Steam64 ID inválido!",
            invalidsteam64idmsg: "No se puede encontrar una cuenta de Steam asociada con el Steam64 ID proporcionado",
            invalidsteam64iddetail1: "Verifica que el valor de Steam64 ID que has proporcionado sea el valor correcto para tu cuenta de Steam",
            nonetworkfound: "No se encontró una conexión de red activa",
            connecttonetwork: "Conecta tu PC a una red e intenta nuevamente",
            testdefaulterrortitle: "¡Se produjo un error!",
            testdefaulterrormsg: "Hubo un error al conectar con la Steam Web API",
            testdefaulterrordetail1: "¡Informa este problema en Discord o GitHub!",
            sspath: "Seleccionar Ruta de Captura de Pantalla",
            wronguser: user ? `¡${user} no ha iniciado sesión en Steam!` : "¡No se encontraron cuentas de usuario vinculadas!",
            switchuser: "Haz clic aquí para cambiar de cuenta",
            trackingfailed: "¡Fallo en el seguimiento!",
            checkapplog: "Verifica el registro de la aplicación para obtener más detalles",
            soon: "¡Próximamente!",
            gamecomplete: "100% Completado",
            gametitle: "Título del Juego",
            achievementunlocked: "Logro desbloqueado",
            achievementtitle: "Título del Logro",
            allachievements: "¡Has desbloqueado todos los logros!",
            achievementdesc: "Descripción del Logro",
            show: "Mostrar",
            quit: "Salir",
            off: "Apagado",
            steamss: "Captura de Pantalla de Steam en el Juego",
            overlayss: "Captura de Pantalla con Superposición de Notificación",
            match: "Configuración de Copia",
            topleft: "Arriba Izquierda",
            topcenter: "Arriba Centro",
            topright: "Arriba Derecha",
            bottomleft: "Abajo Izquierda",
            bottomcenter: "Abajo Centro",
            bottomright: "Abajo Derecha",
            solid: "Sólido",
            gradient: "Degradado",
            bgimg: "Imagen de Fondo",
            gameart: "Arte del Juego",
            up: "Arriba",
            down: "Abajo",
            left: "Izquierda",
            right: "Derecha",
            tracking: "Rastreando Ahora"
        }

        const btns = ["soundfilelbl","searchbtn"]
        btns.forEach(btn => translations[btn].tt = config.customisation[GetTabType()].mode === "file" ? "Selecciona un archivo de sonido para reproducir al desbloquear un logro" : "Selecciona una carpeta que contenga archivos de sonido para reproducir aleatoriamente al desbloquear un logro");
    
        return translations
    } else {
        const translations = {
            // Log
            tagline: {
                elem: "Aquí tienes un registro de lo que ha sucedido desde que se inició la aplicación a las"
            },
            copylbl: {
                elem: "Copiar contenido del registro"
            },
            openlbl: {
                elem: "Generar archivo de registro"
            },
        }

        return translations
    }
}