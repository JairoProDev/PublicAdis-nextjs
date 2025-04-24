#!/usr/bin/env bash

# Colores para los mensajes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Inicializando el proyecto PublicAdis...${NC}"

# Crear estructura de directorios
echo -e "${GREEN}Creando estructura de directorios...${NC}"
mkdir -p src/{assets,components,styles}/{images,icons} public/assets/{images,icons}
mkdir -p src/components/{Header,Hero,Footer,Services,Benefits}
mkdir -p src/styles/components

# Instalar dependencias
echo -e "${GREEN}Instalando dependencias...${NC}"
npm install

# Crear archivos necesarios si no existen
echo -e "${GREEN}Verificando archivos necesarios...${NC}"
touch src/styles/variables.css
touch src/styles/main.css

# Dar permisos de ejecución al script de despliegue
echo -e "${GREEN}Configurando permisos...${NC}"
chmod +x deploy.sh

# Inicializar git si no está inicializado
if [ ! -d .git ]; then
  echo -e "${GREEN}Inicializando repositorio git...${NC}"
  git init
  git add .
  git commit -m "Inicialización del proyecto"
fi

echo -e "${BLUE}¡Proyecto inicializado correctamente!${NC}"
echo -e "${GREEN}Puedes comenzar a desarrollar con:${NC}"
echo -e "npm run dev" 