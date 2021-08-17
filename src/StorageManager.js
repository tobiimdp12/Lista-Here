//Storage Class:Handles Storage

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

export default class StorageManager
{
    static getPeople()
    {   
        let people;
        if(localStorage.getItem('people')===null)
        {
            people=[];
        }else
        {
            people=localStorage.getObj('people');
        }

        return people;
    }

    static addPerson(person)
    {
        const people=StorageManager.getPeople();

        people.push(person);
        localStorage.setObj('people',people);
    }

    static removePerson(el)
    {   
        const people=StorageManager.getPeople();


        people.forEach((person,index)=>{
            if(el===person.id)
            {
                console.log(index);
                //index=index of the element
                //1=i want to delete only one element
                people.splice(index,1);
            }
        });
    
        localStorage.setObj('people',people);
    }

    static modPerson(el,nameEdit,ageEdit,weightEdit,heightEdit)
    {   
        const people=StorageManager.getPeople();


        people.forEach((person)=>{
            if(el===person.id)
            {
            
                person.name=nameEdit;
                person.age=ageEdit;
                person.height=heightEdit;
                person.weight=weightEdit;
            }
        });
    
        localStorage.setObj('people',people);
    }
    

}
