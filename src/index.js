const reminder = 
[
    "Prepararte es la mejor estrategia de vida. Atte: @jdaroesti",
    "El camino más largo empieza con el primer paso. Atte: @jdaroesti",
    "Practica, practica, practica. Atte: @jdaroesti",
    "No tengas miedo a equivocarte. Atte: @jdaroesti",
    "Experimentar, equivocarse, aprender e iterar es la fórmula para encontrar el éxito. Atte: @jdaroesti",
    "El software es el invento más importante en la historia de la humanidad. Atte: @jdaroesti",
    "No te frustres cuando tengas un bug. Atte: @jdaroesti",
    "Cuando tu software no funcione no te preguntes por qué no funciona; mejor pregúntate por qué funciona así. Atte: @jdaroesti",
    "Sé creativo. El desarrollo de software es una de las labores más creativas que puede realizar un humano. Atte: @jdaroesti",
    "Crea una red. Tus compañeros serán tus aliados más importantes a lo largo de tu vida profesional. Atte: @jdaroesti",
    "Creemos en ti Atte: @maldeadora",
    "Cuando el camino se pone duro los duros permanecen en el camino Atte: @dmiramon",
    "Tus hábitos definen tu futuro. Atte: @DemianArenas",
    "Lo único imposible es aquello que no intentas. Atte: @SoyAnaLima",
    "Que tu miedo no sea el límite. Atte: @Tifis",
    "Recuerda que formas parte de una gran comunidad. Atte: @erkluna",
    "Nunca pares de aprender X Nunca pares de viajar. Atte: @viajeromillero",
    "No hay límites para ti. Atte: @isisconvelo",
    "Invierte en educación y cuida tus finanzas. Atte: @Yinipilla",
    "Nunca pares de perseguir tus sueños. Atte: @calapp",
    "Estudia, aprende y aplica ¡Estas listo para crecer!. Atte: Jorge Uribe Team Growth",
    "Platzi cambio mi vida, tu vida puede cambiar también. Atte: Eduardo",
    "Si no estás creando, estás destruyendo. Atte: Cesar Fajardo.",
    "El buen diseño consiste en convertir sueños en realidad. Atte: Team Diseño",
    "¿Dónde estabas hace 5 años? ¿Dónde en 5 años? Somos afortunados de vivir y crecer en esta epoca ¡Aprovechalo!. Atte: @freddier",
    "Tu cuerpo es la mejor máquina dale mantenimiento!. Atte: butiqlive.com ",
    "Nunca pares de perseguir tus sueños. Atte: Juan Rojas",
    "Arriesgate a aprender todo lo que sueñas. Atte: Paula",
    "Aprender es dificíl, pero vale la pena. Nunca pares de aprender. Atte: David Behar",
    "Les recomiendo el curso de Git y Github profesional es una maravilla <3. Atte: @Tonalli",
    "¡El trabajo duro supera al talento natural!. Atte: @Leonidad Esteban",
    "Nunca paren de aprender, tus sueños se cumplen si sigues esta filosofía, es un camino dificíl pero lo vale. PD: Platzi se convierte en tu nueva familia. Atte: @mrdarkjeda.",
    "Nunca pares de aprender  nunca....",
    "Muchas gracias por preocuparte por el futuro de toda Latam. Nunca pares de crear. Atte: @WilliamVelazquez",
    "Siempre ser constante y nunca dejar que los pretextos te quiten el tiempo. Atte: @andrea_mendi"
];

const randomReminder = () => {
    const reminders = reminder [Math.floor(Math.random() * reminder.length)];
    console.log(reminders);
};

module.exports = { randomReminder };
