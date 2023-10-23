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
    this.#valid=true
    this.#szuloElem.append("<form class=''>")
    this.formElem=this.#szuloElem.children("form")
    this.#htmlOsszealito()
    //this.#valaszto()
    this.submitElem=$("#submit")
    this.submitElem.on("click",(event)=>{
        event.preventDefault()
        this.#urlapElemList.forEach(elem,()=>{
            console.log(elem.value)
            this.#valid=true
            this.#valid=this.#valid && elem.valid
        })
        if (this.#valid){
            /*console.log("valid az űrlap")
            this.#urlapElemList.forEach((elem)=>{
            let ertek=elem.ertek
            let kulcs=elem.key
            this.#urlapAdatok[kulcs]=ertek;
            console.log("volt")
            console.log(this.#urlapAdatok)
            })*/
            this.#adatGyujt();
        }else{
            console.log("Nem valid az űrlap")
        }
    })
}
    /*#valaszto(){
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
    }*/
    #adatGyujt() {
        this.#urlapElemList.forEach((element) => {
            this.#urlapAdatok[element.kulcs] = element.value;
        });
        console.log(this.#urlapAdatok);
    }
    #htmlOsszealito(){
        {
            for (const key in this.#leiro) {
                switch (this.#leiro[key].tipus) {
                    case "text":
                        this.#urlapElemList.push(
                            new UrlapTextElem(
                                this.#leiro[key],
                                key,
                                this.formElem
                            )
                        );
                        break;
                    case "number":
                        this.#urlapElemList.push(
                            new UrlapNumberElem(
                                this.#leiro[key],
                                key,
                                this.formElem
                            )
                        );
                        break;
                    default:
                    // code block
                }
            }
            this.formElem.append("<input type='submit' id='submit' value='OK'>");
    }
    /*#numberElem(key){
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
    }*/
    }
}
export default View