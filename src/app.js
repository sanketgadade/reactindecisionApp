class IndecisionApp extends React.Component{
    render(){
        const Title="Test App with props";
        const SubTitle="sub title of App";
        const options=['One Element','Two Element','Three Element'];
        return( 
            <div>
              <Header title={Title} subtitle={SubTitle} />
             <Action />
             <Options option={options}/>
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
                <h2>{this.props.subtitle}</h2> 
            </div>
        );
    }
}
class Action extends React.Component{
    handlPick(){
        alert('button working');
    }
    render(){
        return(
            <div>
                <button onClick={this.handlPick}>this is my action button</button>
            </div>
        );
    }
}
class Options extends React.Component{
    RemoveAll()
    {
        alert('removed');
    }
    render(){
        return(
            <div>
                <p>{this.props.option.length}</p>
                {
                   this.props.option.map((option)=><Option key={option} optionText={option}/>)
                }

                <button onClick={this.RemoveAll}>Remove All</button>
            </div>
        );
    }
}
class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText} 
            </div>
            
        );
    }
}
class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault;
        const option=e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }
    }
    render(){
        return(
            <div>
               <form onSubmit={this.handleAddOption}>
                   <input type="text" name="option"/>
                   <button> Add option</button>
               </form>
            </div>
        );
    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));