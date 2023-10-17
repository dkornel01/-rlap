export const urlapLeiro={
    nev:{
        megj:"Kereszt Név",
        type:"text",
        placeholder:"valaki vagyok",
        value:"",
        regex:"[A-Z][a-z]{2,50}",
        valid:"Nagybetűvel kezdődik, legalább 3 betű legyen"
    },
    nev:{
        megj:"vezetek Név",
        type:"text",
        placeholder:"valaki vagyok",
        value:"",
        regex:"[A-Z][a-z]{2,50}",
        valid:"Nagybetűvel kezdődik, legalább 3 betű legyen"
    },
    szul:{
        megj:"Születesi idő",
        type:"number",
        placeholder:"2000",
        value:"2000",
        regex:{
            min:1000,
            max:2023,
        },
        valid:"1000 és 2023 közötti számot írj"
    }
}