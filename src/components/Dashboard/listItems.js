import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Link } from 'react-router-dom'

export const mainListItems = (
  <div>
     <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Customers"  /> */}
      <Link to="/home">
               Home
           </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
      </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Customers"  /> */}
    <Link to="/dashboard?article">
    <ListItemText primary="New Article" />
           </Link>
    </ListItem>
  
   
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Reports" /> */}
      <Link to="/dashboard/blogs">
        Blogs
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Customers"  /> */}
    <Link to="/dashboard/reviewcomments">
               comments
           </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>

      <Link to="/subscribe">
               Subscibe
           </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Reports" /> */}
      <Link to="/dashboard/Promoadmin">
        Promo
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Customers"  /> */}
    <Link to="/dashboard?stats">
    <ListItemText primary="Statistics" />
           </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Customers"  /> */}
    <Link to="/dashboard?promotions">
    <ListItemText primary="All Promotions" />
           </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Customers"  /> */}
    <Link to="/dashboard?blogs">
    <ListItemText primary="Create Promo" />
           </Link>
    </ListItem>
    
  
  </div>
);
export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <ListItem button>
      </ListItem>
    <ListItem button>
   </ListItem>
    <ListItem button>
    </ListItem>
  </div>
);