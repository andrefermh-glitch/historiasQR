// State management
let currentState = {
    userName: '',
    userAge: '',
    selectedStory: null,
    currentStep: 0,
    score: 0,
    decisions: [],
    isEnding: false
};

let storiesData = [];

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const storyScreen = document.getElementById('storyScreen');
const endScreen = document.getElementById('endScreen');
const userForm = document.getElementById('userForm');
const storyText = document.getElementById('storyText');
const questionText = document.getElementById('questionText');
const choiceA = document.getElementById('choiceA');
const choiceB = document.getElementById('choiceB');
const choicesContainer = document.getElementById('choicesContainer');
const storyTitle = document.getElementById('storyTitle');
const storyTopic = document.getElementById('storyTopicBadge');
const restartBtn = document.getElementById('restartBtn');
const shareBtn = document.getElementById('shareBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const differentStoryBtn = document.getElementById('differentStoryBtn');
const endingTitle = document.getElementById('endingTitle');
const endingText = document.getElementById('endingText');
const decisionsCount = document.getElementById('decisionsCount');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadStories();
    setupEventListeners();
});

// Load stories from JSON
function loadStories() {
    const storiesJSON = `{
  "stories": [
    {
      "id": 1,
      "title": "Superhéroes: La Ciudad te Necesita",
      "topic": "Superhéroes",
      "ageGroup": "7-15",
      "opening": "¡La ciudad tiembla, [NAME]! Un rayo de tormenta te acaba de dar superpoderes y el comisario de policía te llama directamente: un villano misterioso está sembrando el caos. Eres el único con poderes en toda la ciudad. La gente te mira con esperanza. ¿Estás listo para ser un héroe?",
      "steps": [
        {
          "question": "El villano lanza una roca enorme hacia un puente lleno de coches. ¿Qué haces?",
          "choiceA": "Usar tu súper fuerza para desviar la roca hacia el río",
          "choiceB": "Intentar convencer al villano de que se detenga hablándole",
          "resultA": "La roca cae al agua con un tremendo chapoteo. Los conductores aplauden y algunos sacan fotos. ¡Tu primera acción como héroe fue un éxito! Pero el villano aprovecha la distracción para atacar el museo de ciencia al otro lado de la ciudad.",
          "resultB": "El villano se ríe a carcajadas y lanza la roca de todas formas. El puente queda dañado y varias personas resultan heridas mientras tú pierdes tiempo valioso. La situación empeora.",
          "wiseChoice": "A"
        },
        {
          "question": "El villano roba una peligrosa fuente de energía del museo. ¿Cómo actúas?",
          "choiceA": "Atacar de frente al villano con todo tu poder",
          "choiceB": "Crear una distracción para que los científicos recuperen el dispositivo",
          "resultA": "El villano activa la energía robada y provoca una gran explosión. El museo queda destrozado y el villano escapa entre el humo. Ha sido un desastre.",
          "resultB": "Con tu distracción, los científicos aseguran el dispositivo. El villano escapa pero sin su arma más peligrosa. ¡Trabajo en equipo!",
          "wiseChoice": "B"
        },
        {
          "question": "El villano tiene rehenes en la plaza central. ¿Qué estrategia usas?",
          "choiceA": "Atacar directamente con velocidad máxima para sorprenderle",
          "choiceB": "Coordinarte con los rehenes por señas para crear una distracción",
          "resultA": "El villano usa a los rehenes como escudo en el último momento. La situación se complica mucho y tardas el doble en resolverla.",
          "resultB": "Los rehenes distraen al villano durante tres segundos cruciales. Suficiente para atraparle. ¡Todos a salvo!",
          "wiseChoice": "B"
        },
        {
          "question": "Descubres que el villano tiene un cómplice escondido en los tejados. ¿Qué haces?",
          "choiceA": "Ignorarlo y concentrarte solo en el villano principal",
          "choiceB": "Pedir ayuda a la policía para que controlen al cómplice",
          "resultA": "El cómplice libera al villano principal mientras tú no miras. ¡De repente tienes que empezar de cero con el villano libre!",
          "resultB": "La policía rodea al cómplice en minutos. Trabajar en equipo multiplica tu efectividad.",
          "wiseChoice": "B"
        },
        {
          "question": "Tienes al villano acorralado en el último momento. ¿Cómo lo detienes?",
          "choiceA": "Lanzar un golpe final con toda tu fuerza",
          "choiceB": "Usar una red de energía para inmovilizarle hasta que llegue la policía",
          "resultA": "El villano esquiva el golpe en el último segundo y huye por los tejados. Se pierde en la ciudad entre las sombras.",
          "resultB": "El villano queda completamente inmovilizado. Cuando llega la policía, no puede escapar. ¡Ciudad a salvo!",
          "wiseChoice": "B"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], eres el héroe que esta ciudad necesitaba! El villano está entre rejas, todos los rehenes están sanos y salvos y el museo fue protegido. El alcalde te entrega las llaves de la ciudad ante miles de personas. Los periódicos del día siguiente tienen tu foto en portada. Tu aventura como superhéroe apenas comienza...",
        "success": "¡Lo lograste, [NAME]! El villano ha sido detenido aunque no sin dificultades por el camino. Algunos errores te costaron tiempo y algún susto, pero la ciudad está a salvo. Has aprendido lecciones importantes sobre cómo usar tu poder con más inteligencia. ¡El futuro te reserva más aventuras!",
        "failure": "El villano logró escapar, [NAME]. A pesar de tu valentía, algunas decisiones equivocadas le dieron demasiada ventaja. La ciudad sufre daños importantes y la gente está asustada. Pero los verdaderos héroes no se rinden: has aprendido lecciones muy valiosas hoy. ¿Volverás a intentarlo?"
      }
    },
    {
      "id": 2,
      "title": "Aventura Fantástica: El Reino Perdido",
      "topic": "Aventura Fantástica",
      "ageGroup": "7-15",
      "opening": "El bosque encantado susurra tu nombre, [NAME]. Una profecía antigua dice que un valiente aventurero restaurará el Reino Perdido de Eldoria, desaparecido hace mil años. Con una mochila al hombro y la espada de madera tallada por tu abuelo, das el primer paso hacia lo desconocido.",
      "steps": [
        {
          "question": "En la entrada del bosque hay dos posibles guías: un zorro astuto y un hada pequeña. ¿A quién eliges?",
          "choiceA": "Al hada, que conoce los caminos mágicos del bosque",
          "choiceB": "Al zorro, que promete un atajo mucho más rápido",
          "resultA": "El hada te guía por senderos luminosos evitando todas las trampas del bosque oscuro. Llegas a un lago cristalino donde aparece la primera pista del mapa del reino.",
          "resultB": "El zorro te lleva a un laberinto de espinas. Pierdes horas atrapado y cuando sales, el zorro ha desaparecido con parte de tu comida. Empiezas con mal pie.",
          "wiseChoice": "A"
        },
        {
          "question": "En el lago encuentras un dragón bebé atrapado en una red. ¿Qué haces?",
          "choiceA": "Huir rápidamente, los dragones son peligrosos aunque sean pequeños",
          "choiceB": "Liberar al dragón bebé con cuidado",
          "resultA": "El dragón bebé llora y su madre aparece furiosa. Debes huir y en el camino pierdes el mapa. Ahora continúas sin él.",
          "resultB": "El dragón te lame la mano agradecido. Cuando aparece su madre, ve que eres amigo y te regala una escama mágica que brilla en la oscuridad. ¡Un aliado inesperado!",
          "wiseChoice": "B"
        },
        {
          "question": "Un troll custodia el puente sobre el abismo y pide un tributo. ¿Cómo cruzas?",
          "choiceA": "Intentar cruzar a escondidas cuando el troll mire hacia otro lado",
          "choiceB": "Usar la escama mágica para iluminar el camino mientras resuelves el acertijo del troll",
          "resultA": "El troll te descubre y te lanza al otro lado del abismo de un golpe. Estás a salvo pero magullado y sin información valiosa sobre el reino.",
          "resultB": "La luz del dragón revela la respuesta del acertijo. El troll, impresionado, te deja pasar y te da pistas secretas sobre la entrada al castillo.",
          "wiseChoice": "B"
        },
        {
          "question": "El castillo del Reino Perdido está custodiado por guerreros de piedra invencibles. ¿Cómo entras?",
          "choiceA": "Combatir a los guerreros de piedra con tu espada",
          "choiceB": "Buscar una entrada secreta usando las pistas que has recogido",
          "resultA": "Los guerreros son completamente invencibles. Te persiguen durante horas hasta que te escondes agotado en una cueva, sin haber avanzado nada.",
          "resultB": "Las pistas te llevan a una puerta oculta detrás de una cascada. Los guerreros de piedra ni te ven. ¡La preparación tiene recompensa!",
          "wiseChoice": "B"
        },
        {
          "question": "Dentro del castillo encuentras el corazón mágico del reino: un cristal oscurecido por la maldición. ¿Cómo lo restauras?",
          "choiceA": "Golpear el cristal con tu espada para romper la maldición de un golpe",
          "choiceB": "Usar todo lo que aprendiste en el viaje: la luz del dragón, las palabras del troll y la guía del hada",
          "resultA": "El cristal se agrieta pero la maldición se intensifica. Una ola de oscuridad te expulsa del castillo. No fue suficiente.",
          "resultB": "El cristal se ilumina lentamente con cada elemento que aportas. Un destello de luz inunda el castillo y el Reino de Eldoria comienza a florecer de nuevo.",
          "wiseChoice": "B"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], has restaurado el Reino de Eldoria! Las flores mágicas florecen, los ríos vuelven a brillar y los antiguos habitantes del reino regresan de su sueño mágico. El rey fantasma te corona Campeón de Eldoria entre vítores. Tu nombre quedará grabado en la historia de este mundo para siempre.",
        "success": "¡El reino está parcialmente restaurado, [NAME]! El cristal brilla con más fuerza gracias a ti, aunque la maldición no está completamente rota. Los sabios dicen que necesitarás otra aventura para terminar el trabajo. Pero ya eres un héroe: has devuelto la esperanza a Eldoria.",
        "failure": "El Reino de Eldoria sigue en las sombras, [NAME]. Aunque llegaste hasta el castillo, las dificultades del camino te dejaron sin las herramientas necesarias para romper la maldición. El bosque susurra: el reino ha esperado mil años y puede esperar un poco más... hasta que regreses más preparado."
      }
    },
    {
      "id": 3,
      "title": "Misterio: El Caso de la Joya Desaparecida",
      "topic": "Misterio",
      "ageGroup": "7-15",
      "opening": "¡Buenas noches, Detective [NAME]! Una llamada urgente a las 9 de la noche te saca de la cama: la Estrella de Oriente, el diamante más valioso del mundo, ha desaparecido del museo en plena gala. Tienes 12 horas para encontrarla antes de que el ladrón abandone la ciudad. El reloj ya corre.",
      "steps": [
        {
          "question": "Hay tres sospechosos: el guardia de seguridad nervioso, la curadora muy tranquila y un invitado que nadie conoce. ¿A quién interrogas primero?",
          "choiceA": "Al invitado misterioso, ya que nadie lo conoce",
          "choiceB": "Al guardia de seguridad nervioso",
          "resultA": "El invitado tiene coartada perfecta: estaba en directo en televisión durante el robo. Has perdido tiempo valioso en una pista falsa.",
          "resultB": "Bajo presión, el guardia confiesa que apagó las cámaras 'por accidente' exactamente durante 3 minutos. ¡Una pista clave que no esperabas!",
          "wiseChoice": "B"
        },
        {
          "question": "Las cámaras muestran una sombra en esos 3 minutos. ¿Cómo analizas la pista?",
          "choiceA": "Seguir tú solo la sombra en el museo oscuro para no perder tiempo",
          "choiceB": "Llevar la grabación a un experto en análisis de imagen",
          "resultA": "Te pierdes en el museo y activas la alarma. Cuando llegan los policías, el ladrón ha tenido más tiempo para escapar.",
          "resultB": "El experto amplía la imagen y descubre que la sombra lleva un pin del Club de Coleccionistas de Gemas. Solo 12 personas en la ciudad lo tienen.",
          "wiseChoice": "B"
        },
        {
          "question": "La curadora del museo está en la lista del club. ¿Cómo procedes?",
          "choiceA": "Acusarla directamente frente a todos en el museo",
          "choiceB": "Investigar discreta y metódicamente sus movimientos de esa noche",
          "resultA": "La curadora te amenaza con su abogado. Sin pruebas concretas debes retirarte. El caso se complica y pierdes credibilidad.",
          "resultB": "Descubres que la curadora pidió un taxi a un almacén a las 10 de la noche. ¡Eso es muy sospechoso!",
          "wiseChoice": "B"
        },
        {
          "question": "En el almacén encuentras una caja sospechosa. ¿Cómo procedes?",
          "choiceA": "Abrir la caja tú mismo sin esperar para no perder tiempo",
          "choiceB": "Documentar todo y llamar a la policía para que abran la caja legalmente",
          "resultA": "La caja estaba trampeada y activa una alarma. El ladrón recibe una alerta y mueve la joya a otro sitio. Tu impaciencia le avisó.",
          "resultB": "La policía abre la caja con todas las garantías legales: contiene herramientas del robo y huellas que llevan a una dirección concreta.",
          "wiseChoice": "B"
        },
        {
          "question": "Llegas al lugar final donde el ladrón está a punto de vender la joya. ¿Cómo actúas?",
          "choiceA": "Entrar solo para atrapar al ladrón y llevarte toda la gloria",
          "choiceB": "Coordinar una operación con la policía para atrapar al ladrón y al comprador",
          "resultA": "El ladrón escapa por una salida trasera que no conocías. La joya desaparece con él. Tan cerca y tan lejos.",
          "resultB": "Ambos son arrestados en el momento del intercambio. La joya es recuperada intacta. ¡Caso resuelto con brillantez!",
          "wiseChoice": "B"
        }
      ],
      "endings": {
        "heroic": "¡Caso cerrado, Detective [NAME]! La Estrella de Oriente brilla de nuevo en su vitrina y tanto el ladrón como el comprador están entre rejas. El comisario en persona te da la mano ante las cámaras de televisión. ¡Eres el detective más brillante de la ciudad y todos quieren conocerte!",
        "success": "¡Bien hecho, [NAME]! La joya ha sido recuperada, aunque el ladrón logró escapar en el último momento. La investigación continúa y las pruebas que reuniste son sólidas. No fue perfecto, pero lo importante está en su vitrina. ¡La ciudad confía en ti!",
        "failure": "La Estrella de Oriente abandonó la ciudad, [NAME]. Hubo buenas pistas pero las decisiones apresuradas le dieron demasiada ventaja al ladrón. No te rindas: los mejores detectives del mundo aprendieron de sus errores. ¡El próximo caso será tuyo!"
      }
    },
    {
      "id": 4,
      "title": "Explorador Espacial: Viaje al Planeta Nexus",
      "topic": "Explorador Espacial",
      "ageGroup": "7-15",
      "opening": "Cuenta atrás: 10, 9, 8... ¡Los motores de la nave Horizonte rugen y tú, Capitán [NAME], estás pegado a tu asiento por la fuerza del despegue! Tu misión: llegar al misterioso Planeta Nexus del que solo existen rumores y volver con vida. La NASA dice que es imposible. Tú dices que lo harás.",
      "steps": [
        {
          "question": "A mitad del viaje el sistema de navegación falla. ¿Cómo lo repararas?",
          "choiceA": "Reiniciar el sistema completo sin diagnosticarlo para ahorrar tiempo",
          "choiceB": "Hacer una caminata espacial para revisar los paneles externos manualmente",
          "resultA": "El reinicio borra las coordenadas de Nexus. Pasas horas recalculando y llegas con menos combustible del esperado. Mal comienzo.",
          "resultB": "Con cuidado en el vacío del espacio, identificas un cable suelto y lo reparas. La nave vuelve al rumbo correcto y tu tripulación te da una ovación.",
          "wiseChoice": "B"
        },
        {
          "question": "Orbitas Nexus y detectas una señal mecánica y una señal biológica. ¿Cuál investigas primero?",
          "choiceA": "La señal mecánica: podría ser tecnología alienígena increíble",
          "choiceB": "La señal biológica: podría ser vida",
          "resultA": "La señal mecánica es una trampa: un campo de asteroides daña tu nave. Debes reparar tres sistemas antes de poder aterrizar.",
          "resultB": "Descubres criaturas luminosas que flotan en la atmósfera. Son pacíficas y al detectar tu nave, crean un corredor de luz seguro para que aterrices. ¡Maravilloso!",
          "wiseChoice": "B"
        },
        {
          "question": "Las criaturas luminosas se acercan al aterrizar. ¿Cómo reaccionas?",
          "choiceA": "Llevar armas de defensa por si acaso al salir de la nave",
          "choiceB": "Bajar lentamente con las manos visibles en señal de paz",
          "resultA": "Las criaturas detectan las armas y se alarman. Tardan horas en volver a acercarse. La desconfianza marca el primer encuentro entre mundos.",
          "resultB": "Las criaturas se iluminan con colores cálidos. Una de ellas extiende algo brillante hacia ti: un cristal que actúa como traductor universal.",
          "wiseChoice": "B"
        },
        {
          "question": "Las criaturas te informan que una tormenta de radiación llegará en horas. ¿Cómo ayudas?",
          "choiceA": "Construir un escudo de radiación con los materiales de tu nave",
          "choiceB": "Compartir los datos con la NASA para diseñar una solución usando recursos del propio planeta",
          "resultA": "No tienes materiales suficientes y el escudo falla. La tormenta llega y causa daños en tu nave y en el planeta.",
          "resultB": "La NASA identifica que minerales del planeta crean un campo protector natural. La solución funciona y las criaturas están a salvo. ¡Trabajo conjunto entre mundos!",
          "wiseChoice": "B"
        },
        {
          "question": "Es hora de volver. Las criaturas te ofrecen tecnología alienígena a cambio de guardar el secreto de Nexus para siempre. ¿Qué decides?",
          "choiceA": "Aceptar todo: la tecnología y guardar el secreto para siempre",
          "choiceB": "Aceptar la tecnología pero insistir en que el mundo debe saber que no está solo, prometiendo proteger Nexus",
          "resultA": "La tecnología es increíble pero cargas con un secreto enorme. Cuando alguien descubre la verdad años después, tu reputación queda dañada.",
          "resultB": "Las criaturas acuerdan. Regresas con pruebas del contacto y la promesa de una relación entre mundos. La humanidad celebra la noticia.",
          "wiseChoice": "B"
        }
      ],
      "endings": {
        "heroic": "¡Bienvenido de vuelta, Capitán [NAME]! La noticia del contacto con vida en Nexus sacude al mundo. La tecnología alienígena cura enfermedades y resuelve la crisis energética. Eres el explorador más famoso de la historia humana y las criaturas de Nexus ya te esperan para tu próxima visita.",
        "success": "¡Has vuelto, [NAME]! Tu viaje fue histórico: hiciste contacto con vida alienígena y trajiste conocimientos valiosos. No todo salió según el plan, pero el resultado es extraordinario. La humanidad sabe por primera vez que no está sola en el universo. ¡Tu nombre está en los libros de historia!",
        "failure": "Regresaste a salvo, [NAME], que ya es mucho decir. Las dificultades del viaje impidieron aprovechar al máximo el encuentro con Nexus. Las criaturas desconfían un poco y la NASA tiene más preguntas que respuestas. Pero eres el primer humano en llegar allí: eso nadie te lo quita."
      }
    },
    {
      "id": 5,
      "title": "Animales y Naturaleza: Guardián del Bosque",
      "topic": "Animales y Naturaleza",
      "ageGroup": "7-15",
      "opening": "El Bosque Eterno ha sido tu hogar desde siempre, [NAME]. Los animales te conocen y confían en ti. Pero esta madrugada el búho mayor te despierta agitado: ¡las máquinas llegarán al amanecer para talar todo el bosque! Tienes una sola noche para salvarlo.",
      "steps": [
        {
          "question": "Necesitas alertar a todos los animales. ¿Cómo lo haces?",
          "choiceA": "Correr tú solo por todos los senderos del bosque avisando a cada animal",
          "choiceB": "Pedir al búho que vuele lanzando su llamada de alarma mientras tú avisas por los senderos principales",
          "resultA": "El bosque es enorme. Solo llegas a avisar a un tercio de los animales antes de que amanezca. Tu alianza es demasiado pequeña.",
          "resultB": "En minutos cientos de animales se congregan en el claro central. Tienes un ejército de aliados dispuestos a todo.",
          "wiseChoice": "B"
        },
        {
          "question": "Necesitas saber exactamente el plan de los taladores. ¿Cómo consigues información?",
          "choiceA": "Entrar tú solo a escondidas en el campamento de los taladores",
          "choiceB": "Enviar a los cuervos a espiar desde los árboles, silenciosos e invisibles",
          "resultA": "Los perros guardianes te detectan y eres perseguido durante una hora. Pierdes tiempo precioso.",
          "resultB": "Los cuervos regresan con información exacta: los taladores empezarán por el roble milenario, el corazón del bosque.",
          "wiseChoice": "B"
        },
        {
          "question": "Decides defender el roble milenario primero. ¿Cómo lo proteges?",
          "choiceA": "Dañar las máquinas de tala durante la noche para que no funcionen",
          "choiceB": "Organizar a los animales grandes en círculo alrededor del roble, visibles y majestuosos",
          "resultA": "Una de las máquinas explota y causa un pequeño incendio. Los bomberos llegan y en el caos los taladores empiezan a trabajar en otra zona.",
          "resultB": "Osos, ciervos, lobos y jabalíes forman una barrera impresionante. Cuando los taladores llegan al amanecer, se quedan paralizados ante el espectáculo.",
          "wiseChoice": "B"
        },
        {
          "question": "Un periodista de televisión llega al bosque. ¿Cómo usas esta oportunidad?",
          "choiceA": "Ignorarlo y concentrarse en la defensa física del bosque",
          "choiceB": "Llevar al periodista al roble donde los animales siguen en formación",
          "resultA": "El periodista se aburre y se va. La historia nunca llega a las noticias y nadie de fuera sabe lo que está pasando.",
          "resultB": "Las imágenes se emiten en directo. Millones de personas ven la escena y las redes sociales explotan de solidaridad con el bosque.",
          "wiseChoice": "B"
        },
        {
          "question": "El dueño de la empresa taladora llega personalmente. ¿Cómo lo enfrentas?",
          "choiceA": "Amenazarle con que los animales atacarán si no se va inmediatamente",
          "choiceB": "Mostrarle el valor científico y ecológico único del bosque con los datos que los cuervos recogieron",
          "resultA": "El dueño llama a la policía y la situación se complica. Los animales son considerados una amenaza y la imagen se tuerce.",
          "resultB": "El dueño, ante las cámaras de televisión y la presión pública, decide negociar. Firma un acuerdo para proteger el bosque a cambio de explorar alternativas sostenibles.",
          "wiseChoice": "B"
        }
      ],
      "endings": {
        "heroic": "¡El Bosque Eterno está a salvo, [NAME]! El gobierno ha declarado el bosque Parque Natural Protegido gracias a las imágenes que se viralizaron. Los animales celebran toda la noche con una sinfonía de sonidos que nunca habías escuchado. Eres el Guardián Legendario del Bosque.",
        "success": "¡Lo conseguiste, [NAME]! El roble milenario y la mayor parte del bosque están protegidos. Aunque algunas zonas externas fueron taladas, el corazón del bosque late fuerte. Los animales te deben la vida. ¡Has marcado la diferencia!",
        "failure": "El bosque perdió muchos árboles esta noche, [NAME]. Sin la coordinación perfecta, los taladores avanzaron más de lo que debían. Pero el roble milenario sigue en pie: los animales lo protegieron con sus cuerpos. La lucha continúa y el bosque te necesita más que nunca."
      }
    },
    {
      "id": 6,
      "title": "Escuela Mágica: El Desastre del Hechizo",
      "topic": "Escuela Mágica",
      "ageGroup": "7-15",
      "opening": "¡Bienvenido a la Academia Arcana, [NAME]! Hoy es tu primer día y ya se nota que tienes talento: cuando entraste, todas las velas del aula se encendieron solas. Pero antes de sentarte, un estudiante torpón lanza accidentalmente el Hechizo de la Piedra Eterna y convierte a todos los profesores en estatuas. El caos es total. Todos te señalan: ¡tú tienes que arreglarlo!",
      "steps": [
        {
          "question": "Necesitas el antídoto del hechizo. ¿Dónde buscas primero?",
          "choiceA": "Intentar inventar un hechizo de reversión tú solo sin información",
          "choiceB": "Ir a la Biblioteca Mágica y buscar en el índice de hechizos de emergencia",
          "resultA": "Tu hechizo improvisado convierte las estatuas en gelatina. Siguen siendo estatuas pero ahora se tambalean cómicamente. La situación empeora bastante.",
          "resultB": "Encuentras rápidamente la sección de Revertir Petrificación. El contraconjuro requiere tres ingredientes que están en el aula de pociones.",
          "wiseChoice": "B"
        },
        {
          "question": "En el aula de pociones está Magnus, un estudiante mayor experto en pociones. ¿Cómo trabajas con él?",
          "choiceA": "Preparar la poción tú solo para no perder tiempo",
          "choiceB": "Pedirle a Magnus que prepare la poción mientras tú consigues los ingredientes",
          "resultA": "Sin experiencia, mezclas mal los ingredientes. La poción explota y mancha todo el aula de azul. Debes empezar de cero.",
          "resultB": "Magnus es eficiente y meticuloso. En quince minutos la poción está lista. ¡El trabajo en equipo marca la diferencia!",
          "wiseChoice": "B"
        },
        {
          "question": "El contraconjuro está en idioma mágico antiguo y es difícil de pronunciar. ¿Cómo lo dices?",
          "choiceA": "Pronunciarlo rápido de un tirón para acabar antes",
          "choiceB": "Practicar cada palabra despacio con el libro antes de pronunciar el hechizo completo",
          "resultA": "Las palabras se mezclan y el hechizo sale al revés: los profesores se vuelven más piedra todavía. La situación es crítica.",
          "resultB": "Cada sílaba resuena con poder. Una luz dorada emana de tus manos y los profesores empiezan a recuperar el color poco a poco.",
          "wiseChoice": "B"
        },
        {
          "question": "El hechizo necesita más energía mágica para completarse. ¿Cómo la consigues?",
          "choiceA": "Intentar absorber energía de los muros mágicos del castillo",
          "choiceB": "Convocar a todos los estudiantes del colegio para que unan su energía en un gran círculo",
          "resultA": "Los muros pierden su protección y criaturas mágicas del bosque exterior empiezan a colarse en el castillo. Nuevo problema.",
          "resultB": "Docenas de estudiantes unen sus manos. La energía combinada hace brillar todo el castillo con una luz preciosa y poderosa.",
          "wiseChoice": "B"
        },
        {
          "question": "Con toda esa energía debes dirigir el hechizo final. ¿Cómo lo enfocas?",
          "choiceA": "Liberar toda la energía de golpe esperando que eso solucione el problema",
          "choiceB": "Dirigir la energía con calma y precisión, visualizando a cada profesor volviendo a la vida",
          "resultA": "La explosión de energía revierte el hechizo pero también rompe todas las ventanas del castillo. Los profesores despiertan aturdidos rodeados de cristales.",
          "resultB": "Los profesores se despiertan uno a uno, confundidos pero completamente ilesos. El último en despertar, el director, te mira y sonríe: 'Bienvenido a la Academia Arcana, [NAME].'",
          "wiseChoice": "B"
        }
      ],
      "endings": {
        "heroic": "¡Eres la estrella de la Academia Arcana, [NAME]! Salvaste a todos los profesores sin un rasguño, uniste a toda la escuela en un acto de magia colectiva y demostraste más talento en tu primer día que muchos en años. El director te otorga la Medalla de Cristal y te asigna directamente a las clases avanzadas.",
        "success": "¡Lo conseguiste, [NAME]! Todos los profesores están vivos y bien, aunque el aula de pociones quedó bastante perjudicada. Nadie olvidará este primer día. El director dice que tienes un talento natural innegable y que solo necesitas práctica. ¡El futuro mago que hay en ti acaba de despertar!",
        "failure": "Los profesores despertaron gracias a un hechizo de emergencia automático del castillo, pero no antes de pasar horas como estatuas. Aunque tus intenciones eran buenas, [NAME], las decisiones apresuradas lo complicaron todo. El director te dice con una sonrisa cansada: 'Definitivamente tienes magia. Ahora aprende a usarla con cuidado.'"
      }
    },
    {
      "id": 7,
      "title": "Aventura Pirata: La Caza del Tesoro",
      "topic": "Aventura Pirata",
      "ageGroup": "7-15",
      "opening": "¡Izar velas, marineros! Capitán [NAME] al timón del Dragón Plateado, el barco más rápido de todos los mares. Un mapa encontrado en el cofre de tu bisabuelo señala la Brújula de Oro, un tesoro legendario que dicen que concede a quien la toque el don de nunca perderse en la vida. Pero la flota del temido Almirante Sombra también la busca.",
      "steps": [
        {
          "question": "Necesitas descifrar la primera pista del mapa. ¿A quién pides ayuda?",
          "choiceA": "Intentar descifrar el mapa tú solo durante la travesía",
          "choiceB": "Consultar al viejo cartógrafo del puerto, experto en mapas piratas antiguos",
          "resultA": "El mapa tiene trampas para despistar a ladrones. Vas en dirección equivocada dos días. Cuando corriges el rumbo, el Almirante Sombra os lleva ventaja.",
          "resultB": "El cartógrafo reconoce los símbolos: son coordenadas piratas del siglo XVII. Te marca la ruta exacta y te advierte de los peligros.",
          "wiseChoice": "B"
        },
        {
          "question": "Una tormenta aparece en el horizonte. ¿Qué decides?",
          "choiceA": "Atravesar la tormenta directamente para ganar tiempo",
          "choiceB": "Rodear la tormenta por el sur usando la brújula con destreza",
          "resultA": "La tormenta daña el mástil principal y la tripulación está aterrada. Llegas a la isla con el barco muy averiado y el ánimo bajo.",
          "resultB": "Tardas unas horas más pero llegas sano y con la tripulación animada. Divisáis la isla del tesoro al amanecer.",
          "wiseChoice": "B"
        },
        {
          "question": "En la isla hay dos caminos: jungla densa o playa rodeando la isla. ¿Cuál tomas?",
          "choiceA": "La playa, por ser más segura y despejada",
          "choiceB": "La jungla aunque sea difícil, siguiendo las marcas del mapa",
          "resultA": "Al llegar al otro lado, el Almirante Sombra ya está ahí con sus piratas. Vinieron también por la playa. Debes enfrentarlos antes de buscar el tesoro.",
          "resultB": "Las marcas del mapa te guían a una cueva escondida con más pistas. ¡El mapa fue diseñado para seguir este camino!",
          "wiseChoice": "B"
        },
        {
          "question": "La cámara del tesoro está cerrada con tres candados. ¿Cómo los abres?",
          "choiceA": "Volarlos con pólvora para entrar rápido",
          "choiceB": "Examinar los candados con calma buscando las llaves en la sala",
          "resultA": "La explosión alerta a los piratas del Almirante Sombra que aún no os habían encontrado. Llegan corriendo.",
          "resultB": "Con paciencia encuentras las tres llaves escondidas en estatuas de la sala. La puerta se abre con un crujido épico sin alertar a nadie.",
          "wiseChoice": "B"
        },
        {
          "question": "La Brújula de Oro está frente a ti pero el Almirante Sombra aparece apuntando con su pistola. ¿Cómo resuelves esto?",
          "choiceA": "Intentar huir con la brújula corriendo por la cueva oscura",
          "choiceB": "Usar el ingenio: esconder la brújula y mostrar monedas de oro mientras tu tripulación rodea al Almirante por detrás",
          "resultA": "Tropiezas en la oscuridad y la brújula cae. El Almirante Sombra la recoge victorioso.",
          "resultB": "El Almirante cae en la trampa. Tu tripulación lo desarma antes de que reaccione. ¡La brújula es tuya!",
          "wiseChoice": "B"
        }
      ],
      "endings": {
        "heroic": "¡La leyenda del Capitán [NAME] navegará por todos los mares! Regresaste con la Brújula de Oro, el Almirante Sombra fue entregado a las autoridades y tu tripulación te canta canciones de victoria. La Brújula resulta ser real: desde ese día, nunca más te pierdes en la vida. ¡Los mares son tuyos!",
        "success": "¡El tesoro es tuyo, [NAME]! La Brújula de Oro brilla en tus manos mientras el Dragón Plateado navega de vuelta al puerto. Hubo momentos difíciles y el Almirante os puso las cosas muy complicadas, pero la determinación de un buen capitán siempre encuentra el camino.",
        "failure": "La Brújula de Oro terminó en manos del Almirante Sombra, [NAME]. Hubo buenas decisiones pero también errores que costaron caro. Tu tripulación te sigue confiando igual: dicen que lo importante es que todos regresaron a casa. La próxima vez, la brújula será tuya."
      }
    },
    {
      "id": 8,
      "title": "Viajero del Tiempo: Salvando la Historia",
      "topic": "Viajero del Tiempo",
      "ageGroup": "7-15",
      "opening": "¡ZAP! Tu máquina del tiempo funciona. La pantalla parpadea en rojo: ¡ERROR CRÍTICO EN LA LÍNEA DE TIEMPO! Alguien cambió el pasado y si no lo corriges en horas, el futuro dejará de existir tal como lo conoces. Eres [NAME], el inventor más joven de la historia, y acabas de convertirte en el único que puede salvar el mundo.",
      "steps": [
        {
          "question": "El monitor muestra errores en dos épocas distintas. ¿Por dónde empiezas?",
          "choiceA": "Viajar al error más cercano en el tiempo (1923) porque parece más sencillo",
          "choiceB": "Analizar los datos para identificar cuál error tiene mayor impacto antes de viajar",
          "resultA": "Al llegar, descubres que el error de 1923 depende de haber solucionado primero el de 1450. Debes volver y gastar energía extra en dos viajes.",
          "resultB": "Los datos indican que el error del año 1450 es crítico: alguien destruyó los planos de una invención que cambió la historia. Viajas directamente al más importante.",
          "wiseChoice": "B"
        },
        {
          "question": "En 1450, un inventor genial tiene su taller destruido por un incendio sospechoso. ¿Cómo le ayudas?",
          "choiceA": "Darle directamente los planos reconstruidos desde tu base de datos del futuro",
          "choiceB": "Ayudarle a reconstruir el taller y guiarle para que él mismo redescubra los planos",
          "resultA": "El inventor los acepta pero no entiende del todo los conceptos. La invención que construye es incompleta y genera una nueva pequeña anomalía.",
          "resultB": "El inventor trabaja con entusiasmo y sus propias ideas mejoran incluso el diseño original. La historia queda mejor que antes.",
          "wiseChoice": "B"
        },
        {
          "question": "Alguien de tu época te sigue a través del tiempo para robarte la máquina. ¿Cómo le paras?",
          "choiceA": "Confrontarle directamente en el año 1450",
          "choiceB": "Dejar una trampa temporal: un bucle de tiempo pequeño donde quede atrapado inofensivamente 24 horas",
          "resultA": "La pelea en el pasado crea paradojas. Un jarrón del siglo XV aparece misteriosamente en tu cocina del siglo XXI.",
          "resultB": "El ladrón queda en bucle, repitiendo el mismo minuto. Tienes tiempo para terminar tu misión sin interferencias.",
          "wiseChoice": "B"
        },
        {
          "question": "En 1923, una científica brillante está a punto de renunciar a su investigación por falta de apoyo. ¿Qué haces?",
          "choiceA": "Decirle directamente que en el futuro su trabajo salvará millones de vidas",
          "choiceB": "Conseguir anónimamente que una fundación de la época financie su investigación",
          "resultA": "La científica te mira incrédula, no te cree y te llama loco. Se va a casa igualmente. Tu intervención directa no funcionó.",
          "resultB": "La científica recibe la carta de financiación al día siguiente y continúa su trabajo con emoción renovada. La historia queda restaurada.",
          "wiseChoice": "B"
        },
        {
          "question": "La línea de tiempo muestra un 95% de restauración. Falta un pequeño ajuste. ¿Cómo lo haces?",
          "choiceA": "Hacer un viaje grande intentando mejorar más cosas mientras estás en ello",
          "choiceB": "Calcular con precisión el ajuste mínimo necesario y ejecutarlo con cuidado",
          "resultA": "Cada cambio extra crea nuevas pequeñas anomalías. La línea de tiempo queda al 78%. Funciona pero podría haber sido perfecta.",
          "resultB": "Con un pequeño viaje de cinco minutos corriges el último detalle. La pantalla se pone verde: LÍNEA DE TIEMPO RESTAURADA AL 100%.",
          "wiseChoice": "B"
        }
      ],
      "endings": {
        "heroic": "¡La historia está a salvo, [NAME]! La línea de tiempo brilla en verde en todos los monitores. El inventor del siglo XV construyó su obra maestra, la científica de 1923 publicó su investigación y el futuro que conoces sigue intacto. El recién creado Ministerio del Tiempo te ofrece el puesto de Guardián Temporal. ¡El tiempo es tu reino!",
        "success": "¡Misión cumplida, [NAME]! La línea de tiempo está restaurada, aunque con algunas pequeñas diferencias. Tu perro ahora se llama diferente y el color de tu casa cambió de azul a verde, pero lo importante está en su lugar. ¡Salvaste el futuro!",
        "failure": "El futuro existe, [NAME], pero con bastantes diferencias respecto al original. Tu mejor amigo vive ahora en otro país y los dinosaurios del parque natural son más pequeños. Salvaste lo esencial pero el tiempo guarda sus secretos. ¡Aprende de esta aventura para la próxima misión!"
      }
    },
    {
      "id": 9,
      "title": "Mundo de Videojuegos: El Jefe Final",
      "topic": "Mundo de Videojuegos",
      "ageGroup": "7-15",
      "opening": "Tu pantalla parpadea y de repente... ¡estás dentro del juego! [NAME], has sido absorbido por el legendario Mundo de Héroes y para salir debes llegar al nivel 100 y derrotar al Jefe Supremo. Pero cuidado: si pierdes todos tus puntos de vida, te quedas atrapado para siempre. Las reglas del juego son ahora las reglas de tu vida.",
      "steps": [
        {
          "question": "Empiezas en el nivel 1 sin equipo. Hay otros personajes del juego cerca que podrían ayudarte. ¿Qué haces?",
          "choiceA": "Ir solo para progresar más rápido sin depender de nadie",
          "choiceB": "Proponer formar un equipo desde el principio",
          "resultA": "Los primeros niveles son muy difíciles solo. Cuando llegas al nivel 20, estás muy debilitado y sin aliados.",
          "resultB": "Un guerrero, una maga y un curandero se unen a ti. Con este equipo equilibrado, los primeros niveles son mucho más sencillos.",
          "wiseChoice": "B"
        },
        {
          "question": "En el nivel 30 hay una tienda mágica con objetos poderosos. Solo tienes monedas para uno. ¿Qué compras?",
          "choiceA": "La Espada del Caos, el arma más poderosa de la tienda",
          "choiceB": "El Escudo de la Sabiduría, que amplifica los poderes de todo el equipo",
          "resultA": "La espada es poderosa pero consume el doble de energía. En batallas largas te quedas sin fuerza demasiado pronto.",
          "resultB": "El escudo hace que todo tu equipo sea más fuerte cuando trabajáis juntos. ¡La diferencia es enorme en los niveles siguientes!",
          "wiseChoice": "B"
        },
        {
          "question": "En el nivel 60 hay un laberinto trampa. El juego te ofrece dos opciones:",
          "choiceA": "Entrar directamente confiando en tus reflejos",
          "choiceB": "Activar el modo Observador durante 5 minutos para estudiar el laberinto antes de entrar",
          "resultA": "Las trampas os pillan por sorpresa. El curandero pierde la mitad de su energía y quedáis muy debilitados.",
          "resultB": "Ves el patrón de las trampas claramente. Tu equipo atraviesa el laberinto sin perder ni un solo punto de vida.",
          "wiseChoice": "B"
        },
        {
          "question": "En el nivel 85 descubres que el Jefe Supremo tiene una debilidad oculta. ¿Cómo la descubres?",
          "choiceA": "Atacar al Jefe directamente para identificar su debilidad durante la batalla",
          "choiceB": "Explorar los niveles anteriores buscando pergaminos de información sobre el Jefe",
          "resultA": "El Jefe os aplasta a los cuatro en segundos. La debilidad no la descubriste y perdéis mucha energía vital.",
          "resultB": "Un pergamino antiguo revela todo: el Jefe Supremo es vulnerable a la magia del equipo combinada con el Escudo de la Sabiduría. ¡Perfecto!",
          "wiseChoice": "B"
        },
        {
          "question": "¡Nivel 100! El Jefe Supremo aparece enorme y aterrador. ¿Cómo lo enfrentas?",
          "choiceA": "Entrar en pánico y atacar solo con todo lo que tienes",
          "choiceB": "Ejecutar el plan: activar el Escudo mientras la maga lanza el hechizo combinado",
          "resultA": "El Jefe resiste y contraataca con fuerza. Tu equipo os saca del apuro pero con mucho esfuerzo y a los mínimos.",
          "resultB": "El Jefe Supremo ruge, brilla con luz dorada y explota en una lluvia de estrellas. La pantalla dice: ¡VICTORIA! ¡PORTAL DE SALIDA ABIERTO!",
          "wiseChoice": "B"
        }
      ],
      "endings": {
        "heroic": "¡[NAME] completó Mundo de Héroes con puntuación perfecta! Cuando el portal te devuelve al mundo real, tu pantalla muestra: Primer jugador en la historia en alcanzar puntuación máxima. El creador del juego te llama personalmente para ofrecerte ser el probador oficial de sus futuros juegos. ¡La aventura real acaba de empezar!",
        "success": "¡Lo lograste, [NAME]! Estás de vuelta en el mundo real, sano y salvo. El juego te dio una puntuación de Gran Aventurero y tus compañeros del equipo fueron los mejores aliados que pudiste tener. La aventura fue increíble. ¡Ahora a contársela a todo el mundo!",
        "failure": "Saliste del juego, [NAME], que ya es lo más importante. La puntuación final no fue la que esperabas y las decisiones difíciles te costaron caro. Pero encontraste el camino de vuelta a casa. La próxima vez que entres a ese juego, sabrás exactamente qué hacer diferente."
      }
    },
    {
      "id": 10,
      "title": "Explorador Submarino: El Secreto del Abismo",
      "topic": "Explorador Submarino",
      "ageGroup": "7-15",
      "opening": "El submarino Nautilus III desciende lentamente hacia la oscuridad más absoluta. A 11.000 metros de profundidad, donde ningún humano ha llegado jamás, tus instrumentos registran datos nunca vistos. Tú, el joven científico marino [NAME], estás a punto de cambiar la historia. Aquí abajo, lo desconocido espera.",
      "steps": [
        {
          "question": "A 5.000 metros aparece en el sonar una forma enorme que se mueve. ¿Cómo reaccionas?",
          "choiceA": "Encender todos los focos para verla lo mejor posible",
          "choiceB": "Reducir velocidad y apagar las luces externas para observarla sin asustarla",
          "resultA": "La criatura se aterra con la luz intensa y golpea el submarino con su cola. Una grieta en la ventanilla trasera necesita reparación urgente.",
          "resultB": "En la oscuridad, la criatura pasa junto al submarino. Es una ballena gigante de especie desconocida, completamente bioluminiscente. Cuando se aleja, deja un rastro de luz azul precioso.",
          "wiseChoice": "B"
        },
        {
          "question": "A 8.000 metros el motor principal falla. ¿Cómo lo repararas?",
          "choiceA": "Intentar repararlo tú mismo cuanto antes para no perder tiempo",
          "choiceB": "Contactar con los ingenieros en la superficie para que te guíen paso a paso",
          "resultA": "Sin los manuales técnicos, conectas dos cables incorrectos. El motor vuelve a funcionar pero al 60% de potencia. El descenso es más lento y peligroso.",
          "resultB": "Con sus instrucciones precisas la reparación tarda 20 minutos pero queda perfecta. El motor funciona al 100%.",
          "wiseChoice": "B"
        },
        {
          "question": "Llegas al fondo y descubres una ciudad submarina antigua. ¿Cómo la exploras?",
          "choiceA": "Acercarte directamente con el submarino para verla mejor",
          "choiceB": "Sacar el dron de exploración para mapear la estructura antes de acercarte",
          "resultA": "El movimiento desestabiliza una columna antigua. Se derrumba y bloquea parcialmente la entrada principal.",
          "resultB": "El dron revela una entrada principal estable y zonas de riesgo de derrumbe. Puedes entrar con total seguridad por la ruta correcta.",
          "wiseChoice": "B"
        },
        {
          "question": "Dentro de la ciudad encuentras inscripciones fascinantes en las paredes. ¿Cómo las estudias?",
          "choiceA": "Copiarlas a mano rápidamente para no perder tiempo",
          "choiceB": "Fotografiarlas con la cámara de alta resolución y enviarlas en tiempo real a los expertos",
          "resultA": "Las copias tienen errores al hacerlo con prisas. Los científicos de superficie no pueden descifrarlas bien.",
          "resultB": "Los expertos responden en minutos: es un idioma de una civilización desconocida. Empiezan a descifrarlo en directo desde la superficie.",
          "wiseChoice": "B"
        },
        {
          "question": "Una alarma avisa: oxígeno para solo 2 horas. Queda una cámara sin explorar que podría contener el secreto de toda esta civilización. ¿Qué decides?",
          "choiceA": "Entrar tú mismo a la cámara para explorarla en persona",
          "choiceB": "Enviar el dron a la cámara final para grabarlo todo mientras inicias el ascenso",
          "resultA": "Pasas demasiado tiempo dentro. Cuando subes, el oxígeno cae a niveles críticos. Llegas a la superficie justo a tiempo pero sin las grabaciones completas.",
          "resultB": "El dron graba durante 90 minutos mientras subes con seguridad. La grabación contiene algo increíble: seres vivos en estado de hibernación. La ciudad no está abandonada.",
          "wiseChoice": "B"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], has hecho el descubrimiento más importante de la historia de la humanidad! Una civilización inteligente vive en el fondo del océano, en hibernación, esperando algo. Los científicos de todo el mundo estudian tus grabaciones con lágrimas en los ojos. El Nautilus III es expuesto en un museo y tú das conferencias en las mejores universidades del planeta.",
        "success": "¡Increíble expedición, [NAME]! La ciudad submarina es el descubrimiento arqueológico del siglo. Las fotografías e inscripciones que trajiste mantendrán ocupados a los científicos durante décadas. No todo pudo explorarse esta vez, pero lo que encontraste es suficiente para cambiar lo que sabemos sobre la historia.",
        "failure": "Regresaste a salvo del abismo, [NAME], que ya es mucho. La ciudad submarina existe y eso es histórico aunque los datos sean incompletos. Los científicos tienen suficiente para organizar una segunda expedición. Y esta vez, tú ya sabes lo que hay allá abajo. ¡El océano te llama de nuevo!"
      }
    }
  ]
}`;

    try {
        const data = JSON.parse(storiesJSON);
        storiesData = data.stories;
    } catch (e) {
        console.error('Error loading stories:', e);
    }
}

