export const apicall = (link, type) => {
   return type(link).then(response => response.json())
}