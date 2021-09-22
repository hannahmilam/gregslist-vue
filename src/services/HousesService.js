import { AppState } from "../AppState"
import { House } from "../models/House"
import { api } from "./AxiosService"

class HousesService{
async getHouses(){
AppState.houses = []
// this initial line makes it so that there is not ghost data on page load
const res = await api.get('api/houses')
AppState.houses = res.data.map(h => new House(h))
}

async getHouseById(houseId){
AppState.house = null
const res = await api.get(`api/houses/${houseId}`)
AppState.house = new House(res.data)
}
async createHouse(house){
const res = await api.post('api/houses', house)
AppState.houses.push(new House(res.data))
}

async editHouse(house){
const res = await api.put(`api/houses/${house.id}`, house)
AppState.house = new House(res.data)
}

async removeHouse(houseId){
  await api.delete(`api/houses/${houseId}`)
  AppState.house = null
  AppState.houses.filter(h => h.id !== houseId)
}

}
export const housesService = new HousesService()