// Setup event listeners
function setupEventListeners() {
    userForm.addEventListener('submit', handleFormSubmit);
    choiceA.addEventListener('click', () => handleChoice('A'));
    choiceB.addEventListener('click', () => handleChoice('B'));
    restartBtn.addEventListener('click', resetToWelcome);
    shareBtn.addEventListener('click', shareStory);
    playAgainBtn.addEventListener('click', playAgain);
    differentStoryBtn.addEventListener('click', resetToWelcome);
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const age = document.getElementById('userAge').value;
    const topic = document.getElementById('storyTopic').value;

    if (!name || !age || !topic) {
        alert('Por favor completa todos los campos');
        return;
    }

    currentState.userName = name;
    currentState.userAge = age;

    const story = storiesData.find(s => s.topic === topic);
    if (story) {
        currentState.selectedStory = story;
        currentState.decisions = [];
        currentState.currentStep = 0;
        currentState.score = 0;
        currentState.isEnding = false;
        showStory();
    }
}

// Show story screen
function showStory() {
    switchScreen('storyScreen');
    const story = currentState.selectedStory;

    storyTitle.textContent = story.title;
    storyTopic.textContent = `📚 ${story.topic}`;

    const opening = story.opening.replace(/\[NAME\]/g, currentState.userName);
    displayStoryText(opening);

    updateChoices();
}

