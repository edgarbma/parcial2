//Arrays
let doctors = [];
let appointments = [];

//Registrar sun doctor
function registerDoctor(name, speciality, code) {
    //Verificar si el código ya existe
    const existingDoctor = doctors.find(doctor => doctor.code === code);
    if (existingDoctor) {
        console.log(`Ya existe un doctor con el código: ${code}`);
        return false;
    }
    
    const doctor = {
        name: name,
        speciality: speciality,
        code: code
    };
    
    doctors.push(doctor);
    console.log(`Doctor ${name} registrado exitosamente.`);
    return true;
}

//Agendar una cita
function scheduleAppointment(patient, doctorCode, date, time, reason) {
    //Ver que el doctor exista
    const doctor = doctors.find(doc => doc.code === doctorCode);
    if (!doctor) {
        console.log(`No existe un doctor con el código: ${doctorCode}`);
        return false;
    }
    
    //Ver que no hay cita para el mismo doctor a la misma fecha y hora
    const existingAppointment = appointments.find(app => 
        app.doctorCode === doctorCode && app.date === date && app.time === time
    );
    
    if (existingAppointment) {
        console.log(`El doctor ya tiene una cita programada para: ${date} a las ${time}`);
        return false;
    }
    
    //Crear cita
    const appointment = {
        patient: patient,
        doctorCode: doctorCode,
        date: date,
        time: time,
        reason: reason
    };
    
    appointments.push(appointment);
    console.log(`Cita agendada exitosamente para: ${patient} con el Dr. ${doctor.name}`);
    return true;
}

//Cancelar cita
function cancelAppointment(patient, date) {
    const initialLength = appointments.length;
    
    //Citas que no coinciden con el paciente y fecha
    appointments = appointments.filter(app => 
        !(app.patient === patient && app.date === date)
    );
    
    if (appointments.length < initialLength) {
        console.log(`Cita cancelada exitosamente para ${patient} en la fecha ${date}`);
        return true;
    } else {
        console.log(`No se encontró ninguna cita para ${patient} en la fecha ${date}`);
        return false;
    }
}

//Buscar citas por especialidad
function findBySpecialty(speciality) {
    //Buscar códigos de doctores de la especialidad
    const specialtyDoctors = doctors
        .filter(doctor => doctor.speciality === speciality)
        .map(doctor => doctor.code);
    
    const specialtyAppointments = appointments.filter(app => 
        specialtyDoctors.includes(app.doctorCode)
    );
    
    console.log(`Citas para la especialidad: ${speciality}`);
    if (specialtyAppointments.length === 0) {
        console.log("No se encontraron citas para esta especialidad.");
    } else {
        specialtyAppointments.forEach(app => {
            const doctor = doctors.find(doc => doc.code === app.doctorCode);
            console.log(`- ${app.patient} con Dr. ${doctor.name} (${app.date} ${app.time}): ${app.reason}`);
        });
    }
    
    return specialtyAppointments;
}

//Ordenar citas por fecha
function sortAppointments() {
    const sortedAppointments = [...appointments].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        if (dateA.getTime() === dateB.getTime()) {
            return a.time.localeCompare(b.time);
        }
        
        return dateA - dateB;
    });
    
    console.log("Citas ordenadas por fecha:");
    sortedAppointments.forEach(app => {
        const doctor = doctors.find(doc => doc.code === app.doctorCode);
        console.log(`- ${app.date} ${app.time}: ${app.patient} con Dr. ${doctor.name} - ${app.reason}`);
    });
    
    return sortedAppointments;
}

//Calcular estadísticas
function calculateStatistics() {
    const stats = {
        bySpecialty: {},
        byDoctor: {}
    };
    
    //Citas por especialidad
    appointments.forEach(app => {
        const doctor = doctors.find(doc => doc.code === app.doctorCode);
        if (doctor) {
            if (!stats.bySpecialty[doctor.speciality]) {
                stats.bySpecialty[doctor.speciality] = 0;
            }
            stats.bySpecialty[doctor.speciality]++;

            if (!stats.byDoctor[doctor.code]) {
                stats.byDoctor[doctor.code] = {
                    name: doctor.name,
                    count: 0
                };
            }
            stats.byDoctor[doctor.code].count++;
        }
    });
    
    //El doctor con más citas
    let topDoctor = null;
    let maxAppointments = 0;
    
    Object.values(stats.byDoctor).forEach(doctorStat => {
        if (doctorStat.count > maxAppointments) {
            maxAppointments = doctorStat.count;
            topDoctor = doctorStat;
        }
    });
    
    //Rsesultados
    console.log("\n=== ESTADÍSTICAS ===");
    console.log("Citas por especialidad:");
    Object.entries(stats.bySpecialty).forEach(([speciality, count]) => {
        console.log(`- ${speciality}: ${count} citas`);
    });
    
    console.log("\nCitas por doctor:");
    Object.values(stats.byDoctor).forEach(doctorStat => {
        console.log(`- Dr. ${doctorStat.name}: ${doctorStat.count} citas`);
    });
    
    if (topDoctor) {
        console.log(`\nDoctor con más citas: Dr. ${topDoctor.name} (${topDoctor.count} citas)`);
    }
    
    return {
        bySpecialty: stats.bySpecialty,
        byDoctor: stats.byDoctor,
        topDoctor: topDoctor
    };
}

//Uso del sistema
console.log("=== SISTEMA DE GESTIÓN DE CITAS MÉDICAS ===\n");

//Registrar doctores
registerDoctor("Carlos Rodríguez", "Cardiología", "CAR001");
registerDoctor("María González", "Pediatría", "MAR002");
registerDoctor("Juan Pérez", "Dermatología", "JUA003");

//Agendar citas
scheduleAppointment("Ana López", "CAR001", "2024-01-15", "09:00", "Consulta de rutina");
scheduleAppointment("Pedro Martínez", "MAR002", "2024-01-15", "10:30", "Control infantil");
scheduleAppointment("Laura Díaz", "CAR001", "2024-01-16", "11:00", "Dolor en el pecho");
scheduleAppointment("Carlos Sánchez", "JUA003", "2024-01-14", "15:00", "Revisión de piel");

//Validaciones
scheduleAppointment("Test Error", "COD999", "2024-01-15", "09:00", "Doctor inexistente"); 
scheduleAppointment("Otro Paciente", "CAR001", "2024-01-15", "09:00", "Misma hora");

//Buscar por especialidad
findBySpecialty("Cardiología");

//Ordenar citas
sortAppointments();

//Cancelar una cita
cancelAppointment("Pedro Martínez", "2024-01-15");

//Calcular estadísticas
calculateStatistics();