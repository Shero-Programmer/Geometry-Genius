// Reusable Function --> Reduce the duplicate code

function calculateTriangleArea() {
  const triangleBase = getInputValue('triangle-base');
  const triangleHeight = getInputValue('triangle-height');
  const triangleArea = 0.5 * triangleBase * triangleHeight;

  //   Show Triangle Area

  setElementInnerText('triangle-area', triangleArea);
}

// Calculate Ellipse Area

function calculateEllipseArea() {
  const major = getInputValue('ellipse-major-radius');
  const minor = getInputValue('ellipse-minor-radius');
  const ellipseArea = 3.14 * major * minor;
  // Show Ellipse Area

  setElementInnerText('ellipse-area', ellipseArea);
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
