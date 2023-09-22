const circleRadiusScaler = document.getElementsByClassName('circleRadiusScaler');
const innerCircle = document.getElementById('innerCircle');
const outerCircle = document.getElementById('outerCircle');

function setRadius(innerRadius, outerRadius) {
    const DEFAULT_THICKNESS = 3;
    let thickness = outerRadius - innerRadius;

    if (innerRadius > outerRadius) {
        innerCircle.setAttribute("r", innerRadius);
        outerCircle.setAttribute("r", outerRadius+3);
    }
}

// To apply EventListener to all circle radius scaler
let radiusScalerInput = [...circleRadiusScaler].map((input) => input.addEventListener("input", () => {
    // To get all value with same class
    const DEFAULT_THICKNESS = 3;
    let radiusScalerInputValue = [...circleRadiusScaler].map((input) => input.value)
    console.log({
        "inner radius" : radiusScalerInputValue[0],
        "outer radius" : radiusScalerInputValue[1]
    });

    setRadius(radiusScalerInputValue[0], radiusScalerInputValue[1]);
}));

// radiusScaler.addEventListener("input", () => {
//     radiusScalerLabel.innerHTML = "Radius : " + radiusScaler.value;
//     circle.setAttribute("r", radiusScaler.value);
// });

