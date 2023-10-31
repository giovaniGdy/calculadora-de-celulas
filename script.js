function calcular() {
  let numero = document.getElementById("numero_celulas").value;
  let diametro = document.getElementById("numero_diametro").value;
  let Comprimento = document.getElementById("numero_comprimento").value;

  area_colmo = 3.14159265359 * Math.pow(diametro / 2, 2);

  if(!numero) {
    alert("Número de células não informado!")
  }
  
  if (!diametro) {
    alert("Diâmetro não informado!")
  }

  if (numero > 0 && diametro > 0) {
    let vol_circulo = numero * 100 * area_colmo;
    let vol_circulo_formated = vol_circulo.toLocaleString('brl')

    document.getElementById("resultado_colmo").innerHTML =
      "Quant. em um colmo de " + parseFloat(area_colmo).toFixed(3) + " cm<sup>2</sup> = " + vol_circulo_formated;

    if (!Comprimento) {
      document.getElementById("resultado").innerHTML = vol_circulo_formated;
    } else {
      let quant_colmo = vol_circulo * (Comprimento * 10000);
      
      let quant_colmo_formated = quant_colmo.toLocaleString('brl')
      document.getElementById("resultado_comprimento_colmo").innerHTML =
        "Quant. em um colmo de " +
        Comprimento +
        "cm de altura = " +
        quant_colmo_formated;

      document.getElementById("resultado").innerHTML = quant_colmo_formated;
    }
  }
}
