// cookies.js

export function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
  
    const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : '');
  
    document.cookie = `${name}=${cookieValue}; path=/`;
  }
  
  export function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return decodeURIComponent(cookie.substring(cookieName.length));
      }
    }
  
    return null;
  }
  
  export function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  