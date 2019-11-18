

export class NotaMedia{
    filosofia:any={nombre:'filosofia', notas:[]};
    lenguaje:any={nombre:'lenguaje', notas:[]};
    matematicas:any={nombre:'matematicas', notas:[]};
    biologia:any={nombre:'biologia', notas:[]};
    historia:any={nombre:'historia', notas:[]};
    tecnologia:any={nombre:'tecnologia', notas:[]};

    constructor(public examen:string, public nota:number){

    }

    cargaMedia(){
        if(this.examen === this.filosofia.nombre){
            this.filosofia.notas.push(this.nota)
        }else if(this.examen === this.lenguaje.nombre){
            this.filosofia.notas.push(this.nota)
        }else if(this.examen === this.matematicas.nombre){
            this.filosofia.notas.push(this.nota)
        }else if(this.examen === this.biologia.nombre){
            this.filosofia.notas.push(this.nota)
        }else if(this.examen === this.historia.nombre){
            this.filosofia.notas.push(this.nota)
        }else if(this.examen === this.tecnologia.nombre){
            this.filosofia.notas.push(this.nota)
        } 
    }
    muestraMedia(){
        let totalFilosofia:number=0;
        for(let i:number= 0 ; i < this.filosofia.notas.length; i++){
            totalFilosofia += this.filosofia.notas[i];
        }
        let totalMatematicas:number=0;
        for(let i:number= 0 ; i < this.matematicas.notas.length; i++){
            totalMatematicas += this.matematicas.notas[i];
        }
        let totalHistoria:number=0;
        for(let i:number= 0 ; i < this.historia.notas.length; i++){
            totalHistoria += this.historia.notas[i];
        }
        let totalBiologia:number=0;
        for(let i:number= 0 ; i < this.biologia.notas.length; i++){
            totalBiologia += this.biologia.notas[i];
        }
        let totalTecnologia:number=0;
        for(let i:number= 0 ; i < this.tecnologia.notas.length; i++){
            totalTecnologia += this.tecnologia.notas[i];
        }
        let totalLenguaje:number=0;
        for(let i:number= 0 ; i < this.lenguaje.notas.length; i++){
            totalLenguaje += this.lenguaje.notas[i];
        }
        let mediaFilosofia:number = totalFilosofia / this.filosofia.notas.length
        let mediaMatematicas:number = totalMatematicas / this.matematicas.notas.length
        let mediaBiologia:number = totalBiologia / this.biologia.notas.length
        let mediaTecnologia:number = totalTecnologia / this.tecnologia.notas.length
        let mediaHistoria:number = totalHistoria / this.historia.notas.length
        let mediaLenguaje:number = totalLenguaje / this.lenguaje.notas.length
        return(`La nota media de Filosofia es: ${mediaFilosofia}. La nota media de Matematicas es: ${mediaMatematicas}. La nota media de Biologia es: ${mediaBiologia}. La nota media de Tecnologia es: ${mediaTecnologia}. La nota media de Historia es: ${mediaHistoria}.La nota media de Lenguaje es: ${mediaLenguaje}.`)
    }
}