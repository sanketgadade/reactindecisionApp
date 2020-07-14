let count=0;
const addOne=()=>{
    count++;
    renderApp();
};
const minusOne=()=>{
    count--;
    renderApp();
    
};
const reset=()=>{
    count=0;
    renderApp();
};
var appRoot=document.getElementById('app');


  const renderApp=()=>{
    var template2= (
        <div>
        <b> count is:  {count} </b>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
        </div>
        );
        ReactDOM.render(template2,appRoot);
  };



  renderApp();