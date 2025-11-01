UNIVERSIDAD DE ORIENTE
SEGUNDO EXAMEN PARCIAL DE PROGRAMACION ESTRUCTURADA
    
Nombre: 	Edgar Rigofredo Bermúdez Magaña 				
N° de carné: 		U20251147						

Indicaciones:
Para cada ejercicio debes completar lo siguiente antes de programar:
1.	Análisis del problema
  a.	Variables de entrada: ¿Qué datos necesita recibir el programa?
  b.	Variables de proceso: ¿Qué cálculos, transformaciones o validaciones se realizarán?
  c.	Variables de salida: ¿Qué resultados debe mostrar el programa?
2.	 Descripción de la solución.
Explica con tus propias palabras, paso a paso, cómo resolverás el problema. No
escribas código, solo la lógica en lenguaje natural.

Ejercicio 1: Calculadora de Promedio de Notas
Crea un programa que permita calcular el promedio de calificaciones de un estudiante. El programa debe recibir un Array con las notas y retornar el promedio. Además, debe indicar si el estudiante aprobó (promedio >= 9.0) o reprobó.

Arreglo:
	  gradeStudent 
    name => string 
    grade1 => number
    grade2 => number
    grade3 => number
Variable:
    average => ((grade1+grade2+grade3)/3) 
Function:
    studentValidation
    promedio => 6.0 = aprobado
    promedio < 6.0 = reprobado

 
Ejercicio 2: Registro de productos
Desarrolla un programa que gestione un catálogo de productos. Cada producto debe tener: nombre, precio, cantidad en stock. El programa debe permitir:
-	Agregar un nuevo producto al catálogo
-	Mostrar todos los productos 
-	Calcular el valor total del inventario
array:
  products
    name
    price
    stockItems
Function 
  addProduct 
    name
    price
    stockItems
  allProducts
    name
    price
    stock
  totalPrice
    sumar todos los precios


Ejercicio 3:Sistema de Gestión de Estudiantes
Crear un sistema para gestionar la información de estudiantes. Cada estudiante tiene: nombre, carné, edad y un array denotas. El sistema debe: 
•	Registrar nuevos estudiantes
•	Calcular el promedio de cada estudiante 
•	Encontrar al estudiante con el mejor promedio
•	Mostrar la lista de estudiantes ordenada por promedio (de mayor a menor)

Object
  Student
    name 
    id 
    age
    Array []
        grades
        grade1
        grade2
        grade3
funtion 
  average
    promedio => (( grade1, grade2, grade3)/3)
  bestAverage
    Comparar todos los promedios 
  averageOrder
    Ordenar los promedios de mayor a menor
  newStudent
    Agregar estudiante

Ejercicio 4:  Tienda en línea – Carrito de compras
Desarrolla un sistema de carrito de compras que permita:
- Agregar productos al carrito (con nombre, precio y cantidad)
- Eliminar productos del carrito por nombre
- Modificar la cantidad de productos
- Calcular el subtotal, aplicar el descuento si la compra supera los $100 (10% de descuento), y calcular el total
- Mostrar el resumen de la compra

Antes de programar, responde:
1.	¿Qué estructura usarás para el carrito?
Usaría un array de objetos para cada producto que el usuario ingrese. Que incluya el nombre, precio y cantidad.
2.	¿Cómo buscaras un producto especifico?
Con el método .find(), se puede encontrar una propiedad en especifico 
3.	¿Qué validaciones debes hacer? 
- Que el precio y la cantidad debe ser mayor a cero.
- Que el nombre no este vacio
- Eliminar el producto
- Modificar la cantidad
- total 
4.	Describe el proceso para calcular el total con descuento.
Para el subtotal: price * quantity a cada producto, luego sumar el resultado de todas las multiplicaciones 
Descuento: subtotal >= 100 aplicar descuento, pero si subtotal < 100 el descuento es 0 
Total final: subtotal – descuento 

Array 
  produts 
    name
    price
    quantity
Function
  addProduct:
    name
    price
    quantity
  removeProduct 
    Eliminar un objeto 
  modifyProduct
    modificar el precio de un producto 
  calculateTotal
    calcular subtotal 
    calcular descuento si aplica
    calcular total
  showSummary
    Mostrar los productos 
    Mostrar subtotal, descuento y total


Ejercicio 5: Sistema de Citas para Clínica Médica 
Enunciado: Desarrolla un sistema simplificado de gestión de citas para una clínica médica. El sistema debe permitir: 
•	Registrar doctores con: nombre, especialidad y código de doctor
•	Agendar citas médicas que incluyan: nombre del paciente, código del doctor, fecha, hora y motivo de consulta
•	Cancelar una cita buscándola por nombre del paciente y fecha 
•	Buscar citas por especialidad (mostrar todas las citas de una especialidad específica) 
•	Mostrar todas las citas programadas ordenadas por fecha 
•	Calcular estadísticas básicas: total de citas por especialidad y doctor con más citas agendadas 
Validaciones importantes: 
•	No se pueden agendar dos citas para el mismo doctor a la misma hora y fecha 
•	Al agendar, debe verificar que el código del doctor exista

Array
  doctors 
    name
    speciality
    code
  appointments 
    patient 
    doctorCode
    date  
    time
    reason
function
  registerDoctor 
    Agregar doctor con sus respectivos datos
    Crear objeto con los datos del doctor
  schedulelAppointment 
    Agendar una cita 
    Verificar que no ha y otra cita
    Crear la cita un objeto
    Ver que si existe el dr 
  cancelAppointment 
    buscar cita y cancelar
  findBySpecialty   
    seleccionar una especialidad en especifico
  sortAppointment 
    Ordenar las fechas en el array
  calculateStatistics
    contar las citas por especialidad y por doctor

Antes de programar, responde:
1.	 ¿Qué estructuras de datos necesitas para representar doctores y citas? 
Para los doctores arrays de objetos con sus valores, name, speciality y code. Y para ctas un array de objetos con patieName, doctorName, date, time reason
2.	¿Cuáles son las variables de entrada para cada función? 
Agendar Doctor, Agendar cita, Cancelar cita y Buscar por especialidad
3.	¿Qué validaciones debes realizar antes de agendar una cita? 
Si existe el doctor, si no hay citas duplicadas y fecha valida
4.	¿Cómo buscarás y eliminarás una cita específica? 
Para buscar el método .find()
para eliminar .splice()
5.	¿Qué proceso seguirás para ordenar las citas por fecha? 
El método .sort() 
6.	Describe paso a paso cómo calcularás las estadísticas solicitadas.
Contar la citas por especialidad del doctor, también encontrar el docente mas ocupado y de ultimo sumar ambos resultados

