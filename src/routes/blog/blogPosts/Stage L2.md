<!-- Stage L2 -->
**Quick automatic conversion from Latex to Markdown (thanks to Pandoc)**
========================================================================

**Rapport de stage**

Utiliser l'oculométrie pour tester l'effet du design sensoriel sur l'axe
du regard pendant les promenades dans les lieux publics

**Charles Vin**

**Enseignante référente:** BRUNELIERE Angèle **Tutrice de stage:**
DELEVOYE Yvonne

**Établissement /Formation:** **Établissement d'accueil:** Université de
Lille Laboratoire SCALab Deuxième année - Licence MIASHS parcours
Science Cognitive

**Remerciement**\
Je voudrais dans un premier temps remercier **Mme. Brunelière,
enseignante-chercheuse au laboratoire SCALab** pour l'accompagnement
dans la recherche d'un stage. Mais également toute l'équipe pédagogique
de la licence MIASHS, pour avoir assuré les fondements théoriques de la
formation.\
Je tiens allégrement à remercier ma tutrice de stage, **Mme. Delevoye,
enseignante-chercheuse au laboratoire SCALab**, pour sa pédagogie
exemplaire, son humanité et son investissement. Ainsi que toute son
équipe : **M. Brossard, Mme. Guérin, Mme. Batistatou, doctorant
également à SCALab**

Enfin, je tiens à remercier toutes les personnes qui m'ont conseillé et
relu lors de la rédaction de ce rapport de stage : **ma famille et mes
amis**.

Introduction
============

La licence MIASHS de l'Université de Lille nous permet d'effectuer un
stage de 6 à 12 semaines dès la deuxième année d'étude. J'ai donc saisi
cette opportunité qui permettra d'appuyer mes futures candidatures en
masters d'informatique, orienté sciences des données. Après de nombreux
refus de la part des entreprises lilloises du secteur de la data,
l'offre d'un stage de 6 semaines au sein de l'équipe de Madame Yvonne
Delevoye dans le laboratoire SCALab à Tourcoing sonna la fin de mes
recherches. Celle ci proposait un sujet éveillant fortement ma curiosité
même si celui-ci n'intégrait pas explicitement de l'informatique.

\"Utiliser l'oculométrie pour tester l'effet du design sur l'axe du
regard pendant les promenades dans les lieux publics\"

En effet celui-ci semblait utiliser une nouvelle technologie pour une
application concrète dans les parcs. Comportant ainsi une part
d'informatique et le coté appliqué à l'humain des sciences cognitives.
Au fur et à mesure du stage, le sujet s'est transformé en un test des
fonctionnalités et des limites d'un nouveau modèle de lunettes d'eye
tracking.

Dans un premier temps, je vais vous présenter le laboratoire SCALab
ainsi que les missions de ma tutrice de stage Madame Yvonne Delevoye.
Puis vous présenter la principale mission effectuée avec ses aspects
positifs et négatifs ainsi qu'une réflexion sur les améliorations qui
auraient pu être appliquées à la gestion de celle-ci.

Le laboratoire SCALab
=====================

Le laboratoire de recherche SCALab a été créé en 2015 et financé par
l'Université de Lille et le CNRS. Dirigé par Yann COELLO (directeur) et
Jean-Louis NANDRINO (directeur adjoint), il regroupe une centaine de
personnes, chercheurs, enseignants-chercheurs et cliniciens, autour du
domaine des sciences cognitives. Plus précisément dans l'étude des
relations entre cognitions, émotions et comportements.

Favorisant une approche scientifique pluridisciplinaire et
translationnelle, il prend appui sur des outils numériques nouveaux et
innovants permettant d'être à la frontière des sciences humaines et
sociales et des neurosciences.

Le laboratoire est divisé en trois équipes :

-   AVA : L'équipe Action-Vision-Apprentissage dont fait partie ma
    tutrice, est dirigée par Solène Kalénine et Laurent Madelain. Elle
    s'intéresse à l'approche fonctionnelle de la vision, des liens
    perception-action et du rôle des renforcements dans les changements
    comportementaux dans le but d'être appliqués aux domaines des
    dispositifs numériques (réalité virtuelle, \...) et à la
    neuropsychologie. On y utilise des méthodes de mesure des mouvements
    oculaires, de temps et de choix de réponse, d'enregistrements
    cérébraux, de capture du mouvement, des réseaux de neurones, \...

