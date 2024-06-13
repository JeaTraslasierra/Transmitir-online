/*import express from 'express'

const port= process.env.PORT ?? 3000
const app= express()
app.get('/',(req,res)=>{
  res.send('<h1> Esto es un chat </h1>')
})

app.listen(port,()=>{
  console.log(`servidor corriendo en el puerto ${port}`)
})*/
/*
import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Manejar la transmisión de audio
  socket.on('audioStream', (stream) => {
    console.log('Recibiendo flujo de audio');

    // Emitir el flujo de audio a todos los clientes conectados
    socket.broadcast.emit('audioStream', stream);
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});*/
/*
import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

const publicPath = path.join(__dirname, '..'); // Ruta al directorio 'node-js'
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')); // Servir el archivo 'index.html' desde el directorio 'node-js'
});

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  socket.on('startAudioStream', () => {
    console.log('Cliente inició la transmisión de audio');
    socket.on('audioStream', (audioChunk) => {
      socket.broadcast.emit('audioStream', audioChunk);
    });
  });

  socket.on('stopAudioStream', () => {
    console.log('Cliente detuvo la transmisión de audio');
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});*/
/*
import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

const publicPath = path.join(__dirname, '..'); // Ruta al directorio 'node-js'
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')); // Servir el archivo 'index.html' desde el directorio 'node-js'
});

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  socket.on('startAudioStream', () => {
    console.log('Cliente inició la transmisión de audio');
    socket.on('audioStream', (audioChunk) => {
      socket.broadcast.emit('audioStream', audioChunk);
    });
  });

  socket.on('stopAudioStream', () => {
    console.log('Cliente detuvo la transmisión de audio');
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
}); 
*/
/*
import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

const publicPath = path.join(__dirname, '..'); // Ruta al directorio 'node-js'
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')); // Servir el archivo 'index.html' desde el directorio 'node-js'
});

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  socket.on('startAudioStream', () => {
    console.log('Cliente inició la transmisión de audio');
    socket.on('audioStream', (audioChunk) => {
      socket.broadcast.emit('audioStream', audioChunk);
    });
  });

  socket.on('stopAudioStream', () => {
    console.log('Cliente detuvo la transmisión de audio');
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
*/

/*
import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

const publicPath = path.join(__dirname, '..'); // Ruta al directorio 'node-js'
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')); // Servir el archivo 'index.html' desde el directorio 'node-js'
});

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  socket.on('startAudioStream', () => {
    console.log('Cliente inició la transmisión de audio');
    socket.on('audioStream', (audioChunk) => {
      socket.broadcast.emit('audioStream', audioChunk);
    });
  });

  socket.on('stopAudioStream', () => {
    console.log('Cliente detuvo la transmisión de audio');
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});*/

/*

import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

const publicPath = path.join(__dirname, '..'); // Ruta al directorio 'node-js'
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')); // Servir el archivo 'index.html' desde el directorio 'node-js'
});

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  socket.on('startAudioStream', () => {
    console.log('Cliente inició la transmisión de audio');
    socket.on('audioStream', (audioChunk) => {
      socket.broadcast.emit('audioStream', audioChunk);
    });
  });

  socket.on('stopAudioStream', () => {
    console.log('Cliente detuvo la transmisión de audio');
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
}); */

/*
import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

const publicPath = path.join(__dirname, '..'); // Ruta al directorio 'node-js'
app.use(express.static(publicPath));

// Configurar la ruta para servir el script de Socket.io
app.get('/socket.io/socket.io.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../node_modules/socket.io/client-dist/socket.io.js'));
});

// Resto del código...

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});


import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

const publicPath = path.join(__dirname, '..'); // Ruta al directorio 'node-js'
app.use(express.static(publicPath));

// Configurar la ruta para servir el script de Socket.io
app.get('/socket.io/socket.io.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../node_modules/socket.io/client-dist/socket.io.js'));
});

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Escuchar evento para iniciar la transmisión de audio
  socket.on('startAudioStream', () => {
    console.log('Cliente inició la transmisión de audio');
    // Resto del código para manejar la transmisión de audio...
  });

  // Escuchar evento para detener la transmisión de audio
  socket.on('stopAudioStream', () => {
    console.log('Cliente detuvo la transmisión de audio');
    // Resto del código para detener la transmisión de audio...
  });

  // Resto del código del servidor...
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
  
  
  
  
  
import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

const publicPath = path.join(__dirname, '..'); // Ruta al directorio 'node-js'
app.use(express.static(publicPath));

// Configurar la ruta para servir el script de Socket.io
app.get('/socket.io/socket.io.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../node_modules/socket.io/client-dist/socket.io.js'));
});

io.on('connection', (socket) => {
  console.error('Un cliente se ha conectado');

  socket.on('startAudioStream', () => {
    console.error('Cliente inició la transmisión de audio');
    socket.on('audioStream', (audioChunk) => {
      console.error('Recibiendo flujo de audio');
      socket.broadcast.emit('audioStream', audioChunk);
    });
  });

  socket.on('stopAudioStream', () => {
    console.error('Cliente detuvo la transmisión de audio');
  });
});

server.listen(3000, () => {
  console.error('Servidor corriendo en el puerto 3000');
});*/






import express from 'express'
import logger from 'morgan'
import {Server} from 'socket.io'
import {createServer} from 'node:http'

const port= process.env.PORT ?? 3000;
const app= express();
const server= createServer(app)
const io= new Server(server)
io.on('connection',(socket)=>{
  console.log('un usuario se a conectado')
  socket.on('disconnect' , ()=>{
    console.log('usuario desconectado')
  })
   
socket.on('audio', (audioData) => {
    // Emitir los datos de audio a todos los clientes
   // io.emit('audio', audioData);
console.log('Datos de audio recibidos:', audioData);

  socket.broadcast.emit('audio',audioData);
  });
  
  
  socket.on("chat message",(msg)=>{
 io.emit("chat message", msg)
    
  })
})


app.use(logger('dev'))
app.get('/pagina1',(req,res)=>{
  res.sendFile(process.cwd() + '/cliente/index.html')
})
app.get('/pagina2',(req,res)=>{
res.sendFile(process.cwd() + '/cliente/reproducir.html')
})

server.listen(port, () =>{
  console.log(` servidor corriendo ${port}`)
}) 
/*
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  socket.on('offer', (offer) => {
    socket.broadcast.emit('offer', offer);
    console.log(" el dato es offer: "+offer);
  });

  socket.on('answer', (answer) => {
    socket.broadcast.emit('answer', answer);
console.log(" el dato es answer: "+answer);
  });

  socket.on('iceCandidate', (candidate) => {
    socket.broadcast.emit('iceCandidate', candidate);
console.log(" el dato es iceCandidate: "+candidate);
  });

  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});


app.get('/pagina1',(req,res)=>{
  res.sendFile(process.cwd() + '/cliente/index.html')
})
app.get('/pagina2',(req,res)=>{
res.sendFile(process.cwd() + '/cliente/reproducir.html')
})

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
}); */