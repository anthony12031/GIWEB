# GIWEB
Carpeta para el grupo de trabajo GIWEB Universidad Distrital Franciso José de Caldas

#Heroku URL : https://giweb-anthony.herokuapp.com

# Creacion llave publica y hash RSA (https://giweb-anthony.herokuapp.com/publicKey)

## Retorna llave publica en formato PEM y Hash que identifica esta llave

# Desencriptar mensaje (https://giweb-anthony.herokuapp.com/desencriptarMensaje)
## Recibe objeto JSON de esta forma:
## {
	"mensaje":"mensaje encriptado",
	"hash":"b8add5165ee11265d3300ede612cd4804e681f5b"
}

## Retorna el mensaje desencriptado o error en caso de que el Hash no exista
