
async function mostrarPost() {
  const response = await fetch(
    ("https://clima-argentina.p.rapidapi.com/clima/lavoz", options)
  );
  const data = await response.json();
  return data;
}
data.forEach((api) => {
  const li = document.createElement("listado");
  listado.innerHTML = `
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Clima|</h5>
            <p class="card-text">Temperatura: ${api.temperatura}</p>    
            <p class="card-text">Humedad: ${api.humedad}</p>
            <p class="card-text">Viento: ${api.viento}</p>
            <p class="card-text">Presion: ${api.presion}</p>
            <p class="card-text">Fecha: ${api.fecha}</p>
            </div>
         </div>
        `;
  lista.appendChild(li);
});

