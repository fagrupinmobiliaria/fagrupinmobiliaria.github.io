// ==================== CONFIG / HELPERS ====================
const flagImages = {
    es: 'images/flag_es.png',
    ca: 'images/flag_ca.png',
    fr: 'images/flag_fr.png',
    en: 'images/flag_en.png'
};

const langTexts = {
    es: 'ES',
    ca: 'CAT',
    fr: 'FR',
    en: 'EN'
};

function updateLanguageIndicator(lang) {
    const currentFlag = document.getElementById('current-flag');
    const currentLangText = document.getElementById('current-lang-text');

    if (currentFlag && currentLangText) {
        currentFlag.src = flagImages[lang] || flagImages.es;
        currentLangText.textContent = langTexts[lang] || 'ES';
    }
}

function showNotification(message) {
    if (!message) return;

    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: var(--gold);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Inject notification animations once
(function injectNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
})();

// ==================== TRANSLATIONS ====================
const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_servicios: "Servicios",
        nav_nosotros: "Sobre Nosotros",
        nav_empresas: "Empresas Asociadas",
        nav_legal: "Departamento Legal",
        nav_contacto: "Contacto",

        hero_title: "FA GRUP - Inmobiliaria en Barcelona",
        hero_slogan: "Siempre Contigo",
        carousel_viaje: "VIAJE",
        carousel_seguros: "SEGUROS",
        carousel_mision: "NUESTRA MISIÓN<br>ÉXITO INMOBILIARIO CON SEGURIDAD Y CERCANÍA.",
        carousel_vision: "VISIÓN<br>CONVERTIRSE EN LA INMOBILIARIA DE REFERENCIA, RECONOCIDA POR CERCANÍA, CONFIANZA Y EXCELENCIA INTEGRAL.",
        carousel_siemprecontigo: "SIEMPRE CONTIGO",
        hero_subtitle: "Tu inmobiliaria de confianza en Barcelona. Acompañamiento profesional y cercano en compra, venta y alquiler",
        btn_contact: "Contáctanos",

        intro_title: "¿Qué es FA GRUP?",
        intro_text: "FA GRUP es una inmobiliaria de Barcelona fundada en 2019, especializada en ofrecer un servicio integral en el sector inmobiliario. Acompañamos al cliente durante todas las etapas de compra, venta o alquiler con profesionalidad y cercanía. Como miembros de AICAT y AEPJ, nos distinguimos por nuestra atención personalizada, conocimiento del mercado local y un firme compromiso con la transparencia legal.",

        services_title: "Nuestros Servicios",
        service_inmobiliaria: "Inmobiliaria",
        service_inmobiliaria_desc: "Venta de pisos con asesoramiento profesional. Acompañamos a nuestros clientes en cada paso de la compra de su vivienda.",
        service_seguros: "Seguros",
        service_seguros_desc: "Protección y tranquilidad para tu hogar, vida y negocio. Asesoramiento personalizado y gestión integral de pólizas.",
        service_viajes: "Agencia de Viajes",
        service_viajes_desc: "Experiencias únicas, planificadas para ti. Organizamos tu viaje completo con atención profesional.",
        btn_more_info: "Más información",

        servicios_hero_title: "Nuestros Servicios",
        servicios_hero_subtitle: "Soluciones integrales adaptadas a tus necesidades",
        servicios_inmo_title: "Inmobiliaria FA GRUP - Barcelona",
        servicios_inmo_subtitle: "Servicio integral en compra, venta y alquiler de inmuebles en Barcelona. Acompañamos a nuestros clientes en cada paso con profesionalidad y cercanía",
        servicios_inmo_feature_1_title: "Valoración Profesional",
        servicios_inmo_feature_1_text: "Análisis detallado del mercado y valoración precisa de tu propiedad con criterios técnicos y transparentes.",
        servicios_inmo_feature_2_title: "Compra Venta",
        servicios_inmo_feature_2_text: "Acompañamiento personalizado en todo el proceso. Maximizamos la visibilidad de su inmueble con herramientas digitales",
        servicios_inmo_feature_3_title: "Gestión de Visitas",
        servicios_inmo_feature_3_text: "Coordinación de visitas con potenciales compradores y negociación profesional para lograr el mejor acuerdo.",
        servicios_inmo_feature_5_title: "Asesoramiento Legal",
        servicios_inmo_feature_5_text: "Gestión completa de contratos, escrituras y trámites notariales para una operación segura y transparente.",
        servicios_inmo_cta: "Consulta nuestros pisos disponibles",
        servicios_seg_title: "Seguros FA GRUP",
        servicios_seg_subtitle: "Protección y tranquilidad para tu hogar, vida y negocio con asesoramiento personalizado",
        servicios_seg_feature_1_title: "Seguros para Particulares",
        servicios_seg_feature_1_text: "Cobertura completa para hogar, automóvil, vida y salud. Protegemos lo que más te importa.",
        servicios_seg_feature_2_title: "Comparativa Personalizada",
        servicios_seg_feature_2_text: "Analizamos las mejores opciones de Seguros con El Corte Inglés para encontrar la póliza que mejor se adapta a ti",
        servicios_seg_cta: "Solicita tu póliza personalizada",
        servicios_viajes_title: "Viajes FA GRUP",
        servicios_viajes_subtitle: "Experiencias únicas, planificadas para ti. Organizamos tu viaje completo con atención profesional",
        servicios_viajes_feature_1_title: "Paquetes Completos",
        servicios_viajes_feature_1_text: "Vuelo + hotel + transporte + actividades. Todo organizado para que solo disfrutes de tu viaje.",
        servicios_viajes_feature_2_title: "Reservas Individuales",
        servicios_viajes_feature_2_text: "Flexibilidad total: reserva solo vuelo, solo hotel o solo excursiones según tus necesidades.",
        servicios_viajes_feature_3_title: "Excursiones y Actividades",
        servicios_viajes_feature_3_text: "Tours guiados, experiencias locales y actividades únicas para hacer tu viaje inolvidable.",
        servicios_viajes_feature_4_title: "Seguros de Viaje",
        servicios_viajes_feature_4_text: "Cobertura completa y asistencia 24/7 para viajar con total tranquilidad.",
        servicios_viajes_feature_5_title: "Asesoramiento Personalizado",
        servicios_viajes_feature_5_text: "Itinerarios adaptados a tus preferencias, presupuesto y estilo de viaje.",
        servicios_viajes_cta: "Planifica tu viaje con nosotros",

        about_title: "Sobre Nosotros",
        about_text: "Somos una asesoría empresarial especializada en ofrecer soluciones integrales en las áreas fiscal, contable, laboral y estratégica. Nuestro objetivo es acompañar a empresas, autónomos y emprendedores en la gestión eficiente de su actividad, aportando claridad y un enfoque orientado a resultados.",
        nos_hero_title: "Sobre Nosotros",
        nos_hero_subtitle: "Conoce quiénes somos y qué nos diferencia",
        nos_who_title: "Quiénes Somos",
        nos_who_p1: "FA GRUP es una inmobiliaria ubicada en Barcelona, fundada el 11 de diciembre de 2019. Nos especializamos en ofrecer un servicio integral en el sector inmobiliario, acompañando al cliente en todo el proceso de compra, venta o alquiler de inmuebles con profesionalidad y cercanía.",
        nos_who_p2: "Contamos con un equipo formado por profesionales con amplio conocimiento del mercado inmobiliario local en Barcelona. Analizamos cada caso de forma individual para ofrecer servicios adaptados a las necesidades reales de cada cliente, asegurando una atención cercana, responsable y totalmente personalizada.",
        nos_who_p3: "Desde nuestra fundación en 2019, hemos acompañado a cientos de clientes, transformando un trámite complejo en una experiencia confiable y segura.",
        nos_values_title: "Nuestros Valores",
        nos_value_1_title: "Profesionalidad",
        nos_value_1_text: "Servicios de máxima calidad respaldados por experiencia y conocimiento profundo del mercado inmobiliario de Barcelona.",
        nos_value_2_title: "Cercanía",
        nos_value_2_text: "Atención personalizada y trato humano en cada etapa del proceso inmobiliario, construyendo relaciones de confianza.",
        nos_value_3_title: "Transparencia",
        nos_value_3_text: "Comunicación clara y honesta en todas las operaciones, garantizando seguridad en cada transacción.",
        nos_value_4_title: "Compromiso con el Cliente",
        nos_value_4_text: "Acompañamiento integral durante todo el proceso de compra, venta o alquiler de tu inmueble.",
        nos_why_title: "Por Qué Elegirnos",
        nos_diff_1_title: "Soluciones Integrales:",
        nos_diff_1_text: "Ofrecemos servicios completos en asesoría empresarial, inmobiliaria, seguros y viajes desde una única empresa.",
        nos_diff_2_title: "Atención Personalizada:",
        nos_diff_2_text: "Cada cliente recibe un trato individualizado adaptado a sus necesidades específicas.",
        nos_diff_3_title: "Equipo Multidisciplinar:",
        nos_diff_3_text: "Profesionales especializados en diferentes áreas trabajando de forma coordinada.",
        nos_diff_4_title: "Experiencia Contrastada:",
        nos_diff_4_text: "Años de trayectoria respaldando empresas y particulares en sus proyectos.",
        nos_diff_5_title: "Compromiso con la Excelencia:",
        nos_diff_5_text: "Mejora continua y actualización constante de conocimientos y procedimientos.",
        btn_read_more: "Leer más",

        companies_title: "Empresas Asociadas",
        companies_intro: "Con el objetivo de ofrecer un servicio global, ampliamos nuestros servicios como asesoría empresarial, ofreciendo soluciones integrales en las áreas fiscal, contable, laboral y estratégica. Nuestro objetivo es acompañar a empresas, autónomos y emprendedores en la gestión eficiente de su actividad, aportando claridad y un enfoque orientado a resultados.",
        company_fa_asesoria: "FA Asesoría Global",
        company_fa_desc: "Servicios de abogados, asesoría legal y jurídica. Especialistas en derecho penal, laboral, familiar, civil y administrativo.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Empresas, cultura, turismo y negocios. Soluciones integrales para el desarrollo empresarial y cultural.",
        btn_visit_web: "Visitar web",

        contact_hero_title: "Especialistas que entienden el arte de Ventas",
        contact_question: "¿Buscas tu hogar ideal en Barcelona? Contáctanos y te acompañaremos en todo el proceso.",
        contact_phone: "Teléfono",
        contact_email: "Email",
        contact_address: "Dirección",
        btn_send_query: "Envíanos tu consulta",

        contact_hero_subtitle: "Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad",
        contact_info_title: "Información de Contacto",
        contact_phone_title: "Teléfono",
        contact_phone_hours: "Lunes a Viernes: 9:00 - 18:00",
        contact_email_title: "Email",
        contact_email_legal: "(Consultas legales)",
        contact_whatsapp_send: "Enviar mensaje",
        contact_whatsapp_desc: "Respuesta rápida y directa",
        contact_address_title: "Dirección",
        contact_form_title: "Envíanos tu Consulta",
        contact_form_name: "Nombre completo",
        contact_form_phone: "Teléfono",
        contact_form_service: "Servicio de interés",
        contact_form_select: "Selecciona un servicio",
        contact_form_message: "Mensaje",
        contact_privacy_info: "Responsable: FA GRUP. Finalidad: atender su consulta. Base jurídica: consentimiento y medidas precontractuales. Derechos: acceso, rectificación, supresión y demás derechos RGPD en fagrupinmobiliaria@gmail.com.",
        contact_consent_prefix: "He leído y acepto la ",
        contact_consent_and: " y el ",
        contact_consent_error: "Debes aceptar la Política de Privacidad y el Aviso Legal para enviar el formulario.",
        contact_form_submit: "Enviar consulta",
        contact_map_title: "Nuestra Ubicación",

        cookie_title: "Política de cookies",
        cookie_message: "Usamos cookies técnicas necesarias y, solo con tu consentimiento, cookies de análisis o personalización.",
        cookie_accept: "Aceptar",
        cookie_reject: "Rechazar",
        cookie_config: "Ver politica de privacidad",

    // Ajouts internationaux
    feature_international_title: "Inmobiliaria Internacional",
    feature_international_desc: "Conexión estratégica entre mercados. Ofrecemos servicios inmobiliarios especializados tanto en Barcelona como en Ecuador, con asesoramiento integral en ambos países.",
    faq_title: "Preguntas Frecuentes",
    faq_q1: "¿Qué servicios ofrece FA GRUP?",
    faq_q2: "¿Cómo puedo solicitar una consulta?",
    faq_q3: "¿Trabajan solo en Barcelona?",
    faq_q4: "¿Qué documentación necesito para vender un inmueble?",
    faq_services_international: "Ofrecemos servicios inmobiliarios, seguros y agencia de viajes en Cataluña y Ecuador, con asesoramiento integral y personalizado.",
    faq_a2: "Puedes contactarnos desde la página de contacto y te responderemos a la brevedad.",
    faq_focus_international: "Nuestra actividad se centra principalmente en el mercado de Cataluña y Ecuador, con capacidad para gestionar y valorar proyectos en otras ubicaciones internacionales.",
    faq_a4: "Te orientamos sobre la documentación necesaria y te acompañamos durante todo el proceso.",

        testimonials_title: "¿Qué opinan de nosotros?",
        testimonial_1: "\"Atencion excelente y trato muy cercano. Nos ayudaron en todo el proceso de compra.\"",
        testimonial_1_author: "- Laura M.",
        testimonial_2: "\"Profesionales y transparentes. Recomiendo FA GRUP al 100%.\"",
        testimonial_2_author: "- Carlos R.",
        testimonial_3: "\"Gestion rapida y asesoramiento claro. Todo fue sencillo.\"",
        testimonial_3_author: "- Ana P.",
        btn_more_reviews: "Ver mas reseñas",

        social_title: "Síguenos en Redes Sociales",

        footer_slogan: "Soluciones integrales para empresas y particulares",
        footer_services: "Servicios",
        footer_company: "Empresa",
        footer_contact: "Contacto",
        footer_legal: "Aviso Legal",
        footer_privacy: "Política de Privacidad",
        footer_rights: "Todos los derechos reservados",

        footer_link_inmobiliaria: "Inmobiliaria",
        footer_link_seguros: "Seguros",
        footer_link_viajes: "Agencia de Viajes",
        footer_link_about: "Sobre Nosotros",
        footer_link_contact: "Contacto",

        legal_hero_title: "Departamento Legal",
        legal_hero_subtitle: "FA Asesoría Global - Asesoramiento jurídico integral",
        legal_intro_title: "Servicios del Departamento Legal",
        legal_intro_p1: "En FA Asesoría ofrecemos asesoramiento y representación jurídica integral en múltiples áreas del derecho. Nuestro equipo de profesionales especializados garantiza un servicio personalizado, eficaz y orientado a la protección de tus intereses.",
        legal_intro_p2: "Trabajamos con metodologías actualizadas, cumpliendo todas las normativas vigentes y garantizando un acompañamiento seguro, profesional y transparente en cada procedimiento.",
        legal_section1_title: "Derecho Penal, Laboral y de Familia",
        legal_section1_subtitle: "Defensa especializada y acompañamiento en procedimientos legales complejos",

        privacy_title: "Política de Privacidad",
        privacy_subtitle: "FA GRUP - Protección de Datos Personales",
        privacy_last_update: "Última actualización: 4 de febrero de 2026",
        privacy_section1_title: "1. Responsable del Tratamiento",
        privacy_section2_title: "2. Datos que Recopilamos",
        privacy_section3_title: "3. Finalidad del Tratamiento",
        privacy_section4_title: "4. Base Jurídica del Tratamiento",
        privacy_section5_title: "5. Destinatarios de los Datos",
        privacy_section6_title: "6. Conservación de los Datos",
        privacy_section7_title: "7. Derechos del Usuario",
        privacy_section8_title: "8. Seguridad de los Datos",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modificaciones",
        privacy_section11_title: "11. Reclamaciones",
        privacy_section12_title: "12. Contacto",

        // Privacy page content
        privacy_section1_intro: "FA GRUP, con domicilio en Avenida Josep Tarradellas 134 bajos, 08029 Barcelona, España, es el responsable del tratamiento de los datos personales que nos proporcione.",
        privacy_contact_label: "Contacto:",
        privacy_email_label: "Email:",
        privacy_phone_label: "Teléfono:",
        
        privacy_section2_intro: "FA GRUP puede recopilar los siguientes tipos de datos personales:",
        privacy_data_identification: "Datos de identificación:",
        privacy_data_identification_desc: "Nombre, apellidos, DNI/NIE",
        privacy_data_contact: "Datos de contacto:",
        privacy_data_contact_desc: "Dirección de correo electrónico, número de teléfono, dirección postal",
        privacy_data_navigation: "Datos de navegación:",
        privacy_data_navigation_desc: "Dirección IP, tipo de navegador, páginas visitadas",
        privacy_data_services: "Datos relacionados con servicios:",
        privacy_data_services_desc: "Información sobre propiedades de interés, preferencias de búsqueda",
        
        privacy_section3_intro: "Los datos personales recopilados serán tratados para las siguientes finalidades:",
        privacy_purpose_1: "Gestión de consultas y solicitudes de información",
        privacy_purpose_2: "Prestación de servicios inmobiliarios, seguros y viajes",
        privacy_purpose_3: "Envío de comunicaciones comerciales sobre nuestros servicios (con su consentimiento previo)",
        privacy_purpose_4: "Cumplimiento de obligaciones legales y contractuales",
        privacy_purpose_5: "Mejora de nuestros servicios y experiencia del usuario",
        
        privacy_section4_intro: "El tratamiento de sus datos personales se basa en:",
        privacy_legal_consent: "Consentimiento:",
        privacy_legal_consent_desc: "Para el envío de comunicaciones comerciales",
        privacy_legal_contract: "Ejecución de contrato:",
        privacy_legal_contract_desc: "Para la prestación de servicios solicitados",
        privacy_legal_legitimate: "Interés legítimo:",
        privacy_legal_legitimate_desc: "Para la gestión y mejora de nuestros servicios",
        privacy_legal_obligation: "Obligación legal:",
        privacy_legal_obligation_desc: "Para cumplir con normativas aplicables",
        
        privacy_section5_intro: "Sus datos personales podrán ser comunicados a:",
        privacy_recipient_1: "Empresas asociadas del grupo FA GRUP para la prestación de servicios",
        privacy_recipient_2: "Proveedores de servicios tecnológicos y de almacenamiento",
        privacy_recipient_3: "Administraciones públicas cuando sea legalmente requerido",
        privacy_recipient_4: "Entidades financieras para la gestión de pagos",
        privacy_no_international: "No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo.",
        
        privacy_section6_p1: "Los datos personales se conservarán durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos y, posteriormente, durante los plazos de prescripción legal aplicables.",
        privacy_section6_p2: "En caso de no existir obligación legal, los datos se conservarán mientras no solicite su supresión y siempre que exista una base legítima para su tratamiento.",
        
        privacy_section7_intro: "Como titular de los datos personales, usted tiene derecho a:",
        privacy_right_access: "Acceso:",
        privacy_right_access_desc: "Conocer qué datos tratamos sobre usted",
        privacy_right_rectify: "Rectificación:",
        privacy_right_rectify_desc: "Solicitar la corrección de datos inexactos",
        privacy_right_delete: "Supresión:",
        privacy_right_delete_desc: "Solicitar la eliminación de sus datos",
        privacy_right_object: "Oposición:",
        privacy_right_object_desc: "Oponerse al tratamiento de sus datos",
        privacy_right_limit: "Limitación:",
        privacy_right_limit_desc: "Solicitar la limitación del tratamiento",
        privacy_right_portability: "Portabilidad:",
        privacy_right_portability_desc: "Recibir sus datos en formato estructurado",
        privacy_right_withdraw: "Revocación del consentimiento:",
        privacy_right_withdraw_desc: "Retirar el consentimiento en cualquier momento",
        privacy_section7_p2: "Para ejercer estos derechos, puede contactarnos a través de:",
        privacy_section7_contact_email: "Email:",
        privacy_section7_contact_address: "Dirección postal:",
        
        privacy_section8: "FA GRUP ha implementado medidas técnicas y organizativas apropiadas para garantizar la seguridad de sus datos personales y protegerlos contra accesos no autorizados, pérdida, destrucción o alteración.",
        
        privacy_section9_p1: "Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y, en su caso, cookies analíticas o de personalización únicamente si usted las acepta.",
        privacy_section9_p2: "Al acceder al sitio, puede aceptar o rechazar las cookies no esenciales desde el banner de consentimiento. También puede cambiar su elección eliminando las cookies de su navegador y volviendo a cargar la página.",
        privacy_section9_p3: "Tipos de cookies que podemos utilizar:",
        privacy_cookie_technical: "Técnicas (necesarias):",
        privacy_cookie_technical_desc: "Permiten funciones básicas del sitio web y no requieren consentimiento.",
        privacy_cookie_analytics: "Analíticas:",
        privacy_cookie_analytics_desc: "Nos ayudan a entender el uso del sitio de forma agregada para mejorar nuestros servicios.",
        privacy_cookie_preferences: "Preferencias:",
        privacy_cookie_preferences_desc: "Guardan determinadas opciones del usuario para mejorar la experiencia.",
        privacy_section9_p4: "Puede configurar su navegador para bloquear o eliminar cookies. Tenga en cuenta que, en ese caso, algunas funcionalidades del sitio pueden no estar disponibles correctamente.",
        
        privacy_section10: "FA GRUP se reserva el derecho de modificar esta Política de Privacidad para adaptarla a cambios legislativos o de nuestros servicios. Le recomendamos revisar periódicamente esta página.",
        
        privacy_section11: "Si considera que el tratamiento de sus datos personales no cumple con la normativa, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        
        privacy_section12_intro: "Para cualquier consulta sobre esta Política de Privacidad o sobre el tratamiento de sus datos personales, puede contactarnos:",
        privacy_section12_address: "Dirección:",

        aviso_page_title: "Aviso Legal - FA GRUP",
        aviso_title: "Aviso Legal",
        aviso_subtitle: "Información legal y condiciones de uso del sitio web de FA GRUP",
        aviso_last_update: "Última actualización: 16 de marzo de 2026",
        aviso_section1_title: "1. Datos identificativos del titular del sitio web",
        aviso_section1_p1: "En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular del presente sitio web es:",
        aviso_holder_label: "Titular:",
        aviso_address_label: "Domicilio:",
        aviso_section2_title: "2. Objeto",
        aviso_section2_p1: "El presente aviso legal regula el acceso, navegación y uso del sitio web de FA GRUP, así como las responsabilidades derivadas de la utilización de sus contenidos (textos, imágenes, diseños, código, documentación y cualquier otro material).",
        aviso_section3_title: "3. Condiciones de uso",
        aviso_section3_p1: "El acceso a este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de las disposiciones incluidas en este aviso legal.",
        aviso_section3_li1: "El usuario se compromete a hacer un uso adecuado y lícito del sitio web y sus contenidos.",
        aviso_section3_li2: "Queda prohibido realizar actividades ilícitas, fraudulentas o contrarias a la buena fe y al orden público.",
        aviso_section3_li3: "FA GRUP se reserva el derecho de modificar, en cualquier momento y sin previo aviso, la presentación y configuración del sitio web, así como este aviso legal.",
        aviso_section4_title: "4. Propiedad intelectual e industrial",
        aviso_section4_p1: "Todos los contenidos del sitio web (incluyendo, sin carácter limitativo, textos, fotografías, gráficos, iconos, software, diseño gráfico y códigos fuente) son titularidad de FA GRUP o de terceros que han autorizado su uso.",
        aviso_section4_p2: "Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación, total o parcial, sin autorización expresa y por escrito del titular correspondiente.",
        aviso_section5_title: "5. Responsabilidad",
        aviso_section5_p1: "FA GRUP no garantiza la disponibilidad continua ni la ausencia de errores en el acceso al sitio web, si bien adoptará las medidas razonables para evitarlos, corregirlos o actualizarlos cuando proceda.",
        aviso_section5_p2: "FA GRUP no se hace responsable de los daños o perjuicios derivados del uso del sitio web, ni de actuaciones realizadas sobre la base de la información contenida en él.",
        aviso_section6_title: "6. Enlaces externos",
        aviso_section6_p1: "Este sitio web puede contener enlaces a páginas de terceros. FA GRUP no asume responsabilidad sobre los contenidos, políticas o prácticas de dichos sitios externos.",
        aviso_section7_title: "7. Protección de datos personales",
        aviso_section7_p1: "El tratamiento de los datos personales se realiza conforme a lo establecido en la normativa vigente y en nuestra ",
        aviso_privacy_link: "Política de Privacidad",
        aviso_section8_title: "8. Política de cookies",
        aviso_section8_p1: "Este sitio web utiliza cookies para mejorar la experiencia de navegación. Puede consultar más información en el apartado de cookies de nuestra ",
        aviso_section9_title: "9. Legislación aplicable y jurisdicción",
        aviso_section9_p1: "Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia que pudiera surgir en relación con este sitio web, las partes se someten a los juzgados y tribunales de Barcelona, salvo que la normativa aplicable disponga otra cosa.",
        aviso_section10_title: "10. Contacto",
        aviso_section10_p1: "Para cualquier consulta relacionada con este aviso legal, puede contactar con FA GRUP en:",
        aviso_email_label: "Email:",
        aviso_phone_label: "Teléfono:",
        aviso_contact_address_label: "Dirección:",

        // ── Suelo Lleida ──
        sl_kicker: "FA GRUP · Inversión Inmobiliaria",
        sl_hero_title: "Oportunidad Estratégica de Suelo<br><span>Lleida – Carrer Eugeni d'Ors</span>",
        sl_hero_lead: "Activo inmobiliario premium de uso mixto (terciario y residencial). Posicionamiento privilegiado en uno de los ejes más estructurantes de Lleida.",
        sl_badge_1: "1.849 m² de suelo",
        sl_badge_2: "2.939 m² desarrollados",
        sl_badge_3: "Entorno hospitalario",
        sl_badge_4: "~532.000 €/año",
        sl_btn_dossier: "Solicitar dossier confidencial",
        sl_btn_bcase: "Ver Business Case",
        sl_eye_urban: "<i class=\"fas fa-map-marked-alt\"></i> Urbanismo",
        sl_title_urban: "Marco Urbanístico y Parámetros Clave",
        sl_desc_urban: "Situado en uno de los ejes más estructurantes de Lleida, en las inmediaciones de un polo hospitalario de referencia. Un entorno urbano consolidado con seguridad jurídica total.",
        sl_param_1: "Edificabilidad neta",
        sl_param_2: "Ocupación máxima (40%)",
        sl_param_3: "Zonificación SUC – Sòl Urbà Consolidat",
        sl_param_4_val: "Mixto",
        sl_param_4: "Residencial + terciario planta baja",
        sl_tip_urban: "Un marco normativo claro que permite una estructuración rápida y segura de la operación.",
        sl_eye_dev: "<i class=\"fas fa-layer-group\"></i> Desarrollo",
        sl_title_dev: "Escenario de Desarrollo",
        sl_desc_dev: "Un estudio técnico certificado permite proyectar una operación optimizada, con posibilidad de ajuste del <em>mix</em> según la estrategia de explotación final.",
        sl_th_uso: "Uso",
        sl_th_superficie: "Superficie estimada",
        sl_row_terciario: "Terciario / Oficinas",
        sl_row_residencial: "Residencial / Apart-hotel",
        sl_row_parking: "Aparcamiento (planta sótano)",
        sl_row_parking_val: "~20–24 plazas · ~734 m²",
        sl_row_total: "Superficie total desarrollada",
        sl_eye_fin: "<i class=\"fas fa-coins\"></i> Financiero",
        sl_title_bcase: "Business Case – Proyección de Ingresos",
        sl_th_seg: "Segmento",
        sl_th_hip: "Hipótesis de explotación",
        sl_th_ing: "Ingresos estimados",
        sl_biz_t_label: "Terciario",
        sl_biz_t_hip: "Actividades médicas / Servicios especializados",
        sl_biz_a_label: "Alojamiento",
        sl_biz_a_hip: "Apart-hotel (80% ocupación – 49 €/noche)",
        sl_biz_p_label: "Parking",
        sl_biz_p_hip: "Alquiler mixto (corta y larga estancia)",
        sl_biz_total: "Total bruto",
        sl_eye_strat: "<i class=\"fas fa-chart-pie\"></i> Estrategia",
        sl_title_thesis: "Tesis de Inversión",
        sl_th1_title: "Diversificación de ingresos",
        sl_th1_desc: "Combinación de rentas terciarias, hospitality y parking para una base de ingresos robusta y diversificada.",
        sl_th2_title: "Demanda estructural",
        sl_th2_desc: "Vinculada al entorno hospitalario y sanitario de referencia, con flujos constantes y predecibles.",
        sl_th3_title: "Elevada resiliencia",
        sl_th3_desc: "Rentas con alta resistencia a ciclos económicos gracias al anclaje en servicios esenciales de salud.",
        sl_th4_title: "Gestión activa",
        sl_th4_desc: "Potencial de <em>asset management</em> activo, adaptable a estrategias Core+ o Value-add.",
        sl_tip_thesis: "Posicionamiento adaptado a estrategias de inversión <strong>Core+</strong> o <strong>Value-add</strong>.",
        sl_eye_market: "<i class=\"fas fa-globe-europe\"></i> Mercado",
        sl_title_market: "Mercado y Localización",
        sl_desc_market: "Lleida, capital de la comarca del Segrià, combina un tejido económico consolidado con una fuerte presencia de servicios de salud y formación superior.",
        sl_stat_1: "Habitantes en Lleida",
        sl_stat_2: "Área de influencia (comarca del Segrià)",
        sl_stat_3: "Motores de demanda: salud, formación y servicios profesionales",
        sl_eye_keys: "<i class=\"fas fa-key\"></i> Para el Inversor",
        sl_title_keys: "Puntos Clave",
        sl_key_1: "<strong>Seguridad jurídica y técnica</strong> — Activo con documentación y estudio técnico certificados, sin contingencias urbanísticas.",
        sl_key_2: "<strong>Fuerte liquidez de alquiler</strong> — Zona con demanda constante de espacios de oficinas y alojamiento vinculada al sector sanitario.",
        sl_key_3: "<strong>Escalabilidad y flexibilidad</strong> del proyecto arquitectónico según la estrategia del inversor.",
        sl_key_4: "<strong>Visibilidad clara</strong> sobre los ingresos futuros, con hipótesis conservadoras y documentadas.",
        sl_cta_eyebrow: "Contacto confidencial",
        sl_cta_title: "Acceso para Inversores",
        sl_cta_desc: "Dossier técnico completo, estudio de viabilidad y data room disponibles bajo petición. Intercambios confidenciales con nuestro equipo de inversión.",
        sl_btn_contact: "Contactar ahora",
        sl_conf_text: "<strong>Condiciones financieras disponibles bajo consulta.</strong> Se facilitará un análisis detallado, incluyendo proyecciones de rendimiento y escenarios de explotación, en un marco estrictamente confidencial.",
        sl_map_title: "Vista aérea interactiva",
        sl_map_subtitle: "Ciudad de Lleida → Carrer Eugeni d'Ors",
        sl_map_fallback: "Cargando mapa interactivo...",
        sl_map_step_city: "Ciudad",
        sl_map_step_district: "Barrio",
        sl_map_step_hospital: "Eugeni d'Ors",
        sl_map_step_plot: "Terreno",

        // ── Lugar Eventos ──
        le_page_title: "Palacio Almunia de San Juan | FA GRUP",
        le_kicker: "FA GRUP Signature Places",
        le_hero_title: "Palacio Almunia de San Juan",
        le_hero_lead: "Donde tus momentos se convierten en legado. Lugar singular dedicado a eventos de prestigio, donde la elegancia y la historia se encuentran.",
        le_btn_private_visit: "Organizar una visita privada",
        le_btn_imagine_event: "Imaginar tu evento en el Palacio",
        le_btn_how_to_arrive: "Ver cómo llegar",
        le_floating_contact: "Contáctanos",
        le_intro_title: "Una experiencia fuera del tiempo",
        le_intro_p1: "Bienvenido a un lugar donde el tiempo se detiene. Situado en un entorno natural privilegiado, el Palacio combina patrimonio, intimidad y sofisticación.",
        le_intro_p2: "Cada piedra cuenta una historia. Cada luz realza un instante. Cada evento se transforma en una experiencia inolvidable.",
        le_intro_p3: "Para preservar su carácter exclusivo, el Palacio acoge un número limitado de eventos al año, garantizando una privatización total y una atención totalmente personalizada.",
        le_fact_1_title: "Capacidad recomendada",
        le_fact_1_text: "Hasta 180 comensales en formato banquete y configuraciones flexibles para eventos de menor escala.",
        le_fact_2_title: "Plan B climatológico",
        le_fact_2_text: "Alternativa interior elegante preparada para mantener la experiencia si las condiciones meteorológicas cambian.",
        le_fact_3_title: "Entorno histórico",
        le_fact_3_text: "Arquitectura señorial con carácter, integrada en un paisaje natural con legado de siglos.",
        le_universes_title: "Nuestros universos",
        le_universe_1_title: "💍 Bodas y ceremonias",
        le_universe_1_text: "Imagina una ceremonia bajo árboles centenarios, seguida de una cena elegante a la luz de las velas en un salón cargado de historia. Cada detalle está diseñado para dar vida a un momento único, hecho a tu medida.",
        le_universe_1_btn: "Solicitar Información",
        le_universe_2_title: "🎬 Rodajes y sesiones fotográficas",
        le_universe_2_text: "Un entorno arquitectónico auténtico, una luz natural excepcional y espacios versátiles convierten el Palacio en el escenario ideal para producciones cinematográficas, campañas de moda o proyectos creativos.",
        le_universe_2_btn: "Solicitar Información",
        le_universe_3_title: "💼 Eventos corporativos",
        le_universe_3_text: "Ofrece a tus equipos y socios un entorno inspirador, propicio para la creatividad y la excelencia. Seminarios, lanzamientos o recepciones adquieren aquí una dimensión única.",
        le_universe_3_btn: "Solicitar Información",
        le_domain_title: "El dominio",
        le_domain_1_title: "<span class=\"icon-bullet\">🏰</span>Arquitectura con carácter",
        le_domain_1_text: "Salones históricos restaurados con una atmósfera noble para celebraciones de alto nivel.",
        le_domain_2_title: "<span class=\"icon-bullet\">🌳</span>Parque centenario",
        le_domain_2_text: "Un entorno natural excepcional para ceremonias al aire libre y recepciones memorables.",
        le_domain_3_title: "<span class=\"icon-bullet\">🔐</span>Privatización exclusiva",
        le_domain_3_text: "El dominio completo se reserva para cada evento, con máxima intimidad y control total de la experiencia.",
        le_signature_title: "Servicios Signature",
        le_signature_1_title: "Suites privadas",
        le_signature_1_text: "Espacios elegantes para prolongar la experiencia en un entorno íntimo y refinado.",
        le_signature_2_title: "Orquestación a medida",
        le_signature_2_text: "Un equipo dedicado diseña y coordina cada detalle para que cada instante refleje tu visión.",
        le_signature_3_title: "Experiencias gastronómicas",
        le_signature_3_text: "Colaboraciones con catering de prestigio para elevar cada celebración y sorprender a tus invitados.",
        le_gallery_title: "Galería",
        le_gallery_subtitle: "Descubre en imágenes la atmósfera del Palacio: momentos suspendidos, luces doradas y emociones compartidas.",
        le_gallery_1: "Bodas",
        le_gallery_2: "Luz dorada al atardecer",
        le_gallery_3: "Escenarios para historias únicas",
        le_gallery_5: "Elegancia y legado",
        le_quick_location: "Ubicación",
        le_quick_location_value: "Almunia de San Juan",
        le_quick_region_value: "Aragón, España",
        le_quick_capacity: "Capacidad",
        le_quick_capacity_value: "Hasta 180",
        le_quick_guests: "invitados",
        le_quick_formats: "Formatos",
        le_quick_formats_list: "Bodas • Rodajes • Corporativos",
        le_quick_privacy: "Privatización",
        le_quick_privacy_value: "Exclusiva",
        le_quick_visit: "Solicitar visita privada",
        le_quick_availability: "Consultar disponibilidad",
        le_trust_title: "Testimonios",
        le_testimonial_1_quote: "«El Palacio superó todas nuestras expectativas. Cada detalle fue perfecto, desde la decoración hasta la gastronomía. Nuestros invitados no dejaban de hablar de la belleza del lugar.»",
        le_testimonial_1_author: "María & José",
        le_testimonial_1_event: "Boda - 150 invitados",
        le_testimonial_2_quote: "«Como productora audiovisual, encontramos en el Palacio un escenario único. La luz, la arquitectura, los espacios versátiles... todo lo que necesitábamos para una producción de alta calidad.»",
        le_testimonial_2_author: "Sandra Martínez",
        le_testimonial_2_event: "Producción audiovisual - 3 días de rodaje",
        le_testimonial_3_quote: "«Nuestro evento corporativo en el Palacio fue un completo éxito. El equipo fue atento, los espacios inspiradores y la experiencia memorable. Lo volveríamos a hacer sin duda.»",
        le_testimonial_3_author: "David López, CEO",
        le_testimonial_3_event: "Evento corporativo - 120 participantes",
        le_gallery_caption_stairs: "Boda en la escalera",
        le_gallery_caption_garden_wedding: "Boda en el jardín",
        le_gallery_caption_palace_night: "Noche en el palacio",
        le_gallery_caption_golden_setting: "Escenario dorado",
        le_gallery_caption_indoor_pool: "Piscina interior",
        le_gallery_caption_palace_view: "Palacio",
        le_gallery_caption_palace_terrace: "Terraza del palacio",
        le_gallery_caption_palace_view_alt: "Vista del palacio",
        le_gallery_caption_patio_view: "Vista del patio",
        le_gallery_caption_palace_park: "Parque del palacio",
        le_gallery_caption_garden_fountain: "Jardín con fuente",
        le_gallery_caption_palace_park_alt: "Parque del palacio",
        le_gallery_caption_wedding_patio: "Patio de boda",
        le_gallery_caption_unique_moment: "Un momento único",
        le_gallery_caption_palace_detail: "Palacio en detalle",
        le_gallery_caption_library: "Biblioteca del palacio",
        bv_page_title: "Bien en Venta - FA GRUP",
        bv_badge: "Casa en venta",
        bv_h1: "Casa o chalet independiente en venta en el Vendrell - Tarragona",
        bv_hero_desc: "El Vendrell. Preciosa casa unifamiliar en la zona de Mas Borras con muchos extras y piscina de agua salada.",
        bv_summary_title: "Resumen del inmueble",
        bv_price: "880.000 EUR",
        bv_meta_location: "El Vendrell - Tarragona",
        bv_meta_area: "250 m2 construidos",
        bv_meta_rooms: "4 hab.",
        bv_meta_garage: "Garaje incluido",
        bv_meta_price_m2: "3.520 EUR/m2",
        bv_feat_area: "250 m2 construidos, 230 m2 utiles",
        bv_feat_rooms: "4 habitaciones",
        bv_feat_baths: "3 banos",
        bv_feat_terrace: "Terraza y balcon",
        bv_feat_garage: "Plaza de garaje incluida",
        bv_feat_condition: "Segunda mano / buen estado",
        bv_feat_closets: "Armarios empotrados",
        bv_feat_orientation: "Orientacion sur",
        bv_feat_pool: "Piscina",
        bv_feat_energy: "Certificado energetico: no indicado",
        bv_desc_title: "Descripcion",
        bv_desc_text: "Preciosa casa unifamiliar en la zona de Mas Borras, en El Vendrell, con muchos extras y piscina de agua salada.",
        bv_data_title: "Datos del anuncio",
        bv_data_updated: "Anuncio actualizado hace mas de un ano",
        bv_data_price: "Precio del inmueble: 880.000 EUR",
        bv_data_price_m2: "Precio por m2: 3.520 EUR/m2",
        bv_data_location: "Ubicacion: Mas Borras, El Vendrell",
        bv_btn_info: "Solicitar informacion",
        bv_photos_title: "Fotos del anuncio",
        bv_photos_list_title: "Listado de fotos disponibles",
        bv_photo_1: "Piscina",
        bv_photo_2: "Terraza",
        bv_photo_3: "Piscina (segunda vista)",
        bv_photo_4: "Vista general de la casa",
        bv_photo_5: "7 fotos adicionales en el anuncio original",
        bv_error_text: "Hay algun error en este anuncio? Informanos para corregirlo y ayudar a otras personas.",
        le_access_title: "Cómo llegar",
        le_access_subtitle: "Acceso al dominio",
        le_access_text: "Comparte tu fecha de visita y te enviamos indicaciones personalizadas de acceso y estacionamiento para garantizar una llegada fluida.",
        le_access_car: "Llegada en coche con zona de recepción privada",
        le_access_route: "Ruta exacta disponible al confirmar la visita",
        le_booking_title: "Reserva tu experiencia",
        le_booking_desc: "Completa el siguiente formulario y nuestro equipo te contactará para coordinar tu visita privada o presentarte una propuesta personalizada.",
        le_booking_subtitle: "Solicitud de disponibilidad y propuesta personalizada",
        le_form_name: "Nombre",
        le_form_lastname: "Apellidos",
        le_form_type: "Tipo de evento",
        le_form_type_opt_0: "Selecciona una opción",
        le_form_type_opt_1: "Boda o ceremonia",
        le_form_type_opt_2: "Rodaje o sesión fotográfica",
        le_form_type_opt_3: "Evento corporativo",
        le_form_type_opt_4: "Otro",
        le_form_preferred_date: "Fecha preferida",
        le_form_email: "Email",
        le_form_phone: "Teléfono",
        le_form_guests: "Número de invitados",
        le_form_guests_ph: "Ej.: 120",
        le_form_details: "Detalles del proyecto",
        le_form_details_ph: "Comparte el estilo de evento, necesidades especiales o ideas clave.",
        le_form_legal: "Responsable: FA GRUP. Finalidad: gestionar tu solicitud y facilitar información comercial sobre el Palacio. Legitimación: consentimiento del interesado.",
        le_form_consent: "He leído y acepto la <a href=\"privacidad.html\">Política de Privacidad</a> y el <a href=\"aviso-legal.html\">Aviso Legal</a>.",
        le_form_submit: "Enviar solicitud"
    },

    ca: {
        nav_inicio: "Inici",
        nav_servicios: "Serveis",
        nav_nosotros: "Sobre Nosaltres",
        nav_empresas: "Empreses Associades",
        nav_legal: "Departament Legal",
        nav_contacto: "Contacte",

        hero_title: "FA GRUP - Immobiliària a Barcelona",
        hero_slogan: "Sempre amb Tu",
        carousel_viaje: "VIATGE",
        carousel_seguros: "ASSEGURANCES",
        carousel_mision: "LA NOSTRA MISSIÓ<br>ÈXIT IMMOBILIARI AMB SEGURETAT I PROXIMITAT.",
        carousel_vision: "VISIÓ<br>CONVERTIR-NOS EN LA IMMOBILIÀRIA DE REFERÈNCIA, RECONEGUDA PER PROXIMITAT, CONFIANÇA I EXCEL·LÈNCIA INTEGRAL.",
        carousel_siemprecontigo: "SEMPRE AMB TU",
        hero_subtitle: "La teva immobiliària de confiança a Barcelona. Acompanyament professional i proper en compra, venda i lloguer",
        btn_contact: "Contacta'ns",

        intro_title: "Què és FA GRUP?",
        intro_text: "FA GRUP és una immobiliària de Barcelona fundada el 2019, especialitzada en oferir un servei integral al sector immobiliari. Acompanyem el client durant totes les etapes de compra, venda o lloguer amb professionalitat i proximitat. Com a membres d'AICAT i AEPJ, ens distingim per la nostra atenció personalitzada, coneixement del mercat local i un ferm compromís amb la transparència legal.",

        services_title: "Els Nostres Serveis",
        service_inmobiliaria: "Immobiliària",
        service_inmobiliaria_desc: "Venda de pisos amb assessorament professional. Acompanyem els nostres clients en cada pas de la compra del seu habitatge.",
        service_seguros: "Assegurances",
        service_seguros_desc: "Protecció i tranquil·litat per a la teva llar, vida i negoci. Assessorament personalitzat i gestió integral de pòlisses.",
        service_viajes: "Agència de Viatges",
        service_viajes_desc: "Experiències úniques, planificades per a tu. Organitzem el teu viatge complet amb atenció professional.",
        btn_more_info: "Més informació",

        servicios_hero_title: "Els Nostres Serveis",
        servicios_hero_subtitle: "Solucions integrals adaptades a les teves necessitats",
        servicios_inmo_title: "Immobiliària FA GRUP - Barcelona",
        servicios_inmo_subtitle: "Servei integral en compra, venda i lloguer d'immobles a Barcelona. Acompanyem els nostres clients en cada pas amb professionalitat i proximitat",
        servicios_inmo_feature_1_title: "Valoració Professional",
        servicios_inmo_feature_1_text: "Anàlisi detallada del mercat i valoració precisa de la teva propietat amb criteris tècnics i transparents.",
        servicios_inmo_feature_2_title: "Compra Venda",
        servicios_inmo_feature_2_text: "Acompanyament personalitzat en tot el procés. Maximitzem la visibilitat del teu immoble amb eines digitals",
        servicios_inmo_feature_3_title: "Gestió de Visites",
        servicios_inmo_feature_3_text: "Coordinació de visites amb potencials compradors i negociació professional per aconseguir el millor acord.",
        servicios_inmo_feature_5_title: "Assessorament Legal",
        servicios_inmo_feature_5_text: "Gestió completa de contractes, escriptures i tràmits notarials per a una operació segura i transparent.",
        servicios_inmo_cta: "Consulta els nostres pisos disponibles",
        servicios_seg_title: "Assegurances FA GRUP",
        servicios_seg_subtitle: "Protecció i tranquil·litat per a la teva llar, vida i negoci amb assessorament personalitzat",
        servicios_seg_feature_1_title: "Assegurances per a Particulars",
        servicios_seg_feature_1_text: "Cobertura completa per a la llar, automòbil, vida i salut. Protegim allò que més t'importa.",
        servicios_seg_feature_2_title: "Comparativa Personalitzada",
        servicios_seg_feature_2_text: "Analitzem les millors opcions d'assegurances amb El Corte Inglés per trobar la pòlissa que millor s'adapta a tu",
        servicios_seg_cta: "Sol·licita la teva pòlissa personalitzada",
        servicios_viajes_title: "Viatges FA GRUP",
        servicios_viajes_subtitle: "Experiències úniques, planificades per a tu. Organitzem el teu viatge complet amb atenció professional",
        servicios_viajes_feature_1_title: "Paquets Complets",
        servicios_viajes_feature_1_text: "Vol + hotel + transport + activitats. Tot organitzat perquè només gaudeixis del teu viatge.",
        servicios_viajes_feature_2_title: "Reserves Individuals",
        servicios_viajes_feature_2_text: "Flexibilitat total: reserva només vol, només hotel o només excursions segons les teves necessitats.",
        servicios_viajes_feature_3_title: "Excursions i Activitats",
        servicios_viajes_feature_3_text: "Tours guiats, experiències locals i activitats úniques per fer el teu viatge inoblidable.",
        servicios_viajes_feature_4_title: "Assegurances de Viatge",
        servicios_viajes_feature_4_text: "Cobertura completa i assistència 24/7 per viatjar amb total tranquil·litat.",
        servicios_viajes_feature_5_title: "Assessorament Personalitzat",
        servicios_viajes_feature_5_text: "Itineraris adaptats a les teves preferències, pressupost i estil de viatge.",
        servicios_viajes_cta: "Planifica el teu viatge amb nosaltres",

        about_title: "Sobre Nosaltres",
        about_text: "Som una assessoria empresarial especialitzada en oferir solucions integrals en les àrees fiscal, comptable, laboral i estratègica. El nostre objectiu és acompanyar empreses, autònoms i emprenedors en la gestió eficient de la seva activitat, aportant claredat i un enfocament orientat a resultats.",
        nos_hero_title: "Sobre Nosaltres",
        nos_hero_subtitle: "Coneix qui som i què ens diferencia",
        nos_who_title: "Qui Som",
        nos_who_p1: "FA GRUP és una immobiliària ubicada a Barcelona, fundada l'11 de desembre de 2019. Ens especialitzem a oferir un servei integral en el sector immobiliari, acompanyant el client en tot el procés de compra, venda o lloguer d'immobles amb professionalitat i proximitat.",
        nos_who_p2: "Comptem amb un equip format per professionals amb ampli coneixement del mercat immobiliari local de Barcelona. Analitzem cada cas de manera individual per oferir serveis adaptats a les necessitats reals de cada client, garantint una atenció propera, responsable i totalment personalitzada.",
        nos_who_p3: "Des de la nostra fundació el 2019, hem acompanyat centenars de clients, transformant un tràmit complex en una experiència fiable i segura.",
        nos_values_title: "Els Nostres Valors",
        nos_value_1_title: "Professionalitat",
        nos_value_1_text: "Serveis de màxima qualitat recolzats per l'experiència i un coneixement profund del mercat immobiliari de Barcelona.",
        nos_value_2_title: "Proximitat",
        nos_value_2_text: "Atenció personalitzada i tracte humà en cada etapa del procés immobiliari, construint relacions de confiança.",
        nos_value_3_title: "Transparència",
        nos_value_3_text: "Comunicació clara i honesta en totes les operacions, garantint seguretat en cada transacció.",
        nos_value_4_title: "Compromís amb el Client",
        nos_value_4_text: "Acompanyament integral durant tot el procés de compra, venda o lloguer del teu immoble.",
        nos_why_title: "Per Què Triar-nos",
        nos_diff_1_title: "Solucions Integrals:",
        nos_diff_1_text: "Oferim serveis complets en assessoria empresarial, immobiliària, assegurances i viatges des d'una única empresa.",
        nos_diff_2_title: "Atenció Personalitzada:",
        nos_diff_2_text: "Cada client rep un tracte individualitzat adaptat a les seves necessitats específiques.",
        nos_diff_3_title: "Equip Multidisciplinari:",
        nos_diff_3_text: "Professionals especialitzats en diferents àrees treballant de manera coordinada.",
        nos_diff_4_title: "Experiència Contrastada:",
        nos_diff_4_text: "Anys de trajectòria donant suport a empreses i particulars en els seus projectes.",
        nos_diff_5_title: "Compromís amb l'Excel·lència:",
        nos_diff_5_text: "Millora contínua i actualització constant de coneixements i procediments.",
        btn_read_more: "Llegir més",

        companies_title: "Empreses Associades",
        companies_intro: "Amb l'objectiu d'oferir un servei global, ampliem els nostres serveis com a assessoria empresarial, oferint solucions integrals en les àrees fiscal, comptable, laboral i estratègica. El nostre objectiu és acompanyar empreses, autònoms i emprenedors en la gestió eficient de la seva activitat, aportant claredat i un enfocament orientat a resultats.",
        company_fa_asesoria: "FA Assessoria Global",
        company_fa_desc: "Serveis d'advocats, assessoria legal i jurídica. Especialistes en dret penal, laboral, familiar, civil i administratiu.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Empreses, cultura, turisme i negocis. Solucions integrals per al desenvolupament empresarial i cultural.",
        btn_visit_web: "Visitar web",

        contact_hero_title: "Especialistes que entenen l'art de Vendes",
        contact_question: "Busques la teva llar ideal a Barcelona? Contacta'ns i t'acompanyarem en tot el procés.",
        contact_phone: "Telèfon",
        contact_email: "Correu electrònic",
        contact_address: "Adreça",
        btn_send_query: "Envia'ns la teva consulta",

        contact_hero_subtitle: "Estem aquí per ajudar-te. Contacta'ns i et respondrem al més aviat possible",
        contact_info_title: "Informació de Contacte",
        contact_phone_title: "Telèfon",
        contact_phone_hours: "Dilluns a Divendres: 9:00 - 18:00",
        contact_email_title: "Correu electrònic",
        contact_email_legal: "(Consultes legals)",
        contact_whatsapp_send: "Enviar missatge",
        contact_whatsapp_desc: "Resposta ràpida i directa",
        contact_address_title: "Adreça",
        contact_form_title: "Envia'ns la teva Consulta",
        contact_form_name: "Nom complet",
        contact_form_phone: "Telèfon",
        contact_form_service: "Servei d'interès",
        contact_form_select: "Selecciona un servei",
        contact_form_message: "Missatge",
        contact_privacy_info: "Responsable: FA GRUP. Finalitat: atendre la teva consulta. Base jurídica: consentiment i mesures precontractuals. Drets: accés, rectificació, supressió i resta de drets RGPD a fagrupinmobiliaria@gmail.com.",
        contact_consent_prefix: "He llegit i accepto la ",
        contact_consent_and: " i l' ",
        contact_consent_error: "Has d'acceptar la Política de Privacitat i l'Avís Legal per enviar el formulari.",
        contact_form_submit: "Enviar consulta",
        contact_map_title: "La nostra Ubicació",

        cookie_title: "Política de cookies",
        cookie_message: "Fem servir cookies tècniques necessàries i, només amb el teu consentiment, cookies d'anàlisi o personalització.",
        cookie_accept: "Acceptar",
        cookie_reject: "Rebutjar",
        cookie_config: "Veure politica de privacitat",

    // Afegits internacionals
    feature_international_title: "Immobiliària Internacional",
    feature_international_desc: "Connexió estratègica entre mercats. Oferim serveis immobiliaris especialitzats tant a Barcelona com a l'Equador, amb assessorament integral a ambdós països.",
    faq_title: "Preguntes Freqüents",
    faq_q1: "Quins serveis ofereix FA GRUP?",
    faq_q2: "Com puc sol·licitar una consulta?",
    faq_q3: "Treballeu només a Barcelona?",
    faq_q4: "Quina documentació necessito per vendre un immoble?",
    faq_services_international: "Oferim serveis immobiliaris, assegurances i agència de viatges a Catalunya i l'Equador, amb assessorament integral i personalitzat.",
    faq_a2: "Pots contactar-nos des de la pàgina de contacte i et respondrem al més aviat possible.",
    faq_focus_international: "La nostra activitat se centra principalment en el mercat de Catalunya i l'Equador, amb capacitat per gestionar i valorar projectes en altres ubicacions internacionals.",
    faq_a4: "T'orientem sobre la documentació necessària i t'acompanyem durant tot el procés.",

        testimonials_title: "Que opinen de nosaltres?",
        testimonial_1: "\"Atencio excel.lent i tracte molt proper. Ens van ajudar en tot el proces de compra.\"",
        testimonial_1_author: "- Laura M.",
        testimonial_2: "\"Professionals i transparents. Recomano FA GRUP al 100%.\"",
        testimonial_2_author: "- Carlos R.",
        testimonial_3: "\"Gestio rapida i assessorament clar. Tot va ser senzill.\"",
        testimonial_3_author: "- Ana P.",
        btn_more_reviews: "Veure mes ressenyes",

        social_title: "Segueix-nos a les Xarxes Socials",

        footer_slogan: "Solucions integrals per a empreses i particulars",
        footer_services: "Serveis",
        footer_company: "Empresa",
        footer_contact: "Contacte",
        footer_legal: "Avís Legal",
        footer_privacy: "Política de Privacitat",
        footer_rights: "Tots els drets reservats",

        footer_link_inmobiliaria: "Immobiliaria",
        footer_link_seguros: "Assegurances",
        footer_link_viajes: "Agència de Viatges",
        footer_link_about: "Sobre Nosaltres",
        footer_link_contact: "Contacte",

        legal_hero_title: "Departament Legal",
        legal_hero_subtitle: "FA Assessoria Global - Assessorament jurídic integral",
        legal_intro_title: "Serveis del Departament Legal",
        legal_intro_p1: "A FA Assessoria oferim assessorament i representació jurídica integral en múltiples àrees del dret. El nostre equip de professionals especialitzats garanteix un servei personalitzat, eficaç i orientat a la protecció dels teus interessos.",
        legal_intro_p2: "Treballem amb metodologies actualitzades, complint totes les normatives vigents i garantint un acompanyament segur, professional i transparent en cada procediment.",
        legal_section1_title: "Dret Penal, Laboral i de Família",
        legal_section1_subtitle: "Defensa especialitzada i acompanyament en procediments legals complexos",

        privacy_title: "Política de Privacitat",
        privacy_subtitle: "FA GRUP - Protecció de Dades Personals",
        privacy_last_update: "Última actualització: 4 de febrer de 2026",
        privacy_section1_title: "1. Responsable del Tractament",
        privacy_section2_title: "2. Dades que Recopilem",
        privacy_section3_title: "3. Finalitat del Tractament",
        privacy_section4_title: "4. Base Jurídica del Tractament",
        privacy_section5_title: "5. Destinataris de les Dades",
        privacy_section6_title: "6. Conservació de les Dades",
        privacy_section7_title: "7. Drets de l'Usuari",
        privacy_section8_title: "8. Seguretat de les Dades",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modificacions",
        privacy_section11_title: "11. Reclamacions",
        privacy_section12_title: "12. Contacte",

        // Privacy page content
        privacy_section1_intro: "FA GRUP, amb domicili a Avenida Josep Tarradellas 134 bajos, 08029 Barcelona, Espanya, és el responsable del tractament de les dades personals que ens proporcioneu.",
        privacy_contact_label: "Contacte:",
        privacy_email_label: "Correu electrònic:",
        privacy_phone_label: "Telèfon:",
        
        privacy_section2_intro: "FA GRUP pot recollir els següents tipus de dades personals:",
        privacy_data_identification: "Dades d'identificació:",
        privacy_data_identification_desc: "Nom, cognoms, DNI/NIE",
        privacy_data_contact: "Dades de contacte:",
        privacy_data_contact_desc: "Adreça de correu electrònic, número de telèfon, adreça postal",
        privacy_data_navigation: "Dades de navegació:",
        privacy_data_navigation_desc: "Adreça IP, tipus de navegador, pàgines visitades",
        privacy_data_services: "Dades relacionades amb serveis:",
        privacy_data_services_desc: "Informació sobre propietats d'interès, preferències de recerca",
        
        privacy_section3_intro: "Les dades personals recopilades seran tractades per a les següents finalitats:",
        privacy_purpose_1: "Gestió de consultes i sol·licituds d'informació",
        privacy_purpose_2: "Prestació de serveis immobiliaris, assegurances i viatges",
        privacy_purpose_3: "Enviament de comunicacions comercials sobre els nostres serveis (amb el vostre consentiment previ)",
        privacy_purpose_4: "Compliment d'obligacions legals i contractuals",
        privacy_purpose_5: "Millora dels nostres serveis i experiència de l'usuari",
        
        privacy_section4_intro: "El tractament de les vostres dades personals es basa en:",
        privacy_legal_consent: "Consentiment:",
        privacy_legal_consent_desc: "Per a l'enviament de comunicacions comercials",
        privacy_legal_contract: "Execució de contracte:",
        privacy_legal_contract_desc: "Per a la prestació de serveis sol·licitats",
        privacy_legal_legitimate: "Interès legítim:",
        privacy_legal_legitimate_desc: "Per a la gestió i millora dels nostres serveis",
        privacy_legal_obligation: "Obligació legal:",
        privacy_legal_obligation_desc: "Per a complir amb normatives aplicables",
        
        privacy_section5_intro: "Les vostres dades personals podran ser comunicades a:",
        privacy_recipient_1: "Empreses associades del grup FA GRUP per a la prestació de serveis",
        privacy_recipient_2: "Proveïdors de serveis tecnològics i d'emmagatzematge",
        privacy_recipient_3: "Administracions públiques quan sigui legalment requerit",
        privacy_recipient_4: "Entitats financeres per a la gestió de pagaments",
        privacy_no_international: "No realitzem transferències internacionals de dades fora de l'Espai Econòmic Europeu.",
        
        privacy_section6_p1: "Les dades personals es conservaran durant el temps necessari per a complir amb les finalitats per a les quals van ser recollides i, posteriorment, durant els terminis de prescripció legal aplicables.",
        privacy_section6_p2: "En cas de no existir obligació legal, les dades es conservaran mentre no sol·liciteu la supressió i sempre que existeixi una base legítima per al seu tractament.",
        
        privacy_section7_intro: "Com a titular de les dades personals, teniu dret a:",
        privacy_right_access: "Accés:",
        privacy_right_access_desc: "Conèixer quines dades tractem sobre vosaltres",
        privacy_right_rectify: "Rectificació:",
        privacy_right_rectify_desc: "Sol·licitar la correcció de dades inexactes",
        privacy_right_delete: "Supressió:",
        privacy_right_delete_desc: "Sol·licitar l'eliminació de les vostres dades",
        privacy_right_object: "Oposició:",
        privacy_right_object_desc: "Oposició al tractament de les vostres dades",
        privacy_right_limit: "Limitació:",
        privacy_right_limit_desc: "Sol·licitar la limitació del tractament",
        privacy_right_portability: "Portabilitat:",
        privacy_right_portability_desc: "Rebre les vostres dades en format estructurat",
        privacy_right_withdraw: "Revocació del consentiment:",
        privacy_right_withdraw_desc: "Retirar el consentiment en qualsevol moment",
        privacy_section7_p2: "Per a exercir aquests drets, podeu contactar-nos a través de:",
        privacy_section7_contact_email: "Correu electrònic:",
        privacy_section7_contact_address: "Adreça postal:",
        
        privacy_section8: "FA GRUP ha implementat mesures tècniques i organitzatives apropiades per a garantir la seguretat de les vostres dades personals i protegir-les contra accessos no autoritzats, pèrdua, destrucció o alteració.",
        
        privacy_section9_p1: "Aquest lloc web utilitza cookies tècniques necessàries per al seu funcionament i, en el seu cas, cookies analítiques o de personalització només si las accepteu.",
        privacy_section9_p2: "En accedir al lloc, podeu acceptar o rebutjar els cookies no essencials des del joc de consentiment. També podeu canviar la vostra elecció eliminant els cookies del vostre navegador i recarregant la pàgina.",
        privacy_section9_p3: "Tipus de cookies que podem utilitzar:",
        privacy_cookie_technical: "Tècniques (necessàries):",
        privacy_cookie_technical_desc: "Permeten funcions bàsiques del lloc web i no requereixen consentiment.",
        privacy_cookie_analytics: "Analítiques:",
        privacy_cookie_analytics_desc: "Ens ajuden a entendre l'ús del lloc de forma agregada per a millorar els nostres serveis.",
        privacy_cookie_preferences: "Preferències:",
        privacy_cookie_preferences_desc: "Guarden determinades opcions de l'usuari per a millorar l'experiència.",
        privacy_section9_p4: "Podeu configurar el vostre navegador per a bloquejar o eliminar cookies. Tingueu en compte que, en aquest cas, algunes funcionalitats del lloc poden no estar disponibles correctament.",
        
        privacy_section10: "FA GRUP es reserva el dret de modificar aquesta Política de Privacitat per a adaptar-la a canvis legislatius o dels nostres serveis. Us recomanem revisar periòdicament aquesta pàgina.",
        
        privacy_section11: "Si considereu que el tractament de les vostres dades personals no compleix amb la normativa, teniu dret a presentar una reclamació davant l'Autoritat Espanyola de Protecció de Dades (www.aepd.es).",
        
        privacy_section12_intro: "Per a qualsevol consulta sobre aquesta Política de Privacitat o sobre el tractament de les vostres dades personals, podeu contactar-nos:",
        privacy_section12_address: "Adreça:",

        aviso_page_title: "Avís Legal - FA GRUP",
        aviso_title: "Avís Legal",
        aviso_subtitle: "Informació legal i condicions d'ús del lloc web de FA GRUP",
        aviso_last_update: "Darrera actualització: 16 de març de 2026",
        aviso_section1_title: "1. Dades identificatives del titular del lloc web",
        aviso_section1_p1: "En compliment de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s'informa que el titular d'aquest lloc web és:",
        aviso_holder_label: "Titular:",
        aviso_address_label: "Domicili:",
        aviso_section2_title: "2. Objecte",
        aviso_section2_p1: "Aquest avís legal regula l'accés, la navegació i l'ús del lloc web de FA GRUP, així com les responsabilitats derivades de la utilització dels seus continguts (textos, imatges, dissenys, codi, documentació i qualsevol altre material).",
        aviso_section3_title: "3. Condicions d'ús",
        aviso_section3_p1: "L'accés a aquest lloc web atribueix la condició d'usuari i implica l'acceptació plena i sense reserves de les disposicions incloses en aquest avís legal.",
        aviso_section3_li1: "L'usuari es compromet a fer un ús adequat i lícit del lloc web i dels seus continguts.",
        aviso_section3_li2: "Queden prohibides les activitats il·lícites, fraudulentes o contràries a la bona fe i a l'ordre públic.",
        aviso_section3_li3: "FA GRUP es reserva el dret de modificar, en qualsevol moment i sense avís previ, la presentació i configuració del lloc web, així com aquest avís legal.",
        aviso_section4_title: "4. Propietat intel·lectual i industrial",
        aviso_section4_p1: "Tots els continguts del lloc web (incloent-hi, sense caràcter limitatiu, textos, fotografies, gràfics, icones, programari, disseny gràfic i codis font) són titularitat de FA GRUP o de tercers que n'han autoritzat l'ús.",
        aviso_section4_p2: "Queda prohibida la reproducció, distribució, comunicació pública, transformació o qualsevol altra forma d'explotació, total o parcial, sense autorització expressa i per escrit del titular corresponent.",
        aviso_section5_title: "5. Responsabilitat",
        aviso_section5_p1: "FA GRUP no garanteix la disponibilitat contínua ni l'absència d'errors en l'accés al lloc web, tot i que adoptarà les mesures raonables per evitar-los, corregir-los o actualitzar-los quan correspongui.",
        aviso_section5_p2: "FA GRUP no es fa responsable dels danys o perjudicis derivats de l'ús del lloc web, ni d'actuacions realitzades sobre la base de la informació que hi consta.",
        aviso_section6_title: "6. Enllaços externs",
        aviso_section6_p1: "Aquest lloc web pot contenir enllaços a pàgines de tercers. FA GRUP no assumeix responsabilitat sobre els continguts, polítiques o pràctiques d'aquests llocs externs.",
        aviso_section7_title: "7. Protecció de dades personals",
        aviso_section7_p1: "El tractament de les dades personals es realitza d'acord amb la normativa vigent i amb la nostra ",
        aviso_privacy_link: "Política de Privacitat",
        aviso_section8_title: "8. Política de cookies",
        aviso_section8_p1: "Aquest lloc web utilitza cookies per millorar l'experiència de navegació. Podeu consultar més informació a l'apartat de cookies de la nostra ",
        aviso_section9_title: "9. Legislació aplicable i jurisdicció",
        aviso_section9_p1: "Les presents condicions es regeixen per la legislació espanyola. Per resoldre qualsevol controvèrsia que pugui sorgir en relació amb aquest lloc web, les parts se sotmeten als jutjats i tribunals de Barcelona, excepte que la normativa aplicable disposi una altra cosa.",
        aviso_section10_title: "10. Contacte",
        aviso_section10_p1: "Per a qualsevol consulta relacionada amb aquest avís legal, podeu contactar amb FA GRUP a:",
        aviso_email_label: "Email:",
        aviso_phone_label: "Telèfon:",
        aviso_contact_address_label: "Adreça:",

        // ── Suelo Lleida ──
        sl_kicker: "FA GRUP · Inversió Immobiliària",
        sl_hero_title: "Oportunitat Estratègica de Sòl<br><span>Lleida – Carrer Eugeni d'Ors</span>",
        sl_hero_lead: "Actiu immobiliari premium d'ús mixt (terciari i residencial). Posicionament privilegiat en un dels eixos més estructurants de Lleida.",
        sl_badge_1: "1.849 m² de sòl",
        sl_badge_2: "2.939 m² desenvolupats",
        sl_badge_3: "Entorn hospitalari",
        sl_badge_4: "~532.000 €/any",
        sl_btn_dossier: "Sol·licitar dossier confidencial",
        sl_btn_bcase: "Veure Business Case",
        sl_eye_urban: "<i class=\"fas fa-map-marked-alt\"></i> Urbanisme",
        sl_title_urban: "Marc Urbanístic i Paràmetres Clau",
        sl_desc_urban: "Situat en un dels eixos més estructurants de Lleida, a les immediacions d'un pol hospitalari de referència. Un entorn urbà consolidat amb seguretat jurídica total.",
        sl_param_1: "Edificabilitat neta",
        sl_param_2: "Ocupació màxima (40%)",
        sl_param_3: "Zonificació SUC – Sòl Urbà Consolidat",
        sl_param_4_val: "Mixt",
        sl_param_4: "Residencial + terciari planta baixa",
        sl_tip_urban: "Un marc normatiu clar que permet una estructuració ràpida i segura de l'operació.",
        sl_eye_dev: "<i class=\"fas fa-layer-group\"></i> Desenvolupament",
        sl_title_dev: "Escenari de Desenvolupament",
        sl_desc_dev: "Un estudi tècnic certificat permet projectar una operació optimitzada, amb possibilitat d'ajust del <em>mix</em> segons l'estratègia d'explotació final.",
        sl_th_uso: "Ús",
        sl_th_superficie: "Superfície estimada",
        sl_row_terciario: "Terciari / Oficines",
        sl_row_residencial: "Residencial / Apart-hotel",
        sl_row_parking: "Aparcament (planta soterrani)",
        sl_row_parking_val: "~20–24 places · ~734 m²",
        sl_row_total: "Superfície total desenvolupada",
        sl_eye_fin: "<i class=\"fas fa-coins\"></i> Financer",
        sl_title_bcase: "Business Case – Projecció d'Ingressos",
        sl_th_seg: "Segment",
        sl_th_hip: "Hipòtesi d'explotació",
        sl_th_ing: "Ingressos estimats",
        sl_biz_t_label: "Terciari",
        sl_biz_t_hip: "Activitats mèdiques / Serveis especialitzats",
        sl_biz_a_label: "Allotjament",
        sl_biz_a_hip: "Apart-hotel (80% ocupació – 49 €/nit)",
        sl_biz_p_label: "Aparcament",
        sl_biz_p_hip: "Lloguer mixt (curta i llarga estada)",
        sl_biz_total: "Total brut",
        sl_eye_strat: "<i class=\"fas fa-chart-pie\"></i> Estratègia",
        sl_title_thesis: "Tesi d'Inversió",
        sl_th1_title: "Diversificació d'ingressos",
        sl_th1_desc: "Combinació de rendes terciàries, hospitality i aparcament per a una base d'ingressos robusta i diversificada.",
        sl_th2_title: "Demanda estructural",
        sl_th2_desc: "Vinculada a l'entorn hospitalari i sanitari de referència, amb fluxos constants i predictibles.",
        sl_th3_title: "Elevada resiliència",
        sl_th3_desc: "Rendes amb alta resistència a cicles econòmics gràcies a l'ancoratge en serveis essencials de salut.",
        sl_th4_title: "Gestió activa",
        sl_th4_desc: "Potencial d'<em>asset management</em> actiu, adaptable a estratègies Core+ o Value-add.",
        sl_tip_thesis: "Posicionament adaptat a estratègies d'inversió <strong>Core+</strong> o <strong>Value-add</strong>.",
        sl_eye_market: "<i class=\"fas fa-globe-europe\"></i> Mercat",
        sl_title_market: "Mercat i Localització",
        sl_desc_market: "Lleida, capital de la comarca del Segrià, combina un teixit econòmic consolidat amb una forta presència de serveis de salut i formació superior.",
        sl_stat_1: "Habitants a Lleida",
        sl_stat_2: "Àrea d'influència (comarca del Segrià)",
        sl_stat_3: "Motors de demanda: salut, formació i serveis professionals",
        sl_eye_keys: "<i class=\"fas fa-key\"></i> Per a l'Inversor",
        sl_title_keys: "Punts Clau",
        sl_key_1: "<strong>Seguretat jurídica i tècnica</strong> — Actiu amb documentació i estudi tècnic certificats, sense contingències urbanístiques.",
        sl_key_2: "<strong>Fort liquiditat de lloguer</strong> — Zona amb demanda constant d'espais d'oficines i allotjament vinculada al sector sanitari.",
        sl_key_3: "<strong>Escalabilitat i flexibilitat</strong> del projecte arquitectònic segons l'estratègia de l'inversor.",
        sl_key_4: "<strong>Visibilitat clara</strong> sobre els ingressos futurs, amb hipòtesis conservadores i documentades.",
        sl_cta_eyebrow: "Contacte confidencial",
        sl_cta_title: "Accés per a Inversors",
        sl_cta_desc: "Dossier tècnic complet, estudi de viabilitat i data room disponibles sota petició. Intercanvis confidencials amb el nostre equip d'inversió.",
        sl_btn_contact: "Contactar ara",
        sl_conf_text: "<strong>Condicions financeres disponibles sota consulta.</strong> Es facilitarà una anàlisi detallada, incloent projeccions de rendiment i escenaris d'explotació, en un marc estrictament confidencial.",
        sl_map_title: "Vista aèria interactiva",
        sl_map_subtitle: "Ciutat de Lleida → Carrer Eugeni d'Ors",
        sl_map_fallback: "Carregant mapa interactiu...",
        sl_map_step_city: "Ciutat",
        sl_map_step_district: "Barri",
        sl_map_step_hospital: "Eugeni d'Ors",
        sl_map_step_plot: "Terreny",

        // ── Lugar Eventos ──
        le_page_title: "Palau Almunia de San Juan | FA GRUP",
        le_kicker: "FA GRUP Signature Places",
        le_hero_title: "Palau Almunia de San Juan",
        le_hero_lead: "On els teus moments es converteixen en llegat. Espai singular dedicat a esdeveniments de prestigi, on l'elegància i la història es troben.",
        le_btn_private_visit: "Organitzar una visita privada",
        le_btn_imagine_event: "Imaginar el teu esdeveniment al Palau",
        le_btn_how_to_arrive: "Veure com arribar",
        le_floating_contact: "Contacta'ns",
        le_intro_title: "Una experiència fora del temps",
        le_intro_p1: "Benvingut a un lloc on el temps s'atura. Situat en un entorn natural privilegiat, el Palau combina patrimoni, intimitat i sofisticació.",
        le_intro_p2: "Cada pedra explica una història. Cada llum ressalta un instant. Cada esdeveniment es transforma en una experiència inoblidable.",
        le_intro_p3: "Per preservar el seu caràcter exclusiu, el Palau acull un nombre limitat d'esdeveniments a l'any, garantint una privatització total i una atenció totalment personalitzada.",
        le_fact_1_title: "Capacitat recomanada",
        le_fact_1_text: "Fins a 180 comensals en format banquet i configuracions flexibles per a esdeveniments de menor escala.",
        le_fact_2_title: "Pla B climatològic",
        le_fact_2_text: "Alternativa interior elegant preparada per mantenir l'experiència si les condicions meteorològiques canvien.",
        le_fact_3_title: "Entorn històric",
        le_fact_3_text: "Arquitectura senyorial amb caràcter, integrada en un paisatge natural amb llegat de segles.",
        le_universes_title: "Els nostres universos",
        le_universe_1_title: "💍 Casaments i cerimònies",
        le_universe_1_text: "Imagina una cerimònia sota arbres centenaris, seguida d'un sopar elegant a la llum de les espelmes en un saló carregat d'història. Cada detall està dissenyat per donar vida a un moment únic, fet a la teva mida.",
        le_universe_1_btn: "Sol·licitar informació",
        le_universe_2_title: "🎬 Rodatges i sessions fotogràfiques",
        le_universe_2_text: "Un entorn arquitectònic autèntic, una llum natural excepcional i espais versàtils converteixen el Palau en l'escenari ideal per a produccions cinematogràfiques, campanyes de moda o projectes creatius.",
        le_universe_2_btn: "Sol·licitar informació",
        le_universe_3_title: "💼 Esdeveniments corporatius",
        le_universe_3_text: "Ofereix als teus equips i socis un entorn inspirador, propici per a la creativitat i l'excel·lència. Seminaris, llançaments o recepcions adquireixen aquí una dimensió única.",
        le_universe_3_btn: "Sol·licitar informació",
        le_domain_title: "El domini",
        le_domain_1_title: "<span class=\"icon-bullet\">🏰</span>Arquitectura amb caràcter",
        le_domain_1_text: "Salons històrics restaurats amb una atmosfera noble per a celebracions d'alt nivell.",
        le_domain_2_title: "<span class=\"icon-bullet\">🌳</span>Parc centenari",
        le_domain_2_text: "Un entorn natural excepcional per a cerimònies a l'aire lliure i recepcions memorables.",
        le_domain_3_title: "<span class=\"icon-bullet\">🔐</span>Privatització exclusiva",
        le_domain_3_text: "El domini complet es reserva per a cada esdeveniment, amb màxima intimitat i control total de l'experiència.",
        le_signature_title: "Serveis Signature",
        le_signature_1_title: "Suites privades",
        le_signature_1_text: "Espais elegants per prolongar l'experiència en un entorn íntim i refinat.",
        le_signature_2_title: "Orquestració a mida",
        le_signature_2_text: "Un equip dedicat dissenya i coordina cada detall perquè cada instant reflecteixi la teva visió.",
        le_signature_3_title: "Experiències gastronòmiques",
        le_signature_3_text: "Col·laboracions amb càtering de prestigi per elevar cada celebració i sorprendre els teus convidats.",
        le_gallery_title: "Galeria",
        le_gallery_subtitle: "Descobreix en imatges l'atmosfera del Palau: moments suspesos, llums daurades i emocions compartides.",
        le_gallery_1: "Casaments",
        le_gallery_2: "Llum daurada al capvespre",
        le_gallery_3: "Escenaris per a històries úniques",
        le_gallery_5: "Elegància i llegat",
        le_quick_location: "Ubicació",
        le_quick_location_value: "Almunia de San Juan",
        le_quick_region_value: "Aragó, Espanya",
        le_quick_capacity: "Capacitat",
        le_quick_capacity_value: "Fins a 180",
        le_quick_guests: "convidats",
        le_quick_formats: "Formats",
        le_quick_formats_list: "Casaments • Rodatges • Corporatius",
        le_quick_privacy: "Privatització",
        le_quick_privacy_value: "Exclusiva",
        le_quick_visit: "Sol·licitar visita privada",
        le_quick_availability: "Consultar disponibilitat",
        le_trust_title: "Testimonis",
        le_testimonial_1_quote: "«El Palau va superar totes les nostres expectatives. Cada detall va ser perfecte, des de la decoració fins a la gastronomia. Els nostres convidats no paraven de parlar de la bellesa del lloc.»",
        le_testimonial_1_author: "Maria & Josep",
        le_testimonial_1_event: "Casament - 150 convidats",
        le_testimonial_2_quote: "«Com a productora audiovisual, vam trobar al Palau un escenari únic. La llum, l'arquitectura, els espais versàtils... tot el que necessitàvem per a una producció d'alta qualitat.»",
        le_testimonial_2_author: "Sandra Martínez",
        le_testimonial_2_event: "Producció audiovisual - 3 dies de rodatge",
        le_testimonial_3_quote: "«El nostre esdeveniment corporatiu al Palau va ser tot un èxit. L'equip va ser atent, els espais inspiradors i l'experiència memorable. Ho repetiríem sens dubte.»",
        le_testimonial_3_author: "David López, CEO",
        le_testimonial_3_event: "Esdeveniment corporatiu - 120 participants",
        le_gallery_caption_stairs: "Casament a l'escala",
        le_gallery_caption_garden_wedding: "Casament al jardí",
        le_gallery_caption_palace_night: "Nit al palau",
        le_gallery_caption_golden_setting: "Escenari daurat",
        le_gallery_caption_indoor_pool: "Piscina interior",
        le_gallery_caption_palace_view: "Palau",
        le_gallery_caption_palace_terrace: "Terrassa del palau",
        le_gallery_caption_palace_view_alt: "Vista del palau",
        le_gallery_caption_patio_view: "Vista del pati",
        le_gallery_caption_palace_park: "Parc del palau",
        le_gallery_caption_garden_fountain: "Jardí amb font",
        le_gallery_caption_palace_park_alt: "Parc del palau",
        le_gallery_caption_wedding_patio: "Pati de casament",
        le_gallery_caption_unique_moment: "Un moment únic",
        le_gallery_caption_palace_detail: "Palau al detall",
        le_gallery_caption_library: "Biblioteca del palau",
        bv_page_title: "Immoble en Venda - FA GRUP",
        bv_badge: "Casa en venda",
        bv_h1: "Casa o xalet independent en venda a El Vendrell - Tarragona",
        bv_hero_desc: "El Vendrell. Preciosa casa unifamiliar a la zona de Mas Borras amb molts extres i piscina d'aigua salada.",
        bv_summary_title: "Resum de l'immoble",
        bv_price: "880.000 EUR",
        bv_meta_location: "El Vendrell - Tarragona",
        bv_meta_area: "250 m2 construits",
        bv_meta_rooms: "4 hab.",
        bv_meta_garage: "Garatge inclos",
        bv_meta_price_m2: "3.520 EUR/m2",
        bv_feat_area: "250 m2 construits, 230 m2 utils",
        bv_feat_rooms: "4 habitacions",
        bv_feat_baths: "3 banys",
        bv_feat_terrace: "Terrassa i balco",
        bv_feat_garage: "Placa de garatge inclosa",
        bv_feat_condition: "Segona ma / bon estat",
        bv_feat_closets: "Armaris encastats",
        bv_feat_orientation: "Orientacio sud",
        bv_feat_pool: "Piscina",
        bv_feat_energy: "Certificat energetic: no indicat",
        bv_desc_title: "Descripcio",
        bv_desc_text: "Preciosa casa unifamiliar a la zona de Mas Borras, a El Vendrell, amb molts extres i piscina d'aigua salada.",
        bv_data_title: "Dades de l'anunci",
        bv_data_updated: "Anunci actualitzat fa mes d'un any",
        bv_data_price: "Preu de l'immoble: 880.000 EUR",
        bv_data_price_m2: "Preu per m2: 3.520 EUR/m2",
        bv_data_location: "Ubicacio: Mas Borras, El Vendrell",
        bv_btn_info: "Sol licitar informacio",
        bv_photos_title: "Fotos de l'anunci",
        bv_photos_list_title: "Llistat de fotos disponibles",
        bv_photo_1: "Piscina",
        bv_photo_2: "Terrassa",
        bv_photo_3: "Piscina (segona vista)",
        bv_photo_4: "Vista general de la casa",
        bv_photo_5: "7 fotos addicionals a l'anunci original",
        bv_error_text: "Hi ha algun error en aquest anunci? Informa'ns per corregir-lo i ajudar altres persones.",
        le_access_title: "Com arribar",
        le_access_subtitle: "Accés al domini",
        le_access_text: "Comparteix la teva data de visita i t'enviarem indicacions personalitzades d'accés i estacionament per garantir una arribada fluida.",
        le_access_car: "Arribada en cotxe amb zona de recepció privada",
        le_access_route: "Ruta exacta disponible en confirmar la visita",
        le_booking_title: "Reserva la teva experiència",
        le_booking_desc: "Completa el següent formulari i el nostre equip es posarà en contacte per coordinar la teva visita privada o presentar-te una proposta personalitzada.",
        le_booking_subtitle: "Sol·licitud de disponibilitat i proposta personalitzada",
        le_form_name: "Nom",
        le_form_lastname: "Cognoms",
        le_form_type: "Tipus d'esdeveniment",
        le_form_type_opt_0: "Selecciona una opció",
        le_form_type_opt_1: "Casament o cerimònia",
        le_form_type_opt_2: "Rodatge o sessió fotogràfica",
        le_form_type_opt_3: "Esdeveniment corporatiu",
        le_form_type_opt_4: "Altre",
        le_form_preferred_date: "Data preferida",
        le_form_email: "Email",
        le_form_phone: "Telèfon",
        le_form_guests: "Nombre de convidats",
        le_form_guests_ph: "Ex.: 120",
        le_form_details: "Detalls del projecte",
        le_form_details_ph: "Comparteix l'estil d'esdeveniment, necessitats especials o idees clau.",
        le_form_legal: "Responsable: FA GRUP. Finalitat: gestionar la teva sol·licitud i facilitar informació comercial sobre el Palau. Legitimació: consentiment de l'interessat.",
        le_form_consent: "He llegit i accepto la <a href=\"privacidad.html\">Política de Privacitat</a> i l'<a href=\"aviso-legal.html\">Avís Legal</a>.",
        le_form_submit: "Enviar sol·licitud"
    },

    fr: {
        nav_inicio: "Accueil",
        nav_servicios: "Services",
        nav_nosotros: "À Propos",
        nav_empresas: "Entreprises Associées",
        nav_legal: "Département Juridique",
        nav_contacto: "Contact",

        hero_title: "FA GRUP - Agence Immobilière à Barcelone",
        hero_slogan: "Toujours avec Vous",
        carousel_viaje: "VOYAGE",
        carousel_seguros: "ASSURANCES",
        carousel_mision: "NOTRE MISSION<br>SUCCÈS IMMOBILIER AVEC SÉCURITÉ ET PROXIMITÉ.",
        carousel_vision: "VISION<br>DEVENIR L'AGENCE IMMOBILIÈRE DE RÉFÉRENCE, RECONNUE POUR LA PROXIMITÉ, LA CONFIANCE ET L'EXCELLENCE INTÉGRALE.",
        carousel_siemprecontigo: "TOUJOURS AVEC VOUS",
        hero_subtitle: "Votre agence immobilière de confiance à Barcelone. Accompagnement professionnel et proche pour l'achat, la vente et la location",
        btn_contact: "Contactez-nous",

        intro_title: "Qu'est-ce que FA GRUP?",
        intro_text: "FA GRUP est une agence immobilière de Barcelone fondée en 2019, spécialisée dans l'offre d'un service intégral dans le secteur immobilier. Nous accompagnons le client pendant toutes les étapes d'achat, de vente ou de location avec professionnalisme et proximité. En tant que membres de l'AICAT et de l'AEPJ, nous nous distinguons par notre attention personnalisée, notre connaissance du marché local et un engagement ferme envers la transparence légale.",

        services_title: "Nos Services",
        service_inmobiliaria: "Immobilier",
        service_inmobiliaria_desc: "Vente d'appartements avec conseil professionnel. Nous accompagnons nos clients à chaque étape de l'achat de leur logement.",
        service_seguros: "Assurances",
        service_seguros_desc: "Protection et tranquillité pour votre maison, vie et entreprise. Conseil personnalisé et gestion intégrale des polices.",
        service_viajes: "Agence de Voyages",
        service_viajes_desc: "Expériences uniques, planifiées pour vous. Nous organisons votre voyage complet avec une attention professionnelle.",
        btn_more_info: "Plus d'informations",

        servicios_hero_title: "Nos Services",
        servicios_hero_subtitle: "Solutions intégrales adaptées à vos besoins",
        servicios_inmo_title: "Immobilier FA GRUP - Barcelone",
        servicios_inmo_subtitle: "Service intégral en achat, vente et location de biens immobiliers à Barcelone. Nous accompagnons nos clients à chaque étape avec professionnalisme et proximité",
        servicios_inmo_feature_1_title: "Évaluation Professionnelle",
        servicios_inmo_feature_1_text: "Analyse détaillée du marché et évaluation précise de votre bien avec des critères techniques et transparents.",
        servicios_inmo_feature_2_title: "Achat Vente",
        servicios_inmo_feature_2_text: "Accompagnement personnalisé tout au long du processus. Nous maximisons la visibilité de votre bien avec des outils numériques",
        servicios_inmo_feature_3_title: "Gestion des Visites",
        servicios_inmo_feature_3_text: "Coordination des visites avec des acheteurs potentiels et négociation professionnelle pour obtenir le meilleur accord.",
        servicios_inmo_feature_5_title: "Conseil Juridique",
        servicios_inmo_feature_5_text: "Gestion complète des contrats, actes et démarches notariales pour une opération sûre et transparente.",
        servicios_inmo_cta: "Consultez nos biens disponibles",
        servicios_seg_title: "Assurances FA GRUP",
        servicios_seg_subtitle: "Protection et tranquillité pour votre maison, votre vie et votre entreprise avec un conseil personnalisé",
        servicios_seg_feature_1_title: "Assurances pour Particuliers",
        servicios_seg_feature_1_text: "Couverture complète pour le logement, l'automobile, la vie et la santé. Nous protégeons ce qui compte le plus pour vous.",
        servicios_seg_feature_2_title: "Comparatif Personnalisé",
        servicios_seg_feature_2_text: "Nous analysons les meilleures options d'assurance avec El Corte Inglés pour trouver la police qui vous convient le mieux",
        servicios_seg_cta: "Demandez votre police personnalisée",
        servicios_viajes_title: "Voyages FA GRUP",
        servicios_viajes_subtitle: "Des expériences uniques, planifiées pour vous. Nous organisons votre voyage complet avec une attention professionnelle",
        servicios_viajes_feature_1_title: "Forfaits Complets",
        servicios_viajes_feature_1_text: "Vol + hôtel + transport + activités. Tout est organisé pour que vous profitiez uniquement de votre voyage.",
        servicios_viajes_feature_2_title: "Réservations Individuelles",
        servicios_viajes_feature_2_text: "Flexibilité totale : réservez seulement le vol, seulement l'hôtel ou seulement les excursions selon vos besoins.",
        servicios_viajes_feature_3_title: "Excursions et Activités",
        servicios_viajes_feature_3_text: "Visites guidées, expériences locales et activités uniques pour rendre votre voyage inoubliable.",
        servicios_viajes_feature_4_title: "Assurances Voyage",
        servicios_viajes_feature_4_text: "Couverture complète et assistance 24/7 pour voyager en toute tranquillité.",
        servicios_viajes_feature_5_title: "Conseil Personnalisé",
        servicios_viajes_feature_5_text: "Itinéraires adaptés à vos préférences, votre budget et votre style de voyage.",
        servicios_viajes_cta: "Planifiez votre voyage avec nous",

        about_title: "À Propos de Nous",
        about_text: "Nous sommes un cabinet de conseil spécialisé dans l'offre de solutions intégrales dans les domaines fiscal, comptable, du travail et stratégique. Notre objectif est d'accompagner les entreprises, les indépendants et les entrepreneurs dans la gestion efficace de leur activité, en apportant clarté et une approche orientée résultats.",
        nos_hero_title: "À Propos de Nous",
        nos_hero_subtitle: "Découvrez qui nous sommes et ce qui nous différencie",
        nos_who_title: "Qui Sommes-Nous",
        nos_who_p1: "FA GRUP est une agence immobilière située à Barcelone, fondée le 11 décembre 2019. Nous sommes spécialisés dans l'offre d'un service intégral dans le secteur immobilier, en accompagnant le client tout au long du processus d'achat, de vente ou de location de biens avec professionnalisme et proximité.",
        nos_who_p2: "Nous disposons d'une équipe de professionnels ayant une grande connaissance du marché immobilier local de Barcelone. Nous analysons chaque cas individuellement afin d'offrir des services adaptés aux besoins réels de chaque client, en garantissant une attention proche, responsable et totalement personnalisée.",
        nos_who_p3: "Depuis notre création en 2019, nous avons accompagné des centaines de clients, transformant une démarche complexe en une expérience fiable et sûre.",
        nos_values_title: "Nos Valeurs",
        nos_value_1_title: "Professionnalisme",
        nos_value_1_text: "Des services de la plus haute qualité, soutenus par l'expérience et une connaissance approfondie du marché immobilier de Barcelone.",
        nos_value_2_title: "Proximité",
        nos_value_2_text: "Attention personnalisée et approche humaine à chaque étape du processus immobilier, en construisant des relations de confiance.",
        nos_value_3_title: "Transparence",
        nos_value_3_text: "Communication claire et honnête dans toutes les opérations, garantissant la sécurité de chaque transaction.",
        nos_value_4_title: "Engagement envers le Client",
        nos_value_4_text: "Accompagnement intégral tout au long du processus d'achat, de vente ou de location de votre bien.",
        nos_why_title: "Pourquoi Nous Choisir",
        nos_diff_1_title: "Solutions Intégrales :",
        nos_diff_1_text: "Nous offrons des services complets en conseil aux entreprises, immobilier, assurances et voyages au sein d'une seule entreprise.",
        nos_diff_2_title: "Attention Personnalisée :",
        nos_diff_2_text: "Chaque client reçoit un accompagnement individualisé adapté à ses besoins spécifiques.",
        nos_diff_3_title: "Équipe Pluridisciplinaire :",
        nos_diff_3_text: "Des professionnels spécialisés dans différents domaines, travaillant de manière coordonnée.",
        nos_diff_4_title: "Expérience Confirmée :",
        nos_diff_4_text: "Des années d'expérience au service des entreprises et des particuliers dans leurs projets.",
        nos_diff_5_title: "Engagement envers l'Excellence :",
        nos_diff_5_text: "Amélioration continue et mise à jour constante des connaissances et des procédures.",
        btn_read_more: "En savoir plus",

        companies_title: "Entreprises Associées",
        companies_intro: "Dans l'objectif d'offrir un service global, nous élargissons nos services en tant que conseil aux entreprises, proposant des solutions intégrales dans les domaines fiscal, comptable, social et stratégique. Notre objectif est d'accompagner les entreprises, les indépendants et les entrepreneurs dans la gestion efficace de leur activité, en apportant clarté et une approche orientée résultats.",
        company_fa_asesoria: "FA Conseil Global",
        company_fa_desc: "Services d'avocats, conseil juridique. Spécialistes en droit pénal, du travail, de la famille, civil et administratif.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Entreprises, culture, tourisme et affaires. Solutions intégrales pour le développement entrepreneurial et culturel.",
        btn_visit_web: "Visiter le site",

        contact_hero_title: "Spécialistes qui comprennent l'art de la Vente",
        contact_question: "Vous cherchez votre logement idéal à Barcelone? Contactez-nous et nous vous accompagnerons tout au long du processus.",
        contact_phone: "Téléphone",
        contact_email: "Email",
        contact_address: "Adresse",
        btn_send_query: "Envoyez-nous votre demande",

        contact_hero_subtitle: "Nous sommes là pour vous aider. Contactez-nous et nous vous répondrons dans les plus brefs délais",
        contact_info_title: "Informations de Contact",
        contact_phone_title: "Téléphone",
        contact_phone_hours: "Lundi à Vendredi : 9h00 - 18h00",
        contact_email_title: "Email",
        contact_email_legal: "(Consultations juridiques)",
        contact_whatsapp_send: "Envoyer un message",
        contact_whatsapp_desc: "Réponse rapide et directe",
        contact_address_title: "Adresse",
        contact_form_title: "Envoyez-nous votre Demande",
        contact_form_name: "Nom complet",
        contact_form_phone: "Téléphone",
        contact_form_service: "Service d'intérêt",
        contact_form_select: "Sélectionnez un service",
        contact_form_message: "Message",
        contact_privacy_info: "Responsable : FA GRUP. Finalité : répondre à votre demande. Base juridique : consentement et mesures précontractuelles. Droits : accès, rectification, suppression et autres droits RGPD à fagrupinmobiliaria@gmail.com.",
        contact_consent_prefix: "J'ai lu et j'accepte la ",
        contact_consent_and: " et les ",
        contact_consent_error: "Vous devez accepter la Politique de Confidentialité et les Mentions Légales pour envoyer le formulaire.",
        contact_form_submit: "Envoyer la demande",
        contact_map_title: "Notre Emplacement",

        cookie_title: "Politique de cookies",
        cookie_message: "Nous utilisons des cookies techniques nécessaires et, uniquement avec votre consentement, des cookies d'analyse ou de personnalisation.",
        cookie_accept: "Accepter",
        cookie_reject: "Refuser",
        cookie_config: "Voir la politique de confidentialite",

    // Ajouts internationaux
    feature_international_title: "Immobilier International",
    feature_international_desc: "Connexion stratégique entre les marchés. Nous offrons des services immobiliers spécialisés à la fois à Barcelone et en Équateur, avec un accompagnement complet dans les deux pays.",
    faq_title: "Questions Fréquentes",
    faq_q1: "Quels services propose FA GRUP ?",
    faq_q2: "Comment puis-je demander une consultation ?",
    faq_q3: "Travaillez-vous uniquement à Barcelone ?",
    faq_q4: "De quels documents ai-je besoin pour vendre un bien immobilier ?",
    faq_services_international: "Nous proposons des services immobiliers, des assurances et une agence de voyages en Catalogne et en Équateur, avec un accompagnement complet et personnalisé.",
    faq_a2: "Vous pouvez nous contacter depuis la page de contact et nous vous répondrons dans les plus brefs délais.",
    faq_focus_international: "Notre activité se concentre principalement sur le marché de la Catalogne et de l'Équateur, avec la capacité de gérer et d'évaluer des projets dans d'autres localisations internationales.",
    faq_a4: "Nous vous guidons sur la documentation nécessaire et vous accompagnons tout au long du processus.",

        testimonials_title: "Que pensent-ils de nous?",
        testimonial_1: "\"Service excellent et tres proche. Ils nous ont aides a chaque etape.\"",
        testimonial_1_author: "- Laura M.",
        testimonial_2: "\"Professionnels et transparents. Je recommande FA GRUP a 100%.\"",
        testimonial_2_author: "- Carlos R.",
        testimonial_3: "\"Gestion rapide et conseils clairs. Tout a ete simple.\"",
        testimonial_3_author: "- Ana P.",
        btn_more_reviews: "Voir plus d'avis",

        social_title: "Suivez-nous sur les Réseaux Sociaux",

        footer_slogan: "Solutions intégrales pour entreprises et particuliers",
        footer_services: "Services",
        footer_company: "Entreprise",
        footer_contact: "Contact",
        footer_legal: "Mentions Légales",
        footer_privacy: "Politique de Confidentialité",
        footer_rights: "Tous droits réservés",

        footer_link_inmobiliaria: "Immobilier",
        footer_link_seguros: "Assurances",
        footer_link_viajes: "Agence de Voyage",
        footer_link_about: "À Propos de Nous",
        footer_link_contact: "Contact",

        legal_hero_title: "Département Juridique",
        legal_hero_subtitle: "FA Conseil Global - Conseil juridique intégral",
        legal_intro_title: "Services du Département Juridique",
        legal_intro_p1: "Chez FA Conseil, nous offrons un conseil et une représentation juridique intégrale dans plusieurs domaines du droit. Notre équipe de professionnels spécialisés garantit un service personnalisé, efficace et orienté vers la protection de vos intérêts.",
        legal_intro_p2: "Nous travaillons avec des méthodologies actualisées, en respectant toutes les réglementations en vigueur et en garantissant un accompagnement sûr, professionnel et transparent à chaque procédure.",
        legal_section1_title: "Droit Pénal, du Travail et de la Famille",
        legal_section1_subtitle: "Défense spécialisée et accompagnement dans les procédures juridiques complexes",

        privacy_title: "Politique de Confidentialité",
        privacy_subtitle: "FA GRUP - Protection des Données Personnelles",
        privacy_last_update: "Dernière mise à jour : 4 février 2026",
        privacy_section1_title: "1. Responsable du Traitement",
        privacy_section2_title: "2. Données que Nous Collectons",
        privacy_section3_title: "3. Finalité du Traitement",
        privacy_section4_title: "4. Base Juridique du Traitement",
        privacy_section5_title: "5. Destinataires des Données",
        privacy_section6_title: "6. Conservation des Données",
        privacy_section7_title: "7. Droits de l'Utilisateur",
        privacy_section8_title: "8. Sécurité des Données",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modifications",
        privacy_section11_title: "11. Réclamations",
        privacy_section12_title: "12. Contact",

        // Privacy page content
        privacy_section1_intro: "FA GRUP, domiciliée à Avenida Josep Tarradellas 134 bajos, 08029 Barcelone, Espagne, est responsable du traitement des données personnelles que vous nous fournissez.",
        privacy_contact_label: "Contact :",
        privacy_email_label: "Email :",
        privacy_phone_label: "Téléphone :",
        
        privacy_section2_intro: "FA GRUP peut collecter les types de données personnelles suivants :",
        privacy_data_identification: "Données d'identification :",
        privacy_data_identification_desc: "Nom, prénoms, DNI/NIE",
        privacy_data_contact: "Données de contact :",
        privacy_data_contact_desc: "Adresse e-mail, numéro de téléphone, adresse postale",
        privacy_data_navigation: "Données de navigation :",
        privacy_data_navigation_desc: "Adresse IP, type de navigateur, pages visitées",
        privacy_data_services: "Données relatives aux services :",
        privacy_data_services_desc: "Informations sur les propriétés d'intérêt, préférences de recherche",
        
        privacy_section3_intro: "Les données personnelles collectées seront traitées aux fins suivantes :",
        privacy_purpose_1: "Gestion des demandes de renseignements et des demandes d'informations",
        privacy_purpose_2: "Prestation de services immobiliers, d'assurance et de voyage",
        privacy_purpose_3: "Envoi de communications commerciales sur nos services (avec votre consentement préalable)",
        privacy_purpose_4: "Respect des obligations légales et contractuelles",
        privacy_purpose_5: "Amélioration de nos services et de l'expérience utilisateur",
        
        privacy_section4_intro: "Le traitement de vos données personnelles est basé sur :",
        privacy_legal_consent: "Consentement :",
        privacy_legal_consent_desc: "Pour l'envoi de communications commerciales",
        privacy_legal_contract: "Exécution du contrat :",
        privacy_legal_contract_desc: "Pour la prestation des services demandés",
        privacy_legal_legitimate: "Intérêt légitime :",
        privacy_legal_legitimate_desc: "Pour la gestion et l'amélioration de nos services",
        privacy_legal_obligation: "Obligation légale :",
        privacy_legal_obligation_desc: "Pour se conformer aux réglementations applicables",
        
        privacy_section5_intro: "Vos données personnelles peuvent être communiquées à :",
        privacy_recipient_1: "Les entreprises associées du groupe FA GRUP pour la prestation de services",
        privacy_recipient_2: "Les prestataires de services technologiques et de stockage",
        privacy_recipient_3: "Les administrations publiques si requis par la loi",
        privacy_recipient_4: "Les entités financières pour la gestion des paiements",
        privacy_no_international: "Nous n'effectuons pas de transferts internationaux de données en dehors de l'Espace économique européen.",
        
        privacy_section6_p1: "Les données personnelles seront conservées aussi longtemps que nécessaire pour atteindre les objectifs pour lesquels elles ont été collectées et, par la suite, pendant les délais de prescription légale applicables.",
        privacy_section6_p2: "En l'absence d'obligation légale, les données seront conservées tant que vous ne demanderez pas leur suppression et tant qu'il existera une base légitime pour leur traitement.",
        
        privacy_section7_intro: "En tant que titulaire des données personnelles, vous avez le droit à :",
        privacy_right_access: "Accès :",
        privacy_right_access_desc: "Connaître les données que nous traitons vous concernant",
        privacy_right_rectify: "Rectification :",
        privacy_right_rectify_desc: "Demander la correction des données inexactes",
        privacy_right_delete: "Suppression :",
        privacy_right_delete_desc: "Demander la suppression de vos données",
        privacy_right_object: "Objection :",
        privacy_right_object_desc: "S'opposer au traitement de vos données",
        privacy_right_limit: "Limitation :",
        privacy_right_limit_desc: "Demander la limitation du traitement",
        privacy_right_portability: "Portabilité :",
        privacy_right_portability_desc: "Recevoir vos données dans un format structuré",
        privacy_right_withdraw: "Retrait du consentement :",
        privacy_right_withdraw_desc: "Retirer votre consentement à tout moment",
        privacy_section7_p2: "Pour exercer ces droits, vous pouvez nous contacter via :",
        privacy_section7_contact_email: "Email :",
        privacy_section7_contact_address: "Adresse postale :",
        
        privacy_section8: "FA GRUP a mis en place des mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles et les protéger contre les accès non autorisés, la perte, la destruction ou l'altération.",
        
        privacy_section9_p1: "Ce site utilise des cookies techniques nécessaires à son fonctionnement et, le cas échéant, des cookies analytiques ou de personnalisation uniquement si vous les acceptez.",
        privacy_section9_p2: "En accédant au site, vous pouvez accepter ou refuser les cookies non essentiels via la banneau de consentement. Vous pouvez également modifier votre choix en supprimant les cookies de votre navigateur et en rechargeant la page.",
        privacy_section9_p3: "Types de cookies que nous pouvons utiliser :",
        privacy_cookie_technical: "Techniques (nécessaires) :",
        privacy_cookie_technical_desc: "Permettent les fonctionnalités de base du site et ne nécessitent pas de consentement.",
        privacy_cookie_analytics: "Analytiques :",
        privacy_cookie_analytics_desc: "Nous aident à comprendre l'utilisation du site de manière agrégée pour améliorer nos services.",
        privacy_cookie_preferences: "Préférences :",
        privacy_cookie_preferences_desc: "Mémorisent certaines options de l'utilisateur pour améliorer l'expérience.",
        privacy_section9_p4: "Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. Notez que dans ce cas, certaines fonctionnalités du site pourraient ne pas fonctionner correctement.",
        
        privacy_section10: "FA GRUP se réserve le droit de modifier cette Politique de Confidentialité pour l'adapter aux changements législatifs ou à nos services. Nous vous recommandons de consulter régulièrement cette page.",
        
        privacy_section11: "Si vous considérez que le traitement de vos données personnelles ne respecte pas la réglementation, vous avez le droit de déposer une plainte auprès de l'Agence Espagnole de Protection des Données (www.aepd.es).",
        
        privacy_section12_intro: "Pour toute question concernant cette Politique de Confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :",
        privacy_section12_address: "Adresse :",

        aviso_page_title: "Mentions Légales - FA GRUP",
        aviso_title: "Mentions Légales",
        aviso_subtitle: "Informations légales et conditions d'utilisation du site web de FA GRUP",
        aviso_last_update: "Dernière mise à jour : 16 mars 2026",
        aviso_section1_title: "1. Données d'identification du titulaire du site web",
        aviso_section1_p1: "Conformément à la Loi 34/2002 du 11 juillet relative aux Services de la Société de l'Information et au Commerce Électronique (LSSI-CE), il est indiqué que le titulaire du présent site web est :",
        aviso_holder_label: "Titulaire :",
        aviso_address_label: "Adresse :",
        aviso_section2_title: "2. Objet",
        aviso_section2_p1: "Les présentes mentions légales régissent l'accès, la navigation et l'utilisation du site web de FA GRUP, ainsi que les responsabilités découlant de l'utilisation de ses contenus (textes, images, designs, code, documentation et tout autre matériel).",
        aviso_section3_title: "3. Conditions d'utilisation",
        aviso_section3_p1: "L'accès à ce site web confère la qualité d'utilisateur et implique l'acceptation pleine et entière des dispositions incluses dans les présentes mentions légales.",
        aviso_section3_li1: "L'utilisateur s'engage à faire un usage approprié et licite du site web et de ses contenus.",
        aviso_section3_li2: "Il est interdit de réaliser des activités illicites, frauduleuses ou contraires à la bonne foi et à l'ordre public.",
        aviso_section3_li3: "FA GRUP se réserve le droit de modifier, à tout moment et sans préavis, la présentation et la configuration du site web, ainsi que les présentes mentions légales.",
        aviso_section4_title: "4. Propriété intellectuelle et industrielle",
        aviso_section4_p1: "Tous les contenus du site web (y compris, sans limitation, textes, photographies, graphiques, icônes, logiciels, design graphique et code source) sont la propriété de FA GRUP ou de tiers ayant autorisé leur utilisation.",
        aviso_section4_p2: "La reproduction, distribution, communication publique, transformation ou toute autre forme d'exploitation, totale ou partielle, est interdite sans autorisation expresse et écrite du titulaire correspondant.",
        aviso_section5_title: "5. Responsabilité",
        aviso_section5_p1: "FA GRUP ne garantit pas la disponibilité continue ni l'absence d'erreurs dans l'accès au site web, bien qu'elle adopte des mesures raisonnables pour les éviter, les corriger ou les mettre à jour lorsque cela est nécessaire.",
        aviso_section5_p2: "FA GRUP ne saurait être tenue responsable des dommages ou préjudices découlant de l'utilisation du site web, ni des actions réalisées sur la base des informations qui y figurent.",
        aviso_section6_title: "6. Liens externes",
        aviso_section6_p1: "Ce site web peut contenir des liens vers des pages de tiers. FA GRUP n'assume aucune responsabilité concernant les contenus, politiques ou pratiques de ces sites externes.",
        aviso_section7_title: "7. Protection des données personnelles",
        aviso_section7_p1: "Le traitement des données personnelles est effectué conformément à la réglementation en vigueur et à notre ",
        aviso_privacy_link: "Politique de Confidentialité",
        aviso_section8_title: "8. Politique de cookies",
        aviso_section8_p1: "Ce site web utilise des cookies pour améliorer l'expérience de navigation. Vous pouvez consulter plus d'informations dans la section cookies de notre ",
        aviso_section9_title: "9. Législation applicable et juridiction",
        aviso_section9_p1: "Les présentes conditions sont régies par la législation espagnole. Pour la résolution de tout litige pouvant survenir en relation avec ce site web, les parties se soumettent aux tribunaux de Barcelone, sauf disposition contraire de la réglementation applicable.",
        aviso_section10_title: "10. Contact",
        aviso_section10_p1: "Pour toute question relative aux présentes mentions légales, vous pouvez contacter FA GRUP à :",
        aviso_email_label: "Email :",
        aviso_phone_label: "Téléphone :",
        aviso_contact_address_label: "Adresse :",

        // ── Suelo Lleida ──
        sl_kicker: "FA GRUP · Investissement Immobilier",
        sl_hero_title: "Opportunité Stratégique Foncière<br><span>Lleida – Carrer Eugeni d'Ors</span>",
        sl_hero_lead: "Actif immobilier premium à usage mixte (tertiaire et résidentiel). Positionnement privilégié sur l'un des axes structurants de Lleida.",
        sl_badge_1: "1 849 m² de terrain",
        sl_badge_2: "2 939 m² développés",
        sl_badge_3: "Environnement hospitalier",
        sl_badge_4: "~532 000 €/an",
        sl_btn_dossier: "Demander le dossier confidentiel",
        sl_btn_bcase: "Voir le Business Case",
        sl_eye_urban: "<i class=\"fas fa-map-marked-alt\"></i> Urbanisme",
        sl_title_urban: "Cadre Urbanistique et Paramètres Clés",
        sl_desc_urban: "Situé sur l'un des axes les plus structurants de Lleida, à proximité d'un pôle hospitalier de référence. Un environnement urbain consolidé avec une sécurité juridique totale.",
        sl_param_1: "Constructibilité nette",
        sl_param_2: "Emprise maximale (40%)",
        sl_param_3: "Zonage SUC – Sol Urbà Consolidat",
        sl_param_4_val: "Mixte",
        sl_param_4: "Résidentiel + tertiaire rez-de-chaussée",
        sl_tip_urban: "Un cadre normatif clair permettant une structuration rapide et sécurisée de l'opération.",
        sl_eye_dev: "<i class=\"fas fa-layer-group\"></i> Développement",
        sl_title_dev: "Scénario de Développement",
        sl_desc_dev: "Une étude technique certifiée permet de projeter une opération optimisée, avec possibilité d'ajustement du <em>mix</em> selon la stratégie d'exploitation finale.",
        sl_th_uso: "Usage",
        sl_th_superficie: "Surface estimée",
        sl_row_terciario: "Tertiaire / Bureaux",
        sl_row_residencial: "Résidentiel / Apart-hôtel",
        sl_row_parking: "Parking (sous-sol)",
        sl_row_parking_val: "~20–24 places · ~734 m²",
        sl_row_total: "Surface totale développée",
        sl_eye_fin: "<i class=\"fas fa-coins\"></i> Financier",
        sl_title_bcase: "Business Case – Projection des Revenus",
        sl_th_seg: "Segment",
        sl_th_hip: "Hypothèse d'exploitation",
        sl_th_ing: "Revenus estimés",
        sl_biz_t_label: "Tertiaire",
        sl_biz_t_hip: "Activités médicales / Services spécialisés",
        sl_biz_a_label: "Hébergement",
        sl_biz_a_hip: "Apart-hôtel (80% d'occupation – 49 €/nuit)",
        sl_biz_p_label: "Parking",
        sl_biz_p_hip: "Location mixte (courte et longue durée)",
        sl_biz_total: "Total brut",
        sl_eye_strat: "<i class=\"fas fa-chart-pie\"></i> Stratégie",
        sl_title_thesis: "Thèse d'Investissement",
        sl_th1_title: "Diversification des revenus",
        sl_th1_desc: "Combinaison de loyers tertiaires, hospitality et parking pour une base de revenus robuste et diversifiée.",
        sl_th2_title: "Demande structurelle",
        sl_th2_desc: "Liée à l'environnement hospitalier et sanitaire de référence, avec des flux constants et prévisibles.",
        sl_th3_title: "Forte résilience",
        sl_th3_desc: "Loyers à haute résistance aux cycles économiques grâce à l'ancrage dans les services essentiels de santé.",
        sl_th4_title: "Gestion active",
        sl_th4_desc: "Potentiel d'<em>asset management</em> actif, adaptable aux stratégies Core+ ou Value-add.",
        sl_tip_thesis: "Positionnement adapté aux stratégies d'investissement <strong>Core+</strong> ou <strong>Value-add</strong>.",
        sl_eye_market: "<i class=\"fas fa-globe-europe\"></i> Marché",
        sl_title_market: "Marché et Localisation",
        sl_desc_market: "Lleida, capitale de la comarca du Segrià, combine un tissu économique consolidé avec une forte présence de services de santé et de formation supérieure.",
        sl_stat_1: "Habitants à Lleida",
        sl_stat_2: "Zone d'influence (comarca du Segrià)",
        sl_stat_3: "Moteurs de demande : santé, formation et services professionnels",
        sl_eye_keys: "<i class=\"fas fa-key\"></i> Pour l'Investisseur",
        sl_title_keys: "Points Clés",
        sl_key_1: "<strong>Sécurité juridique et technique</strong> — Actif avec documentation et étude technique certifiées, sans contingences urbanistiques.",
        sl_key_2: "<strong>Forte liquidité locative</strong> — Zone avec une demande constante de bureaux et d'hébergement liée au secteur sanitaire.",
        sl_key_3: "<strong>Évolutivité et flexibilité</strong> du projet architectural selon la stratégie de l'investisseur.",
        sl_key_4: "<strong>Visibilité claire</strong> sur les revenus futurs, avec des hypothèses conservatrices et documentées.",
        sl_cta_eyebrow: "Contact confidentiel",
        sl_cta_title: "Accès pour les Investisseurs",
        sl_cta_desc: "Dossier technique complet, étude de faisabilité et data room disponibles sur demande. Échanges confidentiels avec notre équipe d'investissement.",
        sl_btn_contact: "Nous contacter",
        sl_conf_text: "<strong>Conditions financières disponibles sur consultation.</strong> Une analyse détaillée sera fournie, incluant les projections de rendement et les scénarios d'exploitation, dans un cadre strictement confidentiel.",
        sl_map_title: "Vue aérienne interactive",
        sl_map_subtitle: "Ville de Lleida → Carrer Eugeni d'Ors",
        sl_map_fallback: "Chargement de la carte interactive...",
        sl_map_step_city: "Ville",
        sl_map_step_district: "Quartier",
        sl_map_step_hospital: "Eugeni d'Ors",
        sl_map_step_plot: "Terrain",

        // ── Lugar Eventos ──
        le_page_title: "Palais Almunia de San Juan | FA GRUP",
        le_kicker: "FA GRUP Signature Places",
        le_hero_title: "Palais Almunia de San Juan",
        le_hero_lead: "Là où vos moments deviennent un héritage. Lieu singulier dédié aux événements de prestige, où élégance et histoire se rencontrent.",
        le_btn_private_visit: "Organiser une visite privée",
        le_btn_imagine_event: "Imaginer votre événement au Palais",
        le_btn_how_to_arrive: "Voir comment arriver",
        le_floating_contact: "Contactez-nous",
        le_intro_title: "Une expérience hors du temps",
        le_intro_p1: "Bienvenue dans un lieu où le temps s'arrête. Situé dans un environnement naturel privilégié, le Palais combine patrimoine, intimité et sophistication.",
        le_intro_p2: "Chaque pierre raconte une histoire. Chaque lumière sublime un instant. Chaque événement devient une expérience inoubliable.",
        le_intro_p3: "Pour préserver son caractère exclusif, le Palais accueille un nombre limité d'événements par an, garantissant une privatisation totale et une attention entièrement personnalisée.",
        le_fact_1_title: "Capacité recommandée",
        le_fact_1_text: "Jusqu'à 180 convives en format banquet et configurations flexibles pour des événements plus intimistes.",
        le_fact_2_title: "Plan B météo",
        le_fact_2_text: "Alternative intérieure élégante prête à maintenir l'expérience si les conditions météorologiques changent.",
        le_fact_3_title: "Environnement historique",
        le_fact_3_text: "Architecture seigneuriale de caractère, intégrée dans un paysage naturel avec un héritage séculaire.",
        le_universes_title: "Nos univers",
        le_universe_1_title: "💍 Mariages et cérémonies",
        le_universe_1_text: "Imaginez une cérémonie sous des arbres centenaires, suivie d'un dîner élégant à la lueur des bougies dans un salon chargé d'histoire. Chaque détail est conçu pour donner vie à un moment unique, sur mesure.",
        le_universe_1_btn: "Demander des informations",
        le_universe_2_title: "🎬 Tournages et séances photo",
        le_universe_2_text: "Un environnement architectural authentique, une lumière naturelle exceptionnelle et des espaces polyvalents font du Palais le décor idéal pour des productions cinématographiques, campagnes de mode ou projets créatifs.",
        le_universe_2_btn: "Demander des informations",
        le_universe_3_title: "💼 Événements d'entreprise",
        le_universe_3_text: "Offrez à vos équipes et partenaires un cadre inspirant, propice à la créativité et à l'excellence. Séminaires, lancements ou réceptions prennent ici une dimension unique.",
        le_universe_3_btn: "Demander des informations",
        le_domain_title: "Le domaine",
        le_domain_1_title: "<span class=\"icon-bullet\">🏰</span>Architecture de caractère",
        le_domain_1_text: "Salons historiques restaurés avec une atmosphère noble pour des célébrations haut de gamme.",
        le_domain_2_title: "<span class=\"icon-bullet\">🌳</span>Parc centenaire",
        le_domain_2_text: "Un environnement naturel exceptionnel pour des cérémonies en plein air et des réceptions mémorables.",
        le_domain_3_title: "<span class=\"icon-bullet\">🔐</span>Privatisation exclusive",
        le_domain_3_text: "L'ensemble du domaine est réservé pour chaque événement, avec une intimité maximale et un contrôle total de l'expérience.",
        le_signature_title: "Services Signature",
        le_signature_1_title: "Suites privées",
        le_signature_1_text: "Des espaces élégants pour prolonger l'expérience dans un cadre intime et raffiné.",
        le_signature_2_title: "Orchestration sur mesure",
        le_signature_2_text: "Une équipe dédiée conçoit et coordonne chaque détail pour que chaque instant reflète votre vision.",
        le_signature_3_title: "Expériences gastronomiques",
        le_signature_3_text: "Collaborations avec des traiteurs de prestige pour sublimer chaque célébration et surprendre vos invités.",
        le_gallery_title: "Galerie",
        le_gallery_subtitle: "Découvrez en images l'atmosphère du Palais : moments suspendus, lumières dorées et émotions partagées.",
        le_gallery_1: "Mariages",
        le_gallery_2: "Lumière dorée au coucher du soleil",
        le_gallery_3: "Décors pour des histoires uniques",
        le_gallery_5: "Élégance et héritage",
        le_quick_location: "Localisation",
        le_quick_location_value: "Almunia de San Juan",
        le_quick_region_value: "Aragon, Espagne",
        le_quick_capacity: "Capacité",
        le_quick_capacity_value: "Jusqu'à 180",
        le_quick_guests: "invités",
        le_quick_formats: "Formats",
        le_quick_formats_list: "Mariages • Tournages • Événements d'entreprise",
        le_quick_privacy: "Privatisation",
        le_quick_privacy_value: "Exclusive",
        le_quick_visit: "Demander une visite privée",
        le_quick_availability: "Consulter la disponibilité",
        le_trust_title: "Témoignages",
        le_testimonial_1_quote: "«Le Palais a dépassé toutes nos attentes. Chaque détail était parfait, de la décoration à la gastronomie. Nos invités n'ont pas cessé de parler de la beauté du lieu.»",
        le_testimonial_1_author: "Maria & José",
        le_testimonial_1_event: "Mariage - 150 invités",
        le_testimonial_2_quote: "«En tant que productrice audiovisuelle, nous avons trouvé au Palais un décor unique. La lumière, l'architecture, les espaces polyvalents... tout ce dont nous avions besoin pour une production de haute qualité.»",
        le_testimonial_2_author: "Sandra Martínez",
        le_testimonial_2_event: "Production audiovisuelle - 3 jours de tournage",
        le_testimonial_3_quote: "«Notre événement d'entreprise au Palais a été un véritable succès. L'équipe a été attentive, les espaces inspirants et l'expérience mémorable. Nous recommencerions sans hésiter.»",
        le_testimonial_3_author: "David López, PDG",
        le_testimonial_3_event: "Événement d'entreprise - 120 participants",
        le_gallery_caption_stairs: "Mariage dans l'escalier",
        le_gallery_caption_garden_wedding: "Mariage dans le jardin",
        le_gallery_caption_palace_night: "Nuit au palais",
        le_gallery_caption_golden_setting: "Décor doré",
        le_gallery_caption_indoor_pool: "Piscine intérieure",
        le_gallery_caption_palace_view: "Palais",
        le_gallery_caption_palace_terrace: "Terrasse du palais",
        le_gallery_caption_palace_view_alt: "Vue du palais",
        le_gallery_caption_patio_view: "Vue de la cour",
        le_gallery_caption_palace_park: "Parc du palais",
        le_gallery_caption_garden_fountain: "Jardin avec fontaine",
        le_gallery_caption_palace_park_alt: "Parc du palais",
        le_gallery_caption_wedding_patio: "Cour de mariage",
        le_gallery_caption_unique_moment: "Un moment unique",
        le_gallery_caption_palace_detail: "Détail du palais",
        le_gallery_caption_library: "Bibliothèque du palais",
        bv_page_title: "Bien en Vente - FA GRUP",
        bv_badge: "Maison a vendre",
        bv_h1: "Maison ou chalet independant a vendre a El Vendrell - Tarragona",
        bv_hero_desc: "El Vendrell. Belle maison individuelle dans la zone de Mas Borras avec de nombreux extras et piscine d'eau salee.",
        bv_summary_title: "Resume du bien",
        bv_price: "880.000 EUR",
        bv_meta_location: "El Vendrell - Tarragona",
        bv_meta_area: "250 m2 construits",
        bv_meta_rooms: "4 ch.",
        bv_meta_garage: "Garage inclus",
        bv_meta_price_m2: "3.520 EUR/m2",
        bv_feat_area: "250 m2 construits, 230 m2 utiles",
        bv_feat_rooms: "4 chambres",
        bv_feat_baths: "3 salles de bain",
        bv_feat_terrace: "Terrasse et balcon",
        bv_feat_garage: "Place de garage incluse",
        bv_feat_condition: "Occasion / bon etat",
        bv_feat_closets: "Armoires encastrees",
        bv_feat_orientation: "Orientation sud",
        bv_feat_pool: "Piscine",
        bv_feat_energy: "Certificat energetique: non indique",
        bv_desc_title: "Description",
        bv_desc_text: "Belle maison individuelle dans la zone de Mas Borras, a El Vendrell, avec de nombreux extras et piscine d'eau salee.",
        bv_data_title: "Donnees de l'annonce",
        bv_data_updated: "Annonce mise a jour il y a plus d'un an",
        bv_data_price: "Prix du bien: 880.000 EUR",
        bv_data_price_m2: "Prix par m2: 3.520 EUR/m2",
        bv_data_location: "Localisation: Mas Borras, El Vendrell",
        bv_btn_info: "Demander des informations",
        bv_photos_title: "Photos de l'annonce",
        bv_photos_list_title: "Liste des photos disponibles",
        bv_photo_1: "Piscine",
        bv_photo_2: "Terrasse",
        bv_photo_3: "Piscine (deuxieme vue)",
        bv_photo_4: "Vue generale de la maison",
        bv_photo_5: "7 photos supplementaires dans l'annonce originale",
        bv_error_text: "Y a-t-il une erreur dans cette annonce? Signalez-la pour aider les autres personnes.",
        le_access_title: "Comment arriver",
        le_access_subtitle: "Accès au domaine",
        le_access_text: "Partagez votre date de visite et nous vous enverrons des indications personnalisées d'accès et de stationnement pour garantir une arrivée fluide.",
        le_access_car: "Arrivée en voiture avec zone de réception privée",
        le_access_route: "Itinéraire exact disponible lors de la confirmation de la visite",
        le_booking_title: "Réservez votre expérience",
        le_booking_desc: "Remplissez le formulaire ci-dessous et notre équipe vous contactera pour coordonner votre visite privée ou vous présenter une proposition personnalisée.",
        le_booking_subtitle: "Demande de disponibilité et proposition personnalisée",
        le_form_name: "Prénom",
        le_form_lastname: "Nom",
        le_form_type: "Type d'événement",
        le_form_type_opt_0: "Sélectionnez une option",
        le_form_type_opt_1: "Mariage ou cérémonie",
        le_form_type_opt_2: "Tournage ou séance photo",
        le_form_type_opt_3: "Événement d'entreprise",
        le_form_type_opt_4: "Autre",
        le_form_preferred_date: "Date préférée",
        le_form_email: "Email",
        le_form_phone: "Téléphone",
        le_form_guests: "Nombre d'invités",
        le_form_guests_ph: "Ex. : 120",
        le_form_details: "Détails du projet",
        le_form_details_ph: "Partagez le style d'événement, les besoins spécifiques ou les idées clés.",
        le_form_legal: "Responsable : FA GRUP. Finalité : gérer votre demande et fournir des informations commerciales sur le Palais. Base légale : consentement de la personne concernée.",
        le_form_consent: "J'ai lu et j'accepte la <a href=\"privacidad.html\">Politique de Confidentialité</a> et l'<a href=\"aviso-legal.html\">Avis Légal</a>.",
        le_form_submit: "Envoyer la demande"
    },

    en: {
        nav_inicio: "Home",
        nav_servicios: "Services",
        nav_nosotros: "About Us",
        nav_empresas: "Associated Companies",
        nav_legal: "Legal Department",
        nav_contacto: "Contact",

        hero_title: "FA GRUP - Real Estate in Barcelona",
        hero_slogan: "Always with You",
        carousel_viaje: "TRAVEL",
        carousel_seguros: "INSURANCE",
        carousel_mision: "OUR MISSION<br>REAL ESTATE SUCCESS WITH SECURITY AND PROXIMITY.",
        carousel_vision: "VISION<br>BECOME THE LEADING REAL ESTATE AGENCY, RECOGNIZED FOR PROXIMITY, TRUST AND INTEGRAL EXCELLENCE.",
        carousel_siemprecontigo: "ALWAYS WITH YOU",
        hero_subtitle: "Your trusted real estate agency in Barcelona. Professional and close support in buying, selling and renting",
        btn_contact: "Contact Us",

        intro_title: "What is FA GRUP?",
        intro_text: "FA GRUP is a Barcelona real estate agency founded in 2019, specialized in offering a comprehensive service in the real estate sector. We accompany clients through all stages of buying, selling or renting with professionalism and proximity. As members of AICAT and AEPJ, we distinguish ourselves by our personalized attention, knowledge of the local market and a strong commitment to legal transparency.",

        services_title: "Our Services",
        service_inmobiliaria: "Real Estate",
        service_inmobiliaria_desc: "Sale of apartments with professional advice. We accompany our clients at every step of purchasing their home.",
        service_seguros: "Insurance",
        service_seguros_desc: "Protection and peace of mind for your home, life and business. Personalized advice and comprehensive policy management.",
        service_viajes: "Travel Agency",
        service_viajes_desc: "Unique experiences, planned for you. We organize your complete trip with professional attention.",
        btn_more_info: "More information",

        servicios_hero_title: "Our Services",
        servicios_hero_subtitle: "Comprehensive solutions tailored to your needs",
        servicios_inmo_title: "FA GRUP Real Estate - Barcelona",
        servicios_inmo_subtitle: "Comprehensive service for buying, selling and renting properties in Barcelona. We support our clients every step of the way with professionalism and closeness",
        servicios_inmo_feature_1_title: "Professional Valuation",
        servicios_inmo_feature_1_text: "Detailed market analysis and accurate valuation of your property using technical and transparent criteria.",
        servicios_inmo_feature_2_title: "Buying and Selling",
        servicios_inmo_feature_2_text: "Personalized support throughout the whole process. We maximize your property's visibility with digital tools",
        servicios_inmo_feature_3_title: "Visit Management",
        servicios_inmo_feature_3_text: "Coordination of viewings with potential buyers and professional negotiation to achieve the best agreement.",
        servicios_inmo_feature_5_title: "Legal Advisory",
        servicios_inmo_feature_5_text: "Complete management of contracts, deeds and notarial procedures for a safe and transparent transaction.",
        servicios_inmo_cta: "Check our available properties",
        servicios_seg_title: "FA GRUP Insurance",
        servicios_seg_subtitle: "Protection and peace of mind for your home, life and business with personalized advice",
        servicios_seg_feature_1_title: "Insurance for Individuals",
        servicios_seg_feature_1_text: "Full coverage for home, car, life and health. We protect what matters most to you.",
        servicios_seg_feature_2_title: "Personalized Comparison",
        servicios_seg_feature_2_text: "We analyze the best insurance options with El Corte Inglés to find the policy that best fits you",
        servicios_seg_cta: "Request your personalized policy",
        servicios_viajes_title: "FA GRUP Travel",
        servicios_viajes_subtitle: "Unique experiences planned for you. We organize your complete trip with professional care",
        servicios_viajes_feature_1_title: "Complete Packages",
        servicios_viajes_feature_1_text: "Flight + hotel + transport + activities. Everything organized so you can just enjoy your trip.",
        servicios_viajes_feature_2_title: "Individual Bookings",
        servicios_viajes_feature_2_text: "Total flexibility: book only flights, only hotels or only excursions according to your needs.",
        servicios_viajes_feature_3_title: "Excursions and Activities",
        servicios_viajes_feature_3_text: "Guided tours, local experiences and unique activities to make your trip unforgettable.",
        servicios_viajes_feature_4_title: "Travel Insurance",
        servicios_viajes_feature_4_text: "Full coverage and 24/7 assistance to travel with complete peace of mind.",
        servicios_viajes_feature_5_title: "Personalized Advisory",
        servicios_viajes_feature_5_text: "Itineraries adapted to your preferences, budget and travel style.",
        servicios_viajes_cta: "Plan your trip with us",

        about_title: "About Us",
        about_text: "We are a business consultancy specialized in offering comprehensive solutions in the fiscal, accounting, labor and strategic areas. Our goal is to accompany companies, self-employed and entrepreneurs in the efficient management of their activity, providing clarity and a results-oriented approach.",
        nos_hero_title: "About Us",
        nos_hero_subtitle: "Get to know who we are and what sets us apart",
        nos_who_title: "Who We Are",
        nos_who_p1: "FA GRUP is a real estate agency based in Barcelona, founded on December 11, 2019. We specialize in offering a comprehensive service in the real estate sector, supporting clients throughout the process of buying, selling or renting properties with professionalism and closeness.",
        nos_who_p2: "We have a team of professionals with extensive knowledge of Barcelona's local real estate market. We analyze each case individually to offer services tailored to each client's real needs, ensuring close, responsible and fully personalized attention.",
        nos_who_p3: "Since our founding in 2019, we have supported hundreds of clients, turning a complex process into a reliable and secure experience.",
        nos_values_title: "Our Values",
        nos_value_1_title: "Professionalism",
        nos_value_1_text: "Top-quality services backed by experience and deep knowledge of Barcelona's real estate market.",
        nos_value_2_title: "Closeness",
        nos_value_2_text: "Personalized attention and human treatment at every stage of the real estate process, building trusted relationships.",
        nos_value_3_title: "Transparency",
        nos_value_3_text: "Clear and honest communication in all operations, ensuring security in every transaction.",
        nos_value_4_title: "Commitment to the Client",
        nos_value_4_text: "Comprehensive support throughout the entire process of buying, selling or renting your property.",
        nos_why_title: "Why Choose Us",
        nos_diff_1_title: "Comprehensive Solutions:",
        nos_diff_1_text: "We offer complete services in business consultancy, real estate, insurance and travel from a single company.",
        nos_diff_2_title: "Personalized Attention:",
        nos_diff_2_text: "Each client receives individualized treatment adapted to their specific needs.",
        nos_diff_3_title: "Multidisciplinary Team:",
        nos_diff_3_text: "Specialized professionals in different areas working in a coordinated way.",
        nos_diff_4_title: "Proven Experience:",
        nos_diff_4_text: "Years of experience supporting companies and individuals in their projects.",
        nos_diff_5_title: "Commitment to Excellence:",
        nos_diff_5_text: "Continuous improvement and constant updating of knowledge and procedures.",
        btn_read_more: "Read more",

        companies_title: "Associated Companies",
        companies_intro: "With the aim of offering a global service, we expand our services as business consultancy, providing comprehensive solutions in the fiscal, accounting, labor and strategic areas. Our goal is to accompany companies, self-employed and entrepreneurs in the efficient management of their activity, bringing clarity and a results-oriented approach.",
        company_fa_asesoria: "FA Global Advisory",
        company_fa_desc: "Lawyers services, legal and juridical advisory. Specialists in criminal, labor, family, civil and administrative law.",
        company_cictaec: "CICTAEC",
        company_cictaec_desc: "Companies, culture, tourism and business. Comprehensive solutions for business and cultural development.",
        btn_visit_web: "Visit website",

        contact_hero_title: "Specialists who understand the art of Sales",
        contact_question: "Looking for your ideal home in Barcelona? Contact us and we will accompany you throughout the process.",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_address: "Address",
        btn_send_query: "Send us your inquiry",

        contact_hero_subtitle: "We are here to help you. Contact us and we will respond as soon as possible",
        contact_info_title: "Contact Information",
        contact_phone_title: "Phone",
        contact_phone_hours: "Monday to Friday: 9:00 AM - 6:00 PM",
        contact_email_title: "Email",
        contact_email_legal: "(Legal inquiries)",
        contact_whatsapp_send: "Send message",
        contact_whatsapp_desc: "Fast and direct response",
        contact_address_title: "Address",
        contact_form_title: "Send us your Inquiry",
        contact_form_name: "Full name",
        contact_form_phone: "Phone",
        contact_form_service: "Service of interest",
        contact_form_select: "Select a service",
        contact_form_message: "Message",
        contact_privacy_info: "Controller: FA GRUP. Purpose: to respond to your inquiry. Legal basis: consent and pre-contractual measures. Rights: access, rectification, erasure and other GDPR rights at fagrupinmobiliaria@gmail.com.",
        contact_consent_prefix: "I have read and accept the ",
        contact_consent_and: " and the ",
        contact_consent_error: "You must accept the Privacy Policy and Legal Notice before submitting the form.",
        contact_form_submit: "Submit inquiry",
        contact_map_title: "Our Location",

        cookie_title: "Cookie Policy",
        cookie_message: "We use necessary technical cookies and, only with your consent, analytics or personalization cookies.",
        cookie_accept: "Accept",
        cookie_reject: "Reject",
        cookie_config: "View privacy policy",

    // International additions
    feature_international_title: "International Real Estate",
    feature_international_desc: "Strategic connection between markets. We offer specialized real estate services in both Barcelona and Ecuador, with comprehensive advice in both countries.",
    faq_title: "Frequently Asked Questions",
    faq_q1: "What services does FA GRUP offer?",
    faq_q2: "How can I request a consultation?",
    faq_q3: "Do you only work in Barcelona?",
    faq_q4: "What documentation do I need to sell a property?",
    faq_services_international: "We offer real estate, insurance and travel agency services in Catalonia and Ecuador, with comprehensive and personalized advice.",
    faq_a2: "You can contact us from the contact page and we will reply as soon as possible.",
    faq_focus_international: "Our activity is mainly focused on the Catalonia and Ecuador markets, with the ability to manage and evaluate projects in other international locations.",
    faq_a4: "We guide you on the required documentation and support you throughout the entire process.",

        testimonials_title: "What do clients think about us?",
        testimonial_1: "\"Excellent service and very close attention. They helped us throughout the purchase.\"",
        testimonial_1_author: "- Laura M.",
        testimonial_2: "\"Professional and transparent. I recommend FA GRUP 100%.\"",
        testimonial_2_author: "- Carlos R.",
        testimonial_3: "\"Fast handling and clear guidance. Everything was easy.\"",
        testimonial_3_author: "- Ana P.",
        btn_more_reviews: "See more reviews",

        social_title: "Follow us on Social Networks",

        footer_slogan: "Comprehensive solutions for companies and individuals",
        footer_services: "Services",
        footer_company: "Company",
        footer_contact: "Contact",
        footer_legal: "Legal Notice",
        footer_privacy: "Privacy Policy",
        footer_rights: "All rights reserved",

        footer_link_inmobiliaria: "Real Estate",
        footer_link_seguros: "Insurance",
        footer_link_viajes: "Travel Agency",
        footer_link_about: "About Us",
        footer_link_contact: "Contact",

        legal_hero_title: "Legal Department",
        legal_hero_subtitle: "FA Global Advisory - Comprehensive legal counsel",
        legal_intro_title: "Legal Department Services",
        legal_intro_p1: "At FA Advisory we offer comprehensive legal advice and representation in multiple areas of law. Our team of specialized professionals guarantees a personalized, effective service oriented to the protection of your interests.",
        legal_intro_p2: "We work with updated methodologies, complying with all current regulations and guaranteeing safe, professional and transparent support in every procedure.",
        legal_section1_title: "Criminal, Labor and Family Law",
        legal_section1_subtitle: "Specialized defense and support in complex legal procedures",

        privacy_title: "Privacy Policy",
        privacy_subtitle: "FA GRUP - Personal Data Protection",
        privacy_last_update: "Last update: February 4, 2026",
        privacy_section1_title: "1. Data Controller",
        privacy_section2_title: "2. Data We Collect",
        privacy_section3_title: "3. Purpose of Processing",
        privacy_section4_title: "4. Legal Basis for Processing",
        privacy_section5_title: "5. Data Recipients",
        privacy_section6_title: "6. Data Retention",
        privacy_section7_title: "7. User Rights",
        privacy_section8_title: "8. Data Security",
        privacy_section9_title: "9. Cookies",
        privacy_section10_title: "10. Modifications",
        privacy_section11_title: "11. Complaints",
        privacy_section12_title: "12. Contact",

        // Privacy page content
        privacy_section1_intro: "FA GRUP, with headquarters at Avenida Josep Tarradellas 134 bajos, 08029 Barcelona, Spain, is responsible for processing the personal data you provide to us.",
        privacy_contact_label: "Contact:",
        privacy_email_label: "Email:",
        privacy_phone_label: "Phone:",
        
        privacy_section2_intro: "FA GRUP may collect the following types of personal data:",
        privacy_data_identification: "Identification data:",
        privacy_data_identification_desc: "Name, surnames, DNI/NIE",
        privacy_data_contact: "Contact data:",
        privacy_data_contact_desc: "Email address, phone number, postal address",
        privacy_data_navigation: "Navigation data:",
        privacy_data_navigation_desc: "IP address, browser type, pages visited",
        privacy_data_services: "Data related to services:",
        privacy_data_services_desc: "Information about properties of interest, search preferences",
        
        privacy_section3_intro: "The personal data collected will be processed for the following purposes:",
        privacy_purpose_1: "Management of inquiries and information requests",
        privacy_purpose_2: "Provision of real estate, insurance and travel services",
        privacy_purpose_3: "Sending commercial communications about our services (with your prior consent)",
        privacy_purpose_4: "Compliance with legal and contractual obligations",
        privacy_purpose_5: "Improvement of our services and user experience",
        
        privacy_section4_intro: "The processing of your personal data is based on:",
        privacy_legal_consent: "Consent:",
        privacy_legal_consent_desc: "For sending commercial communications",
        privacy_legal_contract: "Contract execution:",
        privacy_legal_contract_desc: "For the provision of requested services",
        privacy_legal_legitimate: "Legitimate interest:",
        privacy_legal_legitimate_desc: "For the management and improvement of our services",
        privacy_legal_obligation: "Legal obligation:",
        privacy_legal_obligation_desc: "To comply with applicable regulations",
        
        privacy_section5_intro: "Your personal data may be shared with:",
        privacy_recipient_1: "Associated companies of the FA GRUP group for the provision of services",
        privacy_recipient_2: "Providers of technological and storage services",
        privacy_recipient_3: "Public administrations when legally required",
        privacy_recipient_4: "Financial entities for payment processing",
        privacy_no_international: "We do not carry out international data transfers outside the European Economic Area.",
        
        privacy_section6_p1: "Personal data will be retained for as long as necessary to fulfill the purposes for which it was collected and, subsequently, for applicable legal limitation periods.",
        privacy_section6_p2: "In the absence of legal obligation, data will be retained as long as you do not request its deletion and as long as there is a legitimate basis for its processing.",
        
        privacy_section7_intro: "As the holder of personal data, you have the right to:",
        privacy_right_access: "Access:",
        privacy_right_access_desc: "Know what data we process about you",
        privacy_right_rectify: "Rectification:",
        privacy_right_rectify_desc: "Request the correction of inaccurate data",
        privacy_right_delete: "Deletion:",
        privacy_right_delete_desc: "Request the deletion of your data",
        privacy_right_object: "Objection:",
        privacy_right_object_desc: "Object to the processing of your data",
        privacy_right_limit: "Limitation:",
        privacy_right_limit_desc: "Request the limitation of processing",
        privacy_right_portability: "Portability:",
        privacy_right_portability_desc: "Receive your data in a structured format",
        privacy_right_withdraw: "Withdrawal of consent:",
        privacy_right_withdraw_desc: "Withdraw your consent at any time",
        privacy_section7_p2: "To exercise these rights, you can contact us through:",
        privacy_section7_contact_email: "Email:",
        privacy_section7_contact_address: "Postal address:",
        
        privacy_section8: "FA GRUP has implemented appropriate technical and organizational measures to ensure the security of your personal data and protect it against unauthorized access, loss, destruction or alteration.",
        
        privacy_section9_p1: "This website uses technical cookies necessary for its operation and, if applicable, analytical or personalization cookies only if you accept them.",
        privacy_section9_p2: "When accessing the site, you can accept or refuse non-essential cookies from the consent banner. You can also change your choice by deleting cookies from your browser and reloading the page.",
        privacy_section9_p3: "Types of cookies we may use:",
        privacy_cookie_technical: "Technical (necessary):",
        privacy_cookie_technical_desc: "Enable basic website functionality and do not require consent.",
        privacy_cookie_analytics: "Analytical:",
        privacy_cookie_analytics_desc: "Help us understand site usage in aggregate form to improve our services.",
        privacy_cookie_preferences: "Preferences:",
        privacy_cookie_preferences_desc: "Store certain user preferences to enhance the experience.",
        privacy_section9_p4: "You can configure your browser to block or delete cookies. Note that in this case, some site features may not work correctly.",
        
        privacy_section10: "FA GRUP reserves the right to modify this Privacy Policy to adapt it to legislative changes or our services. We recommend reviewing this page periodically.",
        
        privacy_section11: "If you believe that the processing of your personal data does not comply with regulations, you have the right to lodge a complaint with the Spanish Data Protection Authority (www.aepd.es).",
        
        privacy_section12_intro: "For any questions about this Privacy Policy or the processing of your personal data, you can contact us:",
        privacy_section12_address: "Address:",

        aviso_page_title: "Legal Notice - FA GRUP",
        aviso_title: "Legal Notice",
        aviso_subtitle: "Legal information and terms of use of FA GRUP's website",
        aviso_last_update: "Last update: March 16, 2026",
        aviso_section1_title: "1. Identification details of the website owner",
        aviso_section1_p1: "In compliance with Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), it is stated that the owner of this website is:",
        aviso_holder_label: "Owner:",
        aviso_address_label: "Address:",
        aviso_section2_title: "2. Purpose",
        aviso_section2_p1: "This legal notice regulates access to, browsing of and use of FA GRUP's website, as well as responsibilities arising from the use of its contents (texts, images, designs, code, documentation and any other material).",
        aviso_section3_title: "3. Terms of use",
        aviso_section3_p1: "Access to this website grants user status and implies full and unreserved acceptance of the provisions included in this legal notice.",
        aviso_section3_li1: "The user undertakes to make appropriate and lawful use of the website and its contents.",
        aviso_section3_li2: "Unlawful, fraudulent activities or those contrary to good faith and public order are prohibited.",
        aviso_section3_li3: "FA GRUP reserves the right to modify, at any time and without prior notice, the presentation and configuration of the website, as well as this legal notice.",
        aviso_section4_title: "4. Intellectual and industrial property",
        aviso_section4_p1: "All website contents (including, but not limited to, texts, photographs, graphics, icons, software, graphic design and source code) are owned by FA GRUP or by third parties who have authorized their use.",
        aviso_section4_p2: "Reproduction, distribution, public communication, transformation or any other form of exploitation, in whole or in part, is prohibited without express written authorization from the corresponding owner.",
        aviso_section5_title: "5. Liability",
        aviso_section5_p1: "FA GRUP does not guarantee continuous availability or the absence of errors in website access, although it will adopt reasonable measures to avoid, correct or update them when appropriate.",
        aviso_section5_p2: "FA GRUP is not responsible for damages arising from the use of the website, or from actions taken based on the information contained therein.",
        aviso_section6_title: "6. External links",
        aviso_section6_p1: "This website may contain links to third-party pages. FA GRUP assumes no responsibility for the contents, policies or practices of such external sites.",
        aviso_section7_title: "7. Personal data protection",
        aviso_section7_p1: "Personal data processing is carried out in accordance with applicable regulations and our ",
        aviso_privacy_link: "Privacy Policy",
        aviso_section8_title: "8. Cookie policy",
        aviso_section8_p1: "This website uses cookies to improve the browsing experience. You can find more information in the cookies section of our ",
        aviso_section9_title: "9. Applicable law and jurisdiction",
        aviso_section9_p1: "These terms are governed by Spanish law. For the resolution of any dispute that may arise in relation to this website, the parties submit to the courts of Barcelona, unless applicable regulations provide otherwise.",
        aviso_section10_title: "10. Contact",
        aviso_section10_p1: "For any query related to this legal notice, you can contact FA GRUP at:",
        aviso_email_label: "Email:",
        aviso_phone_label: "Phone:",
        aviso_contact_address_label: "Address:",

        // ── Suelo Lleida ──
        sl_kicker: "FA GRUP · Real Estate Investment",
        sl_hero_title: "Strategic Land Opportunity<br><span>Lleida – Carrer Eugeni d'Ors</span>",
        sl_hero_lead: "Premium mixed-use real estate asset (tertiary and residential). Privileged positioning on one of Lleida's most structuring axes.",
        sl_badge_1: "1,849 m² of land",
        sl_badge_2: "2,939 m² developed",
        sl_badge_3: "Hospital environment",
        sl_badge_4: "~€532,000/year",
        sl_btn_dossier: "Request confidential dossier",
        sl_btn_bcase: "View Business Case",
        sl_eye_urban: "<i class=\"fas fa-map-marked-alt\"></i> Planning",
        sl_title_urban: "Urban Planning Framework & Key Parameters",
        sl_desc_urban: "Located on one of Lleida's most structuring axes, in the vicinity of a reference hospital hub. A consolidated urban environment with full legal certainty.",
        sl_param_1: "Net buildable area",
        sl_param_2: "Maximum footprint (40%)",
        sl_param_3: "Zoning SUC – Consolidated Urban Land",
        sl_param_4_val: "Mixed",
        sl_param_4: "Residential + ground-floor tertiary use",
        sl_tip_urban: "A clear regulatory framework enabling fast and secure deal structuring.",
        sl_eye_dev: "<i class=\"fas fa-layer-group\"></i> Development",
        sl_title_dev: "Development Scenario",
        sl_desc_dev: "A certified technical study projects an optimised operation, with the option to adjust the <em>mix</em> based on the final operating strategy.",
        sl_th_uso: "Use",
        sl_th_superficie: "Estimated surface",
        sl_row_terciario: "Tertiary / Offices",
        sl_row_residencial: "Residential / Apart-hotel",
        sl_row_parking: "Car park (basement)",
        sl_row_parking_val: "~20–24 spaces · ~734 m²",
        sl_row_total: "Total developed surface",
        sl_eye_fin: "<i class=\"fas fa-coins\"></i> Financial",
        sl_title_bcase: "Business Case – Revenue Projection",
        sl_th_seg: "Segment",
        sl_th_hip: "Operating assumption",
        sl_th_ing: "Estimated revenue",
        sl_biz_t_label: "Tertiary",
        sl_biz_t_hip: "Medical activities / Specialised services",
        sl_biz_a_label: "Accommodation",
        sl_biz_a_hip: "Apart-hotel (80% occupancy – €49/night)",
        sl_biz_p_label: "Parking",
        sl_biz_p_hip: "Mixed rental (short and long stay)",
        sl_biz_total: "Gross total",
        sl_eye_strat: "<i class=\"fas fa-chart-pie\"></i> Strategy",
        sl_title_thesis: "Investment Thesis",
        sl_th1_title: "Income diversification",
        sl_th1_desc: "Combination of tertiary, hospitality and parking rents for a robust and diversified income base.",
        sl_th2_title: "Structural demand",
        sl_th2_desc: "Linked to the reference hospital and healthcare environment, with constant and predictable flows.",
        sl_th3_title: "High resilience",
        sl_th3_desc: "Rents highly resistant to economic cycles thanks to their anchor in essential health services.",
        sl_th4_title: "Active management",
        sl_th4_desc: "Active <em>asset management</em> potential, adaptable to Core+ or Value-add strategies.",
        sl_tip_thesis: "Positioning suited to <strong>Core+</strong> or <strong>Value-add</strong> investment strategies.",
        sl_eye_market: "<i class=\"fas fa-globe-europe\"></i> Market",
        sl_title_market: "Market & Location",
        sl_desc_market: "Lleida, capital of the Segrià comarca, combines a consolidated economic fabric with a strong presence of healthcare and higher education services.",
        sl_stat_1: "Inhabitants in Lleida",
        sl_stat_2: "Area of influence (Segrià comarca)",
        sl_stat_3: "Demand drivers: health, education and professional services",
        sl_eye_keys: "<i class=\"fas fa-key\"></i> For the Investor",
        sl_title_keys: "Key Points",
        sl_key_1: "<strong>Legal and technical security</strong> — Asset with certified documentation and technical study, free from planning contingencies.",
        sl_key_2: "<strong>Strong rental liquidity</strong> — Area with constant demand for office space and accommodation linked to the healthcare sector.",
        sl_key_3: "<strong>Scalability and flexibility</strong> of the architectural project according to the investor's strategy.",
        sl_key_4: "<strong>Clear visibility</strong> on future income, with conservative and documented assumptions.",
        sl_cta_eyebrow: "Confidential contact",
        sl_cta_title: "Investor Access",
        sl_cta_desc: "Complete technical dossier, feasibility study and data room available on request. Confidential exchanges with our investment team.",
        sl_btn_contact: "Contact us now",
        sl_conf_text: "<strong>Financial terms available on request.</strong> A detailed analysis will be provided, including performance projections and operating scenarios, in a strictly confidential framework.",
        sl_map_title: "Interactive aerial view",
        sl_map_subtitle: "Lleida city → Carrer Eugeni d'Ors",
        sl_map_fallback: "Loading interactive map...",
        sl_map_step_city: "City",
        sl_map_step_district: "District",
        sl_map_step_hospital: "Eugeni d'Ors",
        sl_map_step_plot: "Plot",

        // ── Lugar Eventos ──
        le_page_title: "Almunia de San Juan Palace | FA GRUP",
        le_kicker: "FA GRUP Signature Places",
        le_hero_title: "Almunia de San Juan Palace",
        le_hero_lead: "Where your moments become legacy. A singular venue dedicated to prestigious events, where elegance and history meet.",
        le_btn_private_visit: "Arrange a private visit",
        le_btn_imagine_event: "Imagine your event at the Palace",
        le_btn_how_to_arrive: "See how to get there",
        le_floating_contact: "Contact us",
        le_intro_title: "An experience beyond time",
        le_intro_p1: "Welcome to a place where time stands still. Located in a privileged natural setting, the Palace combines heritage, privacy and sophistication.",
        le_intro_p2: "Every stone tells a story. Every light enhances a moment. Every event becomes an unforgettable experience.",
        le_intro_p3: "To preserve its exclusive character, the Palace hosts a limited number of events per year, ensuring full privatization and fully personalized attention.",
        le_fact_1_title: "Recommended capacity",
        le_fact_1_text: "Up to 180 guests in banquet format and flexible configurations for smaller-scale events.",
        le_fact_2_title: "Weather contingency plan",
        le_fact_2_text: "An elegant indoor alternative prepared to keep the experience seamless if weather conditions change.",
        le_fact_3_title: "Historic setting",
        le_fact_3_text: "Stately architecture with character, integrated into a natural landscape with centuries of legacy.",
        le_universes_title: "Our universes",
        le_universe_1_title: "💍 Weddings and ceremonies",
        le_universe_1_text: "Imagine a ceremony under century-old trees, followed by an elegant candlelit dinner in a hall full of history. Every detail is designed to create a unique, tailor-made moment.",
        le_universe_1_btn: "Request information",
        le_universe_2_title: "🎬 Film shoots and photo sessions",
        le_universe_2_text: "An authentic architectural setting, exceptional natural light and versatile spaces make the Palace the ideal location for film productions, fashion campaigns or creative projects.",
        le_universe_2_btn: "Request information",
        le_universe_3_title: "💼 Corporate events",
        le_universe_3_text: "Offer your teams and partners an inspiring environment that fosters creativity and excellence. Seminars, launches and receptions gain a unique dimension here.",
        le_universe_3_btn: "Request information",
        le_domain_title: "The estate",
        le_domain_1_title: "<span class=\"icon-bullet\">🏰</span>Architecture with character",
        le_domain_1_text: "Restored historic halls with a noble atmosphere for high-end celebrations.",
        le_domain_2_title: "<span class=\"icon-bullet\">🌳</span>Centennial park",
        le_domain_2_text: "An exceptional natural setting for outdoor ceremonies and memorable receptions.",
        le_domain_3_title: "<span class=\"icon-bullet\">🔐</span>Exclusive privatization",
        le_domain_3_text: "The full estate is reserved for each event, with maximum privacy and total control of the experience.",
        le_signature_title: "Signature Services",
        le_signature_1_title: "Private suites",
        le_signature_1_text: "Elegant spaces to extend the experience in an intimate and refined setting.",
        le_signature_2_title: "Tailor-made orchestration",
        le_signature_2_text: "A dedicated team designs and coordinates every detail so each moment reflects your vision.",
        le_signature_3_title: "Gastronomic experiences",
        le_signature_3_text: "Partnerships with prestigious caterers to elevate every celebration and impress your guests.",
        le_gallery_title: "Gallery",
        le_gallery_subtitle: "Discover the Palace atmosphere through images: suspended moments, golden lights and shared emotions.",
        le_gallery_1: "Weddings",
        le_gallery_2: "Golden light at sunset",
        le_gallery_3: "Settings for unique stories",
        le_gallery_5: "Elegance and legacy",
        le_quick_location: "Location",
        le_quick_location_value: "Almunia de San Juan",
        le_quick_region_value: "Aragon, Spain",
        le_quick_capacity: "Capacity",
        le_quick_capacity_value: "Up to 180",
        le_quick_guests: "guests",
        le_quick_formats: "Formats",
        le_quick_formats_list: "Weddings • Film shoots • Corporate events",
        le_quick_privacy: "Privatization",
        le_quick_privacy_value: "Exclusive",
        le_quick_visit: "Request a private visit",
        le_quick_availability: "Check availability",
        le_trust_title: "Testimonials",
        le_testimonial_1_quote: "\"The Palace exceeded all our expectations. Every detail was perfect, from the decor to the gastronomy. Our guests kept talking about how beautiful the venue was.\"",
        le_testimonial_1_author: "Maria & José",
        le_testimonial_1_event: "Wedding - 150 guests",
        le_testimonial_2_quote: "\"As an audiovisual producer, we found a unique setting at the Palace. The light, the architecture, the versatile spaces... everything we needed for a high-quality production.\"",
        le_testimonial_2_author: "Sandra Martínez",
        le_testimonial_2_event: "Audiovisual production - 3 days of filming",
        le_testimonial_3_quote: "\"Our corporate event at the Palace was a complete success. The team was attentive, the spaces were inspiring, and the experience was memorable. We would definitely do it again.\"",
        le_testimonial_3_author: "David López, CEO",
        le_testimonial_3_event: "Corporate event - 120 participants",
        le_gallery_caption_stairs: "Wedding on the staircase",
        le_gallery_caption_garden_wedding: "Wedding in the garden",
        le_gallery_caption_palace_night: "Night at the palace",
        le_gallery_caption_golden_setting: "Golden setting",
        le_gallery_caption_indoor_pool: "Indoor pool",
        le_gallery_caption_palace_view: "Palace",
        le_gallery_caption_palace_terrace: "Palace terrace",
        le_gallery_caption_palace_view_alt: "Palace view",
        le_gallery_caption_patio_view: "Patio view",
        le_gallery_caption_palace_park: "Palace park",
        le_gallery_caption_garden_fountain: "Garden with fountain",
        le_gallery_caption_palace_park_alt: "Palace park",
        le_gallery_caption_wedding_patio: "Wedding patio",
        le_gallery_caption_unique_moment: "A unique moment",
        le_gallery_caption_palace_detail: "Palace detail",
        le_gallery_caption_library: "Palace library",
        bv_page_title: "Property For Sale - FA GRUP",
        bv_badge: "House for sale",
        bv_h1: "Detached house for sale in El Vendrell - Tarragona",
        bv_hero_desc: "El Vendrell. Beautiful detached house in Mas Borras area with many extras and a saltwater pool.",
        bv_summary_title: "Property summary",
        bv_price: "880,000 EUR",
        bv_meta_location: "El Vendrell - Tarragona",
        bv_meta_area: "250 sqm built",
        bv_meta_rooms: "4 beds",
        bv_meta_garage: "Garage included",
        bv_meta_price_m2: "3,520 EUR/sqm",
        bv_feat_area: "250 sqm built, 230 sqm usable",
        bv_feat_rooms: "4 bedrooms",
        bv_feat_baths: "3 bathrooms",
        bv_feat_terrace: "Terrace and balcony",
        bv_feat_garage: "Garage parking space included",
        bv_feat_condition: "Second hand / good condition",
        bv_feat_closets: "Built-in wardrobes",
        bv_feat_orientation: "South orientation",
        bv_feat_pool: "Swimming pool",
        bv_feat_energy: "Energy certificate: not indicated",
        bv_desc_title: "Description",
        bv_desc_text: "Beautiful detached house in Mas Borras area, El Vendrell, with many extras and a saltwater pool.",
        bv_data_title: "Listing data",
        bv_data_updated: "Listing updated more than one year ago",
        bv_data_price: "Property price: 880,000 EUR",
        bv_data_price_m2: "Price per sqm: 3,520 EUR/sqm",
        bv_data_location: "Location: Mas Borras, El Vendrell",
        bv_btn_info: "Request information",
        bv_photos_title: "Listing photos",
        bv_photos_list_title: "Available photo list",
        bv_photo_1: "Pool",
        bv_photo_2: "Terrace",
        bv_photo_3: "Pool (second view)",
        bv_photo_4: "General house view",
        bv_photo_5: "7 more photos in the original listing",
        bv_error_text: "Is there an error in this listing? Let us know to correct it and help other people.",
        le_access_title: "How to get there",
        le_access_subtitle: "Estate access",
        le_access_text: "Share your visit date and we will send personalized access and parking directions to ensure a smooth arrival.",
        le_access_car: "Arrival by car with private reception area",
        le_access_route: "Exact route available upon visit confirmation",
        le_booking_title: "Book your experience",
        le_booking_desc: "Complete the form below and our team will contact you to coordinate your private visit or present a personalized proposal.",
        le_booking_subtitle: "Availability request and personalized proposal",
        le_form_name: "First name",
        le_form_lastname: "Last name",
        le_form_type: "Event type",
        le_form_type_opt_0: "Select an option",
        le_form_type_opt_1: "Wedding or ceremony",
        le_form_type_opt_2: "Film shoot or photo session",
        le_form_type_opt_3: "Corporate event",
        le_form_type_opt_4: "Other",
        le_form_preferred_date: "Preferred date",
        le_form_email: "Email",
        le_form_phone: "Phone",
        le_form_guests: "Number of guests",
        le_form_guests_ph: "Ex.: 120",
        le_form_details: "Project details",
        le_form_details_ph: "Share the event style, special requirements or key ideas.",
        le_form_legal: "Controller: FA GRUP. Purpose: manage your request and provide commercial information about the Palace. Legal basis: data subject consent.",
        le_form_consent: "I have read and accept the <a href=\"privacidad.html\">Privacy Policy</a> and the <a href=\"aviso-legal.html\">Legal Notice</a>.",
        le_form_submit: "Send request"
    }
};

