class TextUrlapElem{
    #key;
    #elemLeiro={};
    #valid=false;
    #ertek=""
    constructor(key,elemLeiro,szuloElem){
        this.#key=key
        this.#elemLeiro=elemLeiro
        this.formElem=szuloElem
        this.#urlapletrehoz()
        this.inputElem=$(`#${this.#key}`)
        this.validElem=this.formElem.children("div:last-child").children(".valid")
        this.invalidElem=this.formElem.children("div:last-child").children(".invalid")
        this.inputElem.on("keyup",()=>{
            this.#ertek=this.inputElem
            let reg=this.#elemLeiro.regex
            let regReg=new RegExp(reg)
            console.log(regReg.test(this.#ertek))
            if (regReg.test(this.#ertek)){
                this.#valid=true
                this.validElem.addClass("lathatosag")
                this.invalidElem.removeClass("lathatosag")
            }
            else{
            this.#valid=false
            this.validElem.removeClass("lathatosag")
            this.invalidElem.addClass("lathatosag")
            }
        })
        //this.#numberElem()
    }
    #urlapletrehoz(){
        let txt="";
        txt+=` 
            <div class="mb-3 mt-3">
              <label for="${this.#key}" 
              class="form-label>"${this.#elemLeiro.megj}":</label>
              <input type="${this.#elemLeiro.type}" 
              class="form-control" id="${this.#key}" 
              placeholder="${this.#elemLeiro.placeholder}" 
              name="${this.#key}"
              value="${this.#elemLeiro.value}"
              pattern="${this.#elemLeiro.regex}">
              <div class="valid lathato">Ok</div>
              <div class=invalid lathato">${this.#elemLeiro.valid}"</div>
            </div>
            `
        txt+="<input type='submit' value='ok'>"
        this.formElem.append(txt)
        
    }
    get valid(){
        return this.#valid
    }
    get ertek(){
        return this.#ertek
    }
    get key(){
        return this.key
    }
}
export default TextUrlapElem