// Display story text with animation
function displayStoryText(text) {
    storyText.textContent = text;
    storyText.classList.remove('typing');
    void storyText.offsetWidth;
    storyText.classList.add('typing');
}

// Update choice buttons for current step
function updateChoices() {
    const story = currentState.selectedStory;
    const step = story.steps[currentState.currentStep];

    // Show illustration for this step
    const illu = document.getElementById('storyIllustration');
    const illustrations = storyIllustrations && storyIllustrations[story.topic];
    if (illustrations && illustrations[currentState.currentStep]) {
        illu.innerHTML = illustrations[currentState.currentStep];
        illu.style.display = 'block';
    } else {
        illu.style.display = 'none';
    }

    questionText.textContent = step.question;
    choiceA.textContent = step.choiceA;
    choiceB.textContent = step.choiceB;
    choicesContainer.style.display = 'block';
}

// Handle choice click
function handleChoice(choice) {
    const story = currentState.selectedStory;
    const step = story.steps[currentState.currentStep];

    // Disable buttons to prevent double-click
    choiceA.disabled = true;
    choiceB.disabled = true;

    // Hide illustration while result text is shown
    document.getElementById('storyIllustration').style.display = 'none';

    // Award point for wise choice
    if (step.wiseChoice === choice) {
        currentState.score++;
    }
    currentState.decisions.push(choice);

    // Show result text
    const result = choice === 'A' ? step.resultA : step.resultB;
    const resultWithName = result.replace(/\[NAME\]/g, currentState.userName);
    displayStoryText(resultWithName);
    choicesContainer.style.display = 'none';
    questionText.textContent = '';

    currentState.currentStep++;

    if (currentState.currentStep >= story.steps.length) {
        setTimeout(() => showEnding(), 1200);
    } else {
        setTimeout(() => {
            choiceA.disabled = false;
            choiceB.disabled = false;
            updateChoices();
        }, 1000);
    }
}

