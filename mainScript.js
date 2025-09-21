// Plant Detail Functions
function viewPlantDetails(plantName) {
    // Create URL for plant detail page
    const detailUrl = `plant-details.html?plant=${plantName}`;
    // Use window.location.href instead of window.open to navigate in same tab
    window.location.href = detailUrl;
}

function sharePlant(plantName) {
    // Create share URL
    const shareUrl = `${window.location.origin}${window.location.pathname}?plant=${plantName}`;
    const shareText = `Check out this amazing AYUSH plant: ${plantName.charAt(0).toUpperCase() + plantName.slice(1)}`;

    // Check if Web Share API is supported
    if (navigator.share) {
        navigator.share({
            title: `AYUSH Plant - ${plantName}`,
            text: shareText,
            url: shareUrl
        }).catch(console.error);
    } else {
        // Fallback to clipboard
        navigator.clipboard.writeText(`${shareText} - ${shareUrl}`).then(() => {
            alert('Plant information copied to clipboard!');
        }).catch(() => {
            // Final fallback
            prompt('Copy this link to share:', `${shareText} - ${shareUrl}`);
        });
    }
}

// FAQ Functionality
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(faq => faq.classList.remove('active'));

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Plant card interactions
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const plantCard = btn.closest('.plant-card');
            const plantName = plantCard.dataset.plant;
            sharePlant(plantName);
        });
    });

    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Smooth scrolling for explore button
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.querySelector('.plants-gallery').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Hero indicators functionality
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            indicators.forEach(ind => ind.classList.remove('active'));
            indicator.classList.add('active');
            currentSlide = index;
            // Add slide change logic here if needed
        });
    });

    // Auto-rotate hero indicators
    // setInterval(() => {
    //     indicators[currentSlide].classList.remove('active');
    //     currentSlide = (currentSlide + 1) % indicators.length;
    //     indicators[currentSlide].classList.add('active');
    // }, 5000);

    // Testimonial navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const testimonials = [
        {
            text: "This AYUSH platform has revolutionized how we study traditional medicinal plants and their therapeutic applications across different systems....",
            author: "Dr. Bittu Kumar",
            role: "AYUSH Research Institute"
        },
        {
            text: "An incredible resource for understanding the integration of Ayurveda, Unani, Siddha, and other traditional medicine systems.",
            author: "Dr. Priya Sharma",
            role: "Ministry of AYUSH Consultant"
        },
        {
            text: "The 3D models help students and practitioners visualize medicinal plants used across all AYUSH systems effectively.",
            author: "Prof. Rahul Gupta",
            role: "Traditional Medicine Expert"
        }
    ];

    let currentTestimonial = 0;

    function updateTestimonial() {
        const card = document.querySelector('.testimonial-card');
        const testimonial = testimonials[currentTestimonial];

        card.querySelector('p').textContent = `"${testimonial.text}"`;
        card.querySelector('strong').textContent = testimonial.author;
        card.querySelector('span').textContent = testimonial.role;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonial();
        });

        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonial();
        });
    }

    // Sign up button functionality
    const signupBtn = document.querySelector('.signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            alert('Sign up functionality would be implemented here!');
            // Add actual sign up logic
        });
    }
})

// Team Member Carousel Functions
let currentTeamMember = 0;
const totalTeamMembers = 4;

function changeTeamMember(direction) {
    console.log('Changing team member:', direction); // Debug log
    
    // Hide current member
    const currentCard = document.querySelector(`.member-card[data-member="${currentTeamMember}"]`);
    const currentIndicator = document.querySelector(`.team-indicators .indicator:nth-child(${currentTeamMember + 1})`);
    
    if (currentCard) currentCard.classList.remove('active');
    if (currentIndicator) currentIndicator.classList.remove('active');
    
    // Calculate new index
    currentTeamMember = (currentTeamMember + direction + totalTeamMembers) % totalTeamMembers;
    console.log('New team member index:', currentTeamMember); // Debug log
    
    // Show new member
    const newCard = document.querySelector(`.member-card[data-member="${currentTeamMember}"]`);
    const newIndicator = document.querySelector(`.team-indicators .indicator:nth-child(${currentTeamMember + 1})`);
    
    if (newCard) newCard.classList.add('active');
    if (newIndicator) newIndicator.classList.add('active');
}

