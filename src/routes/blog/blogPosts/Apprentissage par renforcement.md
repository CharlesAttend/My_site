<!-- Apprentissage par renforcement -->
# Compromis observation-action en apprentissage par renforcement
##### 01/2022
Ma licence MIASHS inclus dans son programme de 3ème années un Travail d'étude et de recherche (TER). J'ai choisi d'étudier l'apprentissage par renforcement, plus précisément le compromis observation-action. Accompagné d'un chercheur de l'INRIA-Lille équipe Scool, le document est en cours de rédaction. Voici la description du projet que nous avons rédigé.

#### Description du projet :

L’apprentissage par renforcement (AR) a montré de spectaculaires progrès ces dernières années, plus particulièrement combiné aux techniques d’apprentissage profond. On pense notamment pour le jeu de go à l’algorithme AlphaGo de Deepmind. Dans cet exemple, le modèle disposait d’un simulateur complet pour s’entraîner. 

Mais dans la plupart des cas appliqués à la vie réel toutes les informations de l’environnement ne sont pas forcément accessibles. Les observations peuvent être coûteuses, certaines variables peuvent même être totalement inconnues. Par
exemple, savoir la composition du sol d’un champ est une information très précieuse mais qui a son coût en temps et en argent pour l’obtenir. Le temps passé à observer est également du temps passé à ne pas faire une autre action. 

Si on utilise les processus de décision markovien partiellement observable (POMDP), une généralisation d'un processus de décision markoviens dans le cas où l’état du système est inobservé, le compromis entre observation et action est d’un genre nouveau, qui se superpose au compromis exploration-exploitation classiquement étudié dans le domaine. 

Ce projet apportera une réflexion autour du compromis observation-action dans l’apprentissage par renforcement. Plus particulièrement dans le contexte de l’agroécologie, en lien avec le projet SR4SG de recommandation de meilleures pratiques agricoles orientées vers l’amélioration des populations et des écosystèmes (sécurité alimentaire, préservation des sols, consommation d’eau). 

##### Mots-clés :
Bandit, Markov decision process, Partially observable markov decision process, Agroécologie, Reinforcement learning