// Show ending screen based on score
function showEnding() {
    currentState.isEnding = true;
    const story = currentState.selectedStory;

    let ending, title;
    if (currentState.score >= 4) {
        ending = story.endings.heroic;
        title = '⭐ ¡Aventura Épica! ⭐';
    } else if (currentState.score >= 2) {
        ending = story.endings.success;
        title = '¡Aventura Completada!';
    } else {
        ending = story.endings.failure;
        title = 'Fin de la Aventura...';
    }

    switchScreen('endScreen');

    endingTitle.textContent = title;
    endingTitle.style.color = currentState.score >= 2 ? 'var(--success-color)' : 'var(--accent-color)';
    endingText.textContent = ending.replace(/\[NAME\]/g, currentState.userName);
    decisionsCount.textContent = `${currentState.score} / 5`;

    playStoryAnimation(story.topic);
}

// Switch between screens
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Play again with same story
function playAgain() {
    currentState.decisions = [];
    currentState.currentStep = 0;
    currentState.score = 0;
    currentState.isEnding = false;
    showStory();
}

// Reset to welcome screen
function resetToWelcome() {
    currentState = {
        userName: '',
        userAge: '',
        selectedStory: null,
        decisions: [],
        currentStep: 0,
        score: 0,
        isEnding: false
    };

    userForm.reset();
    switchScreen('welcomeScreen');
}

