import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useSelector, useDispatch } from 'react-redux';

const drawerWidth = 240;

export default function Categories() {

  let categories = useSelector((currentState) => currentState.categories.categories)

  let display = useSelector((currentState) => currentState.products.productsToDisplay)

  const dispatch = useDispatch();

  const handleClick = (name) => {
    dispatch({
      type: 'SELECTED_CATEGORY',
      payload: name
    });

    // dispatch({
    //   type: 'FILTER_TO_CATEGORY',
    //   payload: name
    // })
  }

  console.log(display);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {categories.map((category) => (
            <ListItem key={category.name} disablePadding>
              <ListItemButton>
                <ListItemText onClick={() => handleClick(category.name)} primary={category.display_name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
