const products = [
    { id: "1", name: "Aero Pro Drive", price: 35000, category: "Babolat", image: "/Imagenes/Aeroprodrive.webp", descripcion: "Combatividad, resistencia, fortaleza mental... ¡eres como Rafa! Es hora de desafiar a tus oponentes más duros con esta Pure Aero, que con su nombre y colores acompañará tu dominio del juego a través de tu liftado y tu potencia."},
    { id: "2", name: "Extreme MP", price: 26300, category: "Head", image: "/Imagenes/ExtremeMP.webp", descripcion: "Genera un efecto extremo y confunde a tus rivales con la EXTREME MP Recomendada por Matteo Berrettini, esta raqueta se ha renovado con la innovadora tecnología Auxetic para una sensación de impacto extraordinariamente auténtica. Es ideal para jugadores de rendimiento que buscan efecto y potencia. Además de un corazón que ayuda a generar un efecto superior, la EXTREME MP incorpora unos exclusivos spin grommets que permiten un mayor movimiento de las cuerdas y un potente efecto trampolín al recibir el impacto de la pelota. Su nivel extremo de rendimiento viene acompañado de un diseño fresco y atrevido." },
    { id: "3", name: "Pro Staff v13", price: 25000, category: "Wilson", image: "/Imagenes/ProStaffV13.webp", descripcion: "Destacado por un diseño que rinde homenaje a la histórica serie Pro Staff, el Pro Staff 97 v13 presenta una nueva construcción Braid 45 que aumenta la precisión al ajustar el ángulo de las fibras trenzadas dobles para una mejor sensación y estabilidad. Dos mejoras adicionales a esta raqueta incluyen una base de encordado más densa que mejora la consistencia en cada golpe y una nueva tapa final que se usa en las otras líneas de raquetas de rendimiento de Wilson para mejorar la comodidad y la ergonomía. Quizás lo más atractivo para los fanáticos de la franquicia Pro Staff es la presencia de rayas rojas y amarillas a lo largo de la garganta, una oda a los diseños anteriores de esta icónica serie a lo largo de los años. El diseño también presenta un tejido único de fibra de carbono expuesta con acabado brillante sobre el marco para un toque elegante." },
    { id: "4", name: "Speed 2022", price: 30000, category: "Head", image: "/Imagenes/Speed2022.webp", descripcion: "Diseñada para la velocidad y para un swing rápido, ahora, la SPEED PRO promete un tacto sensacional aún mayor gracias a la introducción de la nueva estructura en material Auxetic. Esta raqueta, que forma parte de la serie SPEED, está diseñada para jugadores de torneos de nivel avanzado que buscan un control óptimo en sus juegos rápidos. La nueva versión incorpora un nuevo diseño elegante y asimétrico con un acabado mate y brillo, y detalles cromados." },
    { id: "5", name: "Graphene 360 Plus", price: 28000, category: "Head", image: "/Imagenes/Graphene.webp", descripcion: "Head añade otro capítulo a la serie de las raquetas más versátiles. Es la Graphene 360+ Radical MP, y su especialidad son la precisión y las sensaciones. Este 2021, esta raqueta no solo es un poco más pesada y más estable, sino que también trae una rigidez más baja, ideal para no dañar el brazo. Al igual que las versiones anteriores de la Radical MP, se trata de una raqueta con potencia controlable y estabilidad, ideal para jugadores intermedios y de nivel avanzado. La tecnología Graphene 360+ combina la estabilidad y la potencia fácil de la tecnología Graphene 360 con fibras SpiralFibers en la parte baja de la cabeza para mejorar las sensaciones.  Al igual que generaciones anteriores, esta raqueta cuenta con la tecnología Control Pattern, con patrón de encordado 16×19 más denso para encontrar el mejor equilibrio entre control y potencia, y para ofrecerte un punto dulce más amplio. Desde el fondo de la pista, esta raqueta no solo te  trae de nuevo esa precisión y sensaciones clásicas de la línea Radical, sino que te brinda también potencia y efectos para colocar a tu oponente a la defensiva" },
    { id: "6", name: "Pure Drive", price: 20500, category: "Babolat", image: "/Imagenes/PureDrive.webp", descripcion:"Babolat lanzó la Pure Drive en 1994 y rápidamente se estableció como la referencia de potencia. Hemos ido innovando y mejorando con cada uno de los siguiente modelos para satisfacer las exigencias del juego. Por eso no nos sorprende que la Pure Drive sea una de las raquetas más populares y versátiles del mundo. La 10ª generación de la Pure Drive lleva tu estilo de juego al siguiente nivel con una potencia explosiva para terminar puntos y una mayor sensación." },
    { id: "7", name: "Boost Drive", price: 21000, category: "Babolat", image: "/Imagenes/BoostDrive.webp", descripcion: "No dejes el tenis solo porque no tengas el brazo de Rafa Lo que necesitas es una raqueta manejable que te ayude a generar una potencia extra para impulsar tu estilo de juego. Con la raqueta Boost Drive, eso es precisamente lo que hemos diseñado. Una raqueta de fibra de carbono capaz de aportar la potencia adicional que necesitas." },
    { id: "8", name: "Burn 100 V5", price: 36000, category: "Wilson", image: "/Imagenes/Burn100.webp", descripcion: "Para los jugadores a los que les encanta golpear desde la línea de fondo, Burn 100 de Wilson trae el calor. Esta raqueta de tenis, el único marco Burn en la línea con un patrón de encordado tradicional de 16 x 19, tiene un gran impacto. Con una composición de fibra de carbono con mayor rigidez del cuadro, el cuadro liviano libera mucho ritmo al contacto. El V5 está resaltado por un color naranja quemado que seguramente resaltará en la cancha." },
  ];

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === id)

            if (product) {
                resolve(product)
            } else {
                reject("no existe el producto")
            }
        }, 1000);
    })
}

export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosFiltrados = category
            ? products.filter((product) => product.category === category)
            : products;
    
          resolve(productosFiltrados);
        }, 1000);
    })
}
 