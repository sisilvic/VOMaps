import Map from "./modules/map.js"

let shapes_data = [
    {
        "name": "HALL 7",
        "modal": "hall-7",
        "level": "LIVELLO 1"
    },
    {
        "name": "HALL 7A",
        "modal": "hall-7a",
        "level": "LIVELLO 1"
    },
    {
        "name": "HALL 6",
        "modal": "hall-6",
        "level": "LIVELLO 1"
    },
    {
        "name": "HALL 1",
        "modal": "hall-1",
        "level": "LIVELLO 1"
    },
    {
        "name": "HALL 4",
        "modal": "hall-4",
        "level": "LIVELLO 1"
    },
    {
        "name": "HALL 4.1",
        "modal": "hall-4-1",
        "level": "LIVELLO 2"
    },
    {
        "name": "HALL 4A",
        "modal": "hall-4-a",
        "level": "LIVELLO 1"
    },
    {
        "name": "HALL 3",
        "modal": "hall-3",
        "level": "LIVELLO 1"
    },
    {
        "name": "HALL 3.1",
        "modal": "hall-3-1",
        "level": "LIVELLO 2"
    },

    {
        "name": "HALL 3.2",
        "modal": "hall-3-2",
        "level": "LIVELLO 3"
    },
    {
        "name": "HALL 4",
        "modal": "hall-4",
        "level": "LIVELLO 1"
    },
    {
        "name": "HALL 10",
        "modal": "hall-10",
        "level": "LIVELLO 1"
    },
    {
        "name": "HALL 8.1",
        "modal": "hall-8-1",
        "level": "LIVELLO 2"
    },
    {
        "name": "PALAKISS 1",
        "modal": "palakiss",
        "level": "LIVELLO 1"
    },
    {
        "name": "PALAKISS 2",
        "modal": "palakiss",
        "level": "LIVELLO 2"
    }
];

let toggles_data = [
    {
        "name": "LIVELLO 1"
    },
    {
        "name": "LIVELLO 2",
    },
    {
        "name": "LIVELLO 3",
    },
    {
        "name": "SCALE / ASCENSORI"
    },
    {
        "name": "BAR"
    },
    {
        "name": "ACCESSI LIVELLO"
    }
    ,
    {
        "name": "INFO POINTS"
    }
];

let levels_data = [
    {
        "name": "LIVELLO 1"
    },
    {
        "name": "LIVELLO 2",
    },
    {
        "name": "LIVELLO 3",
    },
]

let vomap = new Map();

vomap.init('#vo-map', shapes_data, toggles_data, levels_data, 1.4);

let park_data = [
    {
        "name": "P11",
        "modal": "park-p-11",
    },
    {
        "name": "P13",
        "modal": "park-p-13",
    },
    {
        "name": "P2",
        "modal": "park-p-2",
    },
    {
        "name": "P4",
        "modal": "park-p-4",
    },
    {
        "name": "P1",
        "modal": "park-p-1",
    },
    {
        "name": "P3",
        "modal": "park-p-3",
    },
    {
        "name": "PA4",
        "modal": "park-p-A4",
    },
    {
        "name": "P6",
        "modal": "park-p-6",
    },
    {
        "name": "P5",
        "modal": "park-p-5",
    },
    {
        "name": "P8",
        "modal": "park-p-8",
    },
    {
        "name": "P7",
        "modal": "park-p-7",
    }
];

let ptoggles_data = [
    {
        "name": "P8 - FIERA"
    },
    {
        "name": "P11 - FIERA"
    },
    {
        "name": "A4 - FIERA"
    },
    {
        "name": "PARCHEGGI"
    }
];

let parcheggi = new Map();
parcheggi.init('#vo-parcheggi', park_data, ptoggles_data, [], 1);