/**
 * Created by Alejandro on 20/03/2015.
 */
function CrearObjetoPeticion(){
    var ObjPeticion ={
        Indicador: $("#SelectorDatos").val(),
        GranularidadGeo:$("#SelectorGranularidadGeo").val(),
        RepresentacionGeo:$("#SelectRepresentacionGeo").val(),
        GranularidadTime:$("#SelectorGranularidadTime").val(),
        RepresentacionTime:$("#SelectRepresentacionTime").val()
    };

    return ObjPeticion;
}
//http://www.gobiernodecanarias.org/istac/indicators/api/indicators/v1.0/indicators/POBLACION_HOMBRES/data?representation=GEOGRAPHICAL%5BES704%7CES705%5D%3ATIME%5B2011%5D&api_key=special-key

////añadimos Representacion a URL de consulta de datos.
function URLRepresentacion(objPeticion){
        //Buscando una formas más elegante de hacerlo.
        var RepresentacionGEO;
        var RepresentacionTIME;
        var URLRep = '';
        if(objPeticion.RepresentacionTime == null) {
            RepresentacionGEO = objPeticion.RepresentacionGeo;
            URLRep += 'representation=GEOGRAPHICAL%5B';
            for(var i = 0; i<RepresentacionGEO.length;i++){
                if(i+1 != RepresentacionGEO.length)
                    URLRep += RepresentacionGEO[i] + '%7C';
                else
                    URLRep += RepresentacionGEO[i];
            }
            URLRep += '%5D';

        }
        else if(objPeticion.RepresentacionGeo == null) {
            RepresentacionTIME = objPeticion.RepresentacionTime;
            URLRep += 'representation=TIME%5B';
            for(var i = 0; i<RepresentacionTIME.length;i++){
                if(i+1 != RepresentacionTIME.length )
                    URLRep += RepresentacionTIME[i] + '%7C';
                else
                    URLRep += RepresentacionTIME[i];
            }
            URLRep += '%5D';
        }
        else {
            RepresentacionTIME = objPeticion.RepresentacionTime;
            RepresentacionGEO = objPeticion.RepresentacionGeo;
            URLRep += 'representation=GEOGRAPHICAL%5B';

            for(var i = 0; i<RepresentacionGEO.length;i++){
                if(i+1 != RepresentacionGEO.length)
                    URLRep += RepresentacionGEO[i] + '%7C';
                else
                    URLRep += RepresentacionGEO[i];
            }
            URLRep += '%5D%3ATIME%5B';

            for(var i = 0; i<RepresentacionTIME.length;i++){
                if(i+1 != RepresentacionTIME.length )
                    URLRep += RepresentacionTIME[i] + '%7C';
                else
                    URLRep += RepresentacionTIME[i];
            }
            URLRep += '%5D';
        }
       return URLRep;


}

//http://www.gobiernodecanarias.org/istac/indicators/api/indicators/v1.0/indicators/POBLACION_HOMBRES/data?representation=TIME%5B2000%5D&granularity=TIME%5BYEARLY%7CMONTHLY%5D%3AGEOGRAPHICAL%5BISLANDS%5D&api_key=special-key


function URLGranularidad(objPeticion){

        //Buscando una formas más elegante de hacerlo.
    var GranularidadGeo;
    var GranularidadTime;
    var URLRep = '';

    if(objPeticion.GranularidadTime == null) {
        GranularidadGeo = objPeticion.GranularidadGeo;
        URLRep += 'granularity==GEOGRAPHICAL%5B';
        for(var i = 0; i<GranularidadGeo.length;i++){
            if(i+1 != GranularidadGeo.length)
                URLRep += GranularidadGeo[i] + '%7C';
            else
                URLRep += GranularidadGeo[i];
        }
        URLRep += '%5D';

    }
    else if(objPeticion.GranularidadGeo == null) {
        GranularidadTime = objPeticion.GranularidadTime;
        URLRep += 'granularity=TIME%5B';
        for(var i = 0; i<GranularidadTime.length;i++){
            if(i+1 != GranularidadTime.length )
                URLRep += GranularidadTime[i] + '%7C';
            else
                URLRep += GranularidadTime[i];
        }
        URLRep += '%5D';
    }
    else {
        GranularidadTime = objPeticion.GranularidadTime;
        GranularidadGeo = objPeticion.GranularidadGeo;
        URLRep += 'granularity==GEOGRAPHICAL%5B';

        for(var i = 0; i<GranularidadGeo.length;i++){
            if(i+1 != GranularidadGeo.length)
                URLRep += GranularidadGeo[i] + '%7C';
            else
                URLRep += GranularidadGeo[i];
        }
        URLRep += '%5D%3ATIME%5B';

        for(var i = 0; i<GranularidadTime.length;i++){
            if(i+1 != GranularidadTime.length )
                URLRep += GranularidadTime[i] + '%7C';
            else
                URLRep += GranularidadTime[i];
        }
        URLRep += '%5D';
    }
    return URLRep;


}