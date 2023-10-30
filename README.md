
# Trailerflix API

Proyecto desarrollado con los modulos de Nodejs: Express, Sequelize (MySql)

### ***IMPORTANTE***

Es importante antes de inciar el servidor crear un archivo ***".env"*** con las correspondientes variables de entorno.

Mas info en el archivo ***".env.sample"***

### Funcionamiento

La Api Sube Registros por defecto al inciar el server sino hay registros en Store sino solo sincroniza las tablas existentes

Para inciar el servidor en modo desarrollo (nodemon)
```javascript
npm run dev
```
O simplemente
```
npm run start
```

La API esta destinada ,por diferentes rutas y métodos de la URL a:
* Crear un archivo en formato JSON y guardarlo en la Base de datos
* Leer un archivo de la Base de Datos y darles formato
* Actualizar un archivo de la Base de Datos
* Borrar un archivo de la Base de Datos

### CRUD<a name="id2"></a>

|PETICION |URL| DESCRIPCION|
|  - | - | - |
|GET| `http://localhost:3008/api/actores`   | Obtener lista de actores |
|GET| `http://localhost:3008/api/actor/id/:id`   | Obtener actor por id |
|GET| `http://localhost:3008/api/descripcion` | Obtener lista de descripciones |
|GET| `http://localhost:3008/api/descripcion/id/:id` | Obtener descripciones por id |
|GET| `http://localhost:3008/api/genero/find/:findGenero` ***ej:Aventura | Obtener todas los registros que tengan el genero a buscar |
|GET| `http://localhost:3008/api/genero`  | Obtener lista de genero |
|GET| `http://localhost:3008/api/genero/id/:id` | Obtener genero por id |
|GET| `http://localhost:3008/api/reparto` | Obtener lista de reparto |
|GET| `http://localhost:3008/api/reparto/id/:id` | Obtener reparto por id |
|GET| `http://localhost:3008/api/store/view`   | Obtener lista de store con un formato mejorado |
|GET| `http://localhost:3008/api/store/view/id/:id`   | Obtener registro por Id de store con un formato mejorado |
|GET| `http://localhost:3008/api/store/view/titulo/:titulo` ej: Advengers   | Obtener lista de registros que tengan el titulo a buscar |
|GET| `http://localhost:3008/api/store`   | Obtener lista de store |
|GET| `http://localhost:3008/api/store/id/:id`   | Obtener store por id |
|GET| `http://localhost:3008/api/tipocat/find/:findCat` ej:Serie  | Obtener lista de todos los registros con el tipo de categoria |
|GET| `http://localhost:3008/api/tipocat`   | Obtener lista de tipo de categoria |
|GET| `http://localhost:3008/api/tipocat/id/:id`   | Obtener tipo de categoria por id |
|GET| `http://localhost:3008/api/tipogen`   | Obtener lista de tipo de generos |
|GET| `http://localhost:3008/api/tipogen/id/:id`   | Obtener tipo de genero por id |
|GET| `http://localhost:3008/api/trailer`   | Obtener lista de link de trailer |
|GET| `http://localhost:3008/api/trailer/id/:id`   | Obtener trailer por id |
|PUT| `http://localhost:3008/api/actor/id/put/:id`   | Actualizar actor por id |
|PUT| `http://localhost:3008/api/descripcion/id/put/:id`   | Actualizar descripcion por id |
|PUT| `http://localhost:3008/api/genero/id/put/:id`   | Actualizar genero por id |
|PUT| `http://localhost:3008/api/reparto/id/put/:id`   | Actualizar reparto por id |
|PUT| `http://localhost:3008/api/store/id/put/:id`   | Actualizar el tipo de categoria del registro con id correspondiente |
|PUT| `http://localhost:3008/api/tipocat/id/put/:id`   | Actualizar el nombre del tipo de categoria del registro con id correspondiente |
|PUT| `http://localhost:3008/api/tipogen/id/put/:id`   | Actualizar el nombre del tipo de genero del registro con id correspondiente |
|PUT| `http://localhost:3008/api/trailer/id/put/:id`   | Actualizar los link del registro con id correspondiente |
|DELETE| `http://localhost:3008/api/actor/id/del/:id`   | Eliminar actor po id |
|DELETE| `http://localhost:3008/api/descripcion/id/del/:id`   | Eliminar descripcion por id (ON DELETE CASCADE) |
|DELETE| `http://localhost:3008/api/genero/id/del/:id`   | Eliminar genero por id |
|DELETE| `http://localhost:3008/api/reparto/id/del/:id`   | Eliminar reparto por id |
|DELETE| `http://localhost:3008/api/store/id/del/:id`   | Eliminar store por id  |
|DELETE| `http://localhost:3008/api/tipocat/id/del/:id`   | Eliminar tipo categoria por id |
|DELETE| `http://localhost:3008/api/tipogen/id/del/:id`   | Eliminar tipo genero por id  |
|DELETE| `http://localhost:3008/api/trailer/id/del/:id`   | Eliminar trailer por id |
|POST| `http://localhost:3008/api/actor`   | Crear un nuevo actor |
|POST| `http://localhost:3008/api/store`   | Crear un nuevo registro |
|POST| `http://localhost:3008/api/tipocat`   | Crear un nuevo tipo de categoria |
|POST| `http://localhost:3008/api/tipogen`   | Crear un nuevo tipo de genero |

