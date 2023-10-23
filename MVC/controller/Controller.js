import Model from "../model/model.js";
import View from "../view/view.js";
import Asszinkron from "../model/aszinkron.js";
class Controller{
    #asszinkron
    constructor(){
        this.urlap()
        this.asszinkronAdatok()
        //this.MODEL.getLeiro()
        //this.UrlapView($("urlap"),this.MODEL.leiro)
        /*console.log(this.MODEL.leiro)
        console.log(this.MODEL.leiro.nev.megj)
        console.log(this.MODEL.leiro.szul.placeholder)
        console.log(this.MODEL.leiro.szul.regex.min)
        console.log(this.MODEL.leiro.nev.type)*/
    }
    asszinkronAdatok(){
        let adatVegpont = "http://localhost:3000/adat";
        this.#asszinkron = new Asszinkron();
        this.#asszinkron.getData(adatVegpont, this.feldolgoz);
    }
    urlap() {
        this.MODEL=new Model();
        this.VIEW=new View($(".urlap"),this.MODEL.leiro);
        }
}
export default Controller