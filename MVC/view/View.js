import TextUrlapElem from "./TextUrlapElem.js";

class View{
#leiro={}
#szuloElem
#valid=true
#urlapElemList=[]
#urlapAdatok={}
constructor(szuloElem,leiro){
    this.#leiro=leiro;
    this.#szuloElem=szuloElem;
    this.#szuloElem.append("<form>")
    this.formElem=this.#szuloElem.children("form")
    this.#valaszto()
    this.submitElem=$("#submit")
    this.submitElem.on("click",(event)=>{
        event.preventDefault()
        this.#urlapElemList.forEach(elem,()=>{
            console.log(elem.value)
            this.#valid=true
            this.#valid=this.#valid && elem.valid
        })
        if (this.#valid){
            console.log("valid az űrlap")
            this.#urlapElemList.forEach((elem)=>{
            let ertek=elem.ertek
            let kulcs=elem.key
            this.#urlapAdatok[kulcs]=ertek;
            console.log("volt")
            console.log(this.#urlapAdatok)
        })
        }else{
            console.log("Nem valid az űrlap")
        }
    })
}
    #valaszto(){
    for (const key in this.#leiro) {
    switch(this.#leiro[key].type){
        case "text":
            this.#urlapElemList.push(new TextUrlapElem(key,this.#leiro[key],this.formElem))
            break; 
        case "number":
            //this.#numberElem(key)
            break;
        default:

            }
        }
    }
    #numberElem(key){
        let txt="";
            txt+=` 
            <div class="mb-3 mt-3">
              <label for="${key}" 
              class="form-label>"${this.#leiro.megj}":</label>
              <input type="${this.#leiro.type}" 
              class="form-control" id="${key}" 
              placeholder="${this.#leiro.placeholder}" 
              name="${key}"
              value="${this.#leiro.value}";
              min="${this.#leiro.regex.min}"
              max="${this.#leiro.regex.max}"
              <div class="valid lathato">Ok</div>
              <div class=invalid lathato">${this.#leiro.valid}"</div>
            </div>
            `
            this.formElem.append(txt)
    }
}
export default View