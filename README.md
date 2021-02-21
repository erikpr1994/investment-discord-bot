# Discord bot para inversiones

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Bot de discord que envía datos de inversiones

## ¿Cómo lo ejecuto en local?

Para facilitar la configuración del enterno, he añadido docker para lanzar la app.
Para iniciarlo:

```
docker compose up # Este comando te instalará Postgres, Node y te lanzará la app
```

En caso de que no quieras usar docker, necesitarás tener instalado Node.js a partir de la versión 14 y tener acceso a una terminal. Recomiendo instalar [NVM](https://github.com/nvm-sh/nvm) y configurar el llamado de `nvm use` automaticamente.

👉🏻 [Aquí](https://github.com/nvm-sh/nvm#deeper-shell-integration) te dejo la guia.

Tambien necesitarás instarlarte Postgres.

Los pasos para iniciar el bot son:

```
npm install # instalar las dependencias
npm run dev # levantar el entorno de desarrollo
```

## ¿Cómo contribuir al código?

### ¿Cómo añadir nuevas acciones?

## ¿Aceptas Pull Request?

¡Claro que sí! Lo cierto es que no puedo dedicarle mucho tiempo a la app así que cualquier ayuda es bienvenida.

### Reglas para Pull Request

- **No hagas PRs para refactorizar toda la estructura de carpetas y/o refactorizar muchas cosas.** Seguramente se quedarán sin mergear.
- **No hagas PRs cambiando configuraciones de linter.**
- **No hagas Pull Requests grandes.** Cuanto más atómicas, más posibilidades que haga merge. 🚀
- **Sigue el estilo** y pásale el linter antes de hacer la PR.
- No reinventes la rueda. No hace falta que añadas un nuevo framework, dependencia o cosa trending. **La idea es que el bot sea funcional y tenga lo mínimo necesario.**
