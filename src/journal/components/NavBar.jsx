import {AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material'
import { LoginOutlined, MenuOutlined } from '@mui/icons-material'

export const NavBar = ({drawerWidth = 240 }) => {
  return (
    <AppBar 
        position="fixed" 
        color="primary"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` }
        }}
    >
      <Toolbar>
        <IconButton
            color = "inherit"
            edge = "start"
            aria-label = "menu"
            sx={{ mr: 2, display: { sm: 'none' }}}
        >
            <MenuOutlined />          
        </IconButton>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap component='div' > JournalApp</Typography>
          <IconButton color='error'>
            <LoginOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
