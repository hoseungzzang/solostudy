import axios from "axios";


/*const domain = 'http://192.168.1.127:8080'*/
const domain = 'http://localhost:8080'


export const addRolling = async (rolling) => {
  // const res = await axios.post(`http://localhost:8080/rolling/add`, { 'name': rolling })
  const res = await axios.post(`http://localhost:80/rolling`, rolling)
  return res.data
}

export const getRollingList = async ( page ) => {
  if ( !page ) {
    page = 1
  }

  const res = await axios.get(`${domain}/api/rollings/list?page=${page}`)
  return res.data
}

export const getRollingSearchList = async ( page, search ) => {
  // if ( !page ) {
  //   page = 1
  // }
  //const res = await axios.get(`${domain}/api/rollings/list?page=${page}&types=${search.searchType}&keyword=${search.searchValue}`)
//, types: search.searchType, keyword: search.searchValue }

  const res = await axios.get(`${domain}/api/rollings/list`,
    { params: { page: page || 1, types: search.searchType, keyword: search.searchValue}})

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