function showTeamMember(index) {
    console.log('Show team member:', index); // Debug log
    
    if (index !== currentTeamMember) {
        // Hide current member
        const currentCard = document.querySelector(`.member-card[data-member="${currentTeamMember}"]`);
        const currentIndicator = document.querySelector(`.team-indicators .indicator:nth-child(${currentTeamMember + 1})`);
        
        if (currentCard) currentCard.classList.remove('active');
        if (currentIndicator) currentIndicator.classList.remove('active');
        
        // Show selected member
        currentTeamMember = index;
        
        const newCard = document.querySelector(`.member-card[data-member="${currentTeamMember}"]`);
        const newIndicator = document.querySelector(`.team-indicators .indicator:nth-child(${currentTeamMember + 1})`);
        
        if (newCard) newCard.classList.add('active');
        if (newIndicator) newIndicator.classList.add('active');
    }
}

// Faculty Member Carousel Functions
let currentFacultyMember = 0;
const totalFacultyMembers = 3;

function changeFacultyMember(direction) {
    console.log('Changing faculty member:', direction); // Debug log
    
    // Hide current faculty
    const currentCard = document.querySelector(`.faculty-card[data-faculty="${currentFacultyMember}"]`);
    const currentIndicator = document.querySelector(`.faculty-indicators .indicator:nth-child(${currentFacultyMember + 1})`);
    
    if (currentCard) currentCard.classList.remove('active');
    if (currentIndicator) currentIndicator.classList.remove('active');
    
    // Calculate new index
    currentFacultyMember = (currentFacultyMember + direction + totalFacultyMembers) % totalFacultyMembers;
    console.log('New faculty member index:', currentFacultyMember); // Debug log
    
    // Show new faculty
    const newCard = document.querySelector(`.faculty-card[data-faculty="${currentFacultyMember}"]`);
    const newIndicator = document.querySelector(`.faculty-indicators .indicator:nth-child(${currentFacultyMember + 1})`);
    
    if (newCard) newCard.classList.add('active');
    if (newIndicator) newIndicator.classList.add('active');
}

function showFacultyMember(index) {
    console.log('Show faculty member:', index); // Debug log
    
    if (index !== currentFacultyMember) {
        // Hide current faculty
        const currentCard = document.querySelector(`.faculty-card[data-faculty="${currentFacultyMember}"]`);
        const currentIndicator = document.querySelector(`.faculty-indicators .indicator:nth-child(${currentFacultyMember + 1})`);
        
        if (currentCard) currentCard.classList.remove('active');
        if (currentIndicator) currentIndicator.classList.remove('active');
        
        // Show selected faculty
        currentFacultyMember = index;
        
        const newCard = document.querySelector(`.faculty-card[data-faculty="${currentFacultyMember}"]`);
        const newIndicator = document.querySelector(`.faculty-indicators .indicator:nth-child(${currentFacultyMember + 1})`);
        
        if (newCard) newCard.classList.add('active');
        if (newIndicator) newIndicator.classList.add('active');
    }
}

// Initialize carousels when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Ensure first team member is active
    const firstTeamCard = document.querySelector('.member-card[data-member="0"]');
    const firstTeamIndicator = document.querySelector('.team-indicators .indicator:first-child');
    if (firstTeamCard) firstTeamCard.classList.add('active');
    if (firstTeamIndicator) firstTeamIndicator.classList.add('active');
    
    // Ensure first faculty member is active
    const firstFacultyCard = document.querySelector('.faculty-card[data-faculty="0"]');
    const firstFacultyIndicator = document.querySelector('.faculty-indicators .indicator:first-child');
    if (firstFacultyCard) firstFacultyCard.classList.add('active');
    if (firstFacultyIndicator) firstFacultyIndicator.classList.add('active');
    
    console.log('Carousels initialized'); // Debug log
});