function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) return;

  return length * width;
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) return;

  return (base * height) / 2;
}

function calculateCircleArea(radius) {
  if (radius < 0) return;

  return Math.PI * (radius * radius);
}
