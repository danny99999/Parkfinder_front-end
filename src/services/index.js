import axios from 'axios';

let Service = axios.create({
    baseURL: "http://localhost:3200",
    timeout: 1000
})

let kartice = {
  async create(doc){
    let ServerData = {
      ime_korisnika: doc.Ime,
      prezime_korisnika: doc.Prezime,
      br_telefona: doc.Phonenumber,
    } 
    console.log("Spremam na backend", doc)
   
    await Service.post("/osobni_podaci", ServerData)
    return 
  }, 

  async create2(doc){
    let ServerData2 = {
      naziv_vozila: doc.Marka_i_model,
      boja_vozila: doc.Bojavozila,
      registracija: doc.Registracija,
    }
    console.log("Spremam na backend", doc)

    await Service.post("/podaci_vozila", ServerData2)
    return 
  },

  async create3(doc){

    /*Izabrani_datum: this.izaberidatum,
      Provedeno_vrijeme: this.vrijemeprovedeno,
      Koji_parking: this.kojiparking */

    let ServerData3 = {
      Izabrani_datum: doc.Izabrani_datum,
      Vrijeme_boravka: doc.Provedeno_vrijeme,
      Koji_parking: doc.Koji_parking,
    }
    console.log("Spremam na backend", doc)

    await Service.post("/podaci_rezervacije", ServerData3)
    return 
  },

   async getAll(searchTerm) {
        let response = await Service.get(`/kartice?naslov_b=${searchTerm}`)
        let data = response.data
        data=data.map(element=> {
            return {
              id: element._id,
              url: element.url_b,
              naslov: element.naslov_b,
              router: element.router_b
            };
          });
          return data
    }
}

export {Service, kartice}