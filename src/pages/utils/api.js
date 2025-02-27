import axios from "axios"

let baseUrl = 'http://localhost:3001'

export async function getData(endpoint) {
    try {
        let response = await axios.get(`${baseUrl}/${endpoint}`)
        return response
    } catch (error) {
        throw error
    }
}

export async function postData(endpoint, body) {
    try {
        let response = await axios.post(`${baseUrl}/${endpoint}`, body)
        return response
    } catch (error) {
        throw error
    }
}