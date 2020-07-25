import { useState, useEffect } from "react"
import axios from "axios"
import { baseUrl } from "../../baseUrl"

export const useTripsList = () => {
  const [trips, setTrips] = useState([])
  
  useEffect(() => {
    axios.get(`${baseUrl}/trips`)
         .then((response) => {
           setTrips(response.data.trips)
         })
         .catch(() => {
           alert("Não foi possível carregar as viagens :(")
         })
  }, [])

  return trips
}