-   DEEP : L'équipe Dynamique Émotionnelle et Pathologies, dirigée par
    Jean Louis Nandrino et Henrique Sequeira, analyse la dynamique et la
    régulation des processus émotionnels qui constituent un enjeu majeur
    de nombreuses pathologies et situation de santé. En effet, la
    compréhension du rôle des émotions dans la détermination des
    comportements et dans la gestion des ressources cognitives
    permettraient de prévenir l'installation ou de maintien de
    pathologies mentales ou somatiques.

    Pour obtenir un traitement étendu de l'information émotionnelle, ce
    programme de recherche utilise des méthodes d'enregistrements
    cérébraux (EEG, Potentiels Évoqués, MEG), neurovégétatifs
    (variations thermiques faciales, activités électrodermales,
    cardiaques, respiratoires et pupillaires) et comportementaux
    (mouvements oculaires, analyse qualitative narrative, évaluation
    psychométrique et analyse vidéo-comportementale).

-   LANGAGE : En utilisant les mêmes méthodes que précédemment, l'équipe
    Langage, dirigée par Séverine Casalis et Angèle Brunellière, étudie
    les mécanismes de l'apprentissage et de traitement du langage. Elle
    est centrée autour de quatre thèmes : Lire, Apprendre les mots,
    Communiquer à l'oral, Compter.

