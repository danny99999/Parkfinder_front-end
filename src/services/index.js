import axios from 'axios';
import $router from '@/router';

let Service = axios.create({
    baseURL: "http://localhost:3200",
    timeout: 1000
});

Service.interceptors.request.use((request) => {
  try {
      request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
  } catch (e) {
      console.error(e);
  }
  return request;
})

Service.interceptors.request.use(
  (response) => response, 
  (error) => {
  if (error.response.status == 401 || error.response.status == 403){
    Auth.logout()
    $router.go();
  }
});

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
      return data;
    }
};

let Auth = {
    async login(korisnicko_ime, lozinka){
      let response = await Service.post("/auth", {
        korisnicko_ime: korisnicko_ime,
        lozinka: lozinka
      });

      let user = response.data;
      
      localStorage.setItem("korisnik", JSON.stringify(user));

      return true;
    },

    async register(korisnicko_ime, lozinka, grad, ime_prezime){
      let response = await Service.post("/users", {
        korisnicko_ime: korisnicko_ime,
        lozinka: lozinka,
        grad: grad,
        ime_prezime: ime_prezime,
      })
      let user = response.data

      localStorage.setItem("korisnik", JSON.stringify(user));

      return true;
  },

    logout(){
      localStorage.removeItem("korisnik");
    },
    getUser() {
      return JSON.parse(localStorage.getItem("korisnik"));
    },
    getToken() {
      let user = Auth.getUser;
      if (user && user.token){
        return user.token;
      }
      else {
        return false;
      }
    },
    state: {
      get userEmail(){
        let user = Auth.getUser()
        if (user){
          return user.korisnicko_ime;
        }
        return Auth.getUser()
      },
      get userGrad(){
        let user = Auth.getUser();
        if (user){
          return user.grad;
        }
        return Auth.getUser();
      },
      get userImePrezime(){
        let user = Auth.getUser();
        if (user){
          return user.ime_prezime;
        }
        return Auth.getUser();
      },
      get userDatumRegistracije(){
        let user = Auth.getUser();
        if (user){
          return user.datum_registracije;
        }
        return Auth.getUser();
      },
    },

};
   
export {Service, kartice, Auth };