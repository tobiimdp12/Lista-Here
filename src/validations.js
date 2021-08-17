export function validText(text)
{
   //name.trim()=elimina los espacios del input
   const regex = /\d/;//regular expresion:para chequear si en la cadena existen numeros.
   if(regex.test(text)||text.trim().length==0)
   {
        return false;
   } 
   return true;
}

export function validAge(age)
{
   if(age.length==0||age.length>3||age<0||age>100)
   {
        return false;
   } 
   return true;
}

export function validWeight(weight)
{
   if(weight.length==0||weight.length>3||weight<0||weight>300)
   {
        return false;
   } 
   return true;
}

export function validHeight(height)
{
   if(height.length==0||height.length>3||height<0||height>3)
   {
        return false;
   } 
   return true;
}

