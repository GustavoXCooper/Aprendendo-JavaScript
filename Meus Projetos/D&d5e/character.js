let character = {
    characterName: '',
    level: 0,
    profBonus: 2,
    exp: 0,
    inspiration: false,
    ac: 0,
    speed: 0,
    initiative: 0,
    totalHP: 0,
    passivePerception: 0,
    languagesAndProf: '',
    personality:{
        traits:'',
        ideas:'',
        bonds:'',
        flaws:'',
    },
    info: {
        class: '',
        background: '',
        race:'',
        alignment: '',
        playerName: '',
    },
    stats:{
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        car: 10,
    },
    modifier:{
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        car: 0,
    },
    savingThrows:{
        str: {
            value: 0,
            proficiency: false,
        },
        dex: {
            value: 0,
            proficiency: false,
        },
        con: {
            value: 0,
            proficiency: false,
        },
        int: {
            value: 0,
            proficiency: false,
        },
        wis: {
            value: 0,
            proficiency: false,
        },
        car: {
            value: 0,
            proficiency: false,
        },
    },
    skills:{
        str:{
            athletics: {
                value: 0,
                proficiency: false,
            }
        },
        dex:{
            acrobatics: {
                value: 0,
                proficiency: false,
            },
            sleightOfHand: {
                value: 0,
                proficiency: false,
            },
            stealth: {
                value: 0,
                proficiency: false,
            },
        },
        int: {
            arcana: {
                value: 0,
                proficiency: false,
            }, 
            history: {
                value: 0,
                proficiency: false,
            },
            investigation: {
                value: 0,
                proficiency: false,
            },
            nature: {
                value: 0,
                proficiency: false,
            },
            religion: {
                value: 0,
                proficiency: false,
            }
        },
        wis: {
            animalHandling: {
                value: 0,
                proficiency: false,
            },
            insight: {
                value: 0,
                proficiency: false,
            },
            medicine: {
                value: 0,
                proficiency: false,
            },
            perception: {
                value: 0,
                proficiency: false,
            },
            survival: {
                value: 0,
                proficiency: false,
            }
        },
        car:{
            deception: {
                value: 0,
                proficiency: false,
            },
            intimidation: {
                value: 0,
                proficiency: false,
            },
            performance: {
                value: 0,
                proficiency: false,
            },
            persuasion: {
                value: 0,
                proficiency: false,
            }
        }    
    }

}