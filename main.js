import { renderCard } from "./src/components/renderCard";
// import { setCookie, getCookie, deleteCookie } from "./src/utils/cookies.js";


// function handleLogin(data) {
//   const isAuthenticated = /* Lógica de autenticación, devuelve true si las credenciales son válidas */ true;

//   if (isAuthenticated) {
//     setCookie('usuario', data.name, 30);
//     console.log('Inicio de sesión exitoso');
//   } else {
//     console.error('Credenciales incorrectas');
//   }
// }

// function checkSession() {
//   const usuario = getCookie('usuario');
//   if (usuario) {
//     console.log('Usuario autenticado automáticamente:', usuario);
//   } else {
//     console.log('No hay cookie de sesión');
//   }
// }

document.getElementById('miFormulario').addEventListener('submit', async function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe de la manera tradicional

  const formData = new FormData(this); // Obtener los datos del formulario
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  // handleLogin(data);
  obtenerDatosDesdeAPI(data);
});


export async function obtenerDatosDesdeAPI(data) {
  console.log(data);
  const elem= document.getElementById("app");
  let credencialesCorrectas = false;

  try {
    const response = await fetch(
        "https://jsonplaceholder.org/users"
      );
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos");
    }

    const datos = await response.json();
    // console.log("Datos desde la API:", datos);
    for (const user of datos) {
        // console.log(user.login);
        console.log(user);
      if(user.login.username === data.name && user.login.password === data.password){
        console.log("Usuario y contraseña correctos");
        renderCard(elem,user);
        credencialesCorrectas = true;
        break;

      }
    }
    if (!credencialesCorrectas) {
      throw new Error("Usuario o contraseña no son correctos");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// checkSession();






