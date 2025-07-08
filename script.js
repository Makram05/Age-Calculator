const btnE1=document.querySelector("#btn");
const  birthdayE1=document.querySelector("#birthday");

const result=document.querySelector("#result");

function calculateAge(){
    const birthdayValue=birthdayE1.value;
    console.log(birthdayValue);
    if(birthdayValue===""){
        alert('please Enter the date of birth');
    }else{
        const age=ageValue(birthdayValue);
        alert(`your age is ${age}`);
        result.innerText=`your age is ${age}`;
    }
}

function ageValue(value){
    const currentDate=new Date();
    const birthdayDate=new Date(value);
    let age=currentDate.getFullYear()-birthdayDate.getFullYear();
    const month=currentDate.getMonth()-birthdayDate.getMonth();


    if(month<0 || (month===0 && currentDate.getDate()<birthdayDate.getDate())){
        age--;
    }
    return age

}

btnE1.addEventListener("click",calculateAge);