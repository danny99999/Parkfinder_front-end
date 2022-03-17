import axios from 'axios'

let Service = axios.create({
    baseURL: "http://localhost:3200",
    timeout: 1000
})

let kartice = {
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