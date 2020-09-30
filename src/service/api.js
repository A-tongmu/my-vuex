import axios from 'axios'

export const queryTestService = params => {
  return axios.post(`/QueryTest`, params).then(res=>res.data)
}