// Share story
function shareStory() {
    const scoreText = currentState.score >= 4 ? '¡puntuación épica!' :
                      currentState.score >= 2 ? 'buena puntuación' : 'resultado interesante';
    const shareText = `¡Acabo de completar una aventura de "${currentState.selectedStory.topic}" en Aventuras Interactivas con ${scoreText} (${currentState.score}/5 decisiones acertadas). ¿Te animas a vivir la tuya? 📖✨`;

    if (navigator.share) {
        navigator.share({
            title: 'Historias Interactivas',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('¡Texto copiado! Puedes compartirlo en tus redes sociales.');
        });
    }
}

// Play themed emoji animation at end of story
function playStoryAnimation(topic) {
    const container = document.getElementById('storyAnimation');
    container.innerHTML = '';

    const emojiMap = {
        'Superhéroes':          ['⚡','🦸','✨','💥','⭐'],
        'Aventura Fantástica':  ['✨','🌟','🧝','🗺️','💫'],
        'Misterio':             ['🔍','💡','🕵️','⭐','🌟'],
        'Explorador Espacial':  ['🚀','⭐','🪐','✨','🌌'],
        'Animales y Naturaleza':['🦋','🌿','🌸','🐦','🍃'],
        'Escuela Mágica':       ['✨','🪄','⭐','💫','🌟'],
        'Aventura Pirata':      ['⚓','🌊','🏴‍☠️','💎','⭐'],
        'Viajero del Tiempo':   ['⏰','✨','🌀','⭐','💫'],
        'Mundo de Videojuegos': ['⭐','🎮','💥','🏆','✨'],
        'Explorador Submarino': ['🐠','🫧','🌊','🐙','⭐']
    };

    const emojis = emojiMap[topic] || ['⭐','✨','🌟','💫','⚡'];

    for (let i = 0; i < 15; i++) {
        const el = document.createElement('span');
        el.className = 'anim-particle';
        el.textContent = emojis[i % emojis.length];
        el.style.cssText = `
            left: ${5 + Math.random() * 90}%;
            font-size: ${18 + Math.random() * 16}px;
            --delay: ${i * 0.12}s;
            --duration: ${1.5 + Math.random() * 0.6}s;
        `;
        container.appendChild(el);
    }
}