// ==================== LANGUAGE ====================
function changeLanguage(lang) {
    const t = translations[lang] || translations.es;
    localStorage.setItem('selectedLanguage', lang);
    updateLanguageIndicator(lang);

    document.querySelectorAll('[data-translate]').forEach((element) => {
        const key = element.getAttribute('data-translate');
        if (!t[key]) return;

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = t[key];
        } else {
            // Use innerHTML if the translation contains HTML tags, otherwise use textContent
            if (t[key].includes('<')) {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });

    const messages = {
        es: '🇪🇸 Idioma cambiado a Español',
        ca: '🇨🇦 Idioma canviat a Català',
        fr: '🇫🇷 Langue changée en Français',
        en: '🇬🇧 Language changed to English'
    };

    showNotification(messages[lang] || messages.es);
}

function setLang(lang) {
    changeLanguage(lang);

    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.classList.remove('show');
    }
}

function toggleDropdown(event) {
    event.preventDefault();
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.classList.toggle('show');
    }
}

// ==================== COOKIE CONSENT ====================
function initCookieConsent() {
    const modal = document.getElementById('cookie-consent-modal');
    if (!modal) return;

    const acceptButton = document.getElementById('cookie-accept');
    const rejectButton = document.getElementById('cookie-reject');
    const configButton = document.getElementById('cookie-config');
    const savedConsent = localStorage.getItem('cookieConsent');

    const hideModal = () => {
        modal.classList.remove('is-visible');
        document.body.classList.remove('cookie-modal-open');
    };

    if (!savedConsent) {
        modal.classList.add('is-visible');
        document.body.classList.add('cookie-modal-open');
        if (acceptButton) acceptButton.focus();
    }

    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            hideModal();
        });
    }

    if (rejectButton) {
        rejectButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'rejected');
            hideModal();
        });
    }

    if (configButton) {
        configButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'configured');
            hideModal();
        });
    }
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==================== NAVBAR ====================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let ticking = false;

    const updateNavbar = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    updateNavbar();
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a[href]');

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ==================== HERO CAROUSEL ====================
let currentSlide = 0;
let slides = [];
let indicators = [];
let heroContent = null;
let heroInterval = null;

