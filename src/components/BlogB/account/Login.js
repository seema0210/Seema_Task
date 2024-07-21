import React from 'react'

const Login = () => {
  return (
    <Box> 
        {/* working of box similar to div */}
        <TextField variant='standard'/>
        {/* working of TextField similar to inout */}
        <TextField variant='standard'/>
        <Button variant="contained">Login</Button>
        <Button >Create an account</Button>
        {/* above button has no any border and bg color */}
        {/* look different types of variant */}
    </Box>
  )
}

export default Login