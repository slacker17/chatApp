## Chat App Test

Esta aplicacicion basica de chat fue desarrollada con Node.js, Socket.io, Vue y HTML5.
Sus funcionalidades son:
1. Ingresar como un usuario con nombre.
2. Ver cantidad de conexiones disponibles (otros usuarios conectados).
3. Poder enviar/recibir mensajes con mas de una persona, es decir chat grupal.
4. Notificar cuando un usuario haya ingresado/abandonado la conversacion.
5. Visualizar/notificar cuando un usuario este escribiendo un mensaje.

### Pasos para ejecutar la aplicacion

>NOTA: Los siguientes pasos son descritos asegurandonos que ya se tiene instalado Node.js y npm (por default se instala automaticamente con Node.js), si no es es asi, puedes consultar los siguientes enlaces:

>NodeJS: https://nodejs.org/es/download/
>npm: https://www.npmjs.com/get-npm

1. Descargar o clonar este proyecto, para la linea de comandos seria:
```
git clone https://github.com/slacker17/chatApp
```
2. Nos posicionamos en la carpeta del proyecto:
```
cd chatApp
```
3. Ejecutamos la aplicacion con el siguiente comando:
```
node server.js
```
4. Nos dirigimos al navegador y  accedemos a la direccion: http://localhost:3000

5. Podemos comenzar a usar la app.

### Estructura del proyecto

A continuación se presentan los principales archivos/directorios de la aplicación:

```
chatApp
  |__css            <-- Carpeta de estilos css
  |__js             <-- Carpeta de scripts js
  |__scss           <-- Carpeta de estilos scss
  |__node_modules   <-- Carpeta de los modulos de Node.js
  |__index.html     <-- Vista principal de la app
  |__server.js      <-- Archivo de ejecucion principal JavaScript(Node), en el cual se ejecuta la app
  |__package.json   <-- Propiedades del proyecto
  ```
