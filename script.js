const calculation=document.getElementById('calc');
const result=document.getElementById('ans');
var dis=0;
var num=0;
var operator='+';

var ans=0*1;
const zero = () => {
    dis=dis + '0';
    num+= '0';
    calculation.innerHTML=dis;
}
const one = () => {
    dis=dis + '1';
    num+= '1';
    calculation.innerHTML=dis;
}
const two = () => {
    num+= '2';
    dis=dis + '2';
    calculation.innerHTML=dis;
}
const three = () => {
    num+= '3';
    dis=dis + '3';
    calculation.innerHTML=dis;
}
const four = () => {
    num+= '4';
    dis=dis + '4';
    calculation.innerHTML=dis;
}
const five = () => {
    num+= '5';
    dis=dis + '5';
    calculation.innerHTML=dis;
}
const six = () => {
    num+= '6';
    dis=dis + '6';
    calculation.innerHTML=dis;
}
const seven = () => {
    num+= '7';
    dis=dis + '7';
    calculation.innerHTML=dis;
}
const eight = () => {
    num+= '8';
    dis=dis + '8';
    calculation.innerHTML=dis;
}
const nine = () => {
    num+= '9';
    dis=dis + '9';
    calculation.innerHTML=dis;
}
const dot=()=>{
     num+= '.';
    dis=dis + '.';
    calculation.innerHTML=dis;
}
const add = () => {
    decide();
    operator='+';
     dis=dis + '+';
    calculation.innerHTML=dis;
  
}
const sub = () => {
    decide();
    operator='-';
     dis=dis + '-';
    calculation.innerHTML=dis;
  
}
const mul = () => {
    decide();
    operator='*';
     dis=dis + '*';
    calculation.innerHTML=dis;
  
}
const divi = () => {
    decide();
    operator='/';
   dis=dis + '/';
    calculation.innerHTML=dis;
}
const equal = () => {
    decide();
    operator='+';
    result.innerHTML=dis;
    dis=ans;
    calculation.innerHTML=ans;
    // ans=0*1;
  
}

const decide = () => {
    var temp=Number(num);
//    console.log(num,operator);
    if(operator=='+')ans+=temp;
    if(operator=='*')ans*=temp;
    if(operator=='/')ans/=temp;
    if(operator=='-')ans-=temp;
    // console.log(ans);
     num=0*1;
     
}
const back=()=>{
dis=dis.slice(0,dis.length-1);
if(num!=0)num=num.slice(0,num.length-1);
ans=ans.slice(0,ans.length-1);

    calculation.innerHTML=dis;

}
const ac=()=>{
    dis=0;
    num=0;
    ans=0*1;
    result.innerHTML=ans;
    calculation.innerHTML=dis;

}

