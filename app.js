'use strict'
let employeeList=[];
let body=document.getElementById('body');
let main=document.getElementById('main')
let mainCardsDiv=document.createElement('div');
mainCardsDiv.className="mainCardsDiv";
function Employee(fullName, emId, department, level, imgUrl, salary){
   this.fullName=fullName;
   this.emId=emId;
   this.department=department;
   this.level=level;
   this.imgUrl=imgUrl;
    this.salary=salary
}
 
Employee.prototype.calculateNetSalary=function(){
    let sala=0;
if (this.level=="Senior"){
     sala=Math.floor(Math.random() * (2000 - 1500 + 1) + 1500)  
}
if (this.level=="Mid-Senior"){
    sala=Math.floor(Math.random() * (1500 - 1000 + 1) + 1000)  
}
if (this.level=="Junior"){
    sala=Math.floor(Math.random() * (1000 - 500 + 1) + 500)  
}
return sala-(sala*(7.5/100))
}

Employee.prototype.generateId=function(){
    let uniqueID = Math.floor(1000 + Math.random() * 9000);
    return uniqueID;
}
Employee.prototype.renderEachEmplyee=function(){
    let card=document.createElement('div');
    card.className="card";
    let img= document.createElement('img')
    img.src=this.imgUrl;
     card.appendChild(img);
    let fnameelement= document.createElement('p')
    fnameelement.textContent=`Name: ${this.fullName} >>>> ID: ${this.emId}`;
    card.appendChild(fnameelement);
    let depelement= document.createElement('p')
    depelement.textContent=`Department: ${this.department} >>>> Level: ${this.level}`;
    card.appendChild(depelement);
    let salaryelement= document.createElement('p')
    salaryelement.textContent=`Salary: ${this.salary}`;
    card.appendChild(salaryelement);
mainCardsDiv.appendChild(card);
main.appendChild(mainCardsDiv);
    
}
///////////////////////////////////////////////////////
let lanaAli=new Employee('Lana Ali',1001,'Finance','Senior','./img/em3.jpg',0);
lanaAli.salary=lanaAli.calculateNetSalary();
lanaAli.renderEachEmplyee();

let tamaraAyoub=new Employee('Tamara Ayoub',1002,'Marketing','Senior','./img/em6.avif',0);
tamaraAyoub.salary=tamaraAyoub.calculateNetSalary();
tamaraAyoub.renderEachEmplyee();

let safiWalid=new Employee('Safi Walid',1003,'Administration','Mid-Senior','./img/em4.jpg',0);
safiWalid.salary=safiWalid.calculateNetSalary();
safiWalid.renderEachEmplyee();

let omarZaid=new Employee('Omar Zaid',1004,'Development','Senior','./img/em5.png',0);
omarZaid.salary=omarZaid.calculateNetSalary();
omarZaid.renderEachEmplyee();

let ranaSaleh=new Employee('Rana Saleh',1005,'Development','Junior','./img/em3.jpg',0);
ranaSaleh.salary=ranaSaleh.calculateNetSalary();
ranaSaleh.renderEachEmplyee();

let hadiAhmad=new Employee('Hadi Ahmad',1006,'Finance','Mid-Senior','./img/em1.jpg',0);
hadiAhmad.salary=hadiAhmad.calculateNetSalary();
hadiAhmad.renderEachEmplyee();

//////////////////////////////////////////////////////

const form=document.getElementById('form');

form.addEventListener("submit", collectData);


function collectData(event){

    event.preventDefault();
    let fulltName = event.target.fname.value;
    let depar=event.target.department.value;
    let lev=event.target.level.value;
    let imgurl=event.target.imgurl.value;
    creatEmployee(fulltName,depar,lev,imgurl);
}
function creatEmployee(name,department,level,imgUrl){
  let newemp =new Employee(name,0,department,level,imgUrl,0);

    newemp.emId=newemp.generateId();
    newemp.salary=newemp.calculateNetSalary();
employeeList.push(newemp);
   newemp.renderEachEmplyee();
}



function print(){
  for(let i=0; i<employeeList.length;i++){
     let card=document.createElement('div');
     card.className="card";
     let img= document.createElement('img')
     img.src=employeeList[i].imgUrl;
      card.appendChild(img);
     let fnameelement= document.createElement('p')
     fnameelement.textContent=`Name: ${employeeList[i].fullName} >>>> ID: ${employeeList[i].emId}`;
     card.appendChild(fnameelement);
     let depelement= document.createElement('p')
     depelement.textContent=`Department: ${employeeList[i].department} >>>> Level: ${employeeList[i].level}`;
     card.appendChild(depelement);
     let salaryelement= document.createElement('p')
     salaryelement.textContent=`Salary: ${employeeList[i].salary}`;
     card.appendChild(salaryelement);
mainCardsDiv.appendChild(card);


  }
  main.appendChild(mainCardsDiv);
   
}