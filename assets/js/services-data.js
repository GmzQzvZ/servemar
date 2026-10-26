/**
 * Datos estáticos y lógica interactiva de Servicios Servemar
 */

const serviciosData = {
    "carta-simple": {
        id: "carta-simple",
        buttonText: "Carta simple",
        title: "Carta Simple",
        image: "assets/images/thumbs/Servicios Carta.png",
        imageAlt: "Carta Simple Servemar",
        description: "Servicio eficiente de correo privado para la distribución de correspondencia comercial, facturación y avisos. Garantizamos la entrega directa en buzón o bajo puerta en hasta 120 horas hábiles. La solución logística más rentable para envíos masivos corporativos en todo el país.",
        tiempoEntrega: "Hasta 120 hs hábiles/ pactado",
        tiempoSublabel: "(hasta la primer visita)",
        entrega: "Bajo puerta/buzón",
        seguimiento: "Sin seguimiento"
    },
    "oblea-certificada": {
        id: "oblea-certificada",
        buttonText: "Oblea postal Certificada",
        title: "Envíos Certificados con Seguimiento",
        image: "assets/images/thumbs/Postal certificada.png",
        imageAlt: "Envíos Certificados con Seguimiento Servemar",
        description: "Envío seguro de documentos prioritarios. Este servicio garantiza la entrega bajo firma o acuse de recibo en hasta 72 horas hábiles, cumpliendo con la Ley Postal vigente. Incluye sistema de seguimiento online (tracking) para un control total de tu correspondencia institucional.",
        tiempoEntrega: "Hasta 72 hs hábiles",
        tiempoSublabel: "(hasta la primer visita)",
        entrega: "Bajo firma en planilla con o sin acuse de recibo",
        seguimiento: "Con seguimiento"
    },
    "oblea-24": {
        id: "oblea-24",
        buttonText: "Oblea postal 24 hr",
        title: "Oblea Postal 24 hs (Envíos Express)",
        image: "assets/images/thumbs/Servicios 24hrs.png",
        imageAlt: "Oblea Postal 24 hs Servemar",
        description: "Nuestra solución de logística urgente y correo express. Aseguramos la entrega prioritaria de tu correspondencia bajo firma en solo 24 horas para las principales localidades habilitadas. Incluye seguimiento en tiempo real, ideal para resolver tus necesidades en tiempos mínimos.",
        tiempoEntrega: "En 24 horas<br><span style='font-size: 13px; font-weight: 500; opacity: 0.9;'>(a localidades según listado)</span>",
        tiempoSublabel: "(hasta la primer visita)",
        entrega: "Bajo firma en planilla<br><span style='font-size: 13px; font-weight: 500; opacity: 0.9;'>con o sin acuse de recibo</span>",
        seguimiento: "Con seguimiento"
    },
    "encomiendas": {
        id: "encomiendas",
        buttonText: "Encomiendas",
        title: "Encomiendas, Paquetería y E-commerce",
        image: "assets/images/thumbs/encomiendas.png",
        imageAlt: "Encomiendas, Paquetería y E-commerce Servemar",
        description: "Transporte logistico seguro de paquetes y encomiendas diseñado para empresas y tiendas online. Realizamos entregas ágiles en hasta 72 horas hábiles bajo firma. Todos los envios cuentan con tracking online y el respaldo de valor declarado para proteger al máximo tu mercaderia.",
        tiempoEntrega: "Hasta 120 horas hábiles",
        tiempoSublabel: "(hasta la primer visita)",
        entrega: "Bajo firma en formulario<br><span style='font-size: 13px; font-weight: 500; opacity: 0.9;'>de envío (Guía)</span>",
        seguimiento: "Con seguimiento"
    },
    "tdc-bolsines": {
        id: "tdc-bolsines",
        buttonText: "TDC - Bolsines",
        title: "TDC - Bolsines",
        image: "assets/images/thumbs/Bolsines.png",
        imageAlt: "TDC - Bolsines Servemar",
        description: "Transporte logistico seguro de paquetes y encomiendas diseñado para empresas y tiendas online. Realizamos entregas ágiles en hasta 72 horas hábiles bajo firma. Todos los envios cuentan con tracking online y el respaldo de valor declarado para proteger al máximo tu mercaderia.",
        tiempoEntrega: "Servicio con frecuencias<br><span style='font-size: 13px; font-weight: 500; opacity: 0.9;'>y horarios pactados<br>de retiro y entrega</span>",
        tiempoSublabel: "( hasta la primer visita )",
        entrega: "Firma en planilla",
        seguimiento: "- 0 -",
        extra: "Con Seguro<br><span style='font-size: 13px; font-weight: 500; opacity: 0.9;'>de reconstrucción de Cartera</span>"
    }
};

/**
 * Función para actualizar el panel de contenido según el servicio seleccionado
 */
function cambiarServicio(servicioId) {
    const data = serviciosData[servicioId];
    if (!data) return;

    // Actualizar botones activos
    const buttons = document.querySelectorAll('.service-tab-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-service') === servicioId) {
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        }
    });

    // Elementos del panel derecho
    const imgEl = document.getElementById('service-img');
    const titleEl = document.getElementById('service-title');
    const descEl = document.getElementById('service-desc');
    const tiempoEl = document.getElementById('service-tiempo');
    const tiempoSublabelEl = document.getElementById('service-tiempo-sublabel');
    const entregaEl = document.getElementById('service-entrega');
    const seguimientoEl = document.getElementById('service-seguimiento');
    const extraColEl = document.getElementById('service-extra-col');
    const extraEl = document.getElementById('service-extra');
    const contentBox = document.getElementById('service-content-box');

    if (!contentBox) return;

    // Efecto de transición suave (fade)
    contentBox.style.opacity = '0';
    contentBox.style.transform = 'translateY(6px)';

    setTimeout(() => {
        if (imgEl) {
            imgEl.src = data.image;
            imgEl.alt = data.imageAlt || data.title;
        }
        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.description;
        if (tiempoEl) tiempoEl.innerHTML = data.tiempoEntrega;
        if (tiempoSublabelEl) tiempoSublabelEl.textContent = data.tiempoSublabel || '(hasta la primer visita)';
        if (entregaEl) entregaEl.innerHTML = data.entrega;
        if (seguimientoEl) seguimientoEl.innerHTML = data.seguimiento;

        if (extraColEl && extraEl) {
            if (data.extra) {
                extraEl.innerHTML = data.extra;
                extraColEl.style.display = 'block';
            } else {
                extraEl.innerHTML = '';
                extraColEl.style.display = 'none';
            }
        }

        contentBox.style.opacity = '1';
        contentBox.style.transform = 'translateY(0)';
    }, 180);
}

// Inicialización de eventos al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.service-tab-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const serviceId = this.getAttribute('data-service');
            if (serviceId) {
                cambiarServicio(serviceId);
            }
        });
    });

    // Soporte para abrir servicio según hash en la URL (ej: service-details.html#oblea-certificada)
    const hash = window.location.hash.replace('#', '');
    if (hash && serviciosData[hash]) {
        cambiarServicio(hash);
    }
});
