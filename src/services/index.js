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

   async getAll(searchTerm) {
      let response = await Service.get(`/kartice?naslov_b=${searchTerm}`)
      let data = response.data
      data = data.map(element=> {
        return {
          id: element._id,
          url: element.url_b,
          naslov: element.naslov_b,
          router: element.router_b
        };
      });
      return data;
    },
};

let Rezervacije = {

  async create(doc){
    let ServerData = {
      Ime: doc.Ime,
      Prezime: doc.Prezime,
      Broj_telefona: doc.Phonenumber,
      Marka_i_model: doc.Marka_i_model,
      Boja_vozila: doc.Bojavozila,
      Registracija: doc.Registracija,
      Izabrani_datum: doc.Izabrani_datum,
      Vrijeme_parkiranja: doc.Provedeno_vrijeme,
      Koji_parking: doc.Koji_parking,
      Email: doc.Email
    }
    
    let user = ServerData;

    localStorage.setItem("rezervacije", JSON.stringify(user));

    console.log("Spremam na backend", doc)
  
    await Service.post('/rezervacije', ServerData)
    return 
  }, 

  async getRezervacije(email) {
    let response = await Service.get(`/rezervacije/${email}`)
    let data = response.data
    data = data.map(element=> {
      return {
        id: element._id,
        ime: element.Ime,
        prezime: element.Prezime,
        broj_telefona: element.Broj_telefona,
        markaimodel: element.Marka_i_model,
        bojavozila: element.Boja_vozila,
        registracija: element.Registracija,
        izabrani_datum: element.Izabrani_datum,
        vrijeme_parkiranja: element.Vrijeme_parkiranja,
        koji_parking: element.Koji_parking,
        email: element.Email,
        upit_poslan: element.upit_poslan
      };
    });
    return data; 
  },

  getUserRezervacije() {
    return JSON.parse(localStorage.getItem("rezervacije"));
  },
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
   
export {Service, kartice, Auth, Rezervacije };