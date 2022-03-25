function getRecord(req, res) {
  console.log(req.body)
  const fetchData = fetch(`https://api.discogs.com/releases/249504`)
  .then(res => res.json())
}


export {
  getRecord
}