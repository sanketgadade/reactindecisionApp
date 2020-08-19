//testing repo

class IndecisionApp extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);

        this.state={
            options:props.options
        };
    }
  
  //made the mrthod shortend in line #25  
    //as props is ome way we defined here this method to erase all element from array
     handleDeleteOptions(){
        //  this.setState(()=>{
        //      return{
        //          options:[]
        //      };
        //  });

         this.setState(()=>({options:[] }));  //shortend line for above commented code
     }

     handleDeleteOption(optionToRemove){
         this.setState((prevState)=>({
             options:prevState.options.filter((option)=>{
               return optionToRemove !== option;
             })
         }));
         //console.log('hdo ',option)
     }

     handlePick(){
        const randomNum=Math.floor(Math.random() * this.state.options.length);
        const option=this.state.options[randomNum];
        alert(option);
      
     }

     handleAddOption(option){
         if(!option){
             return 'Enter valid value to add item';
         }else if(this.state.options.indexOf(option)>-1){
            return 'This option already exist';     
         }
     //  console.log(option);

     this.setState((prevState)=>({options:prevState.options.concat(option)}));  //make function shortned


    //    this.setState((prevState)=>{
    //           return{
    //               options: prevState.options.concat(option)
    //           };
    //    });
     }
    render(){
       // const Title="Test App with props";
        const SubTitle="sub title of App";
        //const options=['One Element','Two Element','Three Element'];
        return( 
            <div>
              <Header subtitle={SubTitle}  />
             <Action
                hasOptions={this.state.options.length > 0 }
                handlePick={this.handlePick}
             />
             <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
             <Option />
            <AddOption 
              handleAddOption={this.handleAddOption}
            /> 
            </div>
        );
    }
}
IndecisionApp.defaultProps={
    options:[]
};
const Header=(props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
    );

};

//added default object

Header.defaultProps={
    title: 'Indecision APP to Learn React JS !'
};


// class Header extends React.Component{
//     render(){
//         //console.log(this.props);
//         return(
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2> 
//             </div>
//         );
//     }
// }

const Action=(props)=>{
    return(
        <div>
            <button  onClick={props.handlePick}  
            disabled={!props.hasOptions}>
                this is my action button
            </button>
        </div>
    );

};
// class Action extends React.Component{
//     render(){
//         return(
//             <div>
//                 <button  onClick={this.props.handlePick}  disabled={!this.props.hasOptions}>
//                     this is my action button
//                 </button>
//             </div>
//         );
//     }
// }

const Options=(props)=>{
            return(
            <div>
                 <button onClick={props.handleDeleteOptions}>Remove All</button>
                {
                   props.options.map((option)=>(
                   <Option 
                   key={option}
                   optionText={option}
                   handleDeleteOption={props.handleDeleteOption}
                  />
                  ))
                }

               
            </div>
        );

};
// class Options extends React.Component{
   
//     render(){
//         return(
//             <div>
//                  <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                    this.props.option.map((option)=><Option key={option} optionText={option}/>)
//                 }

               
//             </div>
//         );
//     }
// }

const Option =(props)=>{
    return(
        <div>
            {props.optionText} 
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText );
            }}
            >
                Remove
            </button>
        </div>
        
    );
};
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.optionText} 
//             </div>
            
//         );
//     }
// }
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);

        //make the code shortned
       // this.setState(()=>({error}));
        this.setState(()=>{
            return{
                error
            };
        });
      
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handleAddOption}>
                   <input type="text" name="option"/>
                   <button> Add option</button>
               </form>
            </div>
        );
    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));