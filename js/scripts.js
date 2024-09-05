// Función para llenar la información
function llenarInformacion() {
    // Información personal
    document.getElementById('nombre').textContent = 'Gustavo de Jesus Vergel Arellano';
    document.getElementById('nombre2').textContent = 'Gustavo de Jesus Vergel Arellano';
    document.getElementById('direccion').textContent = 'Cartagena, Bolivar - Nuevo Bosque 7et mz 74 lote 6';
    document.getElementById('email').textContent = 'tavovergel@gmail.com';
    document.getElementById('telefono').textContent = '3014438307';
    document.getElementById('objetivo').textContent = `
    Mi objetivo profesional es ser un arquitecto y desarrollador 
    de software en cualquier area del proceso de desarrollo de software 
    con altas capacidades tecnicas y habilidades blandas, 
    con gran capacidad de análisis y desarrollo de ideas, 
    con conocimientos en todo el proceso de desarrollo de software, estoy comprometido a seguir obteniendo
    conocimiento dia a dia y estar a la vanguardia en el mundo tecnologico y el uso de las nuevas tecnologias.
     cada dia busco aprender algo nuevo y soy una persona responsable estoy a total disposicion de la empresa
      que confie en mi y en mis capacidades y dare todo lo que este a mi alcance para lograr los objetivos 
      de la organizacion.  
`;


    // Experiencia laboral
    const experiencia = [
        { puesto: 'Analista de Información', empresa: 'Ajover Darnel', periodo: 'Mayo 2023 - Noviembre 2023' },
        { puesto: 'Community Manager', empresa: 'Independiente-Country Home', periodo: 'Julio 2022 - Presente'},
        { puesto: 'Desarrollador web', empresa: 'Independiente', periodo: 'Julio 2023 - Presente' }
    ];

    const expContainer = document.getElementById('experiencia');
    experiencia.forEach(exp => {
        expContainer.innerHTML += `
            <div>
                <h3>${exp.puesto}</h3>
                <p>${exp.empresa} | ${exp.periodo}</p>
            </div>
        `;
    });

    // Educación
    const educacion = [
        { titulo: 'Tecnólogo en análisis y desarrollo de sistemas de información', institucion: 'SENA', año: 'Octubre 2021- Diciembre 2023' },
        { titulo: 'Ingeniero de software', institucion: 'Institucion Universitaria Politécnico Grancolombiano', año: 'Enero 2024-Diciembre 2025' }
    ];

    const eduContainer = document.getElementById('educacion');
    educacion.forEach(edu => {
        eduContainer.innerHTML += `
            <div>
                <h3>${edu.titulo}</h3>
                <p>${edu.institucion} | ${edu.año}</p>
            </div>
        `;
    });

    
}
