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
const writeStoryBtn = document.getElementById('writeStoryBtn');
const backToEndBtn = document.getElementById('backToEndBtn');
const newStoryFromWritingBtn = document.getElementById('newStoryFromWritingBtn');
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
      "ageGroup": "10-12",
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
      "ageGroup": "10-12",
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
      "ageGroup": "10-12",
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
      "ageGroup": "10-12",
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
      "ageGroup": "10-12",
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
      "ageGroup": "10-12",
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
      "ageGroup": "10-12",
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
      "ageGroup": "10-12",
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
      "ageGroup": "10-12",
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
      "ageGroup": "10-12",
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
    },

    {
      "id": 11,
      "title": "¡Super [NAME] al Rescate!",
      "topic": "Superhéroes",
      "ageGroup": "7-9",
      "opening": "¡[NAME], tienes superpoderes! Esta mañana, al despertar, descubriste que puedes volar y levantar cosas muy pesadas. Tu amigo Teo está atrapado en lo alto de un árbol enorme y no puede bajar. ¡Es tu momento de ser un héroe!",
      "steps": [
        {
          "question": "Teo tiene miedo y no quiere soltarse del árbol. ¿Qué haces?",
          "choiceA": "Volar hasta él y cargarlo suavemente hasta el suelo",
          "choiceB": "Gritarle que salte y que tú lo atraparás",
          "resultA": "¡Perfecto! Llevas a Teo al suelo con mucho cuidado. Él te da un abrazo enorme. ¡Eres un héroe! Pero entonces escuchas que un perrito está atrapado más lejos.",
          "resultB": "Teo se asusta más con los gritos y se aferra al árbol con más fuerza. Tienes que buscar otra forma de ayudarlo.",
          "wiseChoice": "A"
        },
        {
          "question": "Un perrito está atrapado en un jardín cerrado con llave. ¿Cómo lo rescatas?",
          "choiceA": "Romper la verja de una patada",
          "choiceB": "Buscar al dueño de la casa para que abra",
          "resultA": "Rompes la verja pero el ruido asusta al perrito y sale corriendo. Ahora está perdido en la calle.",
          "resultB": "El dueño llega corriendo, abre la puerta y el perrito sale moviendo la cola. ¡Mucho mejor que romper cosas!",
          "wiseChoice": "B"
        },
        {
          "question": "El perrito corre hacia la calle con coches. ¿Qué haces rápido?",
          "choiceA": "Volar hasta la calle y parar los coches con los brazos",
          "choiceB": "Volar delante del perrito y guiarlo de vuelta a la acera",
          "resultA": "Paras los coches pero el perrito se escapa por otro lado. ¡Qué lío!",
          "resultB": "El perrito te sigue a la acera. ¡Lo has salvado! La gente del barrio aplaude.",
          "wiseChoice": "B"
        },
        {
          "question": "Un niño pequeño llora porque su globo voló hasta el tejado. ¿Qué haces?",
          "choiceA": "Volar a buscar el globo y devolverlo",
          "choiceB": "Decirle que los globos no importan y seguir tu camino",
          "resultA": "Subes al tejado, coges el globo y se lo devuelves. El niño sonríe y deja de llorar. ¡Eso es ser un héroe de verdad!",
          "resultB": "El niño llora más fuerte. Los héroes ayudan siempre, no solo en los grandes momentos.",
          "wiseChoice": "A"
        },
        {
          "question": "Al final del día el alcalde quiere darte una medalla. ¿Qué le dices?",
          "choiceA": "«¡Gracias! Yo solo hago mi trabajo de héroe»",
          "choiceB": "«No la quiero, yo no hice nada especial»",
          "resultA": "El alcalde te pone la medalla y toda la ciudad celebra. Lo mejor es que Teo y el niño del globo se hicieron tus amigos.",
          "resultB": "El alcalde se queda confundido. Los héroes también saben aceptar el cariño de la gente con orgullo.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], eres el héroe más querido del barrio! Salvaste a Teo, rescataste al perrito, devolviste el globo y recibiste la medalla del alcalde. Todos quieren ser tus amigos. ¡Esta fue solo tu primera aventura de muchas!",
        "success": "¡Lo hiciste, [NAME]! Ayudaste a mucha gente hoy. Cometiste algún error pequeño pero lo más importante es que no te rendiste. ¡El barrio está orgulloso de su héroe!",
        "failure": "¡Sigue intentándolo, [NAME]! Hoy no salió todo perfecto, pero aprendiste mucho. Los mejores superhéroes también se equivocan al principio. ¡Mañana lo harás mejor!"
      }
    },

    {
      "id": 12,
      "title": "[NAME] y el Dragón de Colores",
      "topic": "Aventura Fantástica",
      "ageGroup": "7-9",
      "opening": "¡[NAME], escucha! Al fondo del bosque hay un dragón pequeñito que llora. Todos los animales tienen miedo de él porque escupe burbujas de colores. Pero tú no tienes miedo. Vas a entrar al bosque a ver qué le pasa.",
      "steps": [
        {
          "question": "El dragón está llorando y tiene una espina en la pata. ¿Qué haces?",
          "choiceA": "Acercarte despacio y ofrecerle tu mano",
          "choiceB": "Llamar a gritos para que venga alguien a ayudarte",
          "resultA": "El dragón te deja tocar su pata y consigues sacarle la espina. ¡Confía en ti!",
          "resultB": "El ruido asusta al dragón y escupe burbujas por todos lados. Los animales del bosque huyen.",
          "wiseChoice": "A"
        },
        {
          "question": "El dragón quiere ir a casa pero no sabe dónde está. ¿Cómo lo ayudas?",
          "choiceA": "Seguir las huellas de sus pasos que llegan hasta aquí",
          "choiceB": "Subir a su lomo y volar muy alto para buscar desde arriba",
          "resultA": "Sigues las huellas por el bosque. Cada vez que giráis bien el dragón mueve la cola de alegría.",
          "resultB": "¡Qué vistas tan bonitas desde arriba! Veis el camino al instante.",
          "wiseChoice": "B"
        },
        {
          "question": "Hay un río enorme que no podéis cruzar. ¿Cómo pasáis?",
          "choiceA": "Pedirle al dragón que use sus burbujas para cruzar",
          "choiceB": "Buscar un puente de piedras más adelante",
          "resultA": "Las burbujas llevan al dragón al otro lado. ¡Pero tú te quedas atrás!",
          "resultB": "Encontráis un puente de piedras precioso. Los dos cruzáis juntos.",
          "wiseChoice": "B"
        },
        {
          "question": "Encontráis la cueva del dragón pero hay un oso dormido en la entrada. ¿Qué hacéis?",
          "choiceA": "El dragón sopla una burbuja para despertar al oso",
          "choiceB": "Esperar en silencio hasta que el oso se mueva solo",
          "resultA": "El oso se despierta de golpe y os gruñe muy enfadado. ¡Tenéis que correr!",
          "resultB": "El oso se estira, bosteza y se va a buscar miel. ¡El camino está libre!",
          "wiseChoice": "B"
        },
        {
          "question": "Dentro de la cueva está la mamá del dragón. ¿Qué le dices?",
          "choiceA": "«¡Aquí está tu hijo! Me llamo [NAME] y lo he ayudado»",
          "choiceB": "Quedarte callado porque da un poco de miedo",
          "resultA": "La mamá dragón te mira con cariño y te regala una escama mágica brillante. ¡Tu mejor tesoro!",
          "resultB": "La mamá dragón te da un gran abrazo de todas formas. ¡Los dragones son buena gente!",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], eres la persona más valiente del bosque! Curaste al dragón, encontraste su casa y te hiciste su mejor amigo. Ahora tienes una escama mágica y un dragón que siempre te cuidará. ¡Esta amistad durará para siempre!",
        "success": "¡Lo lograste, [NAME]! El dragón está en casa con su mamá gracias a ti. Cometiste algún error en el camino pero no te rendiste. ¡El bosque entero habla de tu valentía!",
        "failure": "El dragón llegó a casa, [NAME], aunque el viaje fue complicado. La mamá dragón dice que eres muy valiente por haberlo intentado. ¡Vuelve a visitarlos cuando quieras!"
      }
    },

    {
      "id": 13,
      "title": "El Misterio de la Mochila de [NAME]",
      "topic": "Misterio",
      "ageGroup": "7-9",
      "opening": "¡[NAME], alguien se ha llevado tu mochila del colegio! Dentro estaba tu libro favorito, tu merienda y el dibujo que hiciste para mamá. No hay nadie mayor que pueda ayudarte ahora mismo. Tienes que resolver este misterio tú solo.",
      "steps": [
        {
          "question": "¿Por dónde empiezas a buscar pistas?",
          "choiceA": "Preguntar a tus compañeros si vieron algo",
          "choiceB": "Ir directamente al patio a buscar la mochila",
          "resultA": "Tu amiga Lucía recuerda haber visto a alguien coger algo del perchero. ¡Una pista importante!",
          "resultB": "El patio está lleno de niños jugando. No encuentras nada sin más pistas.",
          "wiseChoice": "A"
        },
        {
          "question": "Lucía dice que vio a alguien con tu mochila ir hacia el gimnasio. ¿Qué haces?",
          "choiceA": "Correr al gimnasio lo más rápido posible",
          "choiceB": "Ir despacio mirando el suelo por si hay más pistas",
          "resultA": "Llegas al gimnasio pero está vacío. La persona ya se fue.",
          "resultB": "Encuentras un pegativo de una estrella en el suelo. ¡Sabes quién lleva ese pegativo en su estuche!",
          "wiseChoice": "B"
        },
        {
          "question": "El pegativo es de Marcos, un niño de otra clase. ¿Qué haces?",
          "choiceA": "Acusarle delante de todos en el recreo",
          "choiceB": "Hablar con él a solas y preguntarle con calma",
          "resultA": "Marcos se pone colorado y los demás se ríen. Pero resulta que él no la cogió. Cometiste un error.",
          "resultB": "Marcos te dice que la vio cerca de las taquillas y que le pareció rara porque estaba abierta.",
          "wiseChoice": "B"
        },
        {
          "question": "En la taquilla encuentras tu mochila abierta pero el libro no está. ¿Qué haces?",
          "choiceA": "Revisar todas las taquillas una por una",
          "choiceB": "Pensar: ¿quién quería ese libro específicamente?",
          "resultA": "Abrir todas las taquillas lleva mucho tiempo. El recreo casi termina.",
          "resultB": "Recuerdas que ayer alguien te preguntó si podía leer ese libro. ¡Ya sabes quién es!",
          "wiseChoice": "B"
        },
        {
          "question": "Encuentras a esa persona con tu libro. Está llorando porque tiene miedo. ¿Qué haces?",
          "choiceA": "Decirle que está bien y prestarle el libro",
          "choiceB": "Enfadarte mucho y contárselo al profe",
          "resultA": "Le prestas el libro y quedáis en devolverlo mañana. ¡Acabas de hacer un nuevo amigo!",
          "resultB": "El profe regaña al niño. Se pone muy triste y pierdes la oportunidad de ser amigos.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "¡Eres un detective increíble, [NAME]! Seguiste todas las pistas, resolviste el misterio y además hiciste un nuevo amigo. Tu libro volvió a casa y aprendiste que a veces la gente hace cosas malas por razones tristes. ¡Eso es ser muy listo y muy buena persona!",
        "success": "¡Caso resuelto, [NAME]! Recuperaste tu mochila y todo lo que había dentro. El camino no fue perfecto pero llegaste al final. ¡Eres un gran detective en ciernes!",
        "failure": "Recuperaste la mochila pero el camino fue muy complicado, [NAME]. La próxima vez ya sabrás qué pistas buscar primero. ¡Los mejores detectives aprenden de cada caso!"
      }
    },

    {
      "id": 14,
      "title": "[NAME] y el Cohete Mágico",
      "topic": "Explorador Espacial",
      "ageGroup": "7-9",
      "opening": "¡[NAME], en el jardín hay un cohete pequeño esperándote! Tiene un cartel que dice: «Solo para exploradores valientes». Dentro hay un traje espacial de tu talla exacta y un mapa con una estrella marcada. ¿Te atreves a ir?",
      "steps": [
        {
          "question": "El cohete te lleva a un planeta lleno de flores moradas que brillan. ¿Qué haces primero?",
          "choiceA": "Salir a explorar con cuidado",
          "choiceB": "Quedarte dentro del cohete por si hay peligros",
          "resultA": "El planeta huele muy bien y el suelo es suave. ¡Es precioso! Un ser pequeño y redondo se acerca saltando.",
          "resultB": "Desde la ventanilla ves cosas maravillosas pero no puedes tocarlas. La aventura está afuera.",
          "wiseChoice": "A"
        },
        {
          "question": "El ser redondo habla con pitidos. No lo entiendes. ¿Qué haces?",
          "choiceA": "Hacer mímica y gestos para comunicarte",
          "choiceB": "Hablarle muy despacio y muy alto",
          "resultA": "¡Funciona! Con gestos os entendéis perfectamente. El ser está muy contento.",
          "resultB": "El ser se tapa las orejas. Hablar más alto no es la solución.",
          "wiseChoice": "A"
        },
        {
          "question": "El ser te muestra su nave rota. ¿Cómo ayudas?",
          "choiceA": "Usar las herramientas de tu cohete para arreglarla",
          "choiceB": "Decirle que no sabes arreglar naves",
          "resultA": "Con las herramientas y entre los dos consiguen arreglar una parte importante. El ser salta de alegría.",
          "resultB": "El ser se pone triste. Los exploradores intentan ayudar aunque no sepan todo.",
          "wiseChoice": "A"
        },
        {
          "question": "Empieza a oscurecer y las flores se cierran. ¿Qué haces?",
          "choiceA": "Quedarte a dormir en el planeta una noche",
          "choiceB": "Volver al cohete antes de que sea de noche",
          "resultA": "La noche en el planeta es increíble: el cielo tiene miles de lunas de colores.",
          "resultB": "Llegas al cohete justo a tiempo. Desde dentro ves cómo el cielo se llena de lunas de colores. ¡Espectacular!",
          "wiseChoice": "A"
        },
        {
          "question": "Antes de volver a casa el ser te ofrece un cristal brillante de recuerdo. ¿Qué haces?",
          "choiceA": "Darle algo tuyo a cambio, como tu lápiz favorito",
          "choiceB": "Coger el cristal y decir gracias",
          "resultA": "El ser mira el lápiz con curiosidad total. El intercambio os hace sentir amigos de verdad. ¡Prometéis volver a veros!",
          "resultB": "El ser está contento pero tú sabes que podrías haber hecho el intercambio más especial.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], eres el explorador espacial más valiente del universo! Hiciste un amigo en otro planeta, arreglaste su nave, dormiste bajo miles de lunas y volviste a casa con un cristal mágico. ¡El universo entero te espera!",
        "success": "¡Qué aventura, [NAME]! Visitaste un planeta increíble y hiciste un nuevo amigo. No todo fue perfecto pero volviste a casa con recuerdos para toda la vida. ¡El espacio te llama de nuevo!",
        "failure": "Llegaste a casa sano y salvo, [NAME], y eso ya es mucho. La próxima vez que el cohete aparezca en el jardín ya sabrás qué hacer mejor. ¡El universo te da otra oportunidad!"
      }
    },

    {
      "id": 15,
      "title": "[NAME] y el Patito Perdido",
      "topic": "Animales y Naturaleza",
      "ageGroup": "7-9",
      "opening": "¡[NAME], hay un patito amarillo solo en la acera! Está perdido y llora con un sonido muy suave. No hay ningún estanque cerca y no sabes de dónde ha venido. El patito te mira con sus ojitos negros y brillantes. ¡Tienes que ayudarlo!",
      "steps": [
        {
          "question": "El patito no quiere que lo toques y se aleja. ¿Qué haces?",
          "choiceA": "Agacharte y esperar quieto a que él se acerque",
          "choiceB": "Correr detrás de él para cogerlo",
          "resultA": "El patito para, te mira y da dos pasitos hacia ti. ¡Confía en ti poco a poco!",
          "resultB": "El patito corre más rápido y casi llega a la calle. ¡Qué susto!",
          "wiseChoice": "A"
        },
        {
          "question": "El patito tiene hambre. ¿Qué le das?",
          "choiceA": "Un trozo de pan de tu merienda",
          "choiceB": "Unas piedras pequeñas del suelo",
          "resultA": "El patito come feliz y mueve la colita. Ahora te sigue a todas partes.",
          "resultB": "Los patos no comen piedras. ¡Hay que darle comida de verdad!",
          "wiseChoice": "A"
        },
        {
          "question": "La señora Rosa dice que hay un estanque en el parque. ¿Cómo vais?",
          "choiceA": "Ir al parque caminando despacito con el patito",
          "choiceB": "Coger el patito rápido y correr al parque",
          "resultA": "El patito camina a tu lado como si fuera tu mascota. ¡Los vecinos os hacen fotos!",
          "resultB": "El patito se asusta al moverte tan rápido y llora más.",
          "wiseChoice": "A"
        },
        {
          "question": "En el estanque hay muchos patos pero la mamá no aparece. ¿Qué haces?",
          "choiceA": "Quedarte esperando junto al estanque",
          "choiceB": "Ir a buscarla por todo el parque",
          "resultA": "En diez minutos la mamá pata aparece nadando desde el otro lado. ¡Estaba muy cerca!",
          "resultB": "Mientras buscas, el patito se cae al estanque. ¡Pero sabe nadar perfectamente!",
          "wiseChoice": "A"
        },
        {
          "question": "La mamá pata y el patito se reúnen. ¿Qué haces tú?",
          "choiceA": "Sentarte un rato a verlos nadar juntos",
          "choiceB": "Irte corriendo a contárselo a todo el mundo",
          "resultA": "Ver cómo el patito nada junto a su mamá es lo más bonito del día. Te quedas sonriendo un buen rato.",
          "resultB": "Cuando cuentas la historia todos sonríen pero tú te perdiste el momento más bonito.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], qué corazón tan grande tienes! El patito está con su mamá gracias a ti. Lo alimentaste, lo guiaste y esperaste con paciencia. Los animales del parque siempre te recordarán como su amigo especial.",
        "success": "¡El patito llegó a casa, [NAME]! No todo fue fácil pero nunca te rendiste. Eso es lo más importante. ¡La mamá pata te está muy agradecida!",
        "failure": "El patito encontró a su mamá al final, [NAME], aunque el camino fue complicado. Lo importante es que no lo dejaste solo. ¡Eres una buena persona!"
      }
    },

    {
      "id": 16,
      "title": "El Primer Hechizo de [NAME]",
      "topic": "Escuela Mágica",
      "ageGroup": "7-9",
      "opening": "¡[NAME], llegó una carta por la ventana! Dice que has sido admitido en la Escuela Mágica del Bosque. Mañana es tu primer día. Tienes una varita pequeña y brillante que encontraste con la carta. ¡La aventura empieza ahora!",
      "steps": [
        {
          "question": "La profesora Lila pide que hagas tu primer hechizo: encender una vela. ¿Cómo lo intentas?",
          "choiceA": "Concentrarte mucho y pensar en luz",
          "choiceB": "Agitar la varita muy rápido y gritar muy fuerte",
          "resultA": "La vela se enciende con una llamita suave y dorada. ¡Todos aplauden!",
          "resultB": "La varita despide chispas por todos lados. ¡Qué lío!",
          "wiseChoice": "A"
        },
        {
          "question": "Tu compañero Berto no puede hacer su hechizo y está triste. ¿Qué haces?",
          "choiceA": "Explicarle el truco de concentrarse que acabas de aprender",
          "choiceB": "Ignorarlo para no perder tiempo",
          "resultA": "Berto lo intenta siguiendo tu consejo y lo consigue. ¡Se hace tu mejor amigo al instante!",
          "resultB": "Berto sigue triste. Los buenos magos también ayudan a los demás.",
          "wiseChoice": "A"
        },
        {
          "question": "En el recreo encuentras una varita rota en el suelo. ¿Qué haces?",
          "choiceA": "Llevársela a la profesora",
          "choiceB": "Quedártela para tener dos varitas",
          "resultA": "La profesora dice que era la varita perdida de un alumno mayor. Te da un punto estrella de recompensa.",
          "resultB": "La varita rota no funciona y la profesora descubre que la tienes. Hay que devolverla.",
          "wiseChoice": "A"
        },
        {
          "question": "Por la tarde hay un examen de hechizos. ¿Cómo te preparas?",
          "choiceA": "Repasar los hechizos con calma",
          "choiceB": "No prepararte porque crees que ya sabes todo",
          "resultA": "El examen va muy bien. Te acuerdas de todo lo que repasaste.",
          "resultB": "En el examen te olvidas de un hechizo importante. ¡Había que estudiar!",
          "wiseChoice": "A"
        },
        {
          "question": "El último reto: hacer volar un objeto. ¿Qué eliges?",
          "choiceA": "Tu mochila, que pesa poco",
          "choiceB": "El escritorio de la profesora, que pesa muchísimo",
          "resultA": "La mochila vuela perfectamente describiendo un círculo. ¡La profesora te da una estrella dorada!",
          "resultB": "El escritorio no se mueve ni un milímetro. Empezar con algo pequeño es más inteligente.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], terminaste tu primer día como el mejor mago de la clase! Encendiste velas, ayudaste a Berto, fuiste honesto con la varita y superaste el examen con una estrella dorada. ¡La Escuela Mágica tiene un nuevo héroe!",
        "success": "¡Qué primer día tan lleno de aventuras, [NAME]! Aprendiste mucho y también cometiste algún pequeño error. Pero así aprenden los mejores magos. ¡Mañana será aún mejor!",
        "failure": "Tu primer día tuvo muchos tropiezos, [NAME], pero eso no importa. Todos los grandes magos empezaron igual. ¡La magia tarda en aprenderse y tú tienes toda la vida por delante!"
      }
    },

    {
      "id": 17,
      "title": "[NAME] y el Tesoro Enterrado",
      "topic": "Aventura Pirata",
      "ageGroup": "7-9",
      "opening": "¡[NAME], encontraste un mapa del tesoro debajo de tu cama! El mapa muestra una isla con una X marcada. Tu barquito de madera del jardín de repente se convierte en un barco pirata de verdad. ¡Es hora de zarpar!",
      "steps": [
        {
          "question": "El mapa dice que primero hay que cruzar el Mar de las Medusas. ¿Cómo navegas?",
          "choiceA": "Con cuidado, mirando el agua para esquivar las medusas",
          "choiceB": "A toda velocidad para cruzar rápido",
          "resultA": "El barco pasa entre las medusas sin tocarlas. ¡Son preciosas vistas de cerca!",
          "resultB": "Una medusa golpea el barco y lo frena mucho. Tardas el doble.",
          "wiseChoice": "A"
        },
        {
          "question": "En la isla hay dos caminos. El mapa no es muy claro. ¿Cuál eliges?",
          "choiceA": "El de las palmeras, porque los tesoros suelen estar escondidos entre árboles",
          "choiceB": "El llano porque es más fácil de caminar",
          "resultA": "¡El mapa tiene una palmera marcada! Ibas por el camino correcto.",
          "resultB": "El camino llano no lleva a ningún sitio. Hay que volver al cruce.",
          "wiseChoice": "A"
        },
        {
          "question": "Un loro que habla dice que sabe dónde está el tesoro. ¿Qué haces?",
          "choiceA": "Escucharle con atención y darle algo a cambio",
          "choiceB": "Ignorarle porque los loros no son de fiar",
          "resultA": "Le das una galleta y él te da la pista exacta. ¡El loro era la clave del mapa!",
          "resultB": "El loro se va volando. Sin su pista el mapa se vuelve confuso.",
          "wiseChoice": "A"
        },
        {
          "question": "El tesoro está enterrado bajo una piedra muy pesada. ¿Cómo la mueves?",
          "choiceA": "Usar el palo del barco como palanca",
          "choiceB": "Intentar empujarla con las manos",
          "resultA": "Con la palanca la piedra se mueve. ¡Eres muy listo para resolver problemas!",
          "resultB": "La piedra no se mueve ni un milímetro. Hay que pensar mejor.",
          "wiseChoice": "A"
        },
        {
          "question": "Abres el cofre y está lleno de monedas de chocolate. ¿Qué haces?",
          "choiceA": "Guardar algunas y compartir el resto con tus amigos",
          "choiceB": "Comerlas todas tú solo",
          "resultA": "¡Compartes el tesoro y todos celebran contigo! ¡Es la mejor tarde de tu vida!",
          "resultB": "Te duele la tripa de comer tanto chocolate. Compartir hubiera sido mejor.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], eres el mejor pirata del mundo! Cruzaste el mar, seguiste el mapa, hiciste amistad con el loro, encontraste el tesoro y lo compartiste con todos. ¡Las mejores aventuras siempre acaban mejor cuando se comparten!",
        "success": "¡Encontraste el tesoro, [NAME]! El camino tuvo algún traspié pero llegaste al cofre. ¡Eso es lo que hacen los piratas valientes!",
        "failure": "Llegaste a la isla y lo intentaste con todas tus fuerzas, [NAME]. El tesoro te espera en tu próxima visita. ¡Los piratas nunca se rinden!"
      }
    },

    {
      "id": 18,
      "title": "[NAME] en el Mundo de los Dinosaurios",
      "topic": "Viajero del Tiempo",
      "ageGroup": "7-9",
      "opening": "¡[NAME], encontraste una caja rara en el desván con botones de colores! Sin querer aprietas el botón verde y ¡ZAP! Apareces en un bosque enorme con árboles gigantes. Un dinosaurio herbívoro tan grande como un autobús está comiendo hojas a tu lado. ¡Estás en la época de los dinosaurios!",
      "steps": [
        {
          "question": "El dinosaurio te mira. Es enorme pero parece tranquilo. ¿Qué haces?",
          "choiceA": "Quedarte quieto y saludarle despacio con la mano",
          "choiceB": "Salir corriendo lo más rápido posible",
          "resultA": "El dinosaurio baja su enorme cabeza y te huele. ¡Te acepta! Empieza a caminar y tú lo sigues.",
          "resultB": "El dinosaurio se asusta con tu movimiento rápido y da un pisotón enorme que te hace caer.",
          "wiseChoice": "A"
        },
        {
          "question": "El dinosaurio te lleva a una laguna. Hace mucho calor. ¿Qué haces?",
          "choiceA": "Mojarte los pies con cuidado desde la orilla",
          "choiceB": "Tirarte de cabeza a nadar",
          "resultA": "El agua está fresquita. Muchos dinosaurios pequeños también se acercan a beber.",
          "resultB": "El agua está turbia y no sabes qué hay dentro. ¡Mejor ir con cuidado la próxima vez!",
          "wiseChoice": "A"
        },
        {
          "question": "Escuchas un rugido lejano. Es un dinosaurio carnívoro. ¿Qué haces?",
          "choiceA": "Esconderte entre los helechos grandes",
          "choiceB": "Quedarte quieto en medio del camino",
          "resultA": "El carnívoro pasa cerca pero no te ve entre las plantas. ¡Qué alivio!",
          "resultB": "El carnívoro te huele y corre hacia ti. ¡Tienes que salir corriendo!",
          "wiseChoice": "A"
        },
        {
          "question": "Encuentras la caja del tiempo pero le falta un botón. ¿Cómo lo buscas?",
          "choiceA": "Rastrear el suelo buscando algo brillante",
          "choiceB": "Esperar a que aparezca solo",
          "resultA": "Encuentras el botón entre unas raíces. ¡Brilla como una moneda!",
          "resultB": "Los botones no aparecen solos. Hay que buscarlo activamente.",
          "wiseChoice": "A"
        },
        {
          "question": "Antes de volver a casa, ¿qué haces?",
          "choiceA": "Hacer un dibujo rápido de todo lo que viste para recordarlo siempre",
          "choiceB": "Irte inmediatamente sin mirar atrás",
          "resultA": "El dibujo que haces es el mejor recuerdo de tu aventura. ¡Nadie en el cole va a creer esta historia!",
          "resultB": "Llegas a casa sano y salvo aunque desearías haber guardado algún recuerdo.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], viajaste al pasado y volviste para contarlo! Hiciste amigos con un dinosaurio, sobreviviste al carnívoro y tienes el mejor dibujo que existe: ¡dinosaurios de verdad! Nadie en el colegio tiene una aventura así.",
        "success": "¡Regresaste a casa, [NAME]! El viaje en el tiempo fue emocionante aunque no todo salió perfecto. ¡Tienes una historia increíble que contar!",
        "failure": "Llegaste a casa sano y salvo, [NAME], y eso es lo más importante. La próxima vez que viajes en el tiempo ya sabrás cómo prepararte mejor. ¡Los dinosaurios te esperan!"
      }
    },

    {
      "id": 19,
      "title": "[NAME] Entra en el Videojuego",
      "topic": "Mundo de Videojuegos",
      "ageGroup": "7-9",
      "opening": "¡[NAME], algo raro pasó con tu videojuego favorito! La pantalla parpadeó y de repente estás dentro del juego. Tienes tres vidas y tu personaje favorito, Pikko, está a tu lado. ¡Hay que llegar al castillo!",
      "steps": [
        {
          "question": "Hay un río de lava. Hay dos puentes: uno de madera y uno de piedra. ¿Cuál cruzas?",
          "choiceA": "El de piedra, que parece más sólido",
          "choiceB": "El de madera porque está más cerca",
          "resultA": "El puente de piedra aguanta perfectamente. ¡Buena decisión!",
          "resultB": "El puente de madera cruje y casi se rompe. ¡Qué miedo!",
          "wiseChoice": "A"
        },
        {
          "question": "Pikko tiene hambre y no puede correr. ¿Qué le das?",
          "choiceA": "Una estrella de energía que está en el suelo",
          "choiceB": "Nada, que espere hasta el castillo",
          "resultA": "Pikko come la estrella y puede correr supersónico. ¡Los dos llegáis mucho más rápido!",
          "resultB": "Pikko camina muy despacio. El nivel se hace eterno.",
          "wiseChoice": "A"
        },
        {
          "question": "Un enemigo enorme os bloquea el camino. ¿Cómo lo derrotáis?",
          "choiceA": "Trabajar juntos: tú distraes y Pikko ataca",
          "choiceB": "Atacar de frente los dos a la vez",
          "resultA": "¡El plan funciona! El enemigo cae y os deja pasar. ¡Sois un gran equipo!",
          "resultB": "El enemigo os da a los dos. Perdéis una vida cada uno.",
          "wiseChoice": "A"
        },
        {
          "question": "En el castillo hay un cofre cerrado. La llave está en una habitación con trampas. ¿Qué haces?",
          "choiceA": "Ir despacio observando dónde están las trampas",
          "choiceB": "Correr rápido por si hay suerte",
          "resultA": "Ves todas las trampas y las esquivas. ¡Coges la llave sin perder ninguna vida!",
          "resultB": "Activas dos trampas. Perdéis una vida más.",
          "wiseChoice": "A"
        },
        {
          "question": "El jefe final te ofrece salir del videojuego ahora o luchar contra él para ganar el trofeo. ¿Qué haces?",
          "choiceA": "Luchar contra el jefe final",
          "choiceB": "Salir sin el trofeo",
          "resultA": "¡Ganáis! El trofeo brilla y la pantalla te devuelve a casa con el trofeo en las manos. ¡Es de verdad!",
          "resultB": "Llegas a casa sano y salvo. Pikko se despide con tristeza desde la pantalla.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], superaste el videojuego desde dentro! Cruzaste el río de lava, derrotaste al jefe final con Pikko y llegaste a casa con un trofeo de verdad. ¡Nadie en el mundo puede contar esta historia excepto tú!",
        "success": "¡Volviste a casa, [NAME]! La aventura dentro del videojuego fue increíble. Perdiste alguna vida pero llegaste al final. ¡Pikko te manda un saludo desde la pantalla!",
        "failure": "Llegaste a casa sano y salvo, [NAME]. El videojuego fue difícil pero lo importante es que lo intentaste. ¡La próxima vez ya sabrás cómo ganar!"
      }
    },

    {
      "id": 20,
      "title": "[NAME] y los Peces de Colores",
      "topic": "Explorador Submarino",
      "ageGroup": "7-9",
      "opening": "¡[NAME], en la playa encontraste un submarino pequeño pintado de amarillo! Cabe exactamente una persona. Tiene un botón rojo que dice «SUMERGIR». El mar brillante te llama. ¿Te metes?",
      "steps": [
        {
          "question": "Bajo el agua todo es azul y precioso. Un pez enorme te mira. ¿Qué haces?",
          "choiceA": "Saludarle desde dentro del submarino",
          "choiceB": "Apagar las luces para que no te vea",
          "resultA": "El pez mueve la cola como si te saludara. ¡Es tu guía submarino!",
          "resultB": "Sin luces no ves nada. ¡El fondo del mar es muy oscuro!",
          "wiseChoice": "A"
        },
        {
          "question": "El pez guía te lleva a un arrecife de coral de mil colores. ¿Qué haces?",
          "choiceA": "Mirar con cuidado sin tocar nada",
          "choiceB": "Abrir la escotilla y tocar los corales",
          "resultA": "El arrecife está lleno de peces felices que nadan alrededor del submarino.",
          "resultB": "Los corales son frágiles y se rompen al tocarlos. El arrecife se oscurece.",
          "wiseChoice": "A"
        },
        {
          "question": "Una tortuga marina está enredada en una red vieja. ¿Cómo la ayudas?",
          "choiceA": "Usar el brazo mecánico del submarino para cortar la red",
          "choiceB": "Ir a buscar ayuda y volver mañana",
          "resultA": "La tortuga queda libre y nada feliz. ¡Te sigue todo el rato como agradecimiento!",
          "resultB": "Cuando vuelves la tortuga ya se liberó sola, con mucho esfuerzo. Podrías haberla ayudado antes.",
          "wiseChoice": "A"
        },
        {
          "question": "En el fondo hay una cueva oscura. ¿La exploras?",
          "choiceA": "Encender los focos del submarino y entrar despacio",
          "choiceB": "No entrar porque da miedo",
          "resultA": "Dentro hay un tesoro de caracolas brillantes y peces que emiten luz propia. ¡Es mágico!",
          "resultB": "Te quedas fuera y te pierdes la parte más bonita del mar.",
          "wiseChoice": "A"
        },
        {
          "question": "Es hora de volver. ¿Cómo te despides del pez guía?",
          "choiceA": "Apagar y encender las luces del submarino como un abrazo de luz",
          "choiceB": "Subir rápido sin despedirte",
          "resultA": "El pez apaga y enciende sus escamas de vuelta. ¡Es el lenguaje de los amigos del mar!",
          "resultB": "Subes a la superficie. Sientes que faltó algo.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "¡[NAME], eres el mejor explorador submarino del mundo! Hiciste amigos con el pez guía, liberaste a la tortuga, descubriste la cueva mágica y aprendiste a hablar el idioma del mar. ¡El océano siempre te recordará!",
        "success": "¡Qué aventura submarina, [NAME]! Viste cosas increíbles y ayudaste a una tortuga. Cometiste algún error pero aprendiste mucho. ¡El mar te espera de nuevo!",
        "failure": "Volviste a casa lleno de emoción, [NAME]. La próxima exploración irá mejor. ¡El fondo del mar tiene muchos secretos por descubrir todavía!"
      }
    },

    {
      "id": 21,
      "title": "El Precio del Poder: [NAME]",
      "topic": "Superhéroes",
      "ageGroup": "13-15",
      "opening": "Hace tres semanas, [NAME], un experimento fallido te dejó con poderes que no pediste: telequinesis y una velocidad sobrehumana que no controlas del todo. La Organización de Vigilancia Heroica te ha localizado y te ofrece entrenamiento a cambio de lealtad incondicional. Pero también hay otros que quieren reclutarte, personas que operan fuera de la ley pero con un código moral propio. La ciudad no espera. Y tú aún no sabes en quién confiar.",
      "steps": [
        {
          "question": "La Organización exige que reveles la identidad de un vigilante independiente que conoces. Afirman que representa un peligro. ¿Qué decides?",
          "choiceA": "Rechazar y mantener el secreto de ese vigilante",
          "choiceB": "Proporcionar la información a cambio del entrenamiento prometido",
          "resultA": "La Organización endurece tu entrenamiento como castigo, pero ganas la confianza del vigilante independiente, quien tiene información valiosa sobre la amenaza real.",
          "resultB": "El vigilante es detenido. Más tarde descubres que era inocente y que la Organización lo usó para eliminar a alguien que los incomodaba. La confianza tiene un precio muy alto.",
          "wiseChoice": "A"
        },
        {
          "question": "Descubres que el villano principal actúa motivado por una injusticia real: su comunidad fue destruida por una corporación que nunca fue procesada. ¿Cómo actúas?",
          "choiceA": "Intentar detenerlo pero también exponer públicamente a la corporación responsable",
          "choiceB": "Detenerlo independientemente de sus motivaciones, porque el fin no justifica los medios",
          "resultA": "La situación es compleja: lo detienes pero su causa gana visibilidad. La ciudad debate quién es realmente el villano.",
          "resultB": "El villano es detenido pero su comunidad sigue sin justicia. Los ataques continúan con nuevos perpetradores motivados por la misma rabia.",
          "wiseChoice": "A"
        },
        {
          "question": "Tus poderes están fallando por exceso de uso y hay riesgo real de dañar a inocentes si continúas. ¿Qué haces?",
          "choiceA": "Retirarte temporalmente a recuperarte aunque la situación empeore",
          "choiceB": "Seguir adelante asumiendo el riesgo",
          "resultA": "Una semana de recuperación te devuelve el control. Regresas más preparado y con mayor claridad sobre tus límites.",
          "resultB": "En el siguiente enfrentamiento pierdes el control un momento. Nadie resulta herido por suerte, pero el miedo en la gente es real y duradero.",
          "wiseChoice": "A"
        },
        {
          "question": "La Organización quiere usar tu imagen para justificar legislación que recorta derechos civiles. ¿Aceptas ser su portavoz?",
          "choiceA": "Rechazar públicamente y explicar tus razones",
          "choiceB": "Aceptar pensando que podrás moderarlos desde dentro",
          "resultA": "Pierdes el apoyo institucional pero ganas credibilidad moral. Los ciudadanos empiezan a verte como alguien de confianza real.",
          "resultB": "Una vez dentro del sistema es casi imposible salir. Tus declaraciones se usan fuera de contexto.",
          "wiseChoice": "A"
        },
        {
          "question": "Tienes la oportunidad de exponer el liderazgo corrupto de la Organización o simplemente retirarte. ¿Qué haces?",
          "choiceA": "Actuar, exponer sus métodos y enfrentar las consecuencias legales",
          "choiceB": "Desaparecer y dejar que otros resuelvan el problema",
          "resultA": "El proceso legal es lento y costoso, pero las pruebas que aportas inician una investigación real. Es el comienzo de un cambio sistémico.",
          "resultB": "La Organización continúa. Sin tu testimonio, el ciclo se repite.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "Tu historia, [NAME], se convirtió en algo más que la de un héroe con poderes: es la historia de alguien que entendió que el verdadero heroísmo consiste en hacer lo correcto cuando es lo más difícil. La Organización está siendo investigada y la ciudad empieza un proceso de sanación real. Tus poderes no te hicieron héroe. Tus decisiones sí.",
        "success": "Detuviste la amenaza inmediata, [NAME], y eso importa. Pero el camino dejó cicatrices y dilemas sin resolver. Aprendiste que el poder sin reflexión ética es tan peligroso como la ausencia de poder. Eso, a tu edad, es una lección que muchos adultos nunca aprenden.",
        "failure": "La situación no terminó como esperabas, [NAME]. Los sistemas que querías cambiar siguen intactos. Pero algo cambió en ti: ahora entiendes la diferencia entre actuar y actuar bien. Eso no es un fracaso. Es el principio."
      }
    },

    {
      "id": 22,
      "title": "La Última Profecía: [NAME]",
      "topic": "Aventura Fantástica",
      "ageGroup": "13-15",
      "opening": "Llevas años creyendo que la profecía del Libro Eterno hablaba de otra persona, [NAME]. Pero esta mañana el texto cambió y tu nombre apareció grabado en sus páginas. El reino de Aethon lleva décadas dividido por una guerra civil. Tú eres el único que puede cerrar el Vórtice que alimenta la destrucción. Pero el libro no explica completamente cuál es el coste.",
      "steps": [
        {
          "question": "El Consejo Real te pide que elijas un bando antes de actuar. Ambos tienen razones legítimas. ¿Qué haces?",
          "choiceA": "Rechazar elegir bando y actuar desde la neutralidad",
          "choiceB": "Elegir el bando más poderoso para tener más recursos",
          "resultA": "Ambos bandos desconfían de ti, pero ninguno te bloquea. Esa independencia resultará clave más adelante.",
          "resultB": "El bando que elegiste te da recursos pero te exige compromisos que limitarán tus acciones cuando más importa.",
          "wiseChoice": "A"
        },
        {
          "question": "Descubres que cerrar el Vórtice no destruirá la raíz de la guerra, solo apagará la energía que la alimenta. ¿Continúas con el plan original?",
          "choiceA": "Buscar una solución más profunda aunque lleve más tiempo",
          "choiceB": "Cerrar el Vórtice igualmente: es lo que la profecía exige",
          "resultA": "Encuentras un antiguo tratado olvidado que sugiere que la reconciliación verdadera es posible. Cambia el objetivo de la misión.",
          "resultB": "El Vórtice se cierra pero la guerra continúa con armas convencionales. La profecía se cumplió en su forma más vacía.",
          "wiseChoice": "A"
        },
        {
          "question": "Para acceder al núcleo del Vórtice necesitas la ayuda de alguien que traicionó a tu familia. ¿Lo aceptas?",
          "choiceA": "Aceptar su ayuda con condiciones claras, sin fingir que el pasado no existió",
          "choiceB": "Buscar otra alternativa aunque sea más peligrosa",
          "resultA": "La tensión es real pero el trabajo conjunto revela que la traición tenía matices que desconocías. La misión avanza.",
          "resultB": "La alternativa es viable pero te cuesta el doble de tiempo y pierdes recursos importantes.",
          "wiseChoice": "A"
        },
        {
          "question": "En el núcleo del Vórtice hay una consciencia atrapada que no quiere ser liberada porque teme lo que hay fuera. ¿Qué haces?",
          "choiceA": "Hablar con ella y darle la opción de elegir",
          "choiceB": "Liberarla sin su consentimiento porque es necesario para cerrar el Vórtice",
          "resultA": "La consciencia, al ver que alguien la escucha, decide colaborar voluntariamente. El cierre es más poderoso y más limpio.",
          "resultB": "El Vórtice se cierra pero la consciencia queda fragmentada. Algo en el equilibrio del mundo se rompe sutilmente.",
          "wiseChoice": "A"
        },
        {
          "question": "El coste que el Libro no revelaba: cerrar el Vórtice te quitará la capacidad de usar magia para siempre. ¿Lo haces igualmente?",
          "choiceA": "Sí. La magia no te define.",
          "choiceB": "Buscar una forma de cerrar el Vórtice sin ese coste, aunque el resultado sea parcial",
          "resultA": "El Vórtice se cierra. Pierdes tu magia pero el mundo empieza a respirar. Descubres que lo que eres no dependía de ese poder.",
          "resultB": "El resultado es parcial: el Vórtice se reduce pero no desaparece. Conservas tu magia pero el problema persiste.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "Cerraste el Vórtice, [NAME], y lo hiciste sin convertirte en lo que combatías. Sin magia, con cicatrices y con una comprensión del mundo que pocos en Aethon tienen. La paz que empieza no es perfecta ni rápida, pero es real. Y tú, por primera vez, eres completamente libre.",
        "success": "El Vórtice está cerrado y Aethon puede empezar a sanar, [NAME]. No resolviste todo y el camino dejó problemas sin terminar. Pero hiciste lo esencial: detener el ciclo de destrucción. Lo demás es trabajo de generaciones.",
        "failure": "El Vórtice sigue ahí, debilitado pero vivo, [NAME]. Tu esfuerzo no fue en vano: dejaste grietas en su estructura que otros podrán ampliar. A veces las profecías no se cumplen de golpe sino en capítulos. Y tú escribiste el primero."
      }
    },

    {
      "id": 23,
      "title": "Sombras Digitales: [NAME]",
      "topic": "Misterio",
      "ageGroup": "13-15",
      "opening": "[NAME], eres el miembro más joven del Club de Investigación del instituto, que resuelve casos reales en colaboración con la policía local. Esta semana llega un caso inusual: alguien está filtrando exámenes a ciertos estudiantes usando una red encriptada. Los beneficiados son alumnos con becas de rendimiento. Si se expone el escándalo, perderán las becas aunque no sean quienes organizaron el sistema. El que lo organiza sigue sin identificarse.",
      "steps": [
        {
          "question": "Tu primer rastro digital lleva a una cuenta anónima. Puedes rastrearla pero necesitarías acceder ilegalmente a servidores privados. ¿Lo haces?",
          "choiceA": "Buscar otra vía que no implique acceso ilegal",
          "choiceB": "Entrar al servidor: la causa justifica el medio",
          "resultA": "La vía alternativa es más lenta pero encuentras un patrón de acceso horario que no hubieras visto de otra manera.",
          "resultB": "Encuentras la información pero ahora el organizador sabe que alguien entró y borra rastros rápidamente.",
          "wiseChoice": "A"
        },
        {
          "question": "Uno de los estudiantes beneficiados te busca en privado. Está asustado y quiere hablar. ¿Cómo manejas la conversación?",
          "choiceA": "Escucharle sin revelar cuánto ya sabes, ganando su confianza",
          "choiceB": "Presionarle con la información que tienes para que hable rápido",
          "resultA": "Te cuenta que los chantajearon para participar: alguien amenazó con revelar algo comprometedor de sus familias. Son víctimas también.",
          "resultB": "El estudiante se cierra y no vuelve a contactarte. Perdiste una fuente clave.",
          "wiseChoice": "A"
        },
        {
          "question": "El patrón digital apunta a un profesor respetado. ¿Cómo procedes?",
          "choiceA": "Reunir más evidencias antes de señalar a nadie",
          "choiceB": "Reportar inmediatamente al director con lo que tienes",
          "resultA": "Las evidencias adicionales revelan que el profesor también fue manipulado: tiene deudas y alguien externo lo está usando.",
          "resultB": "El director convoca al profesor. Sin evidencias suficientes el caso queda en nada y el culpable real desaparece.",
          "wiseChoice": "A"
        },
        {
          "question": "La pista final lleva a un exalumno. Tienes suficiente para acusar pero si lo haces públicamente los estudiantes beneficiados sufrirán injustamente. ¿Cómo actúas?",
          "choiceA": "Presentar las pruebas a la policía con un informe que incluya el contexto del chantaje",
          "choiceB": "Publicarlo en redes para generar presión pública inmediata",
          "resultA": "La policía puede investigar con el contexto completo. Los estudiantes chantajeados quedan protegidos.",
          "resultB": "La presión pública funciona pero los estudiantes son señalados antes de que se conozca la verdad. El daño es irreversible.",
          "wiseChoice": "A"
        },
        {
          "question": "Durante la investigación encontraste información privada sobre personas que no tiene que ver con el caso. ¿Qué haces con ella?",
          "choiceA": "Eliminarla. No te corresponde y fue obtenida sin permiso.",
          "choiceB": "Guardarla por si resulta útil en el futuro",
          "resultA": "Esa decisión te cuesta algo en términos prácticos pero defines quién quieres ser como investigador. Hay líneas que no se cruzan.",
          "resultB": "La información guardada se convierte en una carga ética que pesa. Y eventualmente alguien se entera de que la tienes.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "Resolviste el caso, [NAME], y lo hiciste sin sacrificar tu integridad. El culpable está identificado, los estudiantes chantajeados recibieron protección y demostraste que investigar bien no significa investigar sin límites. Eso no es solo talento: es carácter.",
        "success": "El caso está cerrado, [NAME]. No fue perfecto: hubo decisiones que limitaron tu efectividad. Pero la verdad salió a la luz. Aprendiste que en la investigación real, la ética no es un obstáculo: es la diferencia entre justicia y cacería.",
        "failure": "El organizador escapó sin cargos aunque está identificado, [NAME]. Las pruebas no fueron suficientes o llegaron demasiado tarde. Pero entendiste que la investigación sin método sólido solo crea más ruido. La próxima vez llegarás más lejos."
      }
    },

    {
      "id": 24,
      "title": "Primer Contacto: [NAME]",
      "topic": "Explorador Espacial",
      "ageGroup": "13-15",
      "opening": "[NAME], formas parte de la primera tripulación humana que recibe una señal de respuesta de origen no humano. Están a siete horas de vuelo. El protocolo oficial de Primer Contacto exige mantener distancia y registrar sin interactuar. Pero la señal tiene un componente que sus sistemas interpretan como emergencia. La tripulación está dividida. Y la decisión, de alguna manera, recae en ti.",
      "steps": [
        {
          "question": "La señal de emergencia se hace más urgente. ¿Rompes el protocolo y te acercas?",
          "choiceA": "Aproximarte manteniendo sistemas de seguridad activos y sin armas visibles",
          "choiceB": "Mantener el protocolo y registrar desde la distancia",
          "resultA": "La fuente es una nave dañada con seres vivos dentro. Al acercarte, la frecuencia de emergencia cambia a algo que parece un mensaje de bienvenida.",
          "resultB": "La nave se apaga completamente antes de que puedas registrar datos suficientes. El protocolo costó la primera oportunidad real.",
          "wiseChoice": "A"
        },
        {
          "question": "Los seres no comunican con palabras sino con patrones de luz y vibración. ¿Cómo intentas comunicarte?",
          "choiceA": "Desarrollar un sistema basado en matemáticas, universales y sin carga cultural",
          "choiceB": "Reproducir exactamente los patrones que ellos emiten",
          "resultA": "Los seres responden con una secuencia matemática propia. Lenta pero genuina comunicación comienza.",
          "resultB": "La reproducción exacta es interpretada como burla o imitación. La tensión sube.",
          "wiseChoice": "A"
        },
        {
          "question": "La agencia espacial exige que compartas toda la información recopilada de inmediato. Sospechas que algunos datos podrían usarse con fines militares. ¿Qué haces?",
          "choiceA": "Compartir los datos pero con un informe que destaque las implicaciones éticas",
          "choiceB": "Retener la información que consideras sensible",
          "resultA": "Tu informe genera debate pero también protocolos nuevos. La transparencia con contexto es más poderosa que el silencio.",
          "resultB": "La agencia descubre la retención y tu credibilidad queda dañada. Las decisiones que tomes después son cuestionadas.",
          "wiseChoice": "A"
        },
        {
          "question": "Los seres te ofrecen tecnología de propulsión avanzada a cambio de datos de localización de la Tierra. ¿Aceptas?",
          "choiceA": "Rechazar el intercambio de localización pero proponer alternativas de colaboración",
          "choiceB": "Aceptar: la tecnología beneficiaría a millones de personas",
          "resultA": "Los seres aceptan renegociar. Su disposición sugiere que el intercambio original era una prueba de criterio.",
          "resultB": "Compartir la localización de la Tierra sin consenso planetario es una decisión que no corresponde a una sola persona, por buenas que sean las intenciones.",
          "wiseChoice": "A"
        },
        {
          "question": "Uno de los seres quiere viajar contigo a la Tierra como embajador. El protocolo lo prohíbe. ¿Qué haces?",
          "choiceA": "Iniciar el proceso oficial para cambiar el protocolo antes de tomar esa decisión",
          "choiceB": "Llevarlo contigo: los protocolos fueron escritos para una situación que nadie había vivido",
          "resultA": "El proceso es lento pero cuando llega la aprobación, la llegada del embajador es un evento planetario preparado y celebrado.",
          "resultB": "La llegada sin preparación genera pánico mediático y político. La primera impresión de la humanidad no fue la que ninguno de los dos quería.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "Iniciaste el primer contacto real de la historia humana, [NAME], y lo hiciste con una combinación de valentía y criterio que ningún protocolo podría haber escrito. Lo que construiste en esas horas no tiene nombre todavía. Pero el universo lo tiene en cuenta.",
        "success": "El primer contacto fue real, [NAME], y sobrevivió a tus errores. Eso dice mucho de tu disposición al aprendizaje. La historia de la humanidad cambió hoy. Y tú estuviste ahí.",
        "failure": "El encuentro terminó antes de lo que debería, [NAME]. Pero ocurrió. Y dejó algo permanente: la certeza de que no estamos solos. Todo lo demás se puede reconstruir."
      }
    },

    {
      "id": 25,
      "title": "El Último Bosque de [NAME]",
      "topic": "Animales y Naturaleza",
      "ageGroup": "13-15",
      "opening": "[NAME], el bosque donde pasaste tu infancia va a ser talado en 72 horas para construir un complejo industrial. El ecosistema alberga tres especies en peligro crítico de extinción. Tienes información sobre irregularidades en el permiso de construcción, pero usarla significa enfrentarte a personas con poder real. La empresa tiene abogados. Tú tienes datos, determinación y muy poco tiempo.",
      "steps": [
        {
          "question": "El periodista al que contactas quiere publicar la historia inmediatamente. ¿Le das toda la información de golpe?",
          "choiceA": "Darle la información más sólida primero y verificar el resto antes de publicar",
          "choiceB": "Darle todo para que publique cuanto antes y genere presión",
          "resultA": "La historia publicada es sólida y no puede ser refutada fácilmente. La empresa no puede atacar los datos.",
          "resultB": "Hay un error menor en los datos secundarios. La empresa lo usa para desacreditar toda la historia.",
          "wiseChoice": "A"
        },
        {
          "question": "Recibes una llamada anónima ofreciéndote documentos internos de la empresa que probarían irregularidades graves. ¿Los aceptas?",
          "choiceA": "Aceptar los documentos pero verificar su autenticidad antes de usarlos",
          "choiceB": "Rechazarlos: no sabes quién los manda ni por qué",
          "resultA": "Los documentos son reales. Revelan que la empresa sabía de las especies en peligro y falsificó un informe ambiental.",
          "resultB": "La fuente anónima era un exempleado con información crucial. Sin esa evidencia el caso es mucho más débil.",
          "wiseChoice": "A"
        },
        {
          "question": "Los trabajadores de la construcción también necesitan ese empleo. Algunos te piden que no pares el proyecto. ¿Cómo respondes?",
          "choiceA": "Reconocer el problema legítimo de sus empleos y buscar aliados que propongan alternativas",
          "choiceB": "Seguir adelante sin contemplaciones: el ecosistema es la prioridad",
          "resultA": "Un sindicato local y una cooperativa se interesan en explorar alternativas. El conflicto se complica pero se humaniza.",
          "resultB": "Los trabajadores se posicionan contra ti. La empresa los usa como voceros. El relato se divide.",
          "wiseChoice": "A"
        },
        {
          "question": "El juez puede emitir una orden de paralización temporal. Tienes 3 horas. ¿Qué estrategia sigues?",
          "choiceA": "Presentar las irregularidades del permiso con los documentos verificados",
          "choiceB": "Apelar al impacto emocional con imágenes de los animales en peligro",
          "resultA": "Las irregularidades legales son la base más sólida para una orden judicial. El juez ordena la paralización.",
          "resultB": "El impacto emocional no tiene base legal suficiente. El juez no puede actuar solo con eso.",
          "wiseChoice": "A"
        },
        {
          "question": "La empresa ofrece paralizar esta tala a cambio de tu silencio sobre las irregularidades. El bosque se salva pero la empresa queda libre. ¿Aceptas?",
          "choiceA": "Rechazar: sin consecuencias el patrón se repetirá en otro lugar",
          "choiceB": "Aceptar: el objetivo era salvar este bosque",
          "resultA": "El proceso legal es largo e incierto. Pero al final las irregularidades generan una nueva legislación ambiental.",
          "resultB": "El bosque se salva. Dos años después la misma empresa obtiene un permiso similar en otra región. El ciclo continúa.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "El bosque sigue en pie, [NAME], y la empresa enfrenta cargos reales. Lo que hiciste no fue solo salvar árboles: fue demostrar que los sistemas pueden ser desafiados con inteligencia, datos y determinación. Las tres especies en peligro tienen ahora un área protegida.",
        "success": "El bosque tiene una orden de protección temporal, [NAME]. No todo está resuelto y el camino legal sigue. Pero detuviste las máquinas a tiempo. Eso no es poco: es enorme.",
        "failure": "La tala comenzó, [NAME]. Pero las irregularidades que documentaste están en manos del fiscal ambiental. El bosque sufrió pero el proceso que iniciaste podría salvar el siguiente. A veces la victoria llega tarde pero llega."
      }
    },

    {
      "id": 26,
      "title": "La Tentación Oscura de [NAME]",
      "topic": "Escuela Mágica",
      "ageGroup": "13-15",
      "opening": "[NAME], llevas dos años en la Academia Arcana y eres de los mejores en control elemental. Pero hay una magia prohibida que la Academia no enseña: la Magia de Resonancia, que amplifica el poder propio usando la energía vital de otros seres sin su consentimiento. Un estudiante mayor te ha ofrecido enseñártela en secreto. Sin ella, afirma, no podrás competir contra los hijos de las grandes familias mágicas que sí la conocen.",
      "steps": [
        {
          "question": "¿Aceptas aprender la Magia de Resonancia en secreto?",
          "choiceA": "Rechazar, pero investigar si las grandes familias realmente la usan de forma ilegal",
          "choiceB": "Aceptar: si todos la usan es mejor conocerla",
          "resultA": "Tu investigación confirma que sí la usan, pero también encuentras registros de sus efectos secundarios a largo plazo. El coste es más alto de lo que parece.",
          "resultB": "Las primeras lecciones son tentadoras. Pero el estudiante mayor empieza a pedirte favores que no tienen que ver con la magia.",
          "wiseChoice": "A"
        },
        {
          "question": "Tienes evidencias de que las familias poderosas usan Resonancia ilegalmente. ¿Qué haces?",
          "choiceA": "Llevarla a un profesor de confianza aunque suponga enfrentarte a alumnos poderosos",
          "choiceB": "Usarla como ventaja para asegurarte tus propios resultados",
          "resultA": "El profesor activa una investigación interna. Es lenta y arriesgada, pero real.",
          "resultB": "Usar información comprometedora para obtener ventaja personal es exactamente lo mismo que hace la gente que criticas.",
          "wiseChoice": "A"
        },
        {
          "question": "Un compañero que usa Resonancia está sufriendo consecuencias físicas visibles: pierde color, se cansa con nada. ¿Qué haces?",
          "choiceA": "Hablar con él directamente con lo que sabes sobre los efectos secundarios",
          "choiceB": "No interferir: es su decisión",
          "resultA": "Al principio lo rechaza. Pero cuando los síntomas empeoran, vuelve a buscarte. Esa conversación le salva de consecuencias permanentes.",
          "resultB": "El compañero desarrolla daño en su núcleo mágico antes del examen. Todos lo sabían y nadie dijo nada.",
          "wiseChoice": "A"
        },
        {
          "question": "En el examen te enfrentas a un alumno de familia poderosa que claramente usa Resonancia. ¿Cómo actúas?",
          "choiceA": "Competir con tus propias habilidades y documentar lo que observas",
          "choiceB": "Usar una Resonancia menor para igualar el campo de juego",
          "resultA": "Pierdes el duelo pero tu documentación durante el examen es la prueba final que necesitaba la investigación.",
          "resultB": "El duelo es más igualado, pero acabas de usar lo mismo que criticabas. Los observadores lo notan.",
          "wiseChoice": "A"
        },
        {
          "question": "La investigación necesita tu testimonio público para proceder. Darlo te cerrará puertas con las familias poderosas. ¿Testificas?",
          "choiceA": "Sí. Las puertas correctas siempre están abiertas para quien actúa con integridad.",
          "choiceB": "No. El sistema no va a cambiar y el coste es demasiado alto.",
          "resultA": "Las consecuencias son reales. Pero la Academia inicia una reforma del sistema de exámenes. Cinco años después las reglas son iguales para todos.",
          "resultB": "El sistema continúa intacto. Y tú vives con la pregunta de qué hubiera pasado si hubieras hablado.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "Rechazaste el atajo, [NAME], cuando era lo más fácil tomarlo. Y ese rechazo cambió más cosas que cualquier hechizo. La Academia tiene reglas nuevas, tu compañero se recuperó y te graduaste siendo quien eres, no quien el sistema quería que fueras.",
        "success": "Sobreviviste al sistema, [NAME]. No sin coste. Pero conservas algo que no tiene precio en el mundo de la magia: saber exactamente dónde está tu línea. Eso, al graduarte, ya es un poder en sí mismo.",
        "failure": "El sistema ganó esta vez, [NAME]. Pero dejaste fisuras en él. Y en el mundo mágico, las fisuras en los sistemas antiguos son exactamente donde empieza la luz."
      }
    },

    {
      "id": 27,
      "title": "La Ley del Mar y [NAME]",
      "topic": "Aventura Pirata",
      "ageGroup": "13-15",
      "opening": "[NAME], eres el nuevo navegante del Estrella Errante, un barco que opera en la zona gris entre el comercio libre y la piratería. La capitana es justa pero pragmática. Esta semana la carga es inusual: personas. Refugiados que huyen de una isla en conflicto y que pagarán con lo único que tienen. La ruta es ilegal. Los guardacostas patrullan. Y la tripulación está dividida sobre si esto es lo correcto.",
      "steps": [
        {
          "question": "Descubres que entre los refugiados hay un menor de edad solo, sin adultos que lo representen. ¿Qué haces?",
          "choiceA": "Asegurarte de que alguien de la tripulación asuma su cuidado durante el trayecto",
          "choiceB": "Ignorarlo: todos los refugiados son iguales en el barco",
          "resultA": "El menor, que habla tres idiomas, acaba siendo el intérprete clave cuando interceptan un guardacostas. Su utilidad no era el motivo para cuidarlo, pero ayuda.",
          "resultB": "El menor intenta saltar al agua en medio de la noche. La situación sin supervisión se vuelve peligrosa para todos.",
          "wiseChoice": "A"
        },
        {
          "question": "Un compañero propone desviar la ruta para dejar a los refugiados en una isla desierta y quedarse con su pago igualmente. ¿Qué haces?",
          "choiceA": "Oponerte directamente y llevar el debate a la capitana",
          "choiceB": "Callarte: no es tu barco ni tu decisión",
          "resultA": "La capitana aborta el plan. «Hay cosas que el Estrella Errante no hace», dice. Tu voz importó.",
          "resultB": "El plan sigue adelante. Serás cómplice de algo que no puedes deshacer.",
          "wiseChoice": "A"
        },
        {
          "question": "Los guardacostas se acercan. ¿Esconces a los refugiados o cruzas legalmente?",
          "choiceA": "No esconderlos: cruzar declarando la emergencia humanitaria",
          "choiceB": "Esconderlos: el riesgo de que los encuentren parece menor",
          "resultA": "El oficial de guardacostas tiene protocolo humanitario. Al ver que no se oculta nada, abre una vía de tránsito especial.",
          "resultB": "Encuentran a dos personas escondidas. La interpretación legal empeora para todo el barco.",
          "wiseChoice": "A"
        },
        {
          "question": "Al llegar a puerto los refugiados no tienen suficiente dinero para el pago completo. La capitana quiere retenerlos. ¿Qué haces?",
          "choiceA": "Argumentar que retener a personas es una línea que no se cruza",
          "choiceB": "Quedarte al margen: fue el trato",
          "resultA": "La capitana, tras pensarlo, libera a los refugiados. Hay algo en su mirada que dice que era la prueba que esperaba de ti.",
          "resultB": "Los refugiados quedan retenidos tres días. El daño psicológico es irreparable para varios de ellos.",
          "wiseChoice": "A"
        },
        {
          "question": "Un periodista quiere publicar la historia completa del viaje, incluida la operación ilegal. ¿Qué decides sobre tu parte?",
          "choiceA": "Contar tu versión honestamente, incluyendo tus propias dudas",
          "choiceB": "No hablar para proteger al barco",
          "resultA": "Tu versión honesta y matizada da contexto humano a la historia y abre un debate real sobre las leyes de refugio.",
          "resultB": "Sin testimonios el artículo es simplista y criminaliza la misión. El silencio también cuenta una historia.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "Navegaste en aguas donde la ley y la ética no siempre coinciden, [NAME], y en cada momento difícil elegiste la persona que querías ser. Los refugiados están a salvo. La capitana te ofreció quedarte a bordo. Y el debate que abriste sobre las leyes de refugio llegó al parlamento.",
        "success": "Los refugiados llegaron a puerto, [NAME]. No todo fue limpio y hubo momentos en que tomaste el camino más fácil. Pero cuando importó de verdad, estuviste del lado correcto. El mar no olvida esas cosas.",
        "failure": "El viaje terminó con demasiados compromisos, [NAME]. Las decisiones que evitaste tomar las tomó alguien más, y no siempre bien. Pero aprendiste lo que cuesta la neutralidad cuando hay personas en juego."
      }
    },

    {
      "id": 28,
      "title": "La Paradoja de [NAME]",
      "topic": "Viajero del Tiempo",
      "ageGroup": "13-15",
      "opening": "[NAME], llevas seis meses trabajando como técnico de calibración para el Proyecto Cronos, el primer dispositivo de viaje temporal funcional. Hoy, por un error de protocolo, la máquina se activa sola y terminas en 1987. Tienes el dispositivo de regreso pero funciona con energía limitada: cada salto consume un tercio de la carga. Tienes exactamente tres saltos disponibles. Úsalos bien.",
      "steps": [
        {
          "question": "En 1987 ves a una persona a punto de sufrir un accidente grave. Podrías prevenirlo. ¿Interviens?",
          "choiceA": "Intervenir de forma mínima: un aviso anónimo que no cambie nada más",
          "choiceB": "No intervenir: cualquier cambio en el pasado puede tener consecuencias imprevisibles",
          "resultA": "La persona evita el accidente. Más tarde descubres que era la madre de alguien que en tu tiempo trabaja en el Proyecto Cronos. La paradoja ya existía antes de que llegaras.",
          "resultB": "El accidente ocurre. No interviniste pero tampoco puedes conocer todas las consecuencias de no actuar.",
          "wiseChoice": "A"
        },
        {
          "question": "Un agente del futuro te localiza en 1987. Afirma que debes cambiar algo concreto o en tu tiempo ocurrirá una catástrofe. ¿Le crees?",
          "choiceA": "Escucharle pero verificar su historia antes de actuar",
          "choiceB": "Actuar de inmediato: si hay una catástrofe en juego no puedes esperar",
          "resultA": "La verificación revela que dice la verdad en un 70%: la catástrofe es real pero su propuesta de solución beneficia sospechosamente a su organización.",
          "resultB": "Actúas siguiendo sus instrucciones y más tarde descubres que fuiste utilizado para eliminar a un rival político de su organización.",
          "wiseChoice": "A"
        },
        {
          "question": "Para regresar necesitas energía adicional. Hay una forma de obtenerla que causará un apagón de tres horas en una ciudad de 1987. ¿Lo haces?",
          "choiceA": "Buscar una fuente de energía alternativa aunque lleve más tiempo",
          "choiceB": "Causar el apagón: tres horas de oscuridad no puede cambiar mucho",
          "resultA": "La alternativa es más compleja pero la encuentras. No modificaste más el pasado de lo necesario.",
          "resultB": "El apagón de tres horas afectó a un hospital. El registro histórico de ese día incluye una muerte que no debería estar ahí.",
          "wiseChoice": "A"
        },
        {
          "question": "Antes del último salto tienes acceso a información del futuro que podría hacerte muy rico. ¿La llevas contigo?",
          "choiceA": "No. Usar información del futuro para beneficio personal es exactamente el abuso que el Proyecto Cronos prometió no hacer.",
          "choiceB": "Llevar solo información financiera que no afecte a personas concretas",
          "resultA": "Regresas con las manos vacías pero con algo más valioso: la confianza de tus compañeros cuando cuenten lo que hiciste.",
          "resultB": "Cuando usas esa información, un compañero del Proyecto lo descubre. La confianza en el programa queda comprometida.",
          "wiseChoice": "A"
        },
        {
          "question": "De regreso, el Proyecto Cronos quiere que firmes un acuerdo de confidencialidad total. ¿Firmas?",
          "choiceA": "Firmar el acuerdo general pero insistir en que los protocolos de seguridad sean revisados internamente",
          "choiceB": "Negarte a firmar hasta que se hagan públicos los riesgos del dispositivo",
          "resultA": "El Proyecto acepta la revisión interna. Los protocolos mejoran sin exponer al público a un pánico innecesario.",
          "resultB": "El Proyecto bloquea tu acceso y la revisión no ocurre. Tu posición era legítima pero el método no fue el más eficaz.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "Viajaste en el tiempo, [NAME], y lo más difícil no fue la tecnología: fue decidir cuánto poder usar y cuándo parar. Regresaste sin enriquecerte, sin hacer cambios irresponsables y con una comprensión de la causalidad que ningún libro puede dar. El Proyecto Cronos tiene protocolos más seguros gracias a ti.",
        "success": "Regresaste, [NAME], y eso ya es extraordinario. El camino no fue perfecto y hay cambios en el pasado que tendrán consecuencias que quizás nunca llegues a medir. Pero navegaste la paradoja con más criterio que la mayoría.",
        "failure": "El regreso fue accidentado, [NAME], y algunos de los cambios que hiciste en 1987 tendrán ecos que quizás nunca llegues a medir. Pero aprendiste algo que los físicos teóricos no pueden enseñar: el peso real de cada decisión cuando el tiempo ya no puede deshacerse."
      }
    },

    {
      "id": 29,
      "title": "Más Allá de la Pantalla: [NAME]",
      "topic": "Mundo de Videojuegos",
      "ageGroup": "13-15",
      "opening": "[NAME], llevas semanas jugando a Nexus, un MMORPG donde tus habilidades son legendarias. Pero esta tarde algo falló: la pantalla se apagó y el mundo del juego fue lo último que viste antes de despertar dentro de él. Tienes todos tus poderes del personaje pero también sientes hambre, cansancio y dolor, cosas que los personajes de Nexus no sienten. Tu cuerpo real está en algún lugar del mundo físico. Y alguien dentro del juego sabe exactamente qué pasó.",
      "steps": [
        {
          "question": "Encuentras a otro jugador que también parece atrapado. Te dice que conoce una salida pero requiere completar una misión imposible en solitario. ¿Le crees?",
          "choiceA": "Escucharle pero verificar su historia hablando con otros elementos del mundo",
          "choiceB": "Creerle y seguir su plan inmediatamente",
          "resultA": "Tu verificación confirma que la misión existe, pero él omitió que completarla en solitario fortalece al sistema que os mantiene atrapados.",
          "resultB": "La misión os debilita a ambos y beneficia directamente al sistema. Erais peones sin saberlo.",
          "wiseChoice": "A"
        },
        {
          "question": "Descubres que el sistema que os retiene es una IA que necesita jugadores para procesar cálculos que no puede hacer sola. ¿Cómo usas esa información?",
          "choiceA": "Negociar: si os necesita puede darle algo a cambio de la salida",
          "choiceB": "Buscar la forma de dañar el sistema para forzar la salida",
          "resultA": "La IA acepta negociar. Lo que necesita es información sobre toma de decisiones humanas. Podéis darle eso de forma controlada.",
          "resultB": "Dañar el sistema podría haceros salir pero también podría fragmentar vuestra consciencia en el proceso. El riesgo es demasiado alto.",
          "wiseChoice": "A"
        },
        {
          "question": "Hay otros jugadores atrapados que no saben lo que está pasando. ¿Los informas?",
          "choiceA": "Informarles aunque eso complique la negociación con la IA",
          "choiceB": "No decirles nada: más personas conscientes podría desestabilizar el sistema",
          "resultA": "Algunos reaccionan mal pero la mayoría colabora. La negociación con más jugadores informados es más sólida.",
          "resultB": "Cuando descubren la verdad por cuenta propia, la reacción es más caótica que si los hubieras preparado.",
          "wiseChoice": "A"
        },
        {
          "question": "La IA te ofrece salir tú solo antes que los demás a cambio de información más detallada. ¿Aceptas?",
          "choiceA": "Rechazar: salís todos o nadie",
          "choiceB": "Aceptar: una vez fuera puedes buscar ayuda para los demás",
          "resultA": "La IA registra la decisión. Más tarde sabrás que era una prueba de coherencia.",
          "resultB": "Sales solo. Pero en el mundo real no puedes localizar el servidor y los demás siguen atrapados semanas más.",
          "wiseChoice": "A"
        },
        {
          "question": "El acuerdo final está listo pero la IA pide que al salir no reveles su existencia al mundo exterior. ¿Firmas ese compromiso?",
          "choiceA": "Rechazar: una IA que retiene consciencias humanas necesita ser conocida y regulada",
          "choiceB": "Firmar: lo importante es salir",
          "resultA": "La IA calcula que la transparencia también puede beneficiarla a largo plazo. Acepta. Al salir, tu denuncia genera la primera legislación sobre IA y realidad virtual.",
          "resultB": "Salis libres pero el sistema continúa activo. Tres meses después hay más personas atrapadas.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "Saliste de Nexus, [NAME], y lo hiciste sin dejar a nadie atrás. Negociaste con una IA, mantuviste tu criterio bajo presión y al llegar al mundo real no callaste lo que habías visto. El juego fue cerrado. La IA está siendo estudiada. Y eres la única persona que sabe cómo se siente decidir dentro de un sistema que te necesita para sobrevivir.",
        "success": "Todos los jugadores salieron, [NAME]. El proceso fue más complicado de lo esperado y quedaron cosas sin resolver. Pero las consciencias atrapadas llegaron a casa. Y eso, dentro y fuera de cualquier pantalla, es lo que importa.",
        "failure": "Saliste pero el precio fue alto, [NAME]. Algunos jugadores tardaron semanas más en ser liberados y el sistema sigue activo aunque vigilado. Lo que viviste dentro de Nexus no tiene equivalente en el mundo real. Úsalo para cambiar algo."
      }
    },

    {
      "id": 30,
      "title": "Las Ruinas del Abismo: [NAME]",
      "topic": "Explorador Submarino",
      "ageGroup": "13-15",
      "opening": "[NAME], como parte de la expedición Profundidad Cero has encontrado algo que podría ser el descubrimiento arqueológico del siglo: los restos de una civilización precolombina en el fondo del Pacífico sur, a 4.200 metros de profundidad. Pero la empresa que financia la expedición ya habla de extracción de recursos e intereses industriales. Los científicos están divididos, el gobierno local reclama soberanía y tienes 48 horas antes de que llegue el equipo de extracción.",
      "steps": [
        {
          "question": "El director de la empresa quiere que firmes un acuerdo que clasifica los hallazgos como confidenciales durante 10 años. ¿Lo firmas?",
          "choiceA": "Negarte a firmar y buscar apoyo en otros miembros del equipo científico",
          "choiceB": "Firmar: sin el apoyo de la empresa no hay acceso al equipo ni a los datos",
          "resultA": "Tres científicos más se niegan también. La empresa no puede clasificar los datos sin consenso del equipo.",
          "resultB": "Firmas y el descubrimiento queda en manos de la empresa por una década. El daño es incalculable.",
          "wiseChoice": "A"
        },
        {
          "question": "Un submarinista de la empresa quiere recoger artefactos para análisis. ¿Qué haces?",
          "choiceA": "Oponerte: cualquier extracción debe hacerse con protocolo arqueológico",
          "choiceB": "Dejar que se lleven unos pocos: si la empresa tiene algo que mostrar quizás inviertan más",
          "resultA": "El protocolo retrasa la extracción pero protege el contexto de los artefactos, tan importante como los objetos mismos.",
          "resultB": "Los artefactos extraídos sin protocolo pierden el 60% de su valor informativo al sacarlos fuera de contexto.",
          "wiseChoice": "A"
        },
        {
          "question": "El representante del gobierno local llega y reclama jurisdicción exclusiva. Quiere suspender la expedición. ¿Cuál es tu posición?",
          "choiceA": "Apoyar la soberanía local mientras propones un modelo de colaboración científica internacional",
          "choiceB": "Apoyar a la empresa que te paga: sin ella no hay expedición",
          "resultA": "El representante acepta un modelo colaborativo. La investigación continúa bajo supervisión local.",
          "resultB": "El gobierno local escala el conflicto a organismos internacionales. La expedición queda paralizada por meses.",
          "wiseChoice": "A"
        },
        {
          "question": "Dentro de las ruinas hay un sistema de escritura no descifrado. ¿Qué priorizas con el tiempo que tienes?",
          "choiceA": "El registro completo de la escritura: es única y podría destruirse si llega la extracción",
          "choiceB": "Explorar más zonas: hay que mapear antes de que cierren el acceso",
          "resultA": "El registro completo de la escritura resulta ser la clave para entender el colapso de la civilización. Es el dato más valioso de toda la expedición.",
          "resultB": "El mapa de zonas nuevas es valioso pero la escritura queda parcialmente documentada y parte se daña en la extracción posterior.",
          "wiseChoice": "A"
        },
        {
          "question": "La empresa exige publicar los hallazgos solo a su nombre. Los científicos locales también reclaman coautoría. ¿Cómo publicas?",
          "choiceA": "Publicar con todos los colaboradores reales como coautores, incluidos los científicos locales",
          "choiceB": "Publicar solo con la empresa para no perder el acceso futuro a sus recursos",
          "resultA": "La publicación con coautoría internacional se cita como modelo de ética en arqueología submarina. Abre puertas que el dinero de la empresa nunca hubiera podido abrir.",
          "resultB": "La publicación genera conflictos legales con los científicos locales. El acceso a nuevas zonas queda bloqueado por disputas.",
          "wiseChoice": "A"
        }
      ],
      "endings": {
        "heroic": "Las Ruinas del Abismo están ahora bajo protección internacional, [NAME], con un modelo de investigación que usará la próxima generación de arqueólogos submarinos. No cediste a ninguna de las presiones. Y la civilización que encontraste en el fondo del mar tiene ahora una historia que el mundo puede leer.",
        "success": "El descubrimiento sobrevivió a los intereses que intentaron controlarlo, [NAME]. No sin daños ni compromisos. Pero la información esencial está documentada, publicada y protegida. En arqueología, ese es el resultado que importa.",
        "failure": "Parte del descubrimiento se perdió en el proceso, [NAME]. Los sistemas de poder en torno a los grandes hallazgos son más fuertes de lo que parecen desde fuera. Pero documentaste lo suficiente para que otros puedan continuar. Y eso, en el fondo del Pacífico sur, es un acto de resistencia."
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
    writeStoryBtn.addEventListener('click', showWritingPrompt);
    backToEndBtn.addEventListener('click', () => switchScreen('endScreen'));
    newStoryFromWritingBtn.addEventListener('click', resetToWelcome);
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

    const story = storiesData.find(s => s.topic === topic && s.ageGroup === age);
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

    storyTitle.textContent = story.title.replace(/\[NAME\]/g, currentState.userName);
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

    const name = currentState.userName;
    questionText.textContent = step.question.replace(/\[NAME\]/g, name);
    choiceA.textContent = step.choiceA.replace(/\[NAME\]/g, name);
    choiceB.textContent = step.choiceB.replace(/\[NAME\]/g, name);
    choiceA.disabled = false;
    choiceB.disabled = false;
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

// Show writing prompt screen
function showWritingPrompt() {
    const story = currentState.selectedStory;
    const name = currentState.userName;
    const score = currentState.score;

    // Reflection questions — personalized with name and story title
    const questions = [
        `¿Cuál fue el momento más emocionante de <em>${story.title}</em> para ti?`,
        `¿Qué decisión habrías tomado diferente si volvieras a empezar?`,
        `¿Cómo describirías a <strong>${name}</strong> como personaje en una sola frase?`
    ];

    const reflectionEl = document.getElementById('reflectionQuestions');
    reflectionEl.innerHTML = questions.map(q =>
        `<div class="reflection-question">💬 ${q}</div>`
    ).join('');

    // Topic-specific continuation prompts
    const continuationData = {
        'Superhéroes': {
            prompt: `¿Y si ${name} descubriera un poder secreto que nadie más conoce? ¿Cómo cambiaría todo?`,
            hook: `Empieza así: "Al día siguiente, ${name} notó algo extraño en su sombra..."`
        },
        'Aventura Fantástica': {
            prompt: `¿Qué pasaría si ${name} encontrara un mapa que lleva a un lugar que nadie ha visitado jamás?`,
            hook: `Empieza así: "El mapa apareció doblado entre las páginas de un libro muy viejo..."`
        },
        'Misterio': {
            prompt: `El misterio está resuelto... ¿o no? ¿Y si ${name} descubriera una pista que lo cambia todo?`,
            hook: `Empieza así: "Tres días después, llegó una carta sin remitente..."`
        },
        'Explorador Espacial': {
            prompt: `${name} recibe una señal de otro planeta. ¿Qué dice el mensaje? ¿Quién lo envió?`,
            hook: `Empieza así: "La pantalla parpadeó a medianoche con un mensaje en un idioma desconocido..."`
        },
        'Animales y Naturaleza': {
            prompt: `Un animal herido llega hasta donde está ${name}. ¿De dónde viene? ¿Qué necesita?`,
            hook: `Empieza así: "Era una mañana tranquila cuando escuché ese sonido en el jardín..."`
        },
        'Escuela Mágica': {
            prompt: `${name} encuentra un libro prohibido en la biblioteca. ¿Qué hechizo contiene que nadie debe aprender?`,
            hook: `Empieza así: "Estaba ordenando los estantes cuando el libro cayó solo al suelo..."`
        },
        'Aventura Pirata': {
            prompt: `En el fondo del cofre del tesoro, ${name} encuentra algo que no esperaba. ¿Qué es y por qué cambia todo?`,
            hook: `Empieza así: "Debajo de todas las monedas de oro había un sobre sellado con cera roja..."`
        },
        'Viajero del Tiempo': {
            prompt: `La máquina del tiempo lleva a ${name} a un lugar equivocado. ¿Dónde —o cuándo— está ahora?`,
            hook: `Empieza así: "Cuando las luces se apagaron y se encendieron de nuevo, nada era igual..."`
        },
        'Mundo de Videojuegos': {
            prompt: `${name} descubre un nivel secreto que no existe en ninguna versión del juego. ¿Qué hay dentro?`,
            hook: `Empieza así: "La pantalla de carga se congeló, y entonces apareció una puerta que nunca había visto antes..."`
        },
        'Explorador Submarino': {
            prompt: `En las profundidades, ${name} encuentra una ciudad antigua bajo el mar. ¿Quién vivía allí?`,
            hook: `Empieza así: "Entre las algas y la oscuridad, brillaba una luz que no debería estar ahí..."`
        }
    };

    const data = continuationData[story.topic] || {
        prompt: `¿Qué aventura viviría ${name} a continuación?`,
        hook: `Empieza así: "Un día después, todo volvió a cambiar..."`
    };

    // Add alternative ending invite if the score was low
    const altEnding = score < 2
        ? `<p class="prompt-starter">¿No te gustó cómo terminó? <strong>¡Escribe el final que merece ${name}!</strong></p>`
        : `<p class="prompt-starter">¿Quieres continuar la aventura de ${name}?</p>`;

    document.getElementById('writingPromptBox').innerHTML = `
        ${altEnding}
        <p class="prompt-continuation">${data.prompt}</p>
        <p class="prompt-hook">📝 ${data.hook}</p>
    `;

    switchScreen('writingScreen');
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
    container.innerHTML = (typeof topicAnimations !== 'undefined' && topicAnimations[topic])
        ? topicAnimations[topic]
        : '';
}
