
class Item {

    constructor(text){

        this.id = Math.random(1, 999999)
        this.text = text;
        this.done = false;

    }

}

export default Item