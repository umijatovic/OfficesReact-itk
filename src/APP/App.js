import React from 'react';
import './App.scss';
import Header from './partials/Header';
import OfficesPage from './office/officesPage';
import SingleOfficePage from './office/SingleOfficePage'
import DataService from './services/dataService';
import Animation from '../APP/partials/Animation';
import { Switch, Route} from 'react-router-dom';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {

      offices: [],
      isListView: true,
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
     isListView: false
   })
 }

 listViewHandler = () =>{

  this.setState({

    isListView: true

  })
}

 componentDidMount(){
  this.loadOffices();
}

  render(){

    return (

      <div className="App">

      <Header isListView={this.state.isListView} handleClick={this.listViewHandler} handleClick1={this.gridViewHandler} /> 
      
      <Switch>
        {(this.state.loading) ? <Animation/> : <Route exact path='/' render={(props) => <OfficesPage {...props} isListView={this.state.isListView} officesData={this.state.offices} />}/>}
        <Route exact path='/singleOffice/:number' render={(props) => <SingleOfficePage {...props} officeData={this.state.offices} />} />
      </Switch>

    </div>
  );
    }
}

export default App;
