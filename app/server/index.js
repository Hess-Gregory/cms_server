const dotenv = require('dotenv').config();
const config = require('../config');
const app = require('../index');
const bole   = require('bole'); // système de journalisation
const	log    = bole('server');
var modeApi = process.env.NODE_ENV

bole.output({level: 'debug', stream: process.stdout})
log.info('Serveur -> démarrage du processus')

// Notez qu'il n'y a pas beaucoup de logique dans ce fichier.
// Le serveur doit être principalement du code "colle" pour configurer les choses et

// puis commencer à écouter

app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    log.error("Impossible d'écouter les connexions", error)
    process.exit(10)
  }
  log.info("L'API tourne en mode : " + modeApi)
  log.info("La magie se passe sur le port :"+ config.express.port)
  log.info("Le serveur est disponible à l'adresse suivante : http://" +
    config.express.ip + ':' + config.express.port)
  log.info("Nous sommes maintenant tous condamnés!")
})