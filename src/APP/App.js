import React from 'react';
import './App.scss';
import Header from './partials/Header';
import OfficesPage from './office/officesPage';
import SingleOfficePage from './office/SingleOfficePage'
import DataService from './services/dataService';
import MapPage from './office/MapPage';
import Animation from '../APP/partials/Animation';
import { Switch, Route, Redirect} from 'react-router-dom';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {

      offices: [],
      view: 'list',
      loading: true

    }
  }

  loadOffices(){
     DataService.getData().then(data => {

       this.setState({

         offices: data,
         loading: false

       })
     });
    
 }

 gridViewHandler = () =>{
   this.setState({
     view: 'grid'
   })
 }

 listViewHandler = () =>{

  this.setState({

    view: 'list'

  })
}

mapViewHandler = () =>{

  this.setState({

    view: 'map'
  })
}

 componentDidMount(){
  this.loadOffices();
}

  render(){

    return (

      <div className="App">

      <Header view={this.state.view} handleClick={this.listViewHandler} handleClick1={this.gridViewHandler} handleClick2={this.mapViewHandler}/> 
      
      <Switch>
        {(this.state.loading) ? <Animation/> : <Route exact path='/' render={(props) => <OfficesPage {...props} view={this.state.view} officesData={this.state.offices} />}/>}
        <Route  path='/singleOffice/:number' render={(props) => <SingleOfficePage {...props} officeData={this.state.offices} />} />
        <Route  path='/map' component={MapPage} />
        
      </Switch>

    </div>
  );
    }
}

export default App;