function updateHeroContentVisibility(index) {
    if (!heroContent) return;

    // Show content only on first slide to match your current JS logic
    if (index === 0) {
        heroContent.style.opacity = '1';
        heroContent.style.visibility = 'visible';
    } else {
        heroContent.style.opacity = '0';
        heroContent.style.visibility = 'hidden';
    }
}

function goToSlide(slideIndex) {
    if (!slides.length || !indicators.length) return;

    slides.forEach((slide) => slide.classList.remove('active'));
    indicators.forEach((indicator) => indicator.classList.remove('active'));

    if (slides[slideIndex]) slides[slideIndex].classList.add('active');
    if (indicators[slideIndex]) indicators[slideIndex].classList.add('active');

    currentSlide = slideIndex;
    updateHeroContentVisibility(slideIndex);
}

function nextSlide() {
    if (!slides.length) return;
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}

function initHeroCarousel() {
    slides = Array.from(document.querySelectorAll('.carousel-slide'));
    indicators = Array.from(document.querySelectorAll('.indicator'));
    heroContent = document.querySelector('.hero-content');

    if (!slides.length || !indicators.length) return;

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            if (heroInterval) {
                clearInterval(heroInterval);
                heroInterval = setInterval(nextSlide, 5000);
            }
        });
    });

    goToSlide(0);
    heroInterval = setInterval(nextSlide, 5000);
}

