function Employee(fullName, emId, department, level, imgUrl, salary){
   this.fullName=fullName;
   this.emId=emId;
   this.department=department;
   this.level=level;
   this.imgUrl=`./img/${imgUrl}`;
    this.salary=salary
}

Employee.prototype.calculateNetSalary=function(level){
    let salary=0;
if (level=="Senior"){
     salary=Math.floor(Math.random() * (2000 - 1500 + 1) + 1500)  
}
if (level=="Mid-Senior"){
    salary=Math.floor(Math.random() * (1500 - 1000 + 1) + 1000)  
}
if (level=="Junior"){
    salary=Math.floor(Math.random() * (1000 - 500 + 1) + 500)  
}
return salary-(salary/7.5)
}
Employee.prototype.renderEachEmplyee=function(fullName,salary){
    document.write(`</br> </br>${fullName} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  the salary ------>>>> ${salary}</br>`)
}
const ghaziSamer=new Employee('Ghazi Samer',1000,'Administration','Senior','em1.jpg',0);
ghaziSamer.salary=ghaziSamer.calculateNetSalary(ghaziSamer.level);
ghaziSamer.renderEachEmplyee(ghaziSamer.fullName,ghaziSamer.salary);


let lanaAli=new Employee('Lana Ali',1001,'Finance','Senior','em3.jpg',0);
lanaAli.salary=lanaAli.calculateNetSalary(lanaAli.level);
lanaAli.renderEachEmplyee(lanaAli.fullName,lanaAli.salary);

let tamaraAyoub=new Employee('Tamara Ayoub',1002,'Marketing','Senior','em6.avif',0);
tamaraAyoub.salary=tamaraAyoub.calculateNetSalary(tamaraAyoub.level);
tamaraAyoub.renderEachEmplyee(tamaraAyoub.fullName,tamaraAyoub.salary);

let safiWalid=new Employee('Safi Walid',1003,'Administration','Mid-Senior','em4.jpg',0);
safiWalid.salary=safiWalid.calculateNetSalary(safiWalid.level);
safiWalid.renderEachEmplyee(safiWalid.fullName,safiWalid.salary);

let omarZaid=new Employee('Omar Zaid',1004,'Development','Senior','em5.png',0);
omarZaid.salary=omarZaid.calculateNetSalary(omarZaid.level);
omarZaid.renderEachEmplyee(omarZaid.fullName,omarZaid.salary);

let ranaSaleh=new Employee('Rana Saleh',1005,'Development','Junior','em3.jpg',0);
ranaSaleh.salary=ranaSaleh.calculateNetSalary(ranaSaleh.level);
ranaSaleh.renderEachEmplyee(ranaSaleh.fullName,ranaSaleh.salary);

let hadiAhmad=new Employee('Hadi Ahmad',1006,'Finance','Mid-Senior','em1.jpg',0);
hadiAhmad.salary=hadiAhmad.calculateNetSalary(hadiAhmad.level);
hadiAhmad.renderEachEmplyee(hadiAhmad.fullName,hadiAhmad.salary);


