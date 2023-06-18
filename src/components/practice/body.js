import { Grid } from '@mui/material';
import Card from './card';
import Error from './../common/error';

function Body({item, error}) {
  if (error === "" || error === undefined) {
    return (
      <Item item={item} />
    )
  } else {
    return (
      <Error message={error} />
    )
  }
}

function Item({item}) {
  if (item) {
    return(
      <Grid container spacing={4}>
        <Grid 
          item xs={12} 
          sm={12} 
          md={12}
        >
          <Card 
            title={item.title}
            body={item.body}
          />
        </Grid>
      </Grid>
    )
  } else {
    return null;
  }
}

export default Body;