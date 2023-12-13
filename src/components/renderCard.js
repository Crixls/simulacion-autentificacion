export function renderCard(container,data){
    const contenido =document.createElement("div");
    contenido.classList.add('card');
    contenido.style.width="18rem";


    const nombre=data.firstname;
    const apellidos=data.lastname;
    const correo=data.email;
    const latitud=data.address.geo.lat;
    const longitud=data.address.geo.lng;
    contenido.innerHTML=`
        <div>
            <h5>Nombre: ${nombre}</h5><br>
            <h5>Apellidos: ${apellidos}</h5><br>
            <h5>Correo: ${correo}</h5>
        </div>
    `;
    container.appendChild(contenido);

    var map = L.map('map').setView([latitud, longitud], 13);
    var marker = L.marker([latitud, longitud]).addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


}