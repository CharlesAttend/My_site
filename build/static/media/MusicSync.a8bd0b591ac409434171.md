<!-- MusicSync -->
# Téléchargement et synchronisation de playlist SoundCloud et Youtube.
*Interface [ici](https://django.charles.vin/musicsync/)*

## Introduction 
Ce projet fut le premier d'une grande lignée, grâce à lui j'ai pu apprendre à lire une documentation jusqu'à déployer le projet sur un serveur Django pour lancer le téléchargement sur mon serveur. En passant par l'utilisation de CronTab, apache2, ...

Tout à commencé avec une volonté d'automatisation en fin de classe de 3ème. J'ai rapidement trouvé rébarbatif de télécharger mes playlists avec des sites remplis de pub et même payant la plus part du temps. Après quelques recherches, j'ai découvert le module python youtubeDL et c'était parti ;)

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
Pourquoi ? En général, j'écoute toujours les musiques sorties récemment. Numéroter les chansons dans leur ordre d'ajout me permet de les maintenir en haut de la liste !

### Test et ajout de fonctionnalités
Dans l'ordre chronologique
- J'ai plusieurs fois essayé de tagger les musiques avec le nom de l'artiste et le titre de la chanson. Ca a fonctionné pendant un temps mais j'ai retirer la fonctionnalité ensuite car je n'arrivais pas a atteindre mon niveau d'exigence dans l'extraction à partir du titre de youtube (assez variable). J'avais même fait un peu de SQLite pour tout mettre dans une database.
- Un ami m'avais montré son Subsonic, je m'étais amusé à en set up un également mais je l'utilisais tellement rarement (uniquement pour une écoute aléatoire à travers toutes mes playlists sur un ordinateur) que je ne l'ai jamais réinstallé sur le nouveau raspberry pi 4.
- L'[interface Django](https://django.charles.vin/musicsync/) est arrivé en dernière pour pouvoir avoir une sorte de démo à mettre dans le CV. Ce ne fut pas très simple à faire mais j'ai réussi à le déployer sur le RPI4 après pas mal de difficulté. C'était aussi mes premiers pas pour faire du CSS beau. 

## Déploiement et synchronisation
Le script tourne tous les jours sur un Raspberry Pi 4 avec une commande `crontab`. L'interface Django est également hébergé sur celui-ci desservie par un serveur `Apache2`. 

Pour synchroniser le tout sur mon téléphone j'utilise l'application [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite) (qui fait un travail excellent) et un serveur `WEBDav`.
Au début j'utilisais le serveur `sftp` du rpi4, pas giga sécurisé et optimisé, j'ai basculé sur un serveur `WEBDav` également host sur `Apache2`. Celui-ci était assez facile à configurer et en plus passe par le port 80, plus de port 22 ouvert yeah !