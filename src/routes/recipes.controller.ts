import { RequestHandler } from 'express';

export const getRecipes: RequestHandler = async (req, res) => {
  const recipesList = [
    {
      name: 'Juane',
      type: 'Almuerzo',
      description:
        'Cocinar Juane en tu casa es como tener un pedacito de la selva en tu hogar y colocar la magia de su comida sobre nuestra mesa. ¡Vamos con la receta!',
      preparation:
        'En un olla para el arroz pon un poco de aceite y ajo molido, vierte el agua y déjala allí hasta que esté por hervir, agrega el arroz y déjalo cocinar.\nTeniendo tu arroz listo, colócalo sobre una fuente y déjalo enfriar a temperatura ambiente. \nEsta fuente será el lugar en donde se hará la combinación.Cocina los 8 huevos en una olla pequeña y sumérgelos con un poco de sal. \nTeniendo los huevos cocidos resérvalos a un costado.\nEn una sartén derrite la manteca de chancho y añade el ajo. \nDora la cebolla y agrega el palillo, el cubito de caldo de gallina, orégano, laurel y sal.\nTeniendo el aderezo en la sartén. Agrega las presas de pollo y fríelas hasta que estén selladas. \nVierte agua para que las presas hiervan durante media hora a fuego medio.\nRetira las presas y mezcla el arroz con el aderezo. \nLuego, Divide la masa en ocho porciones y agrega a cada una, una presa de pollo o gallina, una aceituna y un huevo.\nEstira dos hojas de bijao sobre la mesa y pon dentro una ración. \nSeguido, Dale una forma redonda al arroz y colócalo en el medio. \nUna vez listo, Une las hojas de bijao de cada lado hacía al centro y amárralo con un pabilo o cuerda.\nColoca los Juanes en una olla con agua hirviendo y déjalos allí por aproximadamente 50 minutos más o menos.\nCuando éstos ya estén hervidos sácalos y déjalos enfriar a temperatura ambiente. ',
      cityOrigin: 'Moyobamba',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645750066/foodImages/Juane-peruano_xbltxx.webp',
      ingredients: [
        {
          name: 'Pollo o gallina',
          quantity: '8',
          unit: 'presas',
        },
        {
          name: 'Aceitunas',
          quantity: '8',
          unit: 'unidades',
        },
        {
          name: 'Huevos',
          quantity: '8',
          unit: 'unidades',
        },
        {
          name: 'Arroz',
          quantity: '1/2',
          unit: 'kilo',
        },
        {
          name: 'Agua',
          quantity: '4',
          unit: 'tazas',
        },
        {
          name: 'Ajo molido',
          quantity: '1',
          unit: 'cucharada',
        },
        {
          name: 'Oregano',
          quantity: '1/4',
          unit: 'cucharada',
        },
        {
          name: 'Laurel',
          quantity: '2',
          unit: 'hojas',
        },
        {
          name: 'Cebolla',
          quantity: '2',
          unit: 'unidades',
        },
        {
          name: 'Manteca de cerdo',
          quantity: '1/4',
          unit: 'taza',
        },
        {
          name: 'Hojas de bijao',
          quantity: '16',
          unit: 'unidades',
        },
        {
          name: 'Sal, pimienta y comino',
          quantity: 'al gusto',
          unit: '',
        },
        {
          name: 'Palillo o azafrán',
          quantity: '1',
          unit: 'cucharada',
        },
        {
          name: 'Cubito de caldo de gallina',
          quantity: '1',
          unit: 'unidad',
        },
      ],
      portions: 8,
      lat: -6.0356005,
      lng: -76.9791141,
    },
    {
      name: 'Tacacho con Cecina',
      type: 'Almuerzo',
      description:
        'El Tacacho con Cecina es un plato completo, dos delicias se han juntado para encantarnos',
      preparation:
        'Primero, prepara el tacacho que es prácticamente lo único que te tomará un poco de tiempo. Pela los plátanos y córtalo en trozos. En una sartén coloca aceite y déjalo calentar. Listo esto, coloca el plátano y revisa hasta que estén bien cocidos por fuera y por dentro. Tritura con un mazo cuando esto esté listo y agrega la manteca y luego el chicharrón en trozos pequeños. Es recomendable que hagas este proceso con las manos para que formes las bolas del Tacacho en el tamaño que desees. Fríe en una sartén estas bolas de plátano enmantecados. En otra sartén, fríe la cecina hasta que quede a tu gusto. Teniendo ambos, la comida está lista, sirve en un plato un chorizo, dos bolas de Tacacho y la porción de Cecina',
      cityOrigin: 'Selva Peruana',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645751409/foodImages/Tacacho-con-cecina_y0kygf.webp',
      ingredients: [
        {
          name: 'Plátanos verdes',
          quantity: '10',
          unit: 'unidades',
        },
        {
          name: 'Manteca',
          quantity: '4',
          unit: 'cucharadas',
        },
        {
          name: 'Chorizos',
          quantity: '3',
          unit: 'unidades',
        },
        {
          name: 'Chicharron',
          quantity: '250',
          unit: 'gramos',
        },
        {
          name: 'Cecina de cerdo',
          quantity: '500',
          unit: 'gramos',
        },
      ],
      portions: 3,
      lat: -5.8837528,
      lng: -78.7245619,
    },
    {
      name: 'Arroz Chaufa Charapa',
      type: 'Almuerzo',
      description:
        'El Arroz Chaufa Charapa es un manjar, pues mezcla todos estos sabores en una suculenta versión del clásico Arroz Chaufa pero con productos de la Selva Peruana como la cecina y el chorizo amazónico.',
      preparation:
        'Alista los ingredientes: corta la cecina en cuadrados pequeños, el chorizo en rodajas de 1 centímetro de grosor y la cebolla china completa (cebollines y raben trozos de medio centímetro de largo. Rompe los huevos en un recipiente y mezcla con un tenedor hasta unir bien, sazona con muy poca sal y pimienta al gusto y reserva. Coloca 1 cucharada de aceite en la sartén y lleva a la hornilla a fuego medio, una vez caliente, echa primero el chorizo, deja freír y que suelte su grasa por 1 minuto, luego añade la cecina, fríe unos 4 minutos hasta dorar. Retira de la sartén y reserva. En el aceite sobrante, añade los huevos como formando una tortilla, con la ayuda de la espumadera revuelve para que quede en trozos pequeños. Una vez cocido y dorado retira de la sartén y reserva. En la misma sartén, calienta el resto del aceite vegetal y el aceite de ajonjolí, añade el Kión (jengibry dora por unos 10 segundos, añade el arroz y la salsa de soya, fríe por un par de minutos moviendo constantemente con la espumadera para que no se pegue y absorba los sabores que quedaron en la sartén y todo el arroz se tiña del color de la soya. Añade las carnes y el huevo, mezcla bien y comprueba la sazón. Finalmente retira del fuego, agrega la cebolla china y mezcla. Deja reposar un par de minutos antes de servir.',
      cityOrigin: 'Selva Peruana',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645752965/foodImages/Arroz-Chaufa-Charapa_bzgp9h.webp',
      ingredients: [
        {
          name: 'Arroz blanco cocido',
          quantity: '4',
          unit: 'tazas',
        },
        {
          name: 'Cecina de cerdo',
          quantity: '400',
          unit: 'gramos',
        },
        {
          name: 'Chorizo amazónico',
          quantity: '400',
          unit: 'gramos',
        },
        {
          name: 'Huevos',
          quantity: '4',
          unit: 'unidades',
        },
        {
          name: 'Sillao salsa de soya',
          quantity: '2',
          unit: 'cucharadas',
        },
        {
          name: 'Kión rallado',
          quantity: '1',
          unit: 'cucharada',
        },
        {
          name: 'Cebolla china',
          quantity: '2',
          unit: 'tazas',
        },
        {
          name: 'Aceite de ajonjolí',
          quantity: '1',
          unit: 'cucharada',
        },
        {
          name: 'Aceite',
          quantity: '2',
          unit: 'cucharadas',
        },
        {
          name: 'Platano verde',
          quantity: '4',
          unit: 'unidades',
        },
        {
          name: 'Sal y pimienta',
          quantity: 'al guto',
          unit: '',
        },
      ],
      portions: 6,
      lat: -5.8837528,
      lng: -78.7245619,
    },
    {
      name: 'Masato',
      type: 'Bebida',
      description:
        'Exquisito licor casero a base de yuca fermentada muy popular desde las etnias amazónicas hasta la capital.',
      preparation:
        '¿Cómo hacer el masato de la selva? Es muy simple; pela y lava los 3 kilos de yuca. Luego deja hervir hasta estar cocidas (al ablandarse). Ahora, tritura toda la yuca y agrega el azúcar poco a poco. Seguidamente, añade el agua y mezcla todo muy bien hasta tener una masa blanda. De inmediato, vierte en un recipiente, de barro si es posible, y deja macerar durante aproximadamente una semana. Después de haberse macerado durante el tiempo recomendado, mezcla muy bien la masa con un poco más de agua y cuela para evitar impurezas.',
      cityOrigin: 'Selva Amazónica',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645754262/foodImages/Masato-de-yuca-peruano_umw1ji.webp',
      ingredients: [
        {
          name: 'Yuca',
          quantity: '3',
          unit: 'kilos',
        },
        {
          name: 'Azúcar',
          quantity: '500',
          unit: 'gramos',
        },
        {
          name: 'Agua hervida',
          quantity: '500',
          unit: 'mililitros',
        },
      ],
      portions: 8,
      lat: -5.8837528,
      lng: -78.7245619,
    },
    {
      name: 'Inchicapi',
      type: 'Entrada',
      description:
        'La receta de Inchicapi conlleva esfuerzo y dedicación, razón por la cual es muy cocinada por personas mayores que aprendieron de sus padres cómo prepararla.',
      preparation:
        'Primeramente, cocina el caldo de gallina. Deja hervir la gallina en agua, con un poco de sal, por 1 hora aproximadamente. Pincha las presas con un tenedor y cuando veas que están suaves, resérvalas aparte. Licúa, ya sea con una licuadora o batidora, el palillo, la sacha culantro, los ajos, los ajíes dulces, la cebolla y el maní tostado. Calienta el caldo unos minutos, y agrégale la harina de maíz disuelta en un poco de agua. Agita bien. Luego añade la mezcla licuada anteriormente. Ayúdate con un cucharón y revuelve la sopa insistentemente mientras la cocinas por 10 minutos aproximadamente. Cuando sientas que está lista, cógele de sazón y rectifícalo. Ya está lista para servir. No esperes a que se enfríe y agrégale a la sopa las presas de gallina.',
      cityOrigin: 'Amazonas, San Martín',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645756169/foodImages/Inchicapi-de-gallina_e3mprx.webp',
      ingredients: [
        {
          name: 'Gallina',
          quantity: '4',
          unit: 'presas',
        },
        {
          name: 'Agua',
          quantity: '1 1/2',
          unit: 'litro',
        },
        {
          name: 'Maní tostado',
          quantity: '200',
          unit: 'gramos',
        },
        {
          name: 'Ajo',
          quantity: '1',
          unit: 'cucharada',
        },
        {
          name: 'Cebolla',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Ají dulce',
          quantity: '2',
          unit: 'unidades',
        },
        {
          name: 'Harina de maíz',
          quantity: '100',
          unit: 'gramos',
        },
        {
          name: 'Hojas de sacha culantro',
          quantity: '12',
          unit: 'unidades',
        },
        {
          name: 'Palillo',
          quantity: 'al gusto',
          unit: '',
        },
        {
          name: 'Sal',
          quantity: 'al gusto',
          unit: '',
        },
      ],
      portions: 4,
      lat: -8.6616466,
      lng: -82.299208,
    },
    {
      name: 'Caldo verde',
      type: 'Entrada',
      description:
        'Platillo ideal para preparar en tus celebraciones más especiales. Nos referimos a la tradicional preparación del Caldo Verde de Cajamarca, una de las más emblemáticas de nuestra cultura.',
      preparation:
        '¿Cómo hacer la Sopa Verde de Cajamarca? Es más fácil de lo que crees. Pela las diez ramas de perejil, las diez ramas de paico y las seis ramas de ruda. Aplasta cada una de ellas y escurre el líquido varias veces antes de moler. Este proceso evitará el amargor de las hierbas. De inmediato, pela y corta en cuatro partes cada papa (a medida de pelar y cortar deja en un bowl con agua para que no se oxiden). Ahora, En una olla deja hervir agua y añade las papas ya cortadas. Una vez listas las papas, perfora un hueco en los huevos, bate el contenido y vierte en el caldo. Espera unos minutos antes de remover todo el contenido. Añade la sal al gusto y también las hierbas ya molidas. Mezcla y deja cocinar por unos 5 minutos más. Cuando la cocción del caldo esté terminada, incorpora el quesillo y sirve bien caliente en porciones individuales. Una receta tan deliciosa como reparadora.',
      cityOrigin: 'Cajamarca',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645829358/foodImages/Caldo-Verde_jpnanm.webp',
      ingredients: [
        {
          name: 'Papa amarilla',
          quantity: '1',
          unit: 'kilo',
        },
        {
          name: 'Ramas de paico',
          quantity: '10',
          unit: 'unidades',
        },
        {
          name: 'Ramas de perejil',
          quantity: '10',
          unit: 'unidades',
        },
        {
          name: 'Ramas de ruda',
          quantity: '6',
          unit: 'unidades',
        },
        {
          name: 'Huevos',
          quantity: '2',
          unit: 'unidades',
        },
        {
          name: 'Ajo Quesillo',
          quantity: '250',
          unit: 'gramos',
        },
        {
          name: 'Sal',
          quantity: 'al gusto',
          unit: '',
        },
      ],
      portions: 6,
      lat: -7.157005,
      lng: -78.5197417,
    },
    {
      name: 'Adobo de chacho',
      type: 'Almuerzo',
      description: '¡Vamos con la receta!',
      preparation:
        'Coloca en una olla los lomos cortados en trozos grandes con sal, vinagre, ají panca molido, ajos, comino, romero, orégano y dos cebollas cortadas en rajas un poco gruesas. Luego, licúa una cebolla con la chicha de jora y agrégalo a la olla hasta que cubra la carne por completo. Déjala macerar durante 12 horas. Cocina a fuego fuerte hasta que el jugo se espese (De preferencia en una olla de barro). Cuando se encuentre a medio cocer, agrega más cebolla en tajadas y el rocoto entero. Espera hasta que la carne se encuentre tierna, el adobo tenga una consistencia espesa y listo. Se puede acompañar con pan tres cachetes.',
      cityOrigin: 'Arequipa',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645829728/foodImages/Adobo-de-chancho-arequipeno_go90lp.webp',
      ingredients: [
        {
          name: 'Lomo de cerdo',
          quantity: '1/2',
          unit: 'kilo',
        },
        {
          name: 'Ají oanca molido',
          quantity: '5',
          unit: 'cucharadas',
        },
        {
          name: 'Ajo molido',
          quantity: '1',
          unit: 'cucharada',
        },
        {
          name: 'Cebolla roja',
          quantity: '4',
          unit: 'unidades',
        },
        {
          name: 'Vinagre tinto',
          quantity: '2',
          unit: 'cucharaditas',
        },
        {
          name: 'Chicha de jora',
          quantity: '1',
          unit: 'taza',
        },
        {
          name: 'Rocoto rojo',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Rama de oregano',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Rama de romero',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Comino y sal',
          quantity: 'al gusto',
          unit: '',
        },
      ],
      portions: 4,
      lat: -16.4099426,
      lng: -71.5443781,
    },
    {
      name: 'Pachamanca a la olla',
      type: 'Almuerzo',
      description:
        'Los Andes del Perú es fuente de la Pachamanca a la Olla. Es allí donde la tierra se convierte en olla para dar fruto a la Pachamanca, plato originario del antiguo Perú.',
      preparation:
        'Lo primero que vamos a hacer es licuar todas las hierbas. Pon en una licuadora el culantro, el chincho y el huacatay y licúalo con un poco de agua y reserva. A continuación vamos a preparar el macerado. Pon en un bol o recipiente la mezcla de las hierbas y agrega el ají colorado, el ají amarillo, el ajo molido, un poquito de tomillo, 4 cucharadas de vinagre, 1 vaso de chicha de jora o en su defecto cerveza negra (si tienes los dos, entonces medio vaso de cada uno), orégano, sal y pimienta al gusto y mezcla todo hasta que todos los ingredientes queden bien compenetrados. Ahora agrega las presas de carne previamente lavadas y cúbrelas con el macerado intentando que llegue a todas las partes de las presas. Ahora tenemos que macerar. Si puedes, lo mejor es hacerlo de un día para otro pero si no es posible entonces al menos déjalo unas 3 horas macerando para que los sabores queden más intensos. Prepara una olla lo suficientemente grande para todos los ingredientes. En el fondo coloca varias pancas de choclo de manera que la base de la olla quede cubierta totalmente. A continuación agrega los ingredientes en el siguiente orden y entre capa y capa agrega un poquito del macerado: papas, camote, carnes, choclos, habas y la rama de romero. Si sobra macerado agrégalo. Ahora cubre totalmente con las pancas los ingredientes intentando no dejar ni un espacio libre por donde se escape el vapor. Recuerda que la Pachamanca se cocina a vapor y por eso debemos tener todo muy bien sellado. Tapa la olla y cocina a fuego medio por una hora. Por si no estás seguro del tiempo puedes usar un palito para pinchar y probar si los camotes y las papas están listos. Si todavía les falta vuelve a cubrir todo muy bien. Otro truco que no he probado pero que he leído es que cuando las vainas de las habas se abren significa que ya está la Pachamanca.',
      cityOrigin: 'Junín',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645830258/foodImages/Pachamanca-a-la-olla_ciymbl.webp',
      ingredients: [
        {
          name: 'Carne de cerdo',
          quantity: '2',
          unit: 'kilos',
        },
        {
          name: 'Pollo cortado en trozos',
          quantity: '1',
          unit: 'kilo',
        },
        {
          name: 'Cordero',
          quantity: '1',
          unit: 'kilo',
        },
        {
          name: 'Papas medianas',
          quantity: '1',
          unit: 'kilo',
        },
        {
          name: 'Habas en su vaina',
          quantity: '1',
          unit: 'kilo',
        },
        {
          name: 'Camote',
          quantity: '1',
          unit: 'kilo',
        },
        {
          name: 'Choclo',
          quantity: '3',
          unit: 'unidades',
        },
        {
          name: 'Pancas de choclo',
          quantity:
            'Lo suficiente para cubrir la base y la parte superior de la olla.',
          unit: '',
        },
        {
          name: 'Huacatay',
          quantity: '1',
          unit: 'taza',
        },
        {
          name: 'Chincho',
          quantity: '1',
          unit: 'taza',
        },
        {
          name: 'Culantro',
          quantity: '1',
          unit: 'taza',
        },
        {
          name: 'Rama de romero',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Ají colorado',
          quantity: '2',
          unit: 'cucharadas',
        },
        {
          name: 'Ají amarillo',
          quantity: '2',
          unit: 'cucharadas',
        },
        {
          name: 'Ajo molido',
          quantity: '2',
          unit: 'cucharadas',
        },
        {
          name: 'Tomillo',
          quantity: '1',
          unit: 'cucharadita',
        },
        {
          name: 'Vinagre',
          quantity: 'al gusto',
          unit: '',
        },
        {
          name: 'Chicha de jora o cerveza negra',
          quantity: '1',
          unit: 'vaso',
        },
        {
          name: 'Oregano, sal y pimienta',
          quantity: 'al gusto',
          unit: '',
        },
      ],
      portions: 6,
      lat: -11.2493815,
      lng: -75.8599415,
    },
    {
      name: 'Rocoto relleno',
      type: 'Almuerzo',
      description:
        'El Rocoto Relleno es un plato que todo amante del picante debe probar. Su principal ingrediente el rocoto, es una de las tantas variedades de ajíes autóctono del Perú.',
      preparation:
        'Lava bien los rocotos y corta la parte superior de cada uno, aproximadamente un dedo, dejando el tallito, estos serán las tapitas del rocoto ya relleno (ver la foto al inicio del artículo). Saca el corazón que contiene las semillas y las venas alrededor de las paredes, usa una cuchara y ten mucho cuidado de no romperlo. Llena la olla con agua, agregas 2 cucharadas de azúcar y colocas los rocotos y las tapitas, una vez que rompe el hervor, los escurres y repites el proceso 3 veces, agregando las 2 cucharadas de azúcar cada vez. De esta forma se blanquea el rocoto, su función es reducir el picor. Luego de la tercera hervida, retira los rocotos y déjalos en un bol con agua fría mientras hacemos el relleno, así mantienen su textura.',
      cityOrigin: 'Arequipa',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645830974/foodImages/Rocoto-Relleno_c39p0c.webp',
      ingredients: [
        {
          name: 'Rocotos, rojos y frescos',
          quantity: '12',
          unit: 'unidades',
        },
        {
          name: 'Queso fresco cortado en láminas',
          quantity: '400',
          unit: 'gramos',
        },
        {
          name: 'Papa blanca',
          quantity: '6',
          unit: 'unidades',
        },
        {
          name: 'huevos',
          quantity: '4',
          unit: 'unidades',
        },
        {
          name: 'Leche evaporada',
          quantity: '1',
          unit: 'taza',
        },
        {
          name: 'Azúcar',
          quantity: '6',
          unit: 'cucharadas',
        },
        {
          name: 'Carne bistec molida',
          quantity: '600',
          unit: 'gramos',
        },
        {
          name: 'Cebolla roja',
          quantity: '200',
          unit: 'gramos',
        },
        {
          name: 'Maní tosstado y molido',
          quantity: '100',
          unit: 'gramos',
        },
        {
          name: 'Aceitunas negras sin pepas',
          quantity: '100',
          unit: 'gramos',
        },
        {
          name: 'Pasas rubias',
          quantity: '100',
          unit: 'gramos',
        },
        {
          name: 'Huevos Sancochados',
          quantity: '4',
          unit: 'unidades',
        },
        {
          name: 'Ají panca molido',
          quantity: '2',
          unit: 'cucharadas',
        },
        {
          name: 'Pimienta',
          quantity: '1',
          unit: 'cucharadita',
        },
      ],
      portions: 12,
      lat: -16.4099426,
      lng: -71.5443781,
    },
    {
      name: 'Sopa de trigo',
      type: 'Almuerzo',
      description:
        'La Sopa de Trigo, es uno de los platos típicos de la cocina peruana más sencillo y nutritivo que hay.',
      preparation:
        'Lava el trigo y deja en remojo toda la noche. Al iniciar la preparación escurre el agua usando un colador y vuelve a lavarlo un par de veces más. Corta la cebolla en dos, las papas en cubos medianos y quita la cáscara de las habas. Coloca el agua en la olla y llévalo a la hornilla, echa las porciones de carne, el trigo, el orégano, la cebolla, el zapallo y un poco de sal. Deja cocer por unos 30 minutos revolviendo constantemente para evitar que el trigo se pegue en el fondo de la olla. Cuando la carne esté tierna, retira la cebolla y descártala, añade las habas, las papas, los cubitos de caldo concentrado y las ramitas de Hierbabuena (enteras sin cortar), rectifica la sal y deja cocer por unos 10 a 15 minutos más. Finalmente, antes de apagar la hornilla retira la Hierbabuena y echa el perejil picadito, luego tapa la olla y deja reposar un par de minutos antes de servir.',
      cityOrigin: 'Trujillo',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645831609/foodImages/Sopa-de-trigo_f65jfe.webp',
      ingredients: [
        {
          name: 'Pollo o gallina',
          quantity: '6',
          unit: 'presas',
        },
        {
          name: 'Agua',
          quantity: '5',
          unit: 'litros',
        },
        {
          name: 'Trigo mote',
          quantity: '2',
          unit: 'tazas',
        },
        {
          name: 'Papa blanca',
          quantity: '2',
          unit: 'unidades',
        },
        {
          name: 'Cebolla pequeña',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Habas',
          quantity: '1',
          unit: 'taza',
        },
        {
          name: 'Zapallo macre cortado en juliana',
          quantity: '1/2',
          unit: 'kilo',
        },
        {
          name: 'Ramitas de Hierba buena',
          quantity: '2',
          unit: 'unidades',
        },
        {
          name: 'Cubitos de clado sabor a carne',
          quantity: '2',
          unit: 'unidades',
        },
        {
          name: 'Oregano en polvo',
          quantity: '1',
          unit: 'cucharadita',
        },
        {
          name: 'Perejil picado',
          quantity: '1',
          unit: 'cucharada',
        },
        {
          name: 'Sal',
          quantity: 'al gusto',
          unit: '',
        },
      ],
      portions: 8,
      lat: -8.1165296,
      lng: -79.0458215,
    },
    {
      name: 'Chilcano de pescado',
      type: 'Almuerzo',
      description: '¡Vamos con la receta!',
      preparation:
        'Limpia bien el pescado y separa la cabeza, el espinazo, las aletas y la cola. El resto del pescado córtalo en trozos medianos. Utilizaremos estos casi a final de la receta. Pon una olla con 2 litros de agua fría y agrega el pescado cortado (sólo la cabeza, el espinazo, las aletas y la cola), la cebolla roja, el ajo, la zanahoria, los tallos del apio, culantro, perejil y poro. Y hierve todo por aproximadamente 25 minutos. Mientras se va haciendo el Chilcano de pescado verás que en la parte superior aparecerá una espuma. Esa espuma son impurezas que siempre aparecen cuando hacemos cualquier tipo de pescado. Retírala para que el chilcano te salga más limpio y cristalino. Después de unos 25 minutos, cuela el caldo del Chilcano y agrega los trozos de filete de pescado que cortaste al principio junto con las papas cocinadas. Déjalo cocinar por 5 minutos más, agrega sal y pimienta, pero con cuidado porque a veces dependiendo del tipo de pescado este puede tener un poco de sal. Listo ya lo tienes. Para servir puedes acompañar con una rodaja de rocoto, otra de limón, un poco de cancha serrana y cebollita china cortada en trocitos pequeños.',
      cityOrigin: 'Cañete',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645832614/foodImages/Chilcano-de-pescado_viz8n9.webp',
      ingredients: [
        {
          name: 'Pescado con espinazo y cabeza',
          quantity: '1',
          unit: 'kilo',
        },
        {
          name: 'Rama de apio cortado',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Rama de perejil cortado',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Rama de poro',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Rama de culantro',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Zanahoria ',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Cebolla',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Diente de ajo',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Papas',
          quantity: '4',
          unit: 'unidades',
        },
        {
          name: 'Rama de cebolla china',
          quantity: '1',
          unit: 'unidad',
        },
        {
          name: 'Ají, sal, pimienta y limón',
          quantity: 'al gusto',
          unit: 'unidades',
        },
      ],
      portions: 6,
      lat: -12.4723397,
      lng: -76.834929,
    },
    {
      name: 'Cau Cau',
      type: 'Almuerzo',
      description:
        'El Cau Cau es un guiso a base de mondongo y preferiblemente con papa amarilla, aunque muchas recetas indican usar papa blanca. Ideal para tus comidas en familia un buen domingo por la tarde.',
      preparation:
        'En una olla calienta el aceite a fuego medio y dora la cebolla, el ajo, el ají amarillo y el palillo durante unos minutos. Ya dorado el aderezo, agrega el mondongo, las patas y el caldo. Deja cocinar esto durante 10 minutos y sazonar con sal, pimienta y comino. Prueba constantemente para que sientas si el sabor está balanceado. Añade las papas, la zanahoria y las alverjas y cocina durante 10 minutos más aproximadamente. Agrega la hierbabuena y prueba cómo va tu sazón. Ya lo tienes listo para acompañar con el arroz caliente.',
      cityOrigin: 'Arequipa',
      photo:
        'https://res.cloudinary.com/dzzitcbbw/image/upload/v1645833254/foodImages/Cau-cau_vprgy5.webp',
      ingredients: [
        {
          name: 'Cebolla picada',
          quantity: '1',
          unit: 'taza',
        },
        {
          name: 'Zanahoria picada en cuadritos',
          quantity: '1/2',
          unit: 'taza',
        },
        {
          name: 'Ajo molido',
          quantity: '1/2',
          unit: 'cucharadita',
        },
        {
          name: 'Ají amarillo molido',
          quantity: '4',
          unit: 'cucharadas',
        },
        {
          name: 'Palillo',
          quantity: '1',
          unit: 'cucharada',
        },
        {
          name: 'Mondongo de res',
          quantity: '500',
          unit: 'gramos',
        },
        {
          name: 'Patas de res',
          quantity: '500',
          unit: 'gramos',
        },
        {
          name: 'Clado de la cocción de las patas y el mondongo',
          quantity: '6',
          unit: 'tazas',
        },
        {
          name: 'Papa',
          quantity: '2',
          unit: 'kilos',
        },
        {
          name: 'Alberja desgranada',
          quantity: '1/2',
          unit: 'taza',
        },
        {
          name: 'Hierba buena picada',
          quantity: '1/2',
          unit: 'taza',
        },
        {
          name: 'Sal, pimienta y comino',
          quantity: 'al gusto',
          unit: '',
        },
        {
          name: 'Arroz cocido',
          quantity: '4',
          unit: 'tazas',
        },
      ],
      portions: 5,
      lat: -16.4099426,
      lng: -71.5443781,
    },
  ];

  return res.status(200).json(recipesList);
};