// expose for inline onclick in HTML
window.goToSlide = goToSlide;

// ==================== TESTIMONIALS ====================
function initTestimonialsCarousel() {
    const testimonialSlides = document.querySelectorAll('.testimonials-slide');
    const testimonialIndicators = document.querySelectorAll('.testimonials-indicator');

    if (!testimonialSlides.length || !testimonialIndicators.length) return;

    let currentTestimonial = 0;

    const showTestimonial = (index) => {
        testimonialSlides.forEach((slide) => slide.classList.remove('active'));
        testimonialIndicators.forEach((indicator) => indicator.classList.remove('active'));

        testimonialSlides[index].classList.add('active');
        testimonialIndicators[index].classList.add('active');
    };

    const nextTestimonial = () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
        showTestimonial(currentTestimonial);
    };

    let testimonialInterval = setInterval(nextTestimonial, 6000);

    testimonialIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
            clearInterval(testimonialInterval);
            testimonialInterval = setInterval(nextTestimonial, 6000);
        });
    });
}

// ==================== EMPRESAS CAROUSEL ====================
function initCompaniesCarousel() {
    const gridWrapper = document.querySelector('.companies-grid-wrapper');
    const cards = document.querySelectorAll('.company-card');
    const leftBtn = document.querySelector('.companies-arrow.left');
    const rightBtn = document.querySelector('.companies-arrow.right');

    if (!gridWrapper || !leftBtn || !rightBtn || !cards.length) return;

    let currentIndex = 0;

    function scrollToCard(index) {
        if (!cards[index]) return;

        const wrapperWidth = gridWrapper.offsetWidth;
        const cardWidth = cards[index].offsetWidth;
        const cardOffset = cards[index].offsetLeft;
        const scrollLeft = cardOffset - (wrapperWidth - cardWidth) / 2;

        gridWrapper.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });

        currentIndex = index;
        updateArrows();
    }

    function updateArrows() {
        leftBtn.disabled = currentIndex === 0;
        rightBtn.disabled = currentIndex === cards.length - 1;
    }

    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) scrollToCard(currentIndex - 1);
    });

    rightBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) scrollToCard(currentIndex + 1);
    });

    window.addEventListener('resize', () => scrollToCard(currentIndex));
    scrollToCard(0);
}

