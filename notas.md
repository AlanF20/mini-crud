# Notas y observaciones al realizar este proyecto.

***EL CORS DEBE DE IR AL PRINCIPIO DE LA APP:***
tuve una duda de casi todo un dia de espera para poder resolverla, el contexto es que ya habia realizado el frontend del mini-crud que habia pensado, un formulario en react, que guardaba la informacion de un usuario en un objeto y enviaba la informacion mediante el metodo POST a mi mini API, el problema es que me marcaba en el navegador problemas con el CORS, estuve como ya lo dije un dia entero buscando e investigando el porque de dicho error si en teoria ya estaba utilizando el paquete cors instalado desde npm y usado en express, a lo que entendi CORS es un recurso que nos permite establecer que direcciones seran capaces de comunicarse con nuestro servidor por ejemplo: si yo quiero que la direccion web alan.com se comunique con mi servidor, con cors yo sere capaz de establecer dicha comunicacion o mas que establecer, permitir.

El codigo que me generaba error era el siguiente: 

```js
import express from 'express'
import userRouter from './routes/user.routes.js'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(userRouter)
app.use(cors()) // <--- esta era la causa de todos mis problemas

export default app
```
Y el codigo con el cual pude solucionar el error fue el siguiente: 
```js
import express from 'express'
import userRouter from './routes/user.routes.js'
import cors from 'cors'
const app = express()

app.use(cors()) // <---- con el CORS aqui arriba se soluciono el problema
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(userRouter)

export default app
```
-----

Formate mi PC (que por cierto me olvide de subir los ultimos cambios a git de lo realizado en el frontend y ahora tendre que hacerlo de nuevo...) debido al video subido de s4vitar acerca de TLauncher(aun existian carpetas de dicha aplicacion dentro de mi computador). Bueno, tuve que volver a reconfigurar el entorno de sql y esto fue lo que aprendi: 

La aplicacion de SQL Server Managament Studio es meramente para como lo dice su nombre administrar servidores que ya existan lo menciono porque pensaba que desde la aplicacion yo podia crear el motor de base de datos a utilizar y no este es un proceso aparte que se puede realizar ya sea instalando diversas aplicaciones (existe una en particular que te crea un motor de base de datos igual de la linea de sqlserver).

Tambien aprendi que para poder usar la palabra reservada localhost en sql server tenia que configurar el servicio de sql dentro de mi ordenador: primero tenia que habilitar el protocolo TCP/IP al igual que el named pipes dentro del servicio, y dentro de la configuracion de TCP/IP en la pestaña de direcciones IP especificamente en la configuracion de puerto TCP ingresas el puerto 1433, este puerto a lo que pude investigar significa que es un puerto de conexion, garantiza el envio y recibo de datos dentro de este protocolo.

Tambien aprendi que localhost es como si conviertieras tu propia pc en servidor y cliente, a lo que me refiero es que al especificar un servidor como localhost lo que le quieres decir a la computadora es que podra recibir peticiones como servidor y tambien podra realizar peticiones como si de un cliente se tratase, esto quiere decir que se estarian emulando las practicas que miles de servidores realizan pero pudiendote comunicar consigo mismo, es extraño... lo visualizo como si mi ordenador hablase y se contestase por si mismo🤣