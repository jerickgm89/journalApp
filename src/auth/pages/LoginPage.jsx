import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { Google } from '@mui/icons-material'
import { Grid, Typography, TextField, Button, Link } from '@mui/material'

import { AuthLayout } from '../layout/AuthLayout'

import { useForm } from '../../hooks'
import { checkingAuthentication, starGoogleSingIn } from '../../store/auth'


export const LoginPage = () => {

  const { status } = useSelector( state => state.auth )

  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm({
    email: 'jerickgm89@gmail.com',
    password: '123456'
  })

  const isAuthenticating = useMemo( () => status === 'checking', [status] )

  const onSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })

    dispatch( checkingAuthentication() )
  }

  const onGoogleSingIn = () => {
    console.log('onGoogleSingIn')
    dispatch( starGoogleSingIn() )
  }

  return (

    <AuthLayout title='Login'>
        <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField 
                label='Correo' 
                type="email"
                placeholder='correo@gmail.com'
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </Grid>            
            
            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField 
                label='Contraseña' 
                type="password"
                placeholder='Contraseña'
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt: 1}}>

              <Grid item xs={12} sm={6} sx={{ mt: 2}}>
                <Button 
                  disabled={isAuthenticating}
                  type='submit' 
                  variant='contained' 
                  fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ mt: 2}}>
                <Button 
                  disabled={isAuthenticating}
                  variant='contained' 
                  fullWidth
                  onClick={onGoogleSingIn}
                >
                  <Google/>
                  <Typography sx={{ml: 1}}> Google </Typography>
                </Button>
              </Grid>

            </Grid>  
            
            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register' >
                Crear un cuenta
              </Link>
            </Grid>

          </Grid>
        </form>

    </AuthLayout>


  )
}
