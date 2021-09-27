var personTitles = ["Nombres", "Apellidos", "Edad", "Salario", "Profesion"];


const insertTitleJS = () => {
    let titlesRow = document.getElementById("titles");

    for (let title of personTitles) {
        let th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.innerText = title;
        titlesRow.appendChild(th);
    }

}


const insertTitleJquery = () => {


    for (let title of personTitles)
        $("#titles").append("<th scope='col'>" + title + "</th>");

}

const loadPeople = () => {
    const people = getlocalStorage("people") != null ? JSON.parse(getlocalStorage("people")) : [];
    $("#tbodyPeople").empty();
    for (let person of people) {
        let innerHtml = "<tr>";
        innerHtml += "<th scope='row'>" + person.Firstname + "</th>";
        innerHtml += "<td>" + person.LastName + "</td>";
        innerHtml += "<td>" + person.Age + "</td>";
        innerHtml += "<td>" + person.Salary + "</td>";
        innerHtml += "<td>" + person.profesion + "</td>";
        $("#tbodyPeople").append(innerHtml);

    }
}

const addtoList = () => {
    const people = getlocalStorage("people") != null ? JSON.parse(getlocalStorage("people")) : [];
    if (validFields()) {

        let firstname = $("#firtsname").val();
        let lastname = $("#lastname").val();
        let age = $("#age").val();
        let salary = $("#salary").val();
        let career = $("#career").val();

        const person = {
            Firstname: firstname,
            LastName: lastname,
            Age: age,
            Salary: salary,
            profesion: career
        };

        people.push(person);
        saveLocalStorage(JSON.stringify(people), "people");

        loadPeople();

        cleanFields();
    }
    else {
        $("#content-notification").text("Todos los campos requeridos")
        $("#notification").modal('toggle');
    }


}

const validFields = () => {
    return ($("#firtsname").val().trim().length > 0 && $("#lastname").val().trim().length > 0 && $("#age").val().trim().length > 0 && $("#salary").val().trim().length > 0 && $("#career").val().trim().length > 0)
}


const cleanFields = () => {
    $("#firtsname").val('');
    $("#lastname").val('');
    $("#age").val('');
    $("#salary").val('');
    $("#career").val('');
}

const closeModal = () => { $('#notification').modal('hide'); }

const saveLocalStorage = (value, nameProperty) => {
    localStorage.setItem(nameProperty, value);
}

const getlocalStorage = (nameProperty) => {
    return localStorage.getItem(nameProperty);
}
const printMaxSalary = () => {

    let people = getlocalStorage("people") != null ? JSON.parse(getlocalStorage("people")) : [];
    let larger = 0;
    let index = 0;

    for (let i = 0; i < people.length; i++) {
       
       if(parseInt(people[i].Salary) > larger){
        larger = parseInt(people[i].Salary);
        index = i;
       }      

    }
    
    document.getElementById('payment').innerHTML ='El pendejo con más plata es: ' + people[index].Firstname + ' Y su salario fue: ' + people[index].Salary;
    
}

const agevalidation = () =>{
    //let ageVerification = parseInt(document.getElementById('age').value);

    

     let ageVerification = parseInt($('#age').val());

    if(ageVerification < 18 || ageVerification > 99){

        alert('Recuerda que debe ser menos de 18 o más de 99');


    }
    
}


const salaryvalidation = () =>{
    let salaryValidation = parseInt(document.getElementById('salary').value);

    
    
    if(salaryValidation < 1000000){

        
        alert('Recuerda que el valor minimo permitido es 1000000');
  
        
        }

     
}