// ==================== FACEBOOK VIDEO AUTOPLAY ====================
function initFacebookVideoAutoplay() {
    const fbVideoSection = document.querySelector('.about-video-absolute-fullwidth');
    const fbIframe = fbVideoSection ? fbVideoSection.querySelector('iframe') : null;
    if (!fbVideoSection || !fbIframe) return;

    let hasPlayed = false;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasPlayed) {
                let src = fbIframe.getAttribute('src') || '';
                if (!src.includes('autoplay=1')) {
                    src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
                    fbIframe.setAttribute('src', src);
                }
                hasPlayed = true;
                obs.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(fbVideoSection);
}

// ==================== SMOOTH ANCHORS ====================
function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// ==================== FORM VALIDATION ====================
function initContactFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const mensaje = document.getElementById('mensaje')?.value.trim() || '';
        const privacyConsent = document.getElementById('privacy-consent');
        const selectedLang = localStorage.getItem('selectedLanguage') || 'es';
        const t = translations[selectedLang] || translations.es;

        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, introduce un email válido.');
            return;
        }

        if (!privacyConsent || !privacyConsent.checked) {
            alert(t.contact_consent_error || 'Debes aceptar la Política de Privacidad y el Aviso Legal para enviar el formulario.');
            return;
        }

        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollReveal() {
    const animateElements = document.querySelectorAll('.service-card, .company-card, .feature-card, .legal-card, .scroll-reveal');
    if (!animateElements.length) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// ==================== GLOBAL EVENTS ====================
document.addEventListener('click', (event) => {
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector && !languageSelector.contains(event.target)) {
        languageSelector.classList.remove('show');
    }
});

// expose for inline HTML handlers
window.toggleDropdown = toggleDropdown;
window.setLang = setLang;

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    initCookieConsent();
    initMobileMenu();
    initNavbarScroll();
    initHeroCarousel();
    initTestimonialsCarousel();
    initCompaniesCarousel();
    initFacebookVideoAutoplay();
    initSmoothAnchors();
    initContactFormValidation();
    initScrollReveal();
    setActiveNavLink();

    const savedLang = localStorage.getItem('selectedLanguage') || 'es';
    updateLanguageIndicator(savedLang);

    if (savedLang !== 'es') {
        changeLanguage(savedLang);
    }
});