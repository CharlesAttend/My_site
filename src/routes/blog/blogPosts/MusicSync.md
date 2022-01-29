<!-- MusicSync -->
# Téléchargement et synchronisation de playlist SoundCloud et Youtube.

## Introduction 
Ce projet fut le premier d'une grande lignée, grâce à lui j'ai pu apprendre à lire une documentation jusqu'à déployer le projet sur un serveur Django pour lancer le téléchargement sur mon serveur. En passant par l'utilisation de CronTab, apache2, ...

Tout à commencé avec une volonté d'automatisation en fin de 3ème. J'ai rapidement trouvé rébarbatif de télécharger mes playlists avec des sites remplis de pub et même payant la plus part du temps. Après quelques recherches, j'ai découvert le module python youtubeDL et c'était parti ;)

## Le script
Depuis 6 ans, le coeur du script n'a pas beaucoup évolué. On fourni une liste de liens (YouTube ou SoundCloud) et un objet de paramètre :
```py
ytdl_opts = {
    'format': 'bestaudio/best',
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
        'preferredquality': '192'},
        {'key': 'EmbedThumbnail'}, ], #Conversion en mp3 avec ffmpeg
    'playlistreverse': True,
    'outtmpl': pathToPlaylist + "%(playlist_title)s/%(playlist_index)s - %(title)s.%(ext)s", 
    # Ici c'est super pratique, je vous explique en dessous
    "download_archive": pathToArchive,
    "ignoreerrors": True,
    "writethumbnail": True # Les miniatures ! 
}
```
Le script télécharge les musiques en les numérotant en fonction de leur index dans la playlist. 
Pourquoi ? En général, j'écoute toujours les musiques sortie récemment. Numéroter les chansons dans leur ordre d'ajout me permet de les maintenir en haut de la liste !

### Test et ajout de fonctionnalités
