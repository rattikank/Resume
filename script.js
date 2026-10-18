console.log("Portfolio website loaded successfully!");
const resumeBtn = document.getElementById("resumeBtn");

const resumeModal = document.getElementById("resumeModal");

const closeResume = document.getElementById("closeResume");


resumeBtn.addEventListener("click", () => {

    resumeModal.classList.add("active");

});


closeResume.addEventListener("click", () => {

    resumeModal.classList.remove("active");

});


resumeModal.addEventListener("click", (event) => {

    if (event.target === resumeModal) {

        resumeModal.classList.remove("active");

    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        resumeModal.classList.remove("active");

    }

});


function openProject(projectId) {
    const modal = document.getElementById(projectId);

    if (!modal) return;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    const closeButton = modal.querySelector(".modal-close");
    if (closeButton) closeButton.focus();
}

function closeProject(projectId) {
    const modal = document.getElementById(projectId);

    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");
}

function openLightbox(src, alt) {
    const lightbox = document.getElementById("image-lightbox");
    const image = document.getElementById("lightbox-image");
    const caption = document.getElementById("lightbox-caption");

    image.src = src;
    image.alt = alt;
    caption.textContent = alt;

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
    const lightbox = document.getElementById("image-lightbox");

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
}

// Close with Escape
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLightbox();

        document.querySelectorAll(".project-modal.active")
            .forEach(function (modal) {
                closeProject(modal.id);
            });
    }
});
