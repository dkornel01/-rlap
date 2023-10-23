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
                this.validElem.html("OK");
                this.#valid = true;
            }
            else{
            this.#valid=false
            this.validElem.removeClass("lathatosag")
            this.invalidElem.addClass("lathatosag")
            this.invalidElem.html(this.#elemLeiro.szoveg);
            }
        })
        //this.#numberElem()
    }
    #urlapletrehoz(){
        let txt = `<div id="${this.#key}blokk" class="mb-3 mt-3">
                        <label for="${this.#key}" class="form-label">${
            this.#elemLeiro.megjelenes
        }</label>
                        <input type="${this.#elemLeiro.tipus}" 
                               id="${this.#key}" 
                               placeholder="${this.#elemLeiro.placeholder}" 
                               name="${this.#key}" 
                              
                               class="form-control" >
                        <div class="valid">valid</div>
                        <div class="invalid">  invalid</div>
                    </div>`;
        this.formElem.append(txt);
        this.inputElem = $(`#${this.#key}`);
        this.inputElem.attr(
            "required",
            this.#elemLeiro.required ? "required" : null
        );

        this.validElem = this.formElem
            .children("div:last-child")
            .children(".valid");
        this.invalidElem = this.formElem
            .children("div:last-child")
            .children(".invalid");

        this.invalidElem.addClass("invalid-visible");
        this.validElem.addClass("valid-visible");
    }
        
    get valid(){
        if (this.#elemLeiro.required && this.inputElem.val() == "") {
            this.#valid = false;
            this.invalidElem.removeClass("invalid-visible");
            this.validElem.addClass("valid-visible");
            this.invalidElem.html(" Az elem kötelező!");
        }
        return this.#valid;
    }
    get ertek(){
        return this.#ertek
    }
    get key(){
        return this.key
    }
}
export default TextUrlapElem