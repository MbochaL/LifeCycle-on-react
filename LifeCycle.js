import React from 'react'

class LifeCycle extends React.Component {

    constructor(props){
        super(props);
        console.log("constructor");

        this.state = {
            name: "Kaiba",

        }
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.setState({name: "Martin"});
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }


    render() {
        const name = this.state.name;
        return (
            <div>
                <h2>Estado</h2>
                <h3>{name}</h3>
            </div>
        )
    }
}

export default LifeCycle;