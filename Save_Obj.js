       // implement rest api
       
       
        let Students = [];
        const addStudents = (ev)=>{
            
            ev.preventDefault();
            let Student = {
        id: Date.now(),
        NameOfStudent: document.getElementById('Fname').value,
        SurnameOfStudent: document.getElementById('Surname').value,
        AgeOfStudent: document.getElementById('Age').value,
        LevelOfStudent: document.getElementById('curr_Level').value,
       FavOfStudent: document.getElementById('F_Club').value,

        };
        Students.push(Student);
        
        

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(Students),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
         const tBodyEl = document.querySelector('tbody');
         const tableEl = document.querySelector("table");
         tBodyEl.innerHTML += `  
           <tr>   
             <td>${document.getElementById('Fname').value}</td>
             <td>${document.getElementById('Surname').value}</td>
             <td>${document.getElementById('Age').value}</td>
             <td>${document.getElementById('curr_Level').value}</td>
             <td>${document.getElementById('F_Club').value}</td>
             <td><button type="button" id="Del_btn" class="btn btn-danger">Delete</button><td>
         
           </tr>
         
         `
         function onDeleteRow(e) {
          if (e.target.classList.contains("btn btn-danger")) {
            return;
          }
  
          const btn = e.target;
          btn.closest("tr").remove();
        }
  
      
        tableEl.addEventListener("click", onDeleteRow);

         document.forms[0].reset();
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('Lg_In').addEventListener('click', addStudents);
        });    
    