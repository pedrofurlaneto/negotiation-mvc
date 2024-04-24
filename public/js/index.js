const inputFields = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')  
];

console.log(inputFields);

const tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {    
   event.preventDefault();
   
   const tr = document.createElement('tr');
   
   inputFields.forEach(function(inputField) {
       
       const td = document.createElement('td');
       td.textContent = inputField.value;
       tr.appendChild(td);
   });
   
  var tdVolume = document.createElement('td');
  tdVolume.textContent = inputFields[1].value * inputFields[2].value; 
  
  tr.appendChild(tdVolume);
  
  tbody.appendChild(tr);
  
  inputFields[0].value = '';
  inputFields[1].value = 1;
  inputFields[2].value = 0;
  
  inputFields[0].focus();
});