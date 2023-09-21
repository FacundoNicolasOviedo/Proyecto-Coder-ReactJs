# Bienvenido a Tennis Center
## Descripción

**Tennis Center** es tu destino de confianza para todas tus necesidades relacionadas con el tenis. Nos enorgullece ofrecer una amplia gama de raquetas de tenis de alta calidad que se adaptan a jugadores de todos los niveles, desde principiantes hasta profesionales.

En **Tennis Center**, comprendemos la importancia de la raqueta de tenis como una extensión de tu juego. Por eso, nos dedicamos a proporcionar productos de primera calidad que te ayudarán a alcanzar tu máximo potencial en la cancha. Nuestras raquetas son cuidadosamente seleccionadas de las principales marcas del mercado, conocidas por su innovación y rendimiento excepcionales.

## Como levantar el proyecto
Para levantar el Proyecto necesitaremos hacer uso del siguiente comando:

```
npm install
npm start
```
Para el correcto funcionamiento, es necesario tener seteadas las variables de entorno en el archivo `.env`. Las variables son:

**VITE_FIRESTORE_API_KEY** = La API key de Firebase.
**VITE_FIRESTORE_AUTH_DOMAIN** = El dominio de autenticación de Firebase 
**VITE_FIRESTORE_PROJECT_ID** = El ID del proyecto de Firebase
**VITE_FIRESTORE_STORAGE_BUCKET** = El bucket de almacenamiento de Firebase
**VITE_FIRESTORE_MESSAGING_SENDER_ID** = El ID del sender de Firebase
**VITE_FIRESTORE_APP_ID** = El ID de la aplicación de Firebase
## Componentes

### NavBar
El NavBar es un componente que nos permite navegar por todas las categorías de nuestra página. En él también se encuentra el CartWidget, otro componente que explicaré a continuación.

### CartWidget
El CartWidget es un componente en el cual veremos la cantidad de productos que se encuentra en nuestro carrito de compras. Haciendo click en él podrás visitar otras vistas de la página.

### ItemList
En este componente encontraras el listado de todos los productos que se encuentran disponible en nuestra página.

### ItemDetail
En ItemDetail se encontrara una descripción mas detallada del producto que el usuario seleccione.

### ItemCount
ItemCount nos permite seleccionar mediante un contador la cantidad de productos que queremos elegir del producto seleccionado. También nos permite agregar dicho producto al carrito de compras.

### Cart
Al componente cart se ingresará al hacer click en el CartWidget. Ésto nos llevara a un detalle de la compra realizada en donde podrá ver el producto seleccionado, la cantidad, la categoría, el precio unitario y finalmente el total de la compra.

### Checkout
El checkout es el componente final de la compra, es donde se muestra una vez mas el detalle de los productos elegidos y además en él se encuentra un formulario en el cual es usuario deberá completar los datos del mismo. Luego al apretar el botón Finalizar compra el usuario habrá realizo con éxito la compra y recibirá su N°de orden.

## Demo del proyecto
A continuación veremos un video demostrativo sobre el funcionamiento de nuestra página.