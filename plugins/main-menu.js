let handler = async (m, { conn, args }) => {
let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
let user = global.db.data.users[userId]
let name = conn.getName(userId)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
let txt = `let infoBot = 
╭─〔👑 𝙄𝙉𝙁𝙊・𝙐𝙎𝙐𝘼𝙍𝙄𝙊 ⛩️〕─╮
│ ✦ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 : @${userId.split('@')[0]}
│ ✦ 𝙀𝙨𝙩𝙖𝙙𝙤  : ${conn.user.jid == global.conn.user.jid ? '⚡ 𝘽𝙤𝙩 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡' : '🤖 𝙎𝙪𝙗-𝘽𝙤𝙩 𝘼𝙘𝙩𝙞𝙫𝙤'}
│ ✦ 𝙏𝙞𝙚𝙢𝙥𝙤 𝘼𝙘𝙩𝙞𝙫𝙤 : ${uptime}
│ ✦ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨 𝙏𝙤𝙩𝙖𝙡𝙚𝙨 : ${totalreg}
│ ✦ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝘾𝙖𝙧𝙜𝙖𝙙𝙤𝙨 : ${totalCommands}
│ ✦ 𝙎𝙚𝙧𝙫𝙞𝙙𝙤𝙧 : 🛰️ 𝙈𝙪𝙡𝙩𝙞-𝘿𝙚𝙫𝙞𝙘𝙚
│ ✦ 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 : ${creador} 🥷
╰───────〔★〕───────╯

╭───〔🧿 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝘿𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚𝙨 🧿〕───╮
│ 
╭〔🎴 𝐈𝐍𝐅𝐎・𝐁𝐎𝐓 ✦ 彡〕─╮
│ ❖ Comandos para consultar el estado y control del sistema.
╰────────────────────────────╯

╭━━ ⪩ 🌐 𝗚𝗘𝗡𝗘𝗥𝗔𝗟
┃⩺ *#help* • *#menu*
┃   ⤷ Ver lista de comandos del bot.
┃⩺ *#uptime* • *#runtime*
┃   ⤷ Tiempo activo o en línea.
┃⩺ *#status* • *#estado*
┃   ⤷ Estado actual del sistema.
┃⩺ *#p* • *#ping*
┃   ⤷ Ver velocidad de respuesta.
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩ ⚙️ 𝗦𝗜𝗦𝗧𝗘𝗠𝗔
┃⩺ *#speed* • *#speedtest*
┃   ⤷ Prueba de velocidad.
┃⩺ *#sistema* • *#system*
┃   ⤷ Información del servidor.
┃⩺ *#ds* • *#fixmsgespera*
┃   ⤷ Limpiar sesiones viejas.
┃⩺ *#funciones* • *#totalfunciones*
┃   ⤷ Ver funciones activas.
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩ 👥 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦
┃⩺ *#views* • *#usuarios*
┃   ⤷ Usuarios registrados.
┃⩺ *#editautoresponder*
┃   ⤷ Configurar respuesta IA.
┃⩺ *#sug* • *#newcommand*
┃   ⤷ Sugerir un nuevo comando.
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩ 🧩 𝗦𝗢𝗣𝗢𝗥𝗧𝗘
┃⩺ *#sc* • *#script*
┃   ⤷ Repositorio del bot.
┃⩺ *#staff* • *#colaboradores*
┃   ⤷ Equipo de desarrollo.
┃⩺ *#reporte* • *#reportar*
┃   ⤷ Informar un problema.
┃⩺ *#links* • *#grupos*
┃   ⤷ Grupos oficiales del bot.
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩ 🤖 𝗦𝗨𝗕-𝗕𝗢𝗧𝗦
┃⩺ *#serbot* • *#serbot code*
┃   ⤷ Crear sesión de Sub-Bot.
┃⩺ *#bots* • *#sockets*
┃   ⤷ Ver Sub-Bots activos.
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭─〔🔎 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ✦ 彡〕─╮
│ ❖ Comandos para realizar búsquedas en distintas plataformas.
╰────────────────────────────╯

╭━━ ⪩ 🎵 TikTok / Twitter / YouTube
┃⩺ *#tiktoksearch* • *#tiktoks*
┃   ⤷ Buscar videos de TikTok.
┃⩺ *#tweetposts*
┃   ⤷ Buscar publicaciones de Twitter/X.
┃⩺ *#ytsearch* • *#yts*
┃   ⤷ Buscar videos de YouTube.
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩ 🎬 Películas / Series / Anime
┃⩺ *#cuevana* • *#cuevanasearch*
┃   ⤷ Buscar películas o series (Cuevana).
┃⩺ *#infoanime*
┃   ⤷ Buscar información de anime o manga.
┃⩺ *#hentaisearch* • *#searchhentai*
┃   ⤷ Buscar capítulos hentai.
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩ 🌐 Motores y Medios
┃⩺ *#google*
┃   ⤷ Búsqueda general por Google.
┃⩺ *#imagen* • *#image*
┃   ⤷ Buscar imágenes por Google.
┃⩺ *#pin* • *#pinterest*
┃   ⤷ Buscar imágenes en Pinterest.
┃⩺ *#githubsearch*
┃   ⤷ Buscar usuarios en GitHub.
┃⩺ *#npmjs*
┃   ⤷ Buscar paquetes en NPM.js.
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩ 🔞 Contenido +18
┃⩺ *#xnxxsearch* • *#xnxxs*
┃   ⤷ Buscar vídeos en XNXX.
┃⩺ *#xvsearch* • *#xvideossearch*
┃   ⤷ Buscar vídeos en XVideos.
┃⩺ *#pornhubsearch* • *#phsearch*
┃   ⤷ Buscar vídeos en Pornhub.
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩ 𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺 ⪨ ━━╮
┃  𖥔 Comandos para obtener archivos de múltiples plataformas:
┃
┃ ⤷ 🎵 *#tiktok* • *#tt*
┃    ▸ Descarga videos de TikTok.
┃ ⤷ 📂 *#mediafire* • *#mf*
┃    ▸ Descargar archivos desde MediaFire.
┃ ⤷ 📌 *#pinvid* • *#pinvideo* + [link]
┃    ▸ Descargar videos desde Pinterest.
┃ ⤷ 💾 *#mega* • *#mg* + [link]
┃    ▸ Descargar archivos desde MEGA.
┃ ⤷ 🎧 *#play* • *#play2*
┃    ▸ Descarga música/video por nombre.
┃ ⤷ 🔗 *#ytmp3* • *#ytmp4*
┃    ▸ Descarga directa de YouTube por URL.
┃ ⤷ 🟦 *#fb* • *#facebook*
┃    ▸ Descarga videos de Facebook.
┃ ⤷ 🐦 *#twitter* • *#x* + [link]
┃    ▸ Descargar videos de Twitter/X.
┃ ⤷ 📸 *#ig* • *#instagram*
┃    ▸ Descarga contenido de Instagram.
┃ ⤷ 🔍 *#tts* • *#tiktoks* + [búsqueda]
┃    ▸ Buscar y descargar de TikTok.
┃ ⤷ 📁 *#terabox* • *#tb* + [link]
┃    ▸ Descargar desde Terabox.
┃ ⤷ 🖼 *#ttimg* • *#ttmp3* + [url]
┃    ▸ Descargar imagen/audio de TikTok.
┃ ⤷ 🧬 *#gitclone* + [url]
┃    ▸ Clonar y descargar repositorios GitHub.
┃ ⤷ 🔞 *#xvideosdl*
┃    ▸ Descargar videos de Xvideos.
┃ ⤷ 🔞 *#xnxxdl*
┃    ▸ Descargar videos de Xnxx.
┃ ⤷ 📱 *#apk* • *#modapk*
┃    ▸ Descargar APK desde Aptoide.
┃ ⤷ 🎲 *#tiktokrandom* • *#ttrandom*
┃    ▸ Video aleatorio de TikTok.
┃ ⤷ 📦 *#npmdl* • *#npmdownloader*
┃    ▸ Descarga paquetes desde npmjs.com.
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩『 *📜 𝐄𝐂𝐎𝐍𝐎𝐌𝐈́𝐀 & 𝐑𝐏𝐆* 』⪨━━╮
┃ ❖ Sistema de economía y rol para ganar dinero y recursos.
┃
┃ ⊹ *#w | #work | #trabajar*
┃     ↳ Trabaja para ganar ${moneda}.
┃ ⊹ *#slut | #prostituirse*
┃     ↳ Gana ${moneda} ejerciendo el trabajo más antiguo del mundo.
┃ ⊹ *#cf | #suerte*
┃     ↳ Apuesta tus ${moneda} a cara o cruz.
┃ ⊹ *#crime | #crimen*
┃     ↳ Roba como un ladrón callejero para obtener ${moneda}.
┃ ⊹ *#ruleta | #roulette | #rt*
┃     ↳ Apuesta ${moneda} al rojo o negro en la ruleta.
┃ ⊹ *#casino | #apostar*
┃     ↳ Arriesga tus ${moneda} en el casino virtual.
┃ ⊹ *#slot*
┃     ↳ Prueba suerte en la tragaperras mágica.
┃ ⊹ *#cartera | #wallet*
┃     ↳ Muestra tu saldo en ${moneda}.
┃ ⊹ *#banco | #bank*
┃     ↳ Consulta tus ahorros en el banco.
┃ ⊹ *#deposit | #depositar | #d*
┃     ↳ Deposita tus ${moneda} de forma segura.
┃ ⊹ *#with | #retirar | #withdraw*
┃     ↳ Retira tus fondos del banco.
┃ ⊹ *#transfer | #pay*
┃     ↳ Transfiere ${moneda} o XP a otros aventureros.
┃ ⊹ *#mining | #minar | #mine*
┃     ↳ Conviértete en minero y recolecta riquezas.
┃ ⊹ *#buyall | #buy*
┃     ↳ Compra ${moneda} usando XP.
┃ ⊹ *#daily | #diario*
┃     ↳ Recompensa diaria para fieles usuarios.
┃ ⊹ *#cofre*
┃     ↳ Abre un cofre repleto de tesoros.
┃ ⊹ *#weekly | #semanal*
┃     ↳ Obsequio semanal por tu lealtad.
┃ ⊹ *#monthly | #mensual*
┃     ↳ Recibe tu premio mensual especial.
┃ ⊹ *#steal | #robar | #rob*
┃     ↳ Intenta robar ${moneda} a otros jugadores.
┃ ⊹ *#robarxp | #robxp*
┃     ↳ Róbales XP a tus enemigos.
┃ ⊹ *#eboard | #baltop*
┃     ↳ Ranking de los más ricos del reino.
┃ ⊹ *#aventura | #adventure*
┃     ↳ Explora tierras lejanas en busca de fortuna.
┃ ⊹ *#curar | #heal*
┃     ↳ Recupera tu salud y vuelve a la aventura.
┃ ⊹ *#cazar | #hunt | #berburu*
┃     ↳ Caza criaturas salvajes por recompensas.
┃ ⊹ *#inv | #inventario*
┃     ↳ Consulta tus objetos y pertenencias.
┃ ⊹ *#mazmorra | #explorar*
┃     ↳ Adéntrate en peligrosas mazmorras.
┃ ⊹ *#halloween*
┃     ↳ ¡Truco o trato! Evento especial.
┃ ⊹ *#christmas | #navidad*
┃     ↳ Reclama tu regalo navideño mágico.
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━『 🏮 𝑮𝑨𝑪𝑯𝑨 - ガチャ 』━━⬣
┃ ✦ Comandos para lanzar, reclamar y gestionar waifus.
┃
┃ ᰔᩚ *#rollwaifu • #rw • #roll*
┃ ┗ 🧧 Reclama una waifu o husbando aleatorio.
┃
┃ ᰔᩚ *#claim • #c • #reclamar*
┃ ┗ 🏷️ Reclama el personaje que te tocó.
┃
┃ ᰔᩚ *#harem • #waifus • #claims*
┃ ┗ 🗃️ Mira tu colección de personajes.
┃
┃ ᰔᩚ *#charimage • #waifuimage • #wimage*
┃ ┗ 🖼️ Imagen aleatoria de un personaje.
┃
┃ ᰔᩚ *#charinfo • #winfo • #waifuinfo*
┃ ┗ 📜 Ver info detallada del personaje.
┃
┃ ᰔᩚ *#givechar • #givewaifu • #regalar*
┃ ┗ 🎁 Regala un personaje a otro jugador.
┃
┃ ᰔᩚ *#vote • #votar*
┃ ┗ 📈 Vota por tu waifu favorita.
┃
┃ ᰔᩚ *#waifusboard • #waifustop • #topwaifus*
┃ ┗ 🏆 Ranking de waifus más valiosas.
╰━━━━━━━━━━━━━━━━━━━━⬣

╭━━━『 ✿ 𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑺 - ステッカー 』━━⬣
┃ ✦ Herramientas para crear, editar y transformar stickers.
┃
┃ ᰔᩚ *#sticker • #s*
┃ ┗ 🎨 Convierte imagen o video en sticker.
┃
┃ ᰔᩚ *#setmeta*
┃ ┗ 📝 Configura el pack y autor del sticker.
┃
┃ ᰔᩚ *#delmeta*
┃ ┗ 🧹 Elimina los metadatos de tus stickers.
┃
┃ ᰔᩚ *#pfp • #getpic*
┃ ┗ 🖼️ Obtén la foto de perfil de un usuario.
┃
┃ ᰔᩚ *#qc*
┃ ┗ 🧾 Sticker con texto personalizado o avatar.
┃
┃ ᰔᩚ *#toimg • #img*
┃ ┗ 🖌️ Convierte sticker en imagen.
┃
┃ ᰔᩚ *#brat • #ttp • #attp*
┃ ┗ ✍️ Sticker con texto animado.
┃
┃ ᰔᩚ *#emojimix*
┃ ┗ 💠 Fusiona dos emojis en un solo sticker.
┃
┃ ᰔᩚ *#wm*
┃ ┗ 🏷️ Edita el nombre y autor de tus stickers.
╰━━━━━━━━━━━━━━━━━━━━⬣

╭━━ ⪩『 🧰 𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎 』⪨━━╮
┃ ❍ Utilidades variadas con múltiples funciones:
┃
┃ ⊹ #calcular | #cal | #calcular
┃    ➥ Resuelve ecuaciones matemáticas.
┃
┃ ⊹ #tiempo | #clima
┃    ➥ Consulta el clima de cualquier país.
┃
┃ ⊹ #horario
┃    ➥ Mira la hora global de varios países.
┃
┃ ⊹ #fake | #fakereply
┃    ➥ Crea respuestas falsas de usuarios.
┃
┃ ⊹ #enhance | #remini | #hd
┃    ➥ Mejora la calidad de una imagen.
┃
┃ ⊹ #letra
┃    ➥ Cambia el estilo de tus letras.
┃
┃ ⊹ #read | #readviewonce | #ver
┃    ➥ Visualiza imágenes de una sola vista.
┃
┃ ⊹ #whatmusic | #shazam
┃    ➥ Identifica canciones o vídeos.
┃
┃ ⊹ #ss | #ssweb
┃    ➥ Captura una página web.
┃
┃ ⊹ #length | #tamaño
┃    ➥ Ajusta tamaño de imágenes o vídeos.
┃
┃ ⊹ #say | #decir + [texto]
┃    ➥ Repite un mensaje con el bot.
┃
┃ ⊹ #todoc | #todocument
┃    ➥ Crea documentos desde audio, imagen o video.
┃
┃ ⊹ #translate | #traducir | #trad
┃    ➥ Traduce texto a otros idiomas.
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩『 👤 𝙋𝙀𝙍𝙁𝙄𝙇 』⪨━━╮
┃ ❍ Comandos para ver, modificar o consultar tu perfil:
┃
┃ ⊹ #reg | #verificar | #register
┃    ➥ Regístrate con tu nombre y edad.
┃
┃ ⊹ #unreg
┃    ➥ Elimina tu registro del bot.
┃
┃ ⊹ #profile
┃    ➥ Muestra tu perfil de usuario.
┃
┃ ⊹ #marry [@usuario]
┃    ➥ Propón matrimonio a alguien.
┃
┃ ⊹ #divorce
┃    ➥ Termina tu relación en el bot.
┃
┃ ⊹ #setgenre | #setgenero
┃    ➥ Define tu género en el perfil.
┃
┃ ⊹ #delgenre | #delgenero
┃    ➥ Elimina el género del perfil.
┃
┃ ⊹ #setbirth | #setnacimiento
┃    ➥ Establece tu fecha de nacimiento.
┃
┃ ⊹ #delbirth | #delnacimiento
┃    ➥ Elimina tu fecha de nacimiento.
┃
┃ ⊹ #setdescription | #setdesc
┃    ➥ Agrega una descripción personal.
┃
┃ ⊹ #deldescription | #deldesc
┃    ➥ Borra tu descripción actual.
┃
┃ ⊹ #lb | #lboard <página>
┃    ➥ Ranking de niveles y experiencia.
┃
┃ ⊹ #level | #lvl <@usuario>
┃    ➥ Muestra nivel y XP de un usuario.
┃
┃ ⊹ #comprarpremium | #premium
┃    ➥ Adquiere acceso completo al bot.
┃
┃ ⊹ #confesiones | #confesar
┃    ➥ Confiesa algo de forma anónima.
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩ 𝐆𝐑𝐔𝐏𝐎𝐒 ⪨ ━━╮
┃ ❖  Comandos para una mejor gestión de grupos.
┃
┃ ⤷ 𖥻 *#hidetag*
┃    ▸ Menciona a todos los usuarios del grupo.
┃ ⤷ 𖥻 *#gp* • *#infogrupo*
┃    ▸ Muestra la información del grupo.
┃ ⤷ 𖥻 *#linea* • *#listonline*
┃    ▸ Lista de usuarios en línea.
┃ ⤷ 𖥻 *#setwelcome*
┃    ▸ Configura mensaje de bienvenida.
┃ ⤷ 𖥻 *#setbye*
┃    ▸ Configura mensaje de despedida.
┃ ⤷ 𖥻 *#link*
┃    ▸ Muestra el enlace del grupo.
┃ ⤷ 𖥻 *#admins* • *admin*
┃    ▸ Menciona a los administradores.
┃ ⤷ 𖥻 *#restablecer* • *#revoke*
┃    ▸ Restablece el enlace del grupo.
┃ ⤷ 𖥻 *#grupo [open]* • *#grupo [close]*
┃    ▸ Abre o cierra el grupo (solo admins).
┃ ⤷ 𖥻 *#kick* [número / mención]
┃    ▸ Expulsa a un usuario del grupo.
┃ ⤷ 𖥻 *#add* • *#añadir* [número]
┃    ▸ Añade un usuario al grupo.
┃ ⤷ 𖥻 *#promote* [mención]
┃    ▸ Asciende a admin.
┃ ⤷ 𖥻 *#demote* [mención]
┃    ▸ Quita privilegios de admin.
┃ ⤷ 𖥻 *#gpbanner*
┃    ▸ Cambia la imagen del grupo.
┃ ⤷ 𖥻 *#gpname*
┃    ▸ Cambia el nombre del grupo.
┃ ⤷ 𖥻 *#gpdesc*
┃    ▸ Cambia la descripción del grupo.
┃ ⤷ 𖥻 *#advertir* • *#warn*
┃    ▸ Advierte a un usuario.
┃ ⤷ 𖥻 *#unwarn* • *#delwarn*
┃    ▸ Elimina advertencias.
┃ ⤷ 𖥻 *#advlist* • *#listadv*
┃    ▸ Muestra advertencias activas.
┃ ⤷ 𖥻 *#bot on* • *#bot off*
┃    ▸ Activa o desactiva el bot en el grupo.
┃ ⤷ 𖥻 *#mute* • *#unmute*
┃    ▸ Silencia o reactiva un usuario.
┃ ⤷ 𖥻 *#encuesta* • *#poll*
┃    ▸ Crea una encuesta grupal.
┃ ⤷ 𖥻 *#delete* • *#del*
┃    ▸ Elimina un mensaje.
┃ ⤷ 𖥻 *#fantasmas*
┃    ▸ Lista de inactivos.
┃ ⤷ 𖥻 *#kickfantasmas*
┃    ▸ Elimina usuarios inactivos.
┃ ⤷ 𖥻 *#invocar* • *#tagall*
┃    ▸ Menciona a todos los usuarios.
┃ ⤷ 𖥻 *#setemoji*
┃    ▸ Cambia el emoji de bienvenida.
┃ ⤷ 𖥻 *#listnum* • *#kicknum*
┃    ▸ Elimina números por prefijo.
╰━━━━━━━━━━━━━━━━━━━╯

• ╭━━ ⪩ 『 🍥 𝐀𝐍𝐈𝐌𝐄 - 𝐑𝐄𝐀𝐂𝐂𝐈𝐎𝐍𝐄𝐒 』⪨━━╮

┃ ⛩️ Comandos de reacciones roleplay de anime:
┃
┃ 🐾 ᰔᩚ *#angry • #enojado* + <mención>
┃        ✦ Estar enojado
┃ 🐾 ᰔᩚ *#bite* + <mención>
┃        ✦ Muerde a alguien
┃ 🐾 ᰔᩚ *#bleh* + <mención>
┃        ✦ Sacar la lengua
┃ 🐾 ᰔᩚ *#blush* + <mención>
┃        ✦ Sonrojarte
┃ 🐾 ᰔᩚ *#bored • #aburrido* + <mención>
┃        ✦ Estar aburrido
┃ 🐾 ᰔᩚ *#cry* + <mención>
┃        ✦ Llorar por algo o alguien
┃ 🐾 ᰔᩚ *#cuddle* + <mención>
┃        ✦ Acurrucarse
┃ 🐾 ᰔᩚ *#dance* + <mención>
┃        ✦ Sácate los pasos prohibidos
┃ 🐾 ᰔᩚ *#drunk* + <mención>
┃        ✦ Estar borracho
┃ 🐾 ᰔᩚ *#eat • #comer* + <mención>
┃        ✦ Comer algo delicioso
┃ 🐾 ᰔᩚ *#facepalm* + <mención>
┃        ✦ Palmada en la cara
┃ 🐾 ᰔᩚ *#happy • #feliz* + <mención>
┃        ✦ Saltar de felicidad
┃ 🐾 ᰔᩚ *#hug* + <mención>
┃        ✦ Abrazar a alguien
┃ 🐾 ᰔᩚ *#impregnate • #preg* + <mención>
┃        ✦ Embarazar a alguien
┃ 🐾 ᰔᩚ *#kill* + <mención>
┃        ✦ Matar a alguien
┃ 🐾 ᰔᩚ *#kiss • #besar • #kiss2* + <mención>
┃        ✦ Dar un beso
┃ 🐾 ᰔᩚ *#laugh* + <mención>
┃        ✦ Reírse de alguien
┃ 🐾 ᰔᩚ *#lick* + <mención>
┃        ✦ Lamer a alguien
┃ 🐾 ᰔᩚ *#love • #amor* + <mención>
┃        ✦ Estar enamorado
┃ 🐾 ᰔᩚ *#pat* + <mención>
┃        ✦ Acariciar
┃ 🐾 ᰔᩚ *#poke* + <mención>
┃        ✦ Picar a alguien
┃ 🐾 ᰔᩚ *#pout* + <mención>
┃        ✦ Hacer pucheros
┃ 🐾 ᰔᩚ *#punch* + <mención>
┃        ✦ Dar un puñetazo
┃ 🐾 ᰔᩚ *#run* + <mención>
┃        ✦ Correr
┃ 🐾 ᰔᩚ *#sad • #triste* + <mención>
┃        ✦ Sentirse triste
┃ 🐾 ᰔᩚ *#scared* + <mención>
┃        ✦ Estar asustado
┃ 🐾 ᰔᩚ *#seduce* + <mención>
┃        ✦ Seducir a alguien
┃ 🐾 ᰔᩚ *#shy • #timido* + <mención>
┃        ✦ Sentir timidez
┃ 🐾 ᰔᩚ *#slap* + <mención>
┃        ✦ Dar una bofetada
┃ 🐾 ᰔᩚ *#dias • #days*
┃        ✦ Dar los buenos días
┃ 🐾 ᰔᩚ *#noches • #nights*
┃        ✦ Dar las buenas noches
┃ 🐾 ᰔᩚ *#sleep* + <mención>
┃        ✦ Dormir
┃ 🐾 ᰔᩚ *#smoke* + <mención>
┃        ✦ Fumar
┃ 🐾 ᰔᩚ *#think* + <mención>
┃        ✦ Pensar en algo

╰━━━🐉𝐒𝐞𝐫𝐯𝐢𝐝𝐨 𝐜𝐨𝐧 𝐚𝐧𝐢𝐦𝐞 ⁺˚🫧 ﹞━━━

╭━━ ⪩『 *NSFW – Zona Prohibida* 』⪨━━╮
┃ ❍ 𓆩 Comandos de contenido adulto 𓆪
┃
┃ ᰔᩚ *#anal* + @user
┃    ⤷ ✦ Realiza un anal con alguien.
┃
┃ ᰔᩚ *#waifu*
┃    ⤷ ✦ Encuentra una waifu aleatoria.
┃
┃ ᰔᩚ *#bath* + @user
┃    ⤷ ✦ Báñate con alguien.
┃
┃ ᰔᩚ *#blowjob • #mamada • #bj* + @user
┃    ⤷ ✦ Realiza una mamada.
┃
┃ ᰔᩚ *#boobjob* + @user
┃    ⤷ ✦ Haz una rusa.
┃
┃ ᰔᩚ *#cum* + @user
┃    ⤷ ✦ Termina sobre alguien.
┃
┃ ᰔᩚ *#fap* + @user
┃    ⤷ ✦ Hazte una paja.
┃
┃ ᰔᩚ *#ppcouple • #ppcp*
┃    ⤷ ✦ Imágenes para parejas o amistades.
┃
┃ ᰔᩚ *#footjob* + @user
┃    ⤷ ✦ Da placer con los pies.
┃
┃ ᰔᩚ *#fuck • #coger • #fuck2* + @user
┃    ⤷ ✦ Fóllate a alguien.
┃
┃ ᰔᩚ *#cafe • #coffe*
┃    ⤷ ✦ Tómate un café con alguien.
┃
┃ ᰔᩚ *#violar • #perra* + @user
┃    ⤷ ✦ Fuerza bruta... (usa con cuidado).
┃
┃ ᰔᩚ *#grabboobs* + @user
┃    ⤷ ✦ Agarra unos pechos.
┃
┃ ᰔᩚ *#grop* + @user
┃    ⤷ ✦ Manosea a alguien.
┃
┃ ᰔᩚ *#lickpussy* + @user
┃    ⤷ ✦ Lame el coño de alguien.
┃
┃ ᰔᩚ *#rule34 • #r34* + [tags]
┃    ⤷ ✦ Busca imágenes Rule34.
┃
┃ ᰔᩚ *#sixnine • #69* + @user
┃    ⤷ ✦ Haz un 69 con alguien.
┃
┃ ᰔᩚ *#spank • #nalgada* + @user
┃    ⤷ ✦ Da una nalgada.
┃
┃ ᰔᩚ *#suckboobs* + @user
┃    ⤷ ✦ Chupa los pechos.
┃
┃ ᰔᩚ *#undress • #encuerar* + @user
┃    ⤷ ✦ Quita la ropa a alguien.
┃
┃ ᰔᩚ *#yuri • #tijeras* + @user
┃    ⤷ ✦ Haz tijeras (contenido lésbico).
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━ ⪩『 🎮 𝐉𝐮𝐞𝐠𝐨𝐬 』⪨━━╮
┃ Comandos divertidos para jugar en grupo.  
┃ Ideal para pasar el rato con amigos. 🏮
┃
┣─⧉ #amistad • #amigorandom
┃   ⤷ Conoce nuevos amigos al azar.
┣─⧉ #chaqueta • #jalamela
┃   ⤷ Hazte una chaqueta (virtual...).
┣─⧉ #chiste
┃   ⤷ Escucha un chiste de la bot.
┣─⧉ #consejo
┃   ⤷ Recibe un sabio consejo.
┣─⧉ #doxeo • #doxear @user
┃   ⤷ Simula un doxeo falso.
┣─⧉ #facto
┃   ⤷ Recibe un dato curioso.
┣─⧉ #formarpareja
┃   ⤷ Une a dos almas al azar.
┣─⧉ #formarpareja5
┃   ⤷ Crea 5 parejas aleatorias.
┣─⧉ #frase
┃   ⤷ Inspírate con una frase.
┣─⧉ #huevo
┃   ⤷ Agarra un huevo... ¡de sorpresa!
┣─⧉ #chupalo @user
┃   ⤷ Haz que alguien te la chupe.
┣─⧉ #aplauso @user
┃   ⤷ Aplaude con honor a alguien.
┣─⧉ #marron @user
┃   ⤷ Burla del color (sátira).
┣─⧉ #suicidar
┃   ⤷ Simula un adiós dramático.
┣─⧉ #iq • #iqtest @user
┃   ⤷ Mide el intelecto.
┣─⧉ #meme
┃   ⤷ Recibe un meme aleatorio.
┣─⧉ #morse
┃   ⤷ Convierte texto a código Morse.
┣─⧉ #nombreninja
┃   ⤷ Descubre tu nombre ninja.
┣─⧉ #paja • #pajeame
┃   ⤷ Recibe... atención especial.
┣─⧉ #personalidad @user
┃   ⤷ Analiza la personalidad.
┣─⧉ #piropo
┃   ⤷ Recibe un piropo creativo.
┣─⧉ #pregunta
┃   ⤷ Haz una pregunta misteriosa.
┣─⧉ #ship • #pareja
┃   ⤷ Evalúa compatibilidad con alguien.
┣─⧉ #sorteo
┃   ⤷ Inicia un sorteo entre usuarios.
┣─⧉ #top
┃   ⤷ Lista los mejores... o peores.
┣─⧉ #formartrio @user
┃   ⤷ Forma un trío curioso.
┣─⧉ #ahorcado
┃   ⤷ Juega el clásico juego del ahorcado.
┣─⧉ #mates • #matematicas
┃   ⤷ Reta tu mente con cuentas rápidas.
┣─⧉ #ppt
┃   ⤷ Juega piedra, papel o tijera.
┣─⧉ #sopa • #buscarpalabra
┃   ⤷ Encuentra palabras en sopa de letras.
┣─⧉ #pvp • #suit @user
┃   ⤷ Desafía a duelo a otro jugador.
┣─⧉ #ttt
┃   ⤷ Crea sala para un nuevo juego.
╰━━━━━━━━━━━━━━━━━━━⭑`.trim()

await conn.sendMessage(m.chat, { 
text: txt,
contextInfo: {
mentionedJid: [userId],
externalAdReply: {                
title: botname,
body: textbot,
mediaType: 1,
mediaUrl: redes,
sourceUrl: redes,
thumbnail: await (await fetch(banner)).buffer(),
showAdAttribution: false,
containsAutoReply: true,
renderLargerThumbnail: true
}}}, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
let seconds = Math.floor((ms / 1000) % 60)
let minutes = Math.floor((ms / (1000 * 60)) % 60)
let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
return `${hours}h ${minutes}m ${seconds}s`
}
