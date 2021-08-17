import UI from "../src/UI.js";
import Person from "../src/Person.js";
import StorageManager from "./StorageManager.js";
import * as validations from "./validations.js";


/**************************************************************/


//CRUD(CREATE READ UPDATE AND DELETE)

//Event:Create a person
document.querySelector("#person-form").addEventListener('submit',(e)=>{

    //Prevent Actual submit
    e.preventDefault();

    //Get form values
    const name=document.querySelector("#name").value;
    const age=document.querySelector("#age").value;
    const weight=document.querySelector("#weight").value;
    const height=document.querySelector("#height").value;
    let date=new Date();
      
    let _date=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    

    if(validations.validText(name)&&validations.validAge(age)
    &&validations.validWeight(weight)&&validations.validHeight(height))
    {
      
        const person=new Person(name,age,weight,height,_date);//instatiate person

        console.log(person);
        //add person to list
        UI.addPersonToList(person);

        //add person to localStorage
        StorageManager.addPerson(person);
        UI.showAlert("Person added sucessfully","success");
        window.scrollTo(0,0);
        UI.clearFields();//clear Field
    }else
    {
        UI.showAlert("Input error try again!","danger");
        window.scrollTo(0,0);
    }
   
});

//Event:Display People
document.addEventListener("DOMContentLoaded",UI.displayPeople);



// Event: select update and remove a person
document.querySelector('#people-list').addEventListener('click', (e) => {
    
    UI.selectPerson(e.target);
    UI.editPerson(e.target);
    // Remove person from UI
    UI.deletePerson(e.target);
    
    // Remove person from Storage
    StorageManager.removePerson(e.target.parentElement.previousElementSibling.textContent);

  });

