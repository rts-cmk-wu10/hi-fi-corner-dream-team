export default function parameterMaker(method ,param, value) {
  let url= new URL(window.location.href)
  let params = new URLSearchParams(url.search)
  params.set(param, value)
  
  switch (method) {
    case 'filter':

      break;

    case 'search': 
    
      history.pushState(null, null, '?' + params.toString())
      break

    case 'paginate': 
    
      break
      
    case 'sort': 
    
      break

    case 'slice': 
    
      break

    case 'relation': 
    
      break
    default:
      break;
  }
}