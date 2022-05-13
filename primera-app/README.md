Hola bienvenidos a mi ECommerce 
En este Readme voy a detallarles mi paso a paso y como va progresando mi App.

Estoy utilizando JavaScript con el framework React. Los estilos a utilizar son Tailwind y CSS.
Mi aplicacion se va a basar en crear una tienda de venta de Smartphones y de reparacion.

Lo que espero realizar en este E-commerce:
* Venta de Smartphones de distintas gamas.
* Crear un carrito de compras.
* Brindar soporte y tutoriales de reparación de celulares.
* Reparar celulares .
* Noticias y novedades sobre las tecnologías que se avecinan. (Esto a revisar si lo voy a poder concretar )

Nuevamente mediante este Readme voy a detallar mi progreso con el tiempo.
## Componente NavBar"

En esta oportunidad he creado un componente NavBar.jsx dentro de una carpeta
a la que he llamado "components" y dentro de otra que he llamado "container"

A continuación les mostraré la distribución que he pensado en primera instancia para este proyecto que es relativamente pequeño:

|--src/
|--|--components/
|--|--|--container/
|--|--|--|--NavBar.jsx

## Footer
Brinda informacion, legales sobre la empresa.
## Creando un CartWidget

En mi caso, he creado un componente llamado CartWidget.jsx
Posteriormente, monté el CartWidget dentro de mi component NavBar 
Y luego el NavBar dentro de App.js
## Creando Carpeta Data

Dentro de esta carpeta cree un objeto que se llama Phones (cellPhonesIphones.js) y su utilizacion es brindar informacion
de cada uno de los SmartPhones que dispone el Ecommerce.
## Creando ItemList y Item

En este momento he creado un componente ItemList.jsx y Item.jsx dentro de una carpeta
a la que he llamado "components" y dentro de otra que he llamado "container"

La utilidad de Item.jsx es la de brindar una estructura de tipo Card para cada smartphone y con el ItemList su utilidad es mediante promesas y tiempos de espera para obtener la data que trae el objeto  Phones y mediante el SetTimeout() poner un tiempo asignado de retraso.

## Creacion de ItemDetailContainer
Utilice la misma premisa que utilice en ItemListContainer
Cree una funcion Async que devuelve un Item en 2 segundos.

## Componente ItemDetail
Cree un componente llamado "ItemDetail.jsx" y su utilizacion es la de crear una especie de card con descripcion y una imagen.

## Routing y Link
Cree una navegacion en el App.js

    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/producto/:id' element={<ItemDetailContainer/>} />
        <Route path="/marcas/:breed" element={<ItemListContainer/>}/>
      </Routes>
      <Footer></Footer>
    
    </BrowserRouter>

    utilice parametros, implemente distintas categorias y opciones que te dirigen a la opcion que deseas.


Bueno, es todo por hoy 😉
