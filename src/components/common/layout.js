import { 
  Grid, 
  Container,
  Fade
} from '@mui/material';

function Layout({width, children}) {
  const localWidth = width || 12;
  return (
    <Fade in timeout={700}>
      <Container>
        <Grid 
          container 
          spacing={0}
          justifyContent="center"
        >
          <Grid 
            item 
            md={localWidth}
            sx={{marginTop: "5%"}}
          >
            {children}
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
}

export default Layout;
