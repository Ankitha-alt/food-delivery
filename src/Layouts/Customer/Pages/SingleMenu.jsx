import { Box, Button } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import PageBanner from '../Components/PageBanner'
import { useParams } from 'react-router-dom'
import { CustomerContext } from '../Context/Context';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import RelatedMenus from '../Components/Menus/RelatedMenus';
import { toast } from 'react-toastify';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function SingleMenu() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { id } = useParams();
  const { getSingleMenus, singleMenu, relatedMenus,host,addMenuIntoCart,customer,navigate} = useContext(CustomerContext)

  useEffect(() => {
    getSingleMenus(id)
  }, [id])

  const handleAddToCart = (id) => {
    if (customer) {
      addMenuIntoCart(id)
    } else {
      toast.warning(`Loging to add menu into cart`)
      navigate("/login")
      
    }
  }

  // console.log(singleMenu)
  // console.log(relatedMenus)

  return (
    <Box>
      <Box>
        <PageBanner title="Menu Details" />
      </Box>


      <Grid container spacing={2}>
        <Grid item xs={8} >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
          
            <ListItem>
              <ListItemText primary={singleMenu?.title} secondary={singleMenu?.category?.title} />
            </ListItem>

            <ListItem>
              <ListItemText primary={"Description"} secondary={singleMenu?.description} />
            </ListItem>

            <ListItem>
              <ListItemText primary={`₹${singleMenu?.price}`} secondary={`for ${singleMenu?.servings} serving`} />
            </ListItem>

          </List>
          <Box>
            <Button sx={{backgroundColor:"orange" ,display:'flex'}}
            onClick={() => handleAddToCart(singleMenu?._id)} >
              Add to cart
            </Button>
          </Box>
        </Grid>

        <Grid item xs={2} >
          <Item elevation={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar variant='square' sx={{width:'100vh',height:400}} src={`${host}/upload/customer/${singleMenu?.pictures}`} />
          </Item>
        </Grid>
        
        <Grid item xs={12}
          >
          
            {/* <Card sx={{ maxWidth: 345, width: '500px', textDecoration: "none" }}>
              <CardHeader
                // avatar={
                //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                //   </Avatar>
                // }

                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
              title={relatedMenus?.title}
              subheader={relatedMenus?.category?.title}
              />
              <CardMedia
                component="img"
                height="194"
                image={`${host}/upload/customer/${relatedMenus?.pictures}`}
                alt="menu picture"
              />
              <CardActions >
                {relatedMenus?.status},{relatedMenus?.foodtype}
              </CardActions>
              
              <CardActions disableSpacing>
                ₹{relatedMenus?.price}
              </CardActions>
            </Card> */}
            <RelatedMenus menus={relatedMenus}/>
        </Grid>
        </Grid>
        </Box>
  )
}
