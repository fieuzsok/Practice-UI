const main = function () {
  var distance = Number(document.getElementById("txtDistance").value);
  var waitingTime = Number(document.getElementById("txtWaiting").value);

  var carType = getUberType();

  if (!carType) {
    alert("Chon xe");
    return;
  } else {
    var finalPrice = calcTaxiBill(carType, distance, waitingTime);
  }
  console.log(finalPrice);

  //show in divThanhTien
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML =
    finalPrice.toLocaleString() + " VND";
  return finalPrice;
};

const getUberType = function () {
  var carTypesRadio = document.getElementsByName("selector");
  var carType;

  carTypesRadio.forEach((type) => {
    if (type.checked) {
      carType = type.id;
    }
  });
  return carType;
};

const calcTaxiBill = function (carType, distance, waitingTime) {
  const uberXTimeWaitUnitPrice = 2000;
  const uberSUXTimeWaitUnitPrice = 3000;
  const uberBlackTimeWaitUnitPrice = 4000;
  var sumPrice = 0;

  switch (carType) {
    case "uberX":
      sumPrice = calcPrice(
        8000,
        12000,
        10000,
        distance,
        waitingTime,
        uberXTimeWaitUnitPrice
      );

      break;
    case "uberSUV":
      sumPrice = calcPrice(
        9000,
        14000,
        12000,
        distance,
        waitingTime,
        uberSUXTimeWaitUnitPrice
      );
      break;
    case "uberBlack":
      sumPrice = calcPrice(
        10000,
        16000,
        14000,
        distance,
        waitingTime,
        uberBlackTimeWaitUnitPrice
      );
      break;
  }
  return sumPrice;
};

const calcPrice = function (
  defaultPrice,
  lessThan20Km,
  moreThan21Km,
  distance,
  waitingTime,
  waitingUnitPrice
) {
  var sumPrice = defaultPrice;
  if (distance > 20) {
    sumPrice =
      defaultPrice + lessThan20Km * 19 + moreThan21Km * (distance - 20);
  } else if (distance > 1) {
    sumPrice = defaultPrice + lessThan20Km * (distance - 1);
  }
  return sumPrice + waitingTime * waitingUnitPrice;
};
