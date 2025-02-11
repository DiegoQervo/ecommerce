E-commerce React App
Descripción
Esta es una aplicación de comercio electrónico desarrollada en React.js como parte de un proyecto final. La aplicación permite a los usuarios navegar por una lista de productos, ver detalles individuales, seleccionar cantidades, agregar productos al carrito y finalizar la compra.

Tecnologías Utilizadas
React.js: Biblioteca principal para la construcción de la interfaz de usuario.

React Router: Para la navegación entre componentes.

Firebase: Para la gestión de datos y autenticación.

Bootstrap/Tailwind CSS: Para el diseño y estilos.

Context API: Para la gestión del estado global.

Axios/Fetch API: Para realizar peticiones HTTP (en caso de uso de APIs externas).

Características Principales
Listado de productos con información detallada.

Página de detalles del producto.

Selector de cantidad antes de agregar al carrito.

Carrito de compras con resumen y opción de eliminación de productos.

Proceso de checkout con formulario de compra.

Confirmación de pedido con ID único.

Estructura de Archivos
/ecommerce-app
├── public
├── src
│   ├── components
│   │   ├── ItemListContainer.jsx
│   │   ├── ItemList.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemQuantitySelector.jsx
│   │   ├── Description.jsx
│   │   ├── AddItemButton.jsx
│   │   ├── Checkout.jsx
│   │   ├── Brief.jsx
│   ├── context
│   │   ├── CartContext.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CheckoutPage.jsx
│   ├── App.jsx
│   ├── index.js
│   ├── firebaseConfig.js
│   ├── styles.css
├── package.json
├── README.md
Instalación y Configuración
Requisitos Previos
Node.js (versión recomendada: 16 o superior)

npm o yarn

Instalación
Clonar el repositorio:

git clone https://github.com/tuusuario/ecommerce-app.git
Acceder al directorio del proyecto:

cd ecommerce-app
Instalar dependencias:

npm install
Configurar Firebase:

Crear un proyecto en Firebase.

Agregar las credenciales en firebaseConfig.js.

Ejecutar la aplicación:

npm start
Uso
Explora los productos desde la página de inicio.

Haz clic en un producto para ver sus detalles.

Selecciona la cantidad y agrégala al carrito.

Revisa el carrito y procede al checkout.

Completa el formulario y confirma la compra.

Recibe un ID de confirmación de pedido.
