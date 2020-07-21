class IndecisionApp extends React.Component{
    render(){
        const Title="Test App with props"
        return(
            <div>
              <Header title={Title} />
             <Action />
             <Option />
            <AddOption /> 
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>this is test component</h2> 
            </div>
        );
    }
}
class Action extends React.Component{
    render(){
        return(
            <div>
                <button>this is my action button</button>
            </div>
        );
    }
}
class Option extends React.Component{
    render(){
        return(
            <div>
                <p>this is option</p>
            </div>
        );
    }
}
class AddOption extends React.Component{
    render(){
        return(
            <div>
                 <p>this is Addoption</p>
            </div>
        );
    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));