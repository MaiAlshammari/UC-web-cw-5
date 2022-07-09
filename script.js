

function BMI(weight,height)
{
let result= (weight/ (height*height));
console.log(result);
return result;


}

BMI(60,150);


// بونص
BMI();
BMI();
BMI();
BMI();
BMI();

function Status(bmi)
{
if(bmi) document.getElementById("result").innerHTML=result;
    if(bmi >18.5)
    {
      return "لديك نقص في الوزن ";
      
    } 
    

   
    else if (bmi >18.5 && bmi <25) 
    {
       return"لديك نقص في الوزن" ;
      
    }
   
    

    else  (bmi >=25) 
    {
          return "لديك زيادة في الوزن";

    }
    
    

}
 function calculate()
 { 
  let weight =document.getElementById("weight").value;
  let height= document.getElementById("height").value;
  let bmi= document.getElementById("result");
console.log(value);

 }  