### ***Crea un registro en Store :***

Importante: Solo eliminar con "DELETE" `http://localhost:3008/api/store/id/del/:id` (tabla pivote) para mantener la integridad de la base de datos evitando la posibilidad de registros huerfanos

Al crear el registro crea tambien los actores (sino coinciden con ninguno con el registro de db), sino
coloca el id correspondiente al actor, al igual que el tipo de genero

**NO Crea el tipo de categoria**

Ejemplo del body para **POST** la ruta `http://localhost:3008/api/store` :
```javascript
{
    "tipoCategoriaNombre":"Pelicula",
    "titulo":"Piratas del Caribe",
    "actor1":"Johny Depp",
    "actor2":"Orlando Blum",
    "actor3":"N/A",
    "actor4":"N/A",
    "actor5":"N/A",
    "actor6":"N/A",
    "actor7":"N/A",
    "resumen":"Jack Sparrow busca el 'Perla negra'",
    "poster":"/imagen",
    "temporadas":0,
    "trailerLinkOriginal":"www.hahad.com",
    "trailerLinkAlternativo":"N/A",
    "tipoGen1":"Aventura",
    "tipoGen2":"N/A",
    "tipoGen3":"N/A"
}
```
Crear un nuevo actor :
Ejemplo del body para **POST** ruta `http://localhost:3008/api/actor` :

```javascript
{
  "nombreApellidoActor":"Adrian Suar"
}
```
Crear un nuevo tipo de categoria :
`http://localhost:3008/api/tipocat` :
```javascript

{
  "id": 5,
  "tipoCategoriaNombre": "Mini-Serie"
}
```
Crear un nuevo tipo de genero:
`http://localhost:3008/api/tipogen` :
```javascript
{
  "tipoGeneroNombre":"Gore"
}

```
Actualizar **PUT** Actor por id:
ejmplo:
`http://localhost:3008/api/actor/id/put/1`:
```javascript
{
  "nombreApellidoActor":"Karl Marx"
      }
```
Actualizar **PUT** Descripcion por id:
`http://localhost:3008/api/descripcion/id/put/1`
```javascript
{
  "titulo": "Buscando a Nemo",
  "resumen": "buscan a nemo",
  "poster": "/img/nemo.jpg",
  "temporadas": 0
      }
```


## Base de datos

El proyecto utiliza una base de datos MySql y la ORM "Sequelize"
consta de 8 tablas

- StoreTrailerflix (tabla pivote)
- TipoCategoria (contiene todos los nombre de la categorias)
- Descripcion (con el titulo el poster el resumen y las temporadas )
- Genero (cada registo puede contener 3 tipo de generos "Aventura,Suspenso,Drama")
- TipoGenero (con los id de los nombre de los generos "Terror" id 2 )
- Reparto (cada registro puede tenr un maximo de 7 actores )
- Actores (con el nombre de actor y su id "Jim Carrey" id 23)
- Trailer (cada registro puede contener 2 link uno alternativo y otro principal)

Se adjunta imagen de las relaciones en forma esquematica en la raiz del proyecto

