let gradeStudent = [];

//Calcular promedio
function studentValidation(name, grade1, grade2, grade3) {
    if (!name || name.trim() === '') {
        console.log("Error: El nombre no puede estar vacío");
        return false;
    }
    
    const grades = [grade1, grade2, grade3];
    for (let grade of grades) {
        if (grade < 0 || grade > 10) {
            console.log("Error: Las notas deben estar entre 0 y 10");
            return false;
        }
    }
    
const average = (grade1 + grade2 + grade3) / 3;
    
    //Ver si aprobó o reprobó
    let status = "";
    if (average >= 6.0) {
        status = "APROBADO";
    } else {
        status = "REPROBADO";
    }
    
    //Crear estudiante
    const student = {
        name: name,
        grade1: grade1,
        grade2: grade2,
        grade3: grade3,
        average: average,
        status: status
    };
    
    gradeStudent.push(student);
    
    //Resultados
    console.log(`\n=== RESULTADO PARA ${name} ===`);
    console.log(`Notas: ${grade1}, ${grade2}, ${grade3}`);
    console.log(`Promedio: ${average.toFixed(2)}`);
    console.log(`Estado: ${status}`);
    
    return student;
}

//Resultados
console.log("=== CALCULADORA DE PROMEDIO DE NOTAS ===");

//Promedios
studentValidation("Ana García", 8, 7, 9);
studentValidation("Carlos López", 5, 6, 4);
studentValidation("María Rodríguez", 9, 8, 10);

//validaciones 
studentValidation("", 8, 7, 9); 
studentValidation("Test Error", 11, 7, 9);
studentValidation("Test Error", -1, 7, 9);

//Mostrar estudiantes
console.log("\n=== RESUMEN GENERAL ===");
console.log("Total de estudiantes procesados:", gradeStudent.length);

if (gradeStudent.length > 0) {
    gradeStudent.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name} - Promedio: ${student.average.toFixed(2)} - ${student.status}`);
    });
}