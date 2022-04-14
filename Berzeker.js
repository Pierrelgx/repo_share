class Berzeker extends Character {
    constructor(familyName = "Berzeker", firstName = "Jean Michel", hp = 12, dmg = 4, mana = 160, attack = 10) {
        super(familyName, hp, dmg, mana);
        this.firstName = firstName;
    }

    whoAmI() {
        return `Je m'appelle ${this.firstName}, et j'appartiens à la famille ${this.familyName}.`;
    }
    
}    

    const jeanMichel = new Berzeker(familyName = "Berzeker", firstName = "Jean Michel", hp = 8, dmg = 5, mana = 160);

    console.log(jeanMichel.whoAmI()); 

    console.log(`L'attaque magique ${jeanMichel.attack} du combattant ${jeanMichel.familyName} inflige : \n- Baisse des attaques adverses de 2pts pendant le tour suivant.\n- Un damage de 5pts \n- Un coût de 5 mana.`)

  
