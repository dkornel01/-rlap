import Model from "../model/model.js";
import View from "../view/view.js";
class Controller{
    constructor(){
        this.MODEL=new Model()
        //this.MODEL.getLeiro()
        //this.UrlapView($("urlap"),this.MODEL.leiro)
        /*console.log(this.MODEL.leiro)
        console.log(this.MODEL.leiro.nev.megj)
        console.log(this.MODEL.leiro.szul.placeholder)
        console.log(this.MODEL.leiro.szul.regex.min)
        console.log(this.MODEL.leiro.nev.type)*/
        this.VIEW=new View($(".urlap"),this.MODEL.leiro)
    }
}
export default Controller