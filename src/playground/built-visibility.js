class VisibitlityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleClickMe=this.handleClickMe.bind(this);

        this.state={
         visibility:false
        }
    }
    handleClickMe(){
       this.setState((prevState)=>{
          return {
            visibility:!prevState.visibility
           }
        
           });

     //  alert(this.state.visibility);
    }

    render(){
        return(
            <div>
                <h1>Test</h1>
                <button onClick={this.handleClickMe}>
                {this.state.visibility ? 'Hide': 'Show'}
                </button>
                {this.state.visibility && (<div> <p> Test codd</p></div>)}
            </div>
        );
    }
}
ReactDOM.render(<VisibitlityToggle />, document.getElementById('app'));