async function gallery() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos"); // <- sans <>
    const photos = await response.json();

    const gallery = document.getElementById("gallery");
    const fragment = document.createDocumentFragment();

    photos.slice(0, 50).forEach((photo) => {
      const photoDiv = document.createElement("div");
      photoDiv.className = "photo";

      const img = document.createElement("img");
      img.src = photo.thumbnailUrl;
      img.alt = photo.title;

      const title = document.createElement("div");
      title.className = "photo-title";
      title.textContent = photo.title;

      photoDiv.appendChild(img);
      photoDiv.appendChild(title);
      fragment.appendChild(photoDiv);
    });

    gallery.appendChild(fragment);
  } catch (error) {
    console.error("Failed to load photos:", error);
  }
}

// API ne fonctionne plus

window.onload = gallery;
