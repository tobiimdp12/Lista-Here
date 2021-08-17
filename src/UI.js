import StorageManager from "./StorageManager.js";
import * as validations from "./validations.js";
//UI class:Handle UI Tasks

export default class UI
{
    static displayPeople()//this method can be using without instatiate the class
    {

        const people=StorageManager.getPeople();
        people.forEach((person)=>UI.addPersonToList(person));
    }

    static clearFields()
    {
        document.querySelector('#name').value='';
        document.querySelector('#age').value='';
        document.querySelector('#weight').value='';
        document.querySelector('#height').value='';


        UI.showAlert("Fields clear successfully","dark");
    }
    static clearFieldsEdit()
    {
        document.querySelector('#name-edit').value='';
        document.querySelector('#age-edit').value='';
        document.querySelector('#weight-edit').value='';
        document.querySelector('#height-edit').value='';


        UI.showAlert("Fields clear successfully","dark");
    }
    static showAlert(message,className)
    {
        const div=document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector('.container');
        const form=document.querySelector('#person-form');
        container.insertBefore(div,form);//insert the div before the form

        setTimeout(()=>document.querySelector('.alert').remove(),3000);
    }


    static addPersonToList(person)
    {
        const list=document.querySelector("#people-list");
        const row=document.createElement('tr');
      
        row.innerHTML=`
            
            <td>${person.date}</td>
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td>${person.weight}</td>
            <td>${person.height}</td>
            <td style="display:none;">${person.id}</td>
            <td><a href="#title" class="btn btn-outline-danger btn-sm delete">X</a></td>
            <td><a href="#person-form-edit" class="btn btn-outline-info btn-sm select">Select</a></td>
            <td><a href="#person-form-edit" class="btn btn-primary btn-outline-warning update">Save Data</a></td>
        `;
        list.appendChild(row);
    }



    static selectPerson(el)
    {
        if(el.classList.contains('select'))
        {
            

            //The previousElementSibling property returns the previous element of the specified element, in the same tree level.
            const nameP=el.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            const ageP=el.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            const weightP=el.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            const heightP=el.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            console.log("name->",nameP);    
            console.log("ageP->",ageP);    
            console.log("weightP->",weightP);    
            console.log("heightP->",heightP);    
            //add the data of the person into the input for edit it.
            document.querySelector("#name-edit").value=nameP;
            document.querySelector("#age-edit").value=ageP;
            document.querySelector("#weight-edit").value=weightP;
            document.querySelector("#height-edit").value=heightP;
        }
        
    }

    static editPerson(el)
    {

        let nameEdit=document.querySelector("#name-edit").value;
        let ageEdit=document.querySelector("#age-edit").value;
        let weightEdit=document.querySelector("#weight-edit").value;
        let heightEdit=document.querySelector("#height-edit").value;


        if(el.classList.contains("update"))
            if(validations.validText(nameEdit)&&validations.validAge(ageEdit)
            &&validations.validWeight(weightEdit)&&validations.validHeight(heightEdit))
            {
               
                console.log("nombre input"+nameEdit);
                //name
                el.parentElement.previousElementSibling.previousElementSibling.
                previousElementSibling.previousElementSibling.previousElementSibling.
                previousElementSibling.previousElementSibling.innerHTML=nameEdit;
                //age
                el.parentElement.previousElementSibling.
                previousElementSibling.previousElementSibling.previousElementSibling.
                previousElementSibling.previousElementSibling.innerHTML=ageEdit;
                //weight
                el.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.
                previousElementSibling.previousElementSibling.innerHTML=weightEdit;
                //height
                el.parentElement.previousElementSibling.previousElementSibling.
                previousElementSibling.previousElementSibling.innerHTML=heightEdit;
                console.log(el.parentElement.previousElementSibling.previousElementSibling.textContent);
                StorageManager.modPerson(el.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent,nameEdit,ageEdit,weightEdit,heightEdit);
                UI.clearFieldsEdit();

               
            }else
            {
               
                UI.showAlert("input error","warning");
                
            }
           
            
    }

    static deletePerson(el)
    {
        if(el.classList.contains('delete'))
        {
            el.parentElement.parentElement.remove();
            UI.showAlert("Person Delete Successfully","warning");
        }
    }
}
