//Person Class:represent a person(name age weight and height)
function createId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;

}


function checkId(localPerson)
{
    let id=createId(6);
    if(localPerson==null)return id;//if is empty
    for(let person of localPerson)
    {
        if(id===person.id)//if the id exists
        {
            id=createId(6);
        }
    }
    console.log(id);

    return id;
}



export default class Person
{

    constructor(name,age,weight,height,date)
    {
        
        this.date=date;
        this.id=checkId(name);
        this.name=name;
        this.age=age;
        this.weight=weight;
        this.height=height;
    }
}