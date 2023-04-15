'use strict'
let main=document.getElementById('mainAcounting');
let mainTableDiv=document.createElement('div');
mainTableDiv.className="mainTableDiv";
let table=document.createElement('table');
mainTableDiv.appendChild(table);
let tableHead=document.createElement('tr');
let tablerow1=document.createElement('th');
tablerow1.textContent="Department";
let tablerow2=document.createElement('th');
tablerow2.textContent="# Employees";
let tablerow3=document.createElement('th');
tablerow3.textContent="Average Salary";
let tablerow4=document.createElement('th');
tablerow4.textContent="Total Salary";
table.appendChild(tableHead);
tableHead.appendChild(tablerow1);
tableHead.appendChild(tablerow2);
tableHead.appendChild(tablerow3);
tableHead.appendChild(tablerow4);
let tablefooter=document.createElement('tfoot');
table.appendChild(tablefooter);
main.appendChild(mainTableDiv);


  
function addInfoTotable(){
    if(localStorage.getItem('originEmp')){
        
        let getInfo=JSON.parse(localStorage.getItem('originEmp'));
        let employeeList=[];
        employeeList=getInfo;
        if(localStorage.getItem('updatingEmp')){
            let getInfoInUpdating=JSON.parse(localStorage.getItem('updatingEmp'));
           let localStorgeList=getInfoInUpdating; 
            localStorgeList.forEach(element => {
                employeeList.push(element);
            });
             
           }
        console.log(employeeList);
        
        showInfoOnScreen(employeeList,'Finance'); 
        showInfoOnScreen(employeeList,'Marketing'); 
        showInfoOnScreen(employeeList,'Administration'); 
        showInfoOnScreen(employeeList,'Development'); 
        netTotal(employeeList);
    }

}
function showInfoOnScreen(employeeList,dep){
    let count=0;
    let totalSalary=0;
    for(let i=0;i<employeeList.length;i++){
       if(employeeList[i].department==dep){
         count+=1;
         console.log(count);
         totalSalary+=employeeList[i].salary;
       }

    }
    let avg=totalSalary/count;
    avg=Math.round(avg);
    let tableRow=document.createElement('tr');
    let rowName=document.createElement('td');
    rowName.textContent=dep;
    let rowEmpNum=document.createElement('td');
    rowEmpNum.textContent=`${count}`;
    let rowAvg=document.createElement('td');
    rowAvg.textContent=`${avg}`;
     let rowTotalSalary=document.createElement('td');
    rowTotalSalary.textContent=`${totalSalary}`;
    tableRow.appendChild(rowName);
    tableRow.appendChild(rowEmpNum);
    tableRow.appendChild(rowAvg);
    tableRow.appendChild(rowTotalSalary);
    table.appendChild(tableRow);
}
addInfoTotable();
function netTotal(employeeList){
    let count=0;
    let totalSalary=0;
    let totalEmployeesNum=0;
    for(let i=0;i<employeeList.length;i++){
         count+=1;
         totalSalary+=employeeList[i].salary;

    }
    let avg=totalSalary/count;
    avg=Math.round(avg);
    let tableRow=document.createElement('tr');
    let rowName=document.createElement('td');
    rowName.style.fontWeight=700;
    rowName.textContent="total";
    let rowEmpNum=document.createElement('td');
    rowEmpNum.textContent=`${count}`;
    rowEmpNum.style.fontWeight=700;
    let rowAvg=document.createElement('td');
    rowAvg.textContent=`${avg}`;
    rowAvg.style.fontWeight=700;
     let rowTotalSalary=document.createElement('td');
    rowTotalSalary.textContent=`${totalSalary}`;
    rowTotalSalary.style.fontWeight=700;
    tableRow.appendChild(rowName);
    tableRow.appendChild(rowEmpNum);
    tableRow.appendChild(rowAvg);
    tableRow.appendChild(rowTotalSalary);
    tablefooter.appendChild(tableRow);
}