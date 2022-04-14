class Monk  extends Character {
    constructor(familyName = "Monk", firstName = "Le prête fou", hp = 4, dmg = 100, mana = 160, attack = 10) {
        super(familyName, hp, dmg, mana);
        this.firstName = firstName;
    }

    whoAmI() {
        return `Je m'appelle ${this.firstName}, et j'appartiens à la famille ${this.familyName}.`;
    }
    
}    

    const monk= new Monk(familyName = "Monk", firstName = "Le prêtre fou", hp = 4, dmg = 100, mana = 160);

    console.log(ulder.whoAmI()); 

    console.log(`L'attaque magique ${monk.attack} du combattant ${monk.familyName} inflige : \n- Baisse des attaques adverses de 1 000 000 de pts pendant le tour suivant.\n- Un damage de 5pts \n- Un coût de loool mana.`)

  
