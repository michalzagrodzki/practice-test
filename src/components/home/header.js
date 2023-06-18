import { 
  Container,
  Typography
} from '@mui/material';

function Header() {
  const title = "Practice Tests";
  const subTitle = "List of available practice tests:"
  return (
    <Container>
      <Typography 
        variant="h2" 
        align="center" 
        color="text.primary"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography 
        variant="h5" 
        align="center" 
        color="text.secondary" 
        paragraph
      >
        {subTitle}
      </Typography>
    </Container>
  );
}

export default Header;
