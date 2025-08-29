function showTip() {
  const tips = [
    "Use soil moisture sensors to avoid overwatering.",
    "Drip irrigation saves up to 50% water compared to flood irrigation.",
    "Water early in the morning or late in the evening to minimize evaporation.",
    "Regularly check for leaks in irrigation pipes.",
    "Mulching helps retain soil moisture and reduces water needs."
  ];
  document.getElementById('tip-content').innerText =
    tips[Math.floor(Math.random() * tips.length)];
}