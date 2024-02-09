import { TurnedInNot } from '@mui/icons-material'
import { Box, Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material'


export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 }
        }}
    >
        <Drawer 
            variant="permanent" 
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
            }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component='div'>
                Jorge Garcia
            </Typography>
          </Toolbar>
          <Divider/>
        <List>
            {
                ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                    <ListItem key={text} disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={text} />
                                <ListItemText secondary={'Consectetur ea nostrud anim ullamco proident.'} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
        </Drawer>

    </Box>

  )
}
