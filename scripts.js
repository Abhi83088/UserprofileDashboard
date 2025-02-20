function uploadProfilePicture() {
  const fileInput = document.getElementById("profile-pic-input");
  const profilePicture = document.getElementById("profile-picture");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePicture.src = e.target.result; // Update the profile picture
      addRecentActivity("Uploaded a new profile picture");
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
}

function updateProfile() {
  // Get the form values
  const name = document.getElementById("edit-name").value;
  const email = document.getElementById("edit-email").value;
  const phone = document.getElementById("edit-phone").value;

  // Update the profile details
  document.getElementById("user-name").textContent = name;
  document.getElementById("user-email").textContent = email;
  document.getElementById("user-phone").textContent = phone;

  // Show a success message
  alert("Profile updated successfully!");

  // Add the update action to the recent activity
  addRecentActivity("Updated profile details");
}

function addRecentActivity(activity) {
  const recentActivitySection = document.querySelector(".recent-activity-card-container");
  const currentTime = new Date().toLocaleTimeString(); // Get the current time in HH:MM:SS format

  // Create a new activity card
  const activityCard = document.createElement("div");
  activityCard.className = "recent-activity-card card me-3 mb-3";
  activityCard.style.width = "18rem";
  activityCard.innerHTML = `
    <div class="card-body">
      <p>${activity} at ${currentTime}</p>
    </div>
  `;

  // Append the new card to the recent activity section
  recentActivitySection.appendChild(activityCard);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleNotification() {
  alert("Notifications setting changed.");
}
