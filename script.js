// collaborated with: Richard, Daisy, Viviana, Anthony, and Eric, Josh


class Ninja {
        constructor (name, health=90, speed=3, strength=3){
            this.name= name;
            this.health =health;
            this.speed =speed;
            this.strength =strength
        }

sayName(){
    console.log(`THe ninja's name is ${this.name}.`);
        return;
    }
showStats(){
    console.log(`THe ninja's name is ${this.name}.`);
    console.log(`THe ninja's health is ${this.health}.`);
    console.log(`THe ninja's speed is ${this.speed}.`);
    console.log(`THe ninja's strength is ${this.strength}.`);
        return;
    }
drinkSake(){
    this.health += 10;
    console.log(`THe ninja's new health is ${this.health}. `);
        return;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10)
        // this.health = 200;
        // this.speed = 10;
        // this.strength = 10;
        this.wisdom = 10
    }

    speakWisdom() {
    super.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.");
    return this;
}

}
const sensei1 = new Sensei("Wu");
sensei1.speakWisdom();
sensei1.showStats();