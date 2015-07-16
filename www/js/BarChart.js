
function CrearBarChart(data,objPeticion,ArrayORdenGEO)
{
    //Gráfico de barras
    $("#GraficaBarras").empty();
    var obser = data.observation;
    var datos = [];
    var leyenda = [];
    var z = 0;
    for(var i=0; i<objPeticion.RepresentacionGeonom.length;i++){
        var datgeo = []
        for(var j=0; j<objPeticion.RepresentacionTime.length;j++){
            datgeo.push(parseInt(obser[z]));
            console.log(obser[z]);
            z=z+3;
        }
        datos.push(datgeo);
        var index = objPeticion.RepresentacionGeo.indexOf(ArrayORdenGEO[i]);
        leyenda.push({label:objPeticion.RepresentacionGeonom[index]});
    }

    console.log(datos);

    // Can specify a custom tick Array.
    // Ticks should match up one for each y value (category) in the series.
    var ticks = objPeticion.RepresentacionTime;

    var plot1 = $.jqplot('GraficaBarras', datos , {

        // The "seriesDefaults" option is an options object that will
        // be applied to all series in the chart.
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            rendererOptions: {fillToZero: true}
        },
        // Custom labels for the series are specified with the "label"
        // option on the series option.  Here a series option object
        // is specified for each series.
        series:leyenda,
        // Show the legend and put it outside the grid, but inside the
        // plot container, shrinking the grid to accomodate the legend.
        // A value of "outside" would not shrink the grid and allow
        // the legend to overflow the container.
        legend: {
            show: true,
            placement: 'outsideGrid'
        },
        axes: {
            // Use a category axis on the x axis and use our custom ticks.
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: ticks
            },
            // Pad the y axis just a little so bars can get close to, but
            // not touch, the grid boundaries.  1.2 is the default padding.
            yaxis: {
                pad: 1.05,
                tickOptions: {formatString: '$%d'}
            }
        }
    });

    //Gráfico de Líneas
    $("#GraficaLineas").empty();
    $.jqplot ('GraficaLineas', datos,{
        series:leyenda,
        legend: {
            show: true,
            placement: 'outsideGrid'
        },
        axes: {
            // Use a category axis on the x axis and use our custom ticks.
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: ticks
            },
            // Pad the y axis just a little so bars can get close to, but
            // not touch, the grid boundaries.  1.2 is the default padding.
            yaxis: {
                pad: 1.05,
                tickOptions: {formatString: '$%d'}
            }
        }
    });

}

function CrearLineChart(/*data,objPeticion*/){

}