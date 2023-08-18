// Reusable Function --> Reduce the duplicate code

// 1. Calculation of Triangle Area

function calculateTriangleArea() {
  const triangleBase = getInputValue('triangle-base');
  const triangleHeight = getInputValue('triangle-height');
  const triangleArea = 0.5 * triangleBase * triangleHeight;
  if (isNaN(triangleBase) || isNaN(triangleHeight)) {
    alert('Please provide number as input');
    return;
  }
  //   Show Triangle Area

  setElementInnerText('triangle-area', triangleArea);
}

// 2. Calculation of Rectangle Area

// Calculate Rectangle Area

function calculateRectangleArea() {
  const rectangleWidth = getInputValue('rectangle-width');
  const rectangleLength = getInputValue('rectangle-length');
  const rectangleArea = rectangleWidth * rectangleLength;
  if (isNaN(rectangleWidth) || isNaN(rectangleLength)) {
    alert('Please provide number as input');
    return;
  }

  // Show Rectangle Area

  setElementInnerText('rectangle-area', rectangleArea);
}

// 3. Calculation of Parallelogram Area
function calculateParallelogramArea() {
  const parallelogramBase = getInputValue('parallelogram-base');
  const parallelogramHeight = getInputValue('parallelogram-height');
  const parallelogramArea = parallelogramBase * parallelogramHeight;

  if (isNaN(parallelogramBase) || isNaN(parallelogramHeight)) {
    alert('Please provide number as input');
    return;
  }

  //   Show Rectangle Area

  setElementInnerText('parallelogram-area', parallelogramArea);
}

// 4.  Calculation of Rhombus Area
function calculateRhombusArea() {
  const firstDiagonal = getInputValue('first-diagonal');
  const secondDiagonal = getInputValue('second-diagonal');
  const rhombusArea = 0.5 * firstDiagonal * secondDiagonal;
  if (isNaN(firstDiagonal) || isNaN(secondDiagonal)) {
    alert('Please provide number as input');
    return;
  }

  //   Show Rhombus Area

  setElementInnerText('rhombus-area', rhombusArea);
}

// 5.  Calculation of Pentagon Area

function calculatePentagonArea() {
  const firstValue = getInputValue('pentagon-first');
  const secondValue = getInputValue('pentagon-second');
  const pentagonArea = 0.5 * firstValue * secondValue;
  if (isNaN(firstValue) || isNaN(secondValue)) {
    alert('Please provide number as input');
    return;
  }

  //   Show Pentagon Area

  setElementInnerText('pentagon-area', pentagonArea);
}

// 6.  Calculation of Ellipse Area

function calculateEllipseArea() {
  const major = getInputValue('ellipse-major-radius');
  const minor = getInputValue('ellipse-minor-radius');
  const ellipseArea = 3.14 * major * minor;
  const ellipseAreaToDecimal = ellipseArea.toFixed(2);
  // Show Ellipse Area

  setElementInnerText('ellipse-area', ellipseAreaToDecimal);
}

// reusable get input value function

function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputFieldText = inputField.value;
  const fieldValue = parseFloat(inputFieldText);
  return fieldValue;
}

// reusable set inner text function

function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

// Data Validation
/*
1. Set the proper type of input field
2. Check Type using type of
3. Using isNan Function
*/
