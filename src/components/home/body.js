import { 
  Container, 
  Grid
} from '@mui/material';
import Card from './card';
import Error from './../common/error';

function Body({items, error, children}) {
  if (error === "" || error === undefined) {
    return (
      <ListContainer>
        <Tests items={items} />
        {children}
      </ListContainer>
    )
  } else {
    return (
      <ListContainer>
        <Error message={error} />
        {children}
      </ListContainer>
    )
  }
}

function ListContainer({children}) {
  return(
    <Container 
      sx={{ py: 8 }} 
      maxWidth="md"
    >
      {children}
    </Container>
  )
}

function Tests({items}) {
  return(
    <Grid container spacing={4}>
      {items.map((card, index) => (
        <Grid 
          item key={index} 
          xs={12} 
          sm={6} 
          md={4}
        >
          <Card 
            id={card.id} 
            title={card.title} 
            body={card.body} 
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Body;