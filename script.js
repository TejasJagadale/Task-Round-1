function toggleDropdown(box, dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const allDropdowns = document.querySelectorAll('.dropdowns');
  const allBoxes = document.querySelectorAll('.offer-box');

  // Close all dropdowns
  allDropdowns.forEach(d => d.classList.remove('active'));
  allBoxes.forEach(b => b.classList.remove('selected'));

  // Open the selected dropdown
  dropdown.classList.toggle('active');
  box.classList.toggle('selected');
}
