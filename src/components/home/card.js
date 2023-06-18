import { useNavigate } from "react-router-dom";
import { 
  Card as MuiCard, 
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';

function Card({id, title, body}) {
  const nav = useNavigate();
  function navigate() {
    nav("/practice/" + id);
  }
  return (
    <MuiCard
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={navigate} size="small">View</Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;
