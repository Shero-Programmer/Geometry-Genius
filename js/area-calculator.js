function calculateTriangleArea() {
  // Get Triangle base value
  const baseField = document.getElementById('triangle-base');
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  //   Get Triangle height

  const heightField = document.getElementById('triangle-height');
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  const triangleArea = 0.5 * base * height;

  //   Show Triangle Area

  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = triangleArea;
}

function calculateRectangleArea() {
  // Get the width Value

  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);

  //   Get the Length value
  const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);

  //   Calculate the Rectangle area

  const rectangleArea = width * length;

  //   Show the Rectangle area
  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText = rectangleArea;
}

function calculateParallelogramArea() {
  // Get the Parallelogram base

  const parallelogramBaseField = document.getElementById('parallelogram-base');
  const parallelogramBaseTextValue = parallelogramBaseField.value;
  const parallelogramBase = parseFloat(parallelogramBaseTextValue);

  // Get the Parallelogram height

  const parallelogramHeightField = document.getElementById(
    'parallelogram-height'
  );
  const parallelogramHeightTextValue = parallelogramHeightField.value;
  const parallelogramHeight = parseFloat(parallelogramHeightTextValue);

  // Calculate Parallelogram Area

  const parallelogramArea = parallelogramBase * parallelogramHeight;

  // Show the Parallelogram Area

  const parallelogramAreaSpan = document.getElementById('parallelogram-area');
  parallelogramAreaSpan.innerText = parallelogramArea;
}
