'use strict'
function Employee(fullName, emId, department, level, imgUrl, salary){
   this.fullName=fullName;
   this.emId=emId;
   this.department=department;
   this.level=level;
   this.imgUrl=`./img/${imgUrl}`;
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
Employee.prototype.renderEachEmplyee=function(){
    document.write(`</br> </br> ${this.fullName} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  the salary ------>>>> ${this.salary}</br>`)
}
const ghaziSamer=new Employee('Ghazi Samer',1000,'Administration','Senior','em1.jpg',0);
ghaziSamer.salary=ghaziSamer.calculateNetSalary();
ghaziSamer.renderEachEmplyee();


let lanaAli=new Employee('Lana Ali',1001,'Finance','Senior','em3.jpg',0);
lanaAli.salary=lanaAli.calculateNetSalary();
lanaAli.renderEachEmplyee();

let tamaraAyoub=new Employee('Tamara Ayoub',1002,'Marketing','Senior','em6.avif',0);
tamaraAyoub.salary=tamaraAyoub.calculateNetSalary();
tamaraAyoub.renderEachEmplyee();

let safiWalid=new Employee('Safi Walid',1003,'Administration','Mid-Senior','em4.jpg',0);
safiWalid.salary=safiWalid.calculateNetSalary();
safiWalid.renderEachEmplyee();

let omarZaid=new Employee('Omar Zaid',1004,'Development','Senior','em5.png',0);
omarZaid.salary=omarZaid.calculateNetSalary();
omarZaid.renderEachEmplyee();

let ranaSaleh=new Employee('Rana Saleh',1005,'Development','Junior','em3.jpg',0);
ranaSaleh.salary=ranaSaleh.calculateNetSalary();
ranaSaleh.renderEachEmplyee();

let hadiAhmad=new Employee('Hadi Ahmad',1006,'Finance','Mid-Senior','em1.jpg',0);
hadiAhmad.salary=hadiAhmad.calculateNetSalary();
hadiAhmad.renderEachEmplyee();


