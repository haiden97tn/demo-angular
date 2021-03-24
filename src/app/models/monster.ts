import { Spell } from "./spell";
// id, name, detail, image, spells (đối tượng, phép thuật)
export class Monster {
    id: Number;
    name: string;
    detail: string;
    image: string;
    spells?: Array<Spell>;

    constructor(
        id: Number,
        name: string,
        detail: string,
        image: string = "https://i.stack.imgur.com/l60Hf.png"
    ){
        this.id = id;
        this.name = name;
        this.image = image;
    }
}


