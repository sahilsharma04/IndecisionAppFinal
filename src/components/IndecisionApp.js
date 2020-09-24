import React from 'react';
import AddOptions from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
    state ={
        options :[],
        selectedOption: undefined
    }

    handleClearSelectionOptions = ()=>{
        this.setState(()=>({selectedOption:undefined}));
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if(options){
                this.setState(()=>({options}));
            }
        }catch(e){
            //Do Nothing
        }
    }


    componentDidUpdate( prevProps , prevState){
        if(prevState.options.length !== this.state.options.length){

            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    handleDeleteOptions = ()=>{
        this.setState(()=>{
            return {
                options : []
            };
        });
    };

    handlePick = ()=>{
        const pick = Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[pick];
        this.setState(()=>({
            selectedOption:option
        }));
    };

    handleAddOption = (option)=>{
        if(!option){
            return "Enter valid value to add item"
        }
        else if(this.state.options.indexOf(option) > -1){
            return "This Option already exists"
        }

        this.setState((prevState)=>{
            return {
                options : prevState.options.concat([option])
            };
        });
    };

    handleDeleteOption = (optionToDelete)=>{
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>{
                return optionToDelete !== option;
            })
        }));
    };
    render(){
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer!";

        return (
            <div>
                <Header title={title} subtitle={subtitle}></Header>
                
                <div className='container'>

                    <Action
                    hasOptions={this.state.options.length} 
                    handlePick={this.handlePick}/>

                    <div className='widget'>
                        <Options options={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption ={this.handleDeleteOption}/>

                        <AddOptions handleAddOption = {this.handleAddOption}/>
                    </div>

                </div>

                <OptionModal 
                    selectedOption = {this.state.selectedOption} 
                    handleClearSelectionOptions={this.handleClearSelectionOptions}  
                ></OptionModal>
            </div>
        );
    }
}

export default IndecisionApp;