import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.reset = this.reset.bind(this)
 
    }
    //start of class methods
    increment(){
      this.setState(state=>({
        count: state.count + 1
      }))
    }
    decrement(){
      this.setState(state=>({
        count: state.count - 1
      }))
    }
    reset(){
      this.setState({
        count: 0
      })
    }
    
    render() {
      return (

        <Card 
        sx = {{ 
          margin:'auto',
          maxWidth: 345,
          background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          padding: '0 30px',
        }}>
          <CardContent>
            <Typography variant= "h6">Current Count: </Typography>
            <Typography variant= "h1">{this.state.count}</Typography>
          </CardContent>

          <CardActions sx={{margin:'auto'}}>
          <Button size="small" variant="contained" className='inc' onClick={this.increment}>Increment!</Button>
          <Button size="small" variant="contained" className='dec' onClick={this.decrement}>Decrement!</Button>
          <Button size="small" variant="contained" className='reset' onClick={this.reset}>Reset</Button>
          </CardActions>
        </Card>
      );
    }
  };

export default App;