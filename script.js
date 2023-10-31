function calcular() {
    let numero = document.getElementById("numero_celulas").value;
    let diametro = document.getElementById("numero_diametro").value;
    let Comprimento = document.getElementById("numero_comprimento").value;

    area_colmo = 3.14159265359 * Math.pow(diametro / 2, 2);

    let vol_circulo = numero * 100 * area_colmo;

    let quant_colmo = vol_circulo * (Comprimento * 10000);

    console.log(area_colmo);
    console.log(vol_circulo);
    console.log(quant_colmo);

    document.getElementById("resultado").innerHTML = quant_colmo;
  }