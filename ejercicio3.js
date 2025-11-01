let students = [];

//Registrar nuevo estudiante
function newStudent(name, id, age, grade1, grade2, grade3) {
    if (!name || name.trim() === '') {
        console.log("El nombre no puede estar vacío");
        return false;
    }
    
    if (!id || id.trim() === '') {
        console.log("El carné no puede estar vacío");
        return false;
    }
    
    if (age <= 0) {
        console.log("La edad debe ser mayor a cero");
        return false;
    }
    
    const grades = [grade1, grade2, grade3];
    for (let grade of grades) {
        if (grade < 0 || grade > 100) {
            console.log("Las notas deben estar entre 0 y 100");
            return false;
        }
    }
    
    //Ver si el carné existe
    const existingStudent = students.find(student => student.id === id);
    if (existingStudent) {
        console.log(`Ya existe un estudiante con el carné ${id}`);
        return false;
    }
    
    //Crear nuevo estudiante
    const student = {
        name: name,
        id: id,
        age: age,
        grades: [grade1, grade2, grade3]
    };
    
    students.push(student);
    console.log(`Estudiante ${name} registrado exitosamente`);
    return true;
}

//Promedio de un estudiante
function average(student) {
    const sum = student.grades.reduce((total, grade) => total + grade, 0);
    return sum / student.grades.length;
}

//Mejor promedio
function bestAverage() {
    if (students.length === 0) {
        console.log("No hay estudiantes registrados");
        return null;
    }
    
    let bestStudent = students[0];
    let bestAvg = average(students[0]);
    
    for (let i = 1; i < students.length; i++) {
        const currentAvg = average(students[i]);
        if (currentAvg > bestAvg) {
            bestAvg = currentAvg;
            bestStudent = students[i];
        }
    }
    
    console.log(`Mejor promedio: ${bestStudent.name} con ${bestAvg.toFixed(2)}`);
    return {
        student: bestStudent,
        average: bestAvg
    };
}

//Ordenar estudiantes de mayor a menor
function averageOrder() {
    if (students.length === 0) {
        console.log("No hay estudiantes registrados");
        return [];
    }
    
    const sortedStudents = [...students].sort((a, b) => {
        const avgA = average(a);
        const avgB = average(b);
        return avgB - avgA;
    });
    
    console.log("Estudiantes ordenados por promedio (de mayor a menor):");
    sortedStudents.forEach((student, index) => {
        const studentAvg = average(student);
        console.log(`${index + 1}. ${student.name} - Carné: ${student.id} - Promedio: ${studentAvg.toFixed(2)}`);
    });
    
    return sortedStudents;
}

//Mostrar información completa
function showAllStudents() {
    if (students.length === 0) {
        console.log("No hay estudiantes registrados");
        return;
    }
    
    console.log("\n=== LISTA COMPLETA DE ESTUDIANTES ===");
    students.forEach(student => {
        const studentAvg = average(student);
        console.log(`Nombre: ${student.name} | Carné: ${student.id} | Edad: ${student.age} | Notas: [${student.grades.join(', ')}] | Promedio: ${studentAvg.toFixed(2)}`);
    });
}

//Resultados
console.log("=== SISTEMA DE GESTIÓN DE ESTUDIANTES ===");

//Registrar estudiante
newStudent("Ana García", "A001", 20, 85, 90, 88);
newStudent("Carlos López", "A002", 22, 78, 82, 75);
newStudent("María Rodríguez", "A003", 19, 92, 95, 90);
newStudent("Pedro Martínez", "A004", 21, 65, 70, 68);

//Validaciones
newStudent("", "A005", 20, 80, 85, 90); 
newStudent("Test Error", "", 20, 80, 85, 90); 
newStudent("Test Error", "A006", 0, 80, 85, 90); 
newStudent("Test Error", "A007", 20, 110, 85, 90); 
newStudent("Ana García", "A008", 20, 80, 85, 90); 
newStudent("Test Duplicado", "A001", 20, 80, 85, 90);

//Todos los estudiantes
showAllStudents();

//Mejor promedio
bestAverage();

//Ordenar estudiantes por promedio
averageOrder();

//Agregar más estudiantes
console.log("\n--- AGREGANDO MÁS ESTUDIANTES ---");
newStudent("Laura Díaz", "A009", 23, 96, 98, 97);
newStudent("Juan Pérez", "A010", 20, 72, 75, 70);

//Mostrar resultados
showAllStudents();
bestAverage();
averageOrder();