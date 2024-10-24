
// server/api/register.js
export default defineEventHandler(async (event) => {
  const { email, username, password } = await readBody(event)
  
  // Here you would normally validate and save the user to the database
  // For example purposes, we return a mock response
  const user = { email, username }

  return { user }
})
