console.log("running");

//JSX
const app ={
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = ' ';
        appRender();
    }
}; 

const onMakeDecision = ()=>{
    const random = Math.floor(Math.random() * app.options.length);
    const option = app.options[random];
    alert(option); 
}

const onRemoveAll = ()=>{
    app.options=[];
    appRender();
}
const appRoot = document.getElementById("app");
const appRender = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button onClick={onRemoveAll} >Remove All</button>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name='option' />
                <button>Add Button</button>
            </form>
        </div>
        
    );
ReactDOM.render(template,appRoot);
};

appRender();