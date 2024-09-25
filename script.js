function fetchWebsite() {
  const urlInput = document.getElementById("urlInput");
  const websiteFrame = document.getElementById("websiteFrame");

  const enteredUrl = urlInput.value;

  // Validate input (optional, add checks for valid URL format)
  if (!enteredUrl) {
    alert("Please enter a valid URL.");
    return;
  }

  websiteFrame.src = enteredUrl;
}