C'est dans l'équipe AVA que va se dérouler mon stage, plus
particulièrement au sein d'un petit groupe de doctorants et de
stagiaires, dirigé par Mme. Delevoye. La figure
[1](#organigramme){reference-type="ref" reference="organigramme"}
représente un organigramme du laboratoire.

![Organigramme du Laboratoire de recherche CNRS
SCALab[]{label="organigramme"}](https://media.discordapp.net/attachments/959838450188685383/959838469843197953/Organigramme.png){#organigramme
width=".5\textwidth"}

Présentation et domaine de recherche de ma tutrice
==================================================

Après avoir publié dans le domaine de la psychiatrie adulte, Madame
Yvonne Delevoye intégra l'équipe de recherche du professeur Y. Coello
(URECA, Université Lille3) en 2004. Elle s'est intéressée au rôle de
l'attention pour la planification des actions motrices.

Grace à deux années de délégation CNRS entre 2012 et 2014, elle eu
l'occasion de visiter deux laboratoires de recherche aux USA.

C'est dans le premier qu'elle s'est intéressée au rôle des renforçateurs
sensoriels dans la prise de décision comportementale. La suite de ses
travaux fut significativement influencée par la découverte de ce thème
d'étude. Notamment le projet Sport Plaisir est basé sur le principe
d'utiliser les renforçateurs positifs pour encoder en mémoire une
activité physique de manière positive, même si la personne doit émettre
un effort pour la réaliser. Ces principes sont maintenant déployés avec
succès en pathologie pour redonner plaisir à marcher à des patients
Parkinsoniens ainsi qu'en design urbain avec le POC Playful'City, pour
inciter les citoyens à adopter la mobilité douce à travers la métropole
lilloise.

Dans le deuxième laboratoire américain, elle s'est intéressée aux
méthodes de caractérisation d'un mouvement \"émotionnel\", notamment
avec l'utilisation de questionnaires et de jeux sérieux. C'est grace à
cela qu'elle et son groupe de recherche ont développé l'utilisation de
caméras 3D de cinématique de mouvements pour l'analyse des gestes
non-verbaux.

C'est ainsi que ses travaux depuis 5 ans combinent de façon originale le
développement des protocoles, des logiciels , et des méthodes d'imagerie
cérébrale (fNIRS) pour nous permettre à terme de catégoriser les
micro-variations contenues dans un comportement moteur volontaire.

Son projet de recherche pour le prochain quinquennal est donc de mettre
l'accent sur le développement et l'utilisation d'algorithmes de machine
learning pour comprendre comment un observateur naïf est capable par
simple observation de comprendre l'intention motrice ou sociale mais
surtout l'état émotionnel de l'acteur.\
\
Son groupe de recherche étudie donc les aspects cognitifs des
comportements moteurs émotionnels. Ces comportements moteurs peuvent
être des séries de mouvements de pointages visuo-manuel, des mouvements
cycliques des bras/jambes (comme dans la marche) ou encore des
mouvements répétés corps-entier (comme dans les activités physiques sur
vélo et sur tapis de course). La question centrale est ainsi de mieux
comprendre comment le cerveau contrôle les aspects temporels de la
planification motrice en fonction des états émotionnels et du contexte
sensoriel.

Le développement de paradigmes expérimentaux permet de tester la
validité des théories des émotions dans le champ du contrôle moteur. Ces
nouveaux protocoles intègrent plusieurs innovations majeures comme
l'utilisation du machine learning pour modéliser des résultats
comportementaux. Mais également autour de la technologie fNIRS qui
permet de compléter les résultats comportementaux avec des mesures
d'activités cérébrales.

Ma mission
==========

Activité développée
-------------------

Peu de temps avant notre arrivée, l'équipe de Madame Delevoye reçu des
lunettes d'oculométrie utilisant une nouvelle méthode de capture du
regard. Usuellement, ces lunettes utilisent une propriété particulière
de la cornée pour faciliter la détection de la direction du regard. En
effet, celle-ci reflète particulièrement bien la lumière infrarouge, le
reflet variant en fonction de la direction du regard, on peut la
calculer avec une grande précision. Mais cette technique a ses limites,
en effet elle est peu résistante aux perturbations présentes dans
l'environnement comme la lumière du soleil. Elle nécessite également une
calibration à chaque utilisation et donc une fixation robuste sur la
tête en plus de son apparence inusuelle compliquant les expérimentations
sociales.\
L'argument marketing de ces nouvelles lunettes était de briser toutes
ces limites. Nous devions vérifier si c'était bel et bien véridique par
une série de tests avec pour finalité d'expérimenter l'effet du design
sur l'axe du regard.

Au niveau de l'esthétique, le défi était relevé, les lunettes sont
discrètes et il n'y a qu'un cable partant vers un téléphone. Au niveau
technique, ces lunettes utilisent une caméra filmant le spectre visible
et envoie la vidéo dans un algorithme de machine learning, préalablement
entraîné en interne, pour prédire la direction du regard. Corrigeant
ainsi les problèmes de perturbation extérieure mais soulevant trois
autres problèmes :

1.  Les logiciels et techniques habituellement utilisés dans ce domaine
    sont-ils rétrocompatibles avec ce nouveau système ?

2.  L'algorithme a-t-il été suffisamment entraîné en interne ?

3.  La précision est-elle la même qu'un système classique ?

La première question allait être répondu par l'utilisation même des
lunettes d'oculométrie. Quant aux deux premières questions, les réponses
furent trouvées dans un article scientifique rédigé par des membres de
l'entreprise fabriquant les lunettes. Cet article détaillait une
validation des prédictions du réseau de neurone convolutif. On y
retrouvait des informations sur les données d'entraînement qu'il avait
reçu et sur la précision obtenue dans plusieurs conditions et
environnements. L'article étant financé et rédigé par le fabricant des
lunettes, il fallait rester septique et tester tout cela.

C'est sur ce point de départ que nous nous sommes lancés dans une série
de tests autour des lunettes et de leurs fonctionnalités. Après une
répartition des tâches, je fus chargé de travailler sur la
fonctionnalité des QR-codes fournis par le fabricant, sur le traitement
des données et sur la centrale à inertie (IMU) intégrée aux lunettes.

### Test des QR-Codes

Le but de cette expérience était de tester l'effet de la distance sur la
détection automatique des zones d'intérêt. La création de cette zone
repose sur le placement de QR-code dans l'environnement et simplifie le
traitement des données. Par exemple en automatisant la création de carte
de chaleur ou bien en changeant le système de coordonnées. J'ai donc
construit un petit protocole et rédigé un compte rendu résumant
l'expérience. Les figures [\[QR\_code\]](#QR_code){reference-type="ref"
reference="QR_code"} et [\[QR\_code2\]](#QR_code2){reference-type="ref"
reference="QR_code2"} illustrent celle-ci.

