import axios from "axios";


const domain = 'http://192.168.1.127:8080'


export const addRolling = async (rolling) => {
  // const res = await axios.post(`http://localhost:8080/rolling/add`, { 'name': rolling })
  const res = await axios.post(`http://localhost:80/rolling`, rolling)
  return res.data
}

export const getRollingList = async ( param ) => {
  console.log(Object.keys('page'))
  if ( Object.keys('page') ) { param.push({page: 1}) }
  if ( !param.type || !param.keyword ) {
    console.log(param)
    const res = await axios.get(`${domain}/api/rollings/list?page=${param.page}`)
    return res.data
  }

  const res = await axios.get(`${domain}/api/rollings/list?page=${param.page}&type=${param.type}&keyword=${param.keyword}`)
  // const res = await axios.get(`http://localhost:80/rolling`)
  return res.data
}

export const getRolling = async ( id ) => {
  const res = await axios.get(`${domain}/api/rollings/${ id }`)
  // const res = await axios.get(`http://localhost:80/rolling/${ id }`)
  return res.data
}

export const modRolling = async ( rolling ) => {
  const res = await axios.put(`${domain}/api/rollings/${ rolling.id }`, rolling)
  // const res = await axios.put(`http://localhost:80/rolling/${ rolling.id }`, rolling)
  return res.data
}

export const delRolling = async ( id ) => {
  const res = await axios.delete(`${domain}/api/rollings/${ id }`)
  // const res = await axios.delete(`http://localhost:80/rolling/${ id }`)
  return res.data
}
