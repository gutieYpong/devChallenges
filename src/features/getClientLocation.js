export default function getClientLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
    .then( res => {
      return `?lattlong=${res.coords.latitude},${res.coords.longitude}`;
    })
    .catch( fail => {
      console.log(`get location rejected: ${fail}`)
      return `rejected`;
    })
}