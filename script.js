function goToPreview() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    alert("Please enter a name");
    return;
  }
  window.location.href = `preview.html?name=${encodeURIComponent(name)}`;
}
