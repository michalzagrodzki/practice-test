import { 
  Grid, 
  Alert, 
  AlertTitle 
} from '@mui/material';

function Error({message}) {
  return(
    <Grid container spacing={4}>
      <Alert severity="error" sx={{marginTop: "10%"}}>
        <AlertTitle>Error</AlertTitle>
        { message.data }
      </Alert>
    </Grid>
  )
}

export default Error;