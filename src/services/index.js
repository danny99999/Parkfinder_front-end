import axios from 'axios'

let Service = axios.create({
    baseURL: "http://localhost:3200",
    timeout: 1000
})

let kartice = {
   async getAll(searchTerm) {
        let response = await Service.get(`/kartice?naslov=${searchTerm}`)
        let data = response.data
        data=data.map(element=> {
            return {
              url: element.url_b,
              naslov: element.naslov_b,
              router: element.router_b
      
            };
          });
          return data
    }
}

export {Service, kartice}