# crypto-app
App informativa sobre las criptomonedas mas cotizadas del mercado.

Siga las siguientes instrucciones para poder replicar el proyecto en su maquina local.

aseguerese de tener instalado android studio con un emulador para android.
instalar node, npm, en este caso la app fue desarrollada bajo la version 16.17.1 de node, esta version de node la puede instalar
ejecutando en la consola: nvm install 16.17.1

Inicie por clonar el proyecto desde el repositorio.
git clone -b main <link https>

cuando el proyecto este clonado, acceda a la carpeta raiz del proyecto desde su entorno de desarrollo y ejecute:
nvm use 16.17.1 (para utilizar la misma version), luego:
npm install ó npm i   (para descargar todas las dependencias que aseguran el funcionamiento de la app).
Cuando las dependencias ya esten instaladas ejecute:
npm start  (con este comando abre la terminal de metro para correr el proyecto).
presione la tecla "a" para que la aplicación abra en el emulador que tiene por defecto en su computador.

La app se creo con expo lo que permite tambien visualizar el desarrollo y funcionamiento de la app desde su dispositivo movil, para poder usarlo
necesita una cuenta expo y escanear el codigo QR que sale en la consola de metro al momento de ejecutar npm start

La app comienza su funcionamiento al seguir estos pasos.
lo primero que va a visualizar es una lista de las criptomonedas que devulve el servicio api asignado, podra ver el logo, simbolo y 
valor de cada una de ellas, puede deslizar para verlas todas.

si desea ver información mas detallada de cada una de ellas presione sobre la de su interes y lo llevara a una vista donde podra
ver mas informacion y una calculadora para saber el valor por fragmentos o por varias unidades en su precio en dolares.

para regresar, en la parte superior encontrara el boton correspondiente.

Se realizo validaciones de conexión, cuando este navegando por la app retire el servicio de conexion y la app le informara que
no tiene conexion.
Se uso react-navigation para realizar la navegacion entre vistas.

Se presentaron algunos inconvenientes en especial para el desarrollo de la calculadora ya que en un principio no permitia
valores flotantes pero se resolvio.
Es un diseño sencillo pero bastante intuitivo y funcional, es escalable para futuras mejoras ya que esta modularizado.

Muchas gracias..
Jeisson Pulido
Developer

