import {Viaje} from "../models/Viaje.js"
import {Testimonial} from '../models/Testimoniales.js'
const paginaInicio = async (req, res) => { //Req - lo que enviamos : Res lo que express nos responde
    
    const promiseDB = [
        Viaje.findAll({limit:3}),
        Testimonial.findAll({limit:3})
    ];

    //Consultar 3 viajes del modelo Viaje
    try {
        const resultado = await Promise.all( promiseDB );

        res.render('Inicio',{
            pagina: "Inicio",
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        }) 
    } catch (error) {
        console.log(error);
    }
    
}

const paginaNosotros = (req, res) => { //Req - lo que enviamos : Res lo que express nos responde
    res.render('nosotros',{
        pagina: "Nosotros"
    });
}

const paginaViajes = async (req, res) => { //Req - lo que enviamos : Res lo que express nos responde
    const viajes = await Viaje.findAll();
    res.render('viajes',{
        pagina: "Próximos viajes",
        viajes
    });
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const {slug} = req.params;

    try {
        const viaje = await Viaje.findOne({ where : {slug}})
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimoniales = async (req, res) => { //Req - lo que enviamos : Res lo que express nos responde
    
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: "Testimoniales",
            testimoniales
        });

    } catch (error) {
       console.log(error); 
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}