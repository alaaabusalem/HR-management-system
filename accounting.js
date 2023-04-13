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

main.appendChild(mainTableDiv);


function addInfoTotable(){
    if(localStorage.getItem('originEmp')){
        let getInfo=JSON.parse(localStorage.getItem('originEmp'));
        let employeeList=[];
        employeeList=getInfo;
        console.log(employeeList);
        
        showInfoOnScreen(employeeList,'Finance'); 
        showInfoOnScreen(employeeList,'Marketing'); 
        showInfoOnScreen(employeeList,'Administration'); 
        showInfoOnScreen(employeeList,'Development'); 
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