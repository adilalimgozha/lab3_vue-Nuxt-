
// server/api/login.js
export default defineEventHandler(async (event) => {
    const { username, password } = await readBody(event)
  
    // Normally, you would validate the user's credentials here
    // Mock user for demonstration purposes
    const user = {username}
  
    // For simplicity, we assume the user is valid
    return { user }
  })
  