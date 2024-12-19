const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");

const projectDetails = {
    project1: {
        title: "Project 1",
        images: ["/placeholder", "/placeholder","/placeholder","/placeholder"],
        description: "Description of Project 1. "
    },
    project2: {
        title: "Project 2",
        images: ["/placeholder", "/placeholder"],        
        description: "Description of Project 2. "
    },
    project3: {
        title: "Project 3",
        images: ["/placeholder", "/placeholder","/placeholder","/placeholder"],
        description: "Description of Project 3. "
    },
    project4: {
        title: "Project 4",
        images: ["/placeholder", "/placeholder", "/placeholder", "/placeholder"],
        description: "Description of Project 4. "
    },
    illustration: {
        title: "Illustration",
        images: ["/illustration/2022/Birthday_Cake.JPEG", "Illustration/2022/Milk.jpg","/placeholder","/placeholder"],
        description: "Description."
    } 
};

function openModal(projectId) {
    const project = projectDetails[projectId];
    modalTitle.textContent = project.title;
    
    // Clear previous images
    modalImageContainer.innerHTML = '';
    
    // Add new images
    project.images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = project.title;
        img.className = 'modal-image';
        modalImageContainer.appendChild(img);
    });
    
    modalDescription.textContent = project.description;
    modal.style.display = "block";
}


function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
//rotating arrow funtion
/*const arrow = document.querySelector('.arrow');
const mediaQuery = window.matchMedia('(max-width: 1024px)');

function arrowSwitch(e) {
    if (e.matches) {
        arrow.style.transform = 'rotate(90deg)';
    } else {
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Run the handler once at the start
arrowSwitch(mediaQuery);

// Add the listener for future changes
mediaQuery.addListener(arrowSwitch);*/
