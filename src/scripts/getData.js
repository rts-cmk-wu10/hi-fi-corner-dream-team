export default async function getDataFromApi (query) {
  try {
    const response = await fetch(`http://localhost:3000/${query}`)
    if (response.status === 404) {
      throw new Error('Not found')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
