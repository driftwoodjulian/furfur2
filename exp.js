class thing{
    constructor(object){

        this.thing= object
    }


    thingy(){
        console.log(this.thing);
    };

}

class thing2 extends thing{

    constructor(object, object2){
        super(object)

        this.thing2= object2


    };
    thingy2(){
        console.log(this.thing2);
    };

}

let test= new thing2("yogurt", "ice cream");

test.thingy();

test.thingy2();

