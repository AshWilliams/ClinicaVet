![memoria_curso_fullstack_--002](https://user-images.githubusercontent.com/24917434/32314961-7f535aac-bfaa-11e7-9361-ae5be4b16ea9.jpg)
## Instalar el proyecto

> git clone https://github.com/AshWilliams/ClinicaVet.git

> cd ClinicaVet

> npm install

> npm start

> usuario@MININT-BIRK3V5  C:\Program Files\Azure Cosmos DB Emulator  
    ❯ .\CosmosDB.Emulator.exe /EnableMongoDbEndpoint

# Arquitectura de MEAN

![memoria_curso_fullstack_--003](https://user-images.githubusercontent.com/24917434/32315057-dff66a16-bfaa-11e7-990e-966d7d6309d2.png)

- El Cliente (Navegador)

  - Es donde el usuario puede visualizar la aplicación y donde puede interactuar con ella.

- Nube (Internet):

  - La nube hace referencia a servicios que usamos a través de internet.

- El Servidor físico:

  - Es un ordenador que permite usar sus recursos de forma remota a través de una red.

- MongoDB

  - MongoDb es una base de datos NoSql es un tipo de base de datos que no usa la típica estructura de tablas relacionadas sino que almacena los datos con una estructura clave:valor. Pide muy pocos recursos y es fácilmente escalable.

- Mongoose

  - Es una librería que permite conectar una base de datos MongoDb con un servidor NodeJS

- NodeJS:

  - Node es un entorno que permite ejecutar código javascript del lado del servidor.

- ExpressJS

  - Es un framework de NodeJs, encargado de interpretar las peticiones HTTP y recibirlas a través de un Router y redirigir la petición al controller que realiza la petición a la base de datos. También ofrece un motor de plantillas JADE.

- AngularJS

  - Es un framework de javascript que permite la creación de &quot;single page application&quot; lo que permite navegar en una página web sin tener que refrescar todo el contenido de la misma. Su principal característica es el Binding o doble Binding que permite pasar información a través de una variable Scope desde el modelo hacia la parte visual.

## MODELO DE DATOS

![memoria_curso_fullstack_--004](https://user-images.githubusercontent.com/24917434/32315260-bebc472a-bfab-11e7-8f37-502ac2bcb9d9.png)

## CASOS DE USO

 ![memoria_curso_fullstack_--005](https://user-images.githubusercontent.com/24917434/32315287-d3d7ddf4-bfab-11e7-9cb7-37acc04faa6b.jpg)

# DIAGRAMAS

## Diagrama de flujo Cliente-Mascota

![cliente-mascotas](https://user-images.githubusercontent.com/24917434/32315526-b01c60d2-bfac-11e7-9a7a-d83eb5fe1790.PNG)

## Diagrama de flujo Calendario-Cita

![calendario-citas](https://user-images.githubusercontent.com/24917434/32315625-274c4ab4-bfad-11e7-8b93-32180ac8986e.png)

 # Servicios REST publicados


#Servicios REST publicados

## Appointments
| METODO | URL | BODY | RESPONSE |
| --- | --- | --- | --- |
| GET | /api/appointments | Null | Res.json([appointments]) |
| GET | /api/appointments/:id | Null | Res.json(appointment) |
| GET | /api/appointments/:from/:to | Null | Res.json(appointments) |
| POST | /api/appointments | {JSON} | Res.json(createdAppointment) |
| PUT | /api/appointments/:id | {JSON} | Res.json(updatedAppointment) |

## Pets
| METODO | URL | BODY | RESPONSE |
| --- | --- | --- | --- |
| GET | /api/customers/:id/pets | Null | Res.json([pets]) |
| GET | /api/pet/:id | Null | Res.json(pet) |
| DELETE | /api/pet/:id | Null | Res.send.status(200) |
| POST | /api/pet/:id | {JSON} | Res.json(createdPet) |
| PUT | /api/pet/:id | {JSON} | Res.json(updatedPet) |

## Customers
| METODO | URL | BODY | RESPONSE |
| --- | --- | --- | --- |
| GET | /api/customers | Null | Res.json([customers]) |
| GET | /api/customers/:id | Null | Res.json(customer) |
| POST | /api/customers | {JSON} | Res.json(createdCustomer) |
| PUT | /api/customers/:id | {JSON} | Res.json(updatedCustomer) |
