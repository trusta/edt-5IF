'use strict';

module.exports = {
    name: '5IF',
    domain: 'insa-lyon.fr',
    prodID: {
        company: 'INSA-Lyon',
        product: '5IF',
        language: 'FR'
    },
    url: 'http://intranet-if.insa-lyon.fr/temps/5IF.ics',
    modules: {
        common: [
            /.*EPS.*/,
            /.*IF TD.*/,
            /.*IF Cours.*/,
            /.*IF DS.*/,
            /.*IF(1|2|3|4){0,1} (Huma|OT).*/,
            /.*IF \.\..*/,
            /.*CI.O3.*/
        ],
        lessons: {
            letters: [{
                id: 'GroupeA',
                title: 'Groupe A',
                prof: '',
                urlParam: 'GroupeA',
                pattern: /.*IF1 Cours.*/
            }, {
                id: 'GroupeB',
                title: 'Groupe B',
                prof: '',
                urlParam: 'GroupeB',
                pattern: /.*IF2 Cours.*/
            }],
            numbers: [{
                id: 'Groupe1',
                title: 'Groupe 1',
                prof: '',
                urlParam: 'Groupe1',
                pattern: /.*IF1 TD.*/
            }, {
                id: 'Groupe2',
                title: 'Groupe 2',
                prof: '',
                urlParam: 'Groupe2',
                pattern: /.*IF2 TD.*$/
            }, {
                id: 'Groupe3',
                title: 'Groupe 3',
                prof: '',
                urlParam: 'Groupe3',
                pattern: /.*IF3 TD.*$/
            }]
        },
        projets: [{
            id: 'PdC1',
            title: 'Automatisation d\'un processus de paiement',
            prof: 'Y. Amghar, L. Brunie',
            urlParam: 'PdC1',
            pattern: /.*Dématérialisation d'un processus de paiement.*/
        }, {
            id: 'PdC2',
            title: 'Architecture et déploiement d\'un réseau',
            prof: 'F. BIENNIER',
            urlParam: 'PdC2',
            pattern: /.*Architecture et déploiement d'un réseau.*/
        }, {
            id: 'PdC3',
            title: 'Schéma directeur : étude et scénarios d\'évolution du système d\'information d\'une entreprise',
            prof: 'M. OU-HALIMA',
            urlParam: 'PdC3',
            pattern: /.*Scénario d'évolution architecture informatique.*/
        }, {
            id: 'PdC4',
            title: 'Audit orienté données des systèmes d\'information',
            prof: 'J-M PETIT',
            urlParam: 'PdC4',
            pattern: /.*Audit orienté données.*/
        }, {
            id: 'PdC5',
            title: 'Elaboration d\'un appel d\'offre pour un SI',
            prof: 'S. CALABRETTO',
            urlParam: 'PdC5',
            pattern: /.*Appel d'offres d'un système informatique.*/
        }, {
            id: 'PdC6',
            title: 'BPR et EIS - ERP : Analyse de processus métiers et Systèmes d\'Information pour décideurs (EIS) pour une mutlinationale commerciale',
            prof: 'A. LEGAIT, B. ERGIN, H. CHAMBE',
            urlParam: 'PdC6',
            pattern: /.*Processus métiers\\, SI décideurs EIS.*/
        }, {
            id: 'PdC7',
            title: 'Organisation d\'un programme d\'évolution de système d\'information de grande distribution',
            prof: 'B/ ERGIN, Y. AMGHAR',
            urlParam: 'PdC7',
            pattern: /.*Système d'information logistique.*/
        }, {
            id: 'PdC8',
            title: 'Conception d\'un système de location de vélos en libre service',
            prof: 'F. DE DINECHIN',
            urlParam: 'PdC8',
            pattern: /.*Un système de gestion de vélos urbains en libre-service.*/
        }],
        seminaires: {
            insa: [{
                id: 'A2PF',
                title: 'Approche Pratique de la Programmation Fonctionnelle',
                prof: 'P-E. PORTIER',
                urlParam: 'A2PF',
                pattern: /.*A2PF.*/
            }, {
                id: 'BUSY',
                title: 'Métiers',
                prof: 'Y. AMGHAR',
                urlParam: 'BUSY',
                pattern: /.*BUSY.*/
            }, {
                id: 'CLOM',
                title: 'Cloud Computing',
                prof: 'F. BIENNIER',
                urlParam: 'CLOM',
                pattern: /.*CLOM.*/
            }, {
                id: 'IBI',
                title: 'Informatique bio-inspirée',
                prof: 'G. Beslon',
                urlParam: 'IBI',
                pattern: /.*IBI.*/
            }, {
                id: 'MACO',
                title: 'Management coopératif',
                prof: 'B. ERGIN',
                urlParam: 'MACO',
                pattern: /.*MACO.*/
            }, {
                id: 'MEMO',
                title: 'La gestion mémoire : architecture, langages et systèmes',
                prof: 'G. SALAGNAC',
                urlParam: 'MEMO',
                pattern: /.*MEMO.*/
            }, {
                id: 'PRJ',
                title: 'Projet d\'entreprise : business plan et aspects économiques',
                prof: 'M. OUHALIMA',
                urlParam: 'PRJ',
                pattern: /.*PRJ.*/
            }, {
                id: 'PUIS',
                title: 'Puissance 7',
                prof: 'A. SERNA',
                urlParam: 'PUIS',
                pattern: /.*PUIS.*/
            }, {
                id: 'RCOM',
                title: 'Petit guide de la R&D en Informatique pour un 5IF',
                prof: 'J-M PETIT',
                urlParam: 'RCOM',
                pattern: /.*RCOM.*/
            }, {
                id: 'RECH',
                title: 'Validation théorique et évaluation expérimentale d\'algorithmes',
                prof: 'C. SOLNON',
                urlParam: 'RECH',
                pattern: /.*RECH.*/
            }, {
                id: 'RSYS',
                title: 'Introduction à l\'écosystèmes de la R&D en informatique',
                prof: 'J-F BOULICAUT',
                urlParam: 'RSYS',
                pattern: /.*RSYS.*/
            }, {
                id: 'SIF',
                title: 'Sécurité et protection des systèmes d\'information',
                prof: 'F. BIENNIER',
                urlParam: 'SIF',
                pattern: /.*SIF.*/
            }, {
                id: 'VIDO',
                title: 'Vision par ordinateur : reconnaissance d\'objets, d\'activités humaines et de gestes',
                prof: 'C. WOLF, S. DUFFNER',
                urlParam: 'VIDO',
                pattern: /.*VIDO.*/
            }],
            huma: [{
                id: 'FIN',
                title: 'Stratégie financière – Le choix des investissements',
                prof: 'H. CHAMBE',
                urlParam: 'FIN',
                pattern: /.*FIN.*/
            }, {
                id: 'MHDS',
                title: 'Management des Hommes, Dialogue social',
                prof: 'H. CHAMBE,C.THUDEROZ ',
                urlParam: 'MHDS',
                pattern: /.*MHDS.*/
            }, {
                id: 'MYT',
                title: 'Du mythe à la raison ?',
                prof: 'J. LECLERE ',
                urlParam: 'MYT',
                pattern: /.*MYT.*/
            }, {
                id: 'SOC',
                title: 'Sociologie de la décision',
                prof: 'C. THUDEROZ',
                urlParam: 'SOC',
                pattern: /.*SOC.*/
            }],
            entreprises: [{
                id: 'EI01',
                title: 'BI Agile & SI distribués',
                prof: 'Micropole,Amadeous',
                urlParam: 'EI01',
                pattern: /.*EI01.*/
            }, {
                id: 'EI02',
                title: 'Les phases amont d\'un projet projet',
                prof: 'Banque postale',
                urlParam: 'EI02',
                pattern: /.*(EI02|CI\.O1-1).*/
            }, {
                id: 'EI03',
                title: 'R&D. Retours d\'expériences sur les métiers de l\'innovation et de la valorisation',
                prof: 'MultiIntervenants',
                urlParam: 'EI03',
                pattern: /.*EI03.*/
            }, {
                id: 'EI04',
                title: 'Introduction à Windows Embedded Compact',
                prof: 'ADENEO',
                urlParam: 'EI04',
                pattern: /.*EI04.*/
            }, {
                id: 'EI05',
                title: 'Intégration continue & Cloud Computing & Audit et Identity Access Management',
                prof: 'HARDIS, SOLUCOM',
                urlParam: 'EI05',
                pattern: /.*EI05.*/
            }, {
                id: 'EI06',
                title: 'Gestion efficace de la donnée & SI/DSI & AngularJS',
                prof: 'IBM, ZENIKA',
                urlParam: 'EI06',
                pattern: /.*EI06.*/
            }, {
                id: 'EI07',
                title: 'Système d\'information d\'un grand groupe industriel international. Les méthodes Agile pour gérer des projets avec un aperçu sur les méthodes SCRUM',
                prof: 'VOLVO, EXILIS',
                urlParam: 'EI07',
                pattern: /.*EI07.*/
            }, {
                id: 'EI08',
                title: 'L\'analyse de la valeur valeurs et gestion de portefeuille projet d\'une DSI',
                prof: 'CapGemini, OVH',
                urlParam: 'EI08',
                pattern: /.*EI08.*/
            }, {
                id: 'EI09',
                title: 'Maintenabilité des applications & Conseil autour du Grid et du Cloud & Modularité et approche composants',
                prof: 'SOPRA, ANEO',
                urlParam: 'EI09',
                pattern: /.*EI09.*/
            }],
            etrangers: [{
                id: 'EI10',
                title: 'Model-Based Engineering of Real-Time and Embedded Systems',
                prof: 'B. Selic',
                urlParam: 'EI10',
                pattern: /.*EI10.*/
            }, {
                id: 'EI11',
                title: 'A guided tour to the Random Walk for Computer science',
                prof: 'G. Gianini',
                urlParam: 'EI11',
                pattern: /.*EI11.*/
            }],
            facultatifs: [{
                id: 'SECU',
                title: 'Protection du patrimoine informationnel',
                prof: 'DCRI',
                urlParam: 'SECU',
                pattern: /.*CI.O2-.*/
            }]
        }
    }
};
