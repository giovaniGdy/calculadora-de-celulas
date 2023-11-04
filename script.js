function calcular() {
  let numero = Math.abs(document.getElementById("numero_celulas").value);
  let diametro = Math.abs(document.getElementById("numero_diametro").value);
  let Comprimento = Math.abs(
    document.getElementById("numero_comprimento").value
  );
  let n_entrenos = Math.abs(document.getElementById("numero_entreno").value);
  let n_perfilho = Math.abs(document.getElementById("numero_perfilho").value);
  let valor_area = Math.abs(document.getElementById("numero_area").value);

  area_colmo = 3.14159265359 * Math.pow(diametro / 2, 2);

  if (!numero) {
    alert("Número de células não informado!");
  }

  if (!diametro) {
    alert("Diâmetro não informado!");
  }

  if (numero > 0 && diametro > 0) {
    let vol_circulo = Math.floor(numero * 100 * area_colmo);
    let vol_circulo_formated = vol_circulo.toLocaleString("brl");

    document.getElementById("resultado_colmo").innerHTML =
      "Quant. em um colmo de " +
      parseFloat(area_colmo).toFixed(3) +
      " cm<sup>2</sup> = " +
      vol_circulo_formated;

    document.getElementById("resultado").innerHTML = vol_circulo_formated;

    if (Comprimento > 0) {
      var quant_colmo = vol_circulo * (Comprimento * 10000);

      let quant_colmo_formated = quant_colmo.toLocaleString("brl");
      document.getElementById("resultado_comprimento_colmo").innerHTML =
        "Quant. em um entrenó de " +
        Comprimento +
        " cm de altura = " +
        quant_colmo_formated;

      document.getElementById("resultado").innerHTML = quant_colmo_formated;

      if (n_entrenos > 0) {
        var quant_n_colmo = quant_colmo * n_entrenos;

        let quant_n_colmo_formated = quant_n_colmo.toLocaleString("brl");
        document.getElementById("resultado_numero_entreno").innerHTML =
          "Quant. em um colmo com " +
          n_entrenos +
          " entrenós = " +
          quant_n_colmo_formated;

        document.getElementById("resultado").innerHTML = quant_n_colmo_formated;

        if (n_perfilho > 0) {
          var quant_n_perfilho = quant_n_colmo * n_perfilho;

          let quant_n_perfilho_formated =
            quant_n_perfilho.toLocaleString("brl");
          document.getElementById("resultado_numero_perfilho").innerHTML =
            "Quant. em uma planta com " +
            n_perfilho +
            " perfilhos = " +
            quant_n_perfilho_formated;

          document.getElementById("resultado").innerHTML =
            quant_n_perfilho_formated;

          if (valor_area > 0) {
            var quant_area =
              Math.floor(valor_area / 1.5 / 0.3) * quant_n_perfilho;

            let quant_area_formated = quant_area.toLocaleString("brl");
            document.getElementById("resultado_area").innerHTML =
              "Quant. em uma área de " +
              valor_area +
              " m<sup>2</sup> = " +
              quant_area_formated;

            document.getElementById("resultado").innerHTML =
              quant_area_formated;
          }
        }
      }
    }
  }
}
