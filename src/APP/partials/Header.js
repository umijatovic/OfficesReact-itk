import React from 'react';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state={
            listButtonClass: 'active',
            gridButtonClass: 'active'
        }
    }

    render(){
        const { handleClick, handleClick1 } = this.props;
        return(
            <header>
                <h1>Offices</h1>
                <nav>
                    <button onClick={handleClick}>List</button>
                    <button onClick={handleClick1} >Grid</button>
                </nav>
            </header>
        )
    }
}

export default Header;