![QR-code partiellement détecté](https://media.discordapp.net/attachments/959838450188685383/959838470489145355/test_QR_code.png){width="\textwidth"}

[\[QR\_code\]]{#QR_code label="QR_code"}

![QR-code partiellement
détecté](https://media.discordapp.net/attachments/959838450188685383/959838470728192060/test_QR_code2.png){width="\textwidth"}

[\[QR\_code2\]]{#QR_code2 label="QR_code2"}

Pour résumer les résultats, les PetitsQR sont détectés, avec un
espacement de 0.5m entre eux, à partir de 1m. Et les GrandsQR sont
partiellement détectés à partir de 6m et correctement détectés à partir
de 5m.

### Analyse des données

Ma deuxième mission fut d'analyser les données obtenues. Pour cela, un
logiciel permettait de faire passerelle entre les données au format
particulier des lunettes vers BeGaze, le logiciel de traitement le plus
utilisé en l'eye tracking. Mais dès les premiers résultats à analyser,
nous avons découvert un bug dans ce logiciel intermédiaire. En effet
celui-ci coupait les vidéos, retirant la partie haute de la vidéo. Ce
bug fut reporté et était inconnu des développeurs du convertisseur.
Après de nombreux échanges, il fut corrigé à la toute fin du stage, le
dernier jour.

En attendant la correction du bug, il nous fallait une alternative. J'ai
donc pris contact avec Blinkshift, une entreprise allemande proposant
une alternative à Begaze. Après un appel téléphonique et quelques mails
pour obtenir une version d'essai, une réunion de présentation du
logiciel a été mise en place. Celle-ci s'est naturellement déroulée en
anglais, ou j'ai pu apprendre les bases du logiciel de l'entreprise
allemande pour analyser les données en provenance de nos lunettes
d'oculométrie.

### Test de l'IMU

Durant un test visant à essayer une analyse des données plus poussée
(longue vidéo, puissance nécessaire), nous avons oublié de mesurer le
tempo de la marche (que notre tutrice nous avait demandé). J'eu alors
l'idée de l'extraire à partir d'un des capteurs des lunettes : la
centrale à inertie.

Le but de cette expérience était donc d'explorer le potentiel de ce
dispositif pour extraire le tempo de la marche puis , plus tard, l'angle
de la tête.

Une centrale à inertie, Inertial Measurement Unit (IMU) en anglais est
un dispositif composé d'un gyroscope et d'un accéléromètre. Il est
capable d'intégrer les mouvements d'un mobile (accélération et vitesse
angulaire) pour estimer son orientation, sa vitesse linéaire et sa
position. Il est assez souvent utilisé en psychologie et son intégration
directement dans les lunettes est un point positif pour celle-ci.

Il y a donc naturellement trois axes fois deux capteurs. N'étant pas
familier avec les mesures d'accélérations et de vitesse angulaire, je ne
comprenais pas la description des axes faite dans la documentation du
constructeur. J'ai donc testé tous les axes pour trouver le plus adapté
à la mesure du tempo de la marche. Par comparaison avec un tempo obtenu
manuellement grâce aux vidéos, il s'est avéré que c'était l'axe $z$ . La
Figure [2](#tempo){reference-type="ref" reference="tempo"} représente
une transformée de fourrier sur cet axe dans les quatre conditions. Avec
un tempo de d'environ $1.7 hz$ dans toute les conditions sauf dans la
*banc\_ch* où j'avais marché plus vite avec un tempo de $2 hz$. Tout le
traitement des données a été fait dans des Notebook Python et grâce aux
bibliothèques Pandas, MatPlotLib, Seaborn et Numpy.

![Transformé de fourier sur l'axe z de
l'accélération[]{label="tempo"}](https://media.discordapp.net/attachments/959838450188685383/959838470979862629/acceleration_Lineplot.png){#tempo
width="\textwidth"}

Après cette réussite, il me fallait extraire l'orientation de la tête.
Mais avant cela je devais comprendre le fonctionnement des axes de
l'IMU. J'ai donc cherché de l'aide auprès de Mme. Delevoye qui confirma
que la description des axes faite par la documentation ne correspondait
pas avec les mesures faites sur le terrain. Il fallait donc les tester !

Après avoir construit un protocole où je bougeais la tête dans
différentes directions, j'ai utilisé Python pour faire un graphique des
données du gyroscope et de l'accéléromètre en indiquant les moments où
je changeais de direction (Figure
[3](#acceleration){reference-type="ref" reference="acceleration"}).
N'ayant pas trouvé la visualisation très parlante, je me suis lancé dans
la création d'une animation 3D des mouvements de la tête grâce à
MatPlotLib. Une fois le signal ébruité, c'était assez sympathique à
visualiser.

Malheureusement, cet axe d'exploration des lunettes n'a pas pu aboutir
par manque de temps. En effet celui ci s'est déroulé la dernière semaine
du stage, et une autre tâche plus importante m'avait été confiée : la
rédaction d'un manuel d'utilisation des lunettes.

![[]{label="acceleration"}](./Stage_L2/acceleration_Lineplot.png){#acceleration
width="\textwidth"}

### Rédaction de manuel d'utilisation

Lors de ma dernière semaine, on me demanda de rédiger des manuels
d'utilisation pour les lunettes d'eye tracking ainsi que pour des
nouvelles caméras 3D. Le but était de permettre une transmission
efficace des connaissances techniques et théoriques pour permettre une
mise en route rapide du matériel en question.

J'ai commencé à rédiger sur Microsoft Word. Puis j'ai décidé de changer
pour une rédaction en Markdown, format que je venais de découvrir,
permettant un style unifié et sans logiciel propriétaire.
Malheureusement, l'exportation au format PDF fut plus compliquée que
prévu. Je me suis donc rabattu sur du LaTeX avec Overleaf, méthode
universelle dans le milieu de la recherche.

Aspects positifs et négatifs
----------------------------

Après avoir croisé la technologie de l'eye tracking dans la création de
contenu divertissant, ce fut un plaisir de pouvoir la prendre en main et
de l'appliquer dans un but concret et sérieux. Les recherches
bibliographiques m'ont permis de constater l'évolution des méthodes de
capture de la direction du regard, pour finalement arriver sur les
technologies actuellement utilisées et avoir la chance d'étudier leurs
fonctionnements.\
La prise de contact avec l'entreprise allemande et la réunion furent
très intéressantes. Elles m'ont permis d'améliorer mon assurance dans la
pratique orale et écrite de l'anglais.

Malheureusement, le manque de temps ne nous à pas permis de rendre
compte de toutes les possibilités et problèmes des lunettes. Le travail
demandé était très technique et appliqué mais cela m'a permis de
concrétiser mes compétences en Python, très utile pour traiter les
données.

Amélioration possible dans la gestion de cette mission
------------------------------------------------------

La communication au sein de l'équipe de stagiaire ne fut pas toujours
idéale mais celle-ci s'est rapidement améliorée notamment grâce à la
répartition des tâches.

Durant l'expérience sur l'IMU, j'aurai probablement gagné du temps sur
le filtrage du signal en demandant l'aide d'une l'ingénieure présente
sur la plateforme de Tourcoing.

Tous les changements de format durant la rédaction des manuels m'ont
fait perdre beaucoup de temps alors qu'une réflexion au préalable aurait
permis de conclure sur le LaTeX directement.

Conclusion
==========

Ce stage fut une expérience très enrichissante. Malgré l'aspect très
appliqué de la mission, ce que j'ai appris durant ce stage ne s'articule
principalement pas autour de compétences techniques mais belle est bien
autour de compétences humaines et comportementales. Plus connues sous le
terme anglophone de soft-skills.\
La première chose fut la constatation du poids des problèmes de
communication ainsi que leurs résolutions. Qu'ils soient en interne au
sein même de l'équipe de stagiaire ou lors de la rencontre entre
chercheurs venant de différents domaines. Ceux-ci peuvent fortement
entraver l'avancement d'un projet. Le mieux est de faire avec en
renforçant la communication et de trouver les points forts de chaque
personne dans l'équipe pour pouvoir en prendre consciemment avantage le
plus vite possible.\
La deuxième chose fut l'importance du réseau et la puissance de
l'information. Avoir un réseau développé permet de débloquer de
nombreuses opportunités. Mme Delevoye nous a permis d'assister à de
nombreuses réunions, permettant ainsi de mesurer à chaque fois les
objectifs des deux partis. Certaines informations ne doivent pas être
divulguées même si elles paraissent banales car elles pourront
éventuellement défendre nos intérêts plus tard.

Ayant aidé quelques personnes dans le traitement informatique ou
statistique de leurs données, j'ai également pris conscience du gain de
la pluridisciplinarité dans la recherche en psychologie. L'utilisation
de code (script) dans la gestion et le traitement des données permet une
traçabilité sur le long terme et bien souvent un gain de temps massif en
comparaison avec un tableur classique. Outre le côté informatique, la
mise en place d'un plan expérimental peut parfois nécessiter une aide
extérieure. Par exemple de chimiste pour pouvoir manipuler les odeurs.

Au-delà de cela, cette immersion dans le milieu de la recherche m'a
permis de mieux comprendre son fonctionnement, ses avantages et
désavantages. Que cela soit au niveau de la thèse jusqu'au déroulement
et financement d'un projet, en passant par la publication d'articles.
Aujourd'hui grâce à ce stage, la possibilité d'intégrer une thèse dans
mon parcours n'est plus strictement exclus.
