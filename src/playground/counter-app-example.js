let count = 0;
const addOne = () => {
    count++;
    RenderCounterApp(); 
};
const minusOne = () => {
    count--;
    RenderCounterApp();
};
const reset = () => {
    count =0;
    RenderCounterApp();
};




const appRoot = document.getElementById("app");
const RenderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne} id="my-id" className="button">+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

RenderCounterApp();