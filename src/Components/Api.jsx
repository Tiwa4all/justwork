// import { useState } from 'react';
// import axios from 'axios';

// //POST API 
// const Api = (url) => {
//   const [response, setResponse] = useState(null);

//   const sendDataToAPI = () => {
//     const dataToSend = { message: 'Hello, API!' };

//     // Make a POST request to an API
//     // axios.post('https://jsonplaceholder.typicode.com/posts', dataToSend)
//     axios.post(url, dataToSend)
//       .then((response) => {
//         setResponse(response.data);
//       })
//       .catch((error) => {
//         console.error('Error sending data:', error);
//       });
//   };

//   return {response, sendDataToAPI}
// }

// export default Api

//random API
// const Api = (url) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Make a GET request to an API
//     axios.get(url)
//       .then((response) => {
//         // Set the fetched data to the state
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [url]);

//   return {data}
// }
// export default Api




// This is a joke API from a random server. 
// import  axios from 'axios'
// import { useState, useEffect } from 'react'

// const Api = (url) => {
// const [data, setData]= useState(null);
// const [loading, setLoading]= useState(false);
// const [error, setError]= useState(null);

//   useEffect(() => {
//     setLoading(true)
//     axios.get(url)
//     .then((response)=>{
//       setData(response.data);
//     }).catch((err)=>{
//       setError(err)
//     }).finally(()=>{
//       setLoading(false)
//     })
  
//   }, [url])
//   const refetch = ()=>{
//     setLoading(true)
//     axios.get(url)
//     .then((response)=>{
//       setData(response.data);
//     }).catch((err)=>{
//       setError(err)
//     }).finally(()=>{
//       setLoading(false)
//     })
//   }
//   return {data, loading, error, refetch}
// }

// export default Api
