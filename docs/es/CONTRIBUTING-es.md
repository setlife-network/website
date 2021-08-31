### Flujo de trabajo predeterminado del desarrollador

- Asignarse a una incidencia que se sienta seguro de asumir
- Checkout una nueva branch de la última versión del `develop`. Siempre asegúrese de que se ha sincronizado con la branch predeterminada (actualmente `develop`)
- Llamar su branch con sus iniciales, y cualquiera el número de la incidencia o una descripción corta de lo que está trabajando en si hay varios incidencias involucrados en su trabajo. Ejemplos:
```
ol/incidencia-1
ol/incidencia-1/actualizar-readme
ol/ui-revisión
```
- Después de que haya terminado de probar localmente, añadir cualquier archivos nuevos, commit y hacer referencia a cualquier problema relevante en su mensaje de commit. Incluir `closes #1` si el código que está empujando resuelve la incidencia. Siga estas pautas para escribir su mensaje de commit (https://chris.beams.io/posts/git-commit/) y tratar de apegarse a esas reglas lo más cerca posible. Tómese su tiempo y no se apresure al escribir mensajes de commit.
- Trate de mantenerse enfocado en un problema a la vez y commit con frecuencia, pero si alguna vez es necesario _cerrar_ múltiples incidencias en un único mensaje de commit, asegúrese de formatearlo como `closes #1, closes #2` ya que sólo `closes #1, #2` dejará problema #2 abierto después de merging.
- Antes de hacer push asegurase de haber sincronizado con `develop`, por si existen otros merge en esta rama. Resuelva cualquier conflicto antes de hacer push Véase más adelante:
```
// después de terminar de trabajar en su-branch
git add .
git commit -a
// pulse I para activar el modo INSERT y escriba su mensaje de commit, entonces pulse ESC, entonces escriba ":x" entonces pulse Enter

git checkout develop
git pull
git checkout - // este es un atajo para checking out la última branch en la que estabas
git merge - // este es un atajo para merging la última branch en la que estabas en la branch usted está actualmente en

// resolver conflictos de unión si es necesario (git add; git commit -a)

git push -u origin su-branch 
// o simplemente "git push" si su branch ya existe en GitHub
```
- Crear una pull request de `su-branch` a `develop` y asegúrese de incluir una grabación de video con prueba de que la incidencia se resuelve o instrucciones claras sobre cómo probar con éxito y esperar una revisión del código. Si se requiere algún cambio después de la revisión, pushing a la misma branch de nuevo se actualizará automáticamente el pull request
