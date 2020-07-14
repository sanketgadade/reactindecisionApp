console.log(" your are in app js file from script folder");
// in src we containe our jsx
var template= (
<div>
    <b>React App</b>
    <p>this is para, does this change?</p>
</div>
);

var app={
    title:'Indecision App',
    subtitle:'Test Application',
    options:[]
};
var appName='My test app';

const onFormSubmit=(e)=>{
    e.preventDefault();  // refresh the browser

    const option=e.target.elements.option.value;
  if(option)
  {
      app.options.push(option);
      e.target.elements.option.value= "";
      rederApp();
  }
};

const onRemoveAll=()=>{
    app.options=[];
    rederApp();
}


var appRoot=document.getElementById('app');

const numbers=[20,30,50];
const rederApp=()=>
{
    var template2= (
        <div>
        <b>{appName} </b>
        <p> {app.title}</p>
        <p>{app.options.length > 0 ? 'Here are the option': 'No option'}</p>
        <p>{app.options.length}</p>
        <button onClick={onRemoveAll}>Remov All</button>
       {/* {
           numbers.map((number)=>{
           return <p key={number}>number: {number}</p>
           })
       } */}

        <ol>
        {
            app.options.map((option)=>{
            return <li key={option}>{option}</li>;
            })
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" id="name"/>
            <button>Add Option</button>
        </form>
        </div>
        );
        
        ReactDOM.render(template2,appRoot);

};

rederApp();