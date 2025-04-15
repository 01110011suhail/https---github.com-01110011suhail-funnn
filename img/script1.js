document.addEventListener("DOMContentLoaded", function () {
    function filterRooms() {
        let searchInput = document.getElementById('searchInput')?.value.toLowerCase().trim() || "";
        let locationFilter = document.getElementById('locationFilter')?.value.toLowerCase().trim() || "";
        let priceFilter = document.getElementById('priceFilter')?.value || "";
        
        let rooms = document.querySelectorAll('.room-item');
        console.log("Total rooms found:", rooms.length); 

        rooms.forEach(room => {
            let location = (room.getAttribute('data-location') || "").toLowerCase().trim();
            let price = parseInt(room.getAttribute('data-price')) || 0;
            let name = (room.querySelector('h2')?.textContent || "").toLowerCase().trim();

            let locationMatch = !locationFilter || location.includes(locationFilter);
            let priceMatch = !priceFilter || 
                            (priceFilter === "1000" && price < 1000) ||
                            (priceFilter === "2000" && price >= 1000 && price <= 2000) ||
                            (priceFilter === "3000" && price > 2000);
            let searchMatch = name.includes(searchInput);

            room.style.display = (locationMatch && priceMatch && searchMatch) ? "block" : "none";
        });
    }

    document.getElementById('locationFilter')?.addEventListener('change', filterRooms);
    document.getElementById('priceFilter')?.addEventListener('change', filterRooms);

    function setupScrollButtons(containerId, leftBtnClass, rightBtnClass) {
        const scrollContainer = document.getElementById(containerId);
        const scrollLeftBtn = document.querySelector(leftBtnClass);
        const scrollRightBtn = document.querySelector(rightBtnClass);

        if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
            const scrollAmount = 350;

            scrollLeftBtn.addEventListener("click", function () {
                scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            });

            scrollRightBtn.addEventListener("click", function () {
                scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        }
    }

    setupScrollButtons("room-listing-1", ".scroll-left", ".scroll-right");
});


function filterRooms() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let rooms = document.querySelectorAll(".room-item");

    rooms.forEach(room => {
        let hotelName = room.querySelector("h2").innerText.toLowerCase();
        let location = room.querySelector("p:nth-of-type(1)").innerText.toLowerCase();

        if (hotelName.includes(searchInput) || location.includes(searchInput)) {
            room.style.display = "block"; 
        } else {
            room.style.display = "none"; 
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const hotels = [
        { name: "Mercure Makkah Aziziah", location: "6541 Koulliat Al Banat, Al Jamiah, Makkah 24243, Saudi Arabia", url: "hotel.html?id=5" },
        { name: "Violet Hotel", location: "At Taif Road, Al Aziziyah, Mecca, Saudi Arabia, 24235", url: "hotel.html?id=1" },
        { name: "ATWAH Dar Al Sharif", location: "Makkah Al-Mukarramah - Al-Aziziyah South, in front of Al-Muhaisni Traffic light.", url: "hotel.html?id=2" },
        { name: "Hotel ATWAH DAR AL BARKAWI", location: "Off All Sitten Street-Facing Prophet Masjid -King Fahd Gate(23), 30921 Medina, Saudi Arabia", url: "hotel.html?id=3" },
        { name: "Fares Ajyad Hotel", location: "CRCJ+GXC, King Abdul Aziz Rd, Ajyad, Makkah 24231, Saudi Arabia", url: "hotel.html?id=4" },
    ];

    const images = [
        "images/hotel1.jpg",
        "images/hotel2.jpg",
        "images/hotel3.jpg",
        "images/hotel4.jpg",
        "images/hotel5.jpg",
        "images/hotel6.jpg",
        "images/hotel7.jpg",
        "images/hotel8.jpg",
        "images/hotel9.jpg",
        "images/hotel10.jpg",
        "images/hotel11.jpg",
        "images/hotel12.jpg",
        "images/hotel13.jpg",
        "images/hotel14.jpg"
    ];

    const initialImagesToShow = 3;
    const totalImages = images.length;
    const remainingImages = totalImages - initialImagesToShow;

    const remainingImagesText = document.getElementById("remaining-images-text");
    if (remainingImagesText) {
        remainingImagesText.textContent = `Show More Images (+${remainingImages})`;
    }

    function filterRooms() {
        let searchInput = document.getElementById('searchInput')?.value.toLowerCase().trim() || "";
        let locationFilter = document.getElementById('locationFilter')?.value.toLowerCase().trim() || "";
        let priceFilter = document.getElementById('priceFilter')?.value || "";
        
        let rooms = document.querySelectorAll('.room-item');
        console.log("Total rooms found:", rooms.length); 

        rooms.forEach(room => {
            let location = (room.getAttribute('data-location') || "").toLowerCase().trim();
            let price = parseInt(room.getAttribute('data-price')) || 0;
            let name = (room.querySelector('h2')?.textContent || "").toLowerCase().trim();

            let locationMatch = !locationFilter || location.includes(locationFilter);
            let priceMatch = !priceFilter || 
                            (priceFilter === "1000" && price < 1000) ||
                            (priceFilter === "2000" && price >= 1000 && price <= 2000) ||
                            (priceFilter === "3000" && price > 2000);
            let searchMatch = name.includes(searchInput);

            room.style.display = (locationMatch && priceMatch && searchMatch) ? "block" : "none";
        });
    }

    document.getElementById('locationFilter')?.addEventListener('change', filterRooms);
    document.getElementById('priceFilter')?.addEventListener('change', filterRooms);

    function searchHotels() {
        let searchInput = document.getElementById("searchInput").value.toLowerCase();
        let searchResults = document.getElementById("searchResults");

        searchResults.innerHTML = "";
        searchResults.style.display = "none";

        if (searchInput.length === 0) return;

        let filteredHotels = hotels.filter(hotel =>
            hotel.name.toLowerCase().includes(searchInput) ||
            hotel.location.toLowerCase().includes(searchInput)
        );

        if (filteredHotels.length > 0) {
            searchResults.style.display = "block";
            filteredHotels.forEach(hotel => {
                let div = document.createElement("div");
                div.textContent = `${hotel.name} - ${hotel.location}`;
                div.onclick = () => window.location.href = hotel.url;
                searchResults.appendChild(div);
            });
        }
    }

    document.getElementById("searchInput").addEventListener("keyup", searchHotels);

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".search-container")) {
            document.getElementById("searchResults").style.display = "none";
        }
    });

    function setupScrollButtons(containerId, leftBtnClass, rightBtnClass) {
        const scrollContainer = document.getElementById(containerId);
        const scrollLeftBtn = document.querySelector(leftBtnClass);
        const scrollRightBtn = document.querySelector(rightBtnClass);

        if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
            const scrollAmount = 350;

            scrollLeftBtn.addEventListener("click", function (event) {
                event.preventDefault();

                scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            });

            scrollRightBtn.addEventListener("click", function (event) {
                event.preventDefault();


                scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        }
    }

    setupScrollButtons("room-listing-2", ".scroll-left", ".scroll-right");
});

function openModal(src) {
    const modal = document.getElementById("myModal");
    const mainImage = modal.querySelector('.modal-content img');
    if (src) {
        mainImage.src = src; 
    } else {
        mainImage.src = ''; 
    }
    modal.style.display = "flex"; 
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}



document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    menuToggle.addEventListener('click', function() {
        sidebar.style.left = '0'; 
        overlay.style.display = 'block'; 
    });

    closeBtn.addEventListener('click', function() {
        sidebar.style.left = '-250px'; 
        overlay.style.display = 'none'; 
    });

    overlay.addEventListener('click', function() {
        sidebar.style.left = '-250px'; 
        overlay.style.display = 'none'; 
    });
});

// faqs

document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');

            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                answer.style.display = "block";
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
});


//dwdwdw
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get("id");

    const rooms = {
        1: { 
            name: "Mercure Makkah Aziziah", 
            location: "6541 Koulliat Al Banat, Al Jamiah, Makkah 24243, Saudi Arabia", 
            price: "90 SAR /night", 
            images: [
                "images/hoteln1.jpg",
                "images/mercure1.jpg",
                "images/mercure2.jpg",
                "images/mercure4.jpg",
                "images/mercure5.jpg",
                "images/mercure6.jpg",
                "images/mercure7.jpg",
                "images/mercure8.jpg",
                "images/mercure9.jpg",
                "images/mercure10.jpg"
            ],
            description: "Experience the luxury in SA." 
        },
        2: { 
            name: "Violet Hotel", 
            location: "At Taif Road, Al Aziziyah, Mecca, Saudi Arabia, 24235", 
            price: "135 SAR /night", 
            images: [
                "images/voileth.jpg",

                "images/voilet1.jpg",
                "images/voilet2.jpg",
                "images/voilet3.jpg",
                "images/voilet4.jpg",
                "images/voilet5.jpg",
                "images/voilet6.jpg",
                "images/voilet7.jpg",
                "images/voilet8.jpg",
                "images/voilet9.jpg",
                "images/voilet10.jpg",
                "images/voilet11.jpg"
            ],
            description: "Experience  & enjoy the luxury stay in SA." 
        },
        3: { 
            name: "ATWAH Dar Al Sharif", 
            location: "Makkah Al-Mukarramah - Al-Aziziyah South, in front of Al-Muhaisni Traffic light.", 
            price: "130 SAR /night", 
            images: [
                "images/hoteln3.jpg",
                "images/atwah1.jpg",
                "images/atwah2.jpg",
                "images/atwah3.jpg",
                "images/atwah4.jpg",
                "images/atwah5.jpg",
                "images/atwah6.jpg",
                "images/atwah7.jpg"
            ],
            description: "Experience the best View in SA." 
        },
        4: { 
            name: "Hotel ATWAH DAR AL BARKAWI", 
            location: "At Taif Road, Al Aziziyah, Mecca, Saudi Arabia, 24235", 
            price: "90 SAR /night", 
            images: [

                "images/ATWA1.jpg",
                "images/ATWA2.jpg",
                "images/ATWA3.jpg",
                "images/ATWA4.jpg",
                "images/ATWA5.jpg",
                "images/ATWA6.jpg"
            ],
            description: "experience the affordable best  in SA." 
        },
        5: { 
            name: "Fares Ajyad Hotel", 
            location: "CRCJ+GXC, King Abdul Aziz Rd, Ajyad, Makkah 24231, Saudi Arabia", 
            price: "200 SAR /night", 
            images: [
                "images/hotel5.jpeg",
                "images/Fares1.jpg",
                "images/Fares2.jpg",
                "images/Fares3.jpg",
                "images/Fares4.jpg",
                "images/Fares5.jpg",
                "images/Fares6.jpg",
                "images/Fares7.jpg",
                "images/Fares8.jpg",
                "images/Fares9.jpg"
            ],
            description: "experience the luxury in SA." 
        },


    };

    if (roomId && rooms[roomId]) {
        const room = rooms[roomId];
        document.getElementById("hotel-name").textContent = room.name;
        document.getElementById("hotel-location").textContent = `Location: ${room.location}`;
        document.getElementById("hotel-price").textContent = `Price: ${room.price}`;
        document.getElementById("hotel-description").textContent = `Description: ${room.description}`;

    let currentSlide = 0;
    const galleryImg = document.getElementById("gallery-img");
    galleryImg.src = room.images[currentSlide];

     function changeSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = room.images.length - 1; 
        } else if (currentSlide >= room.images.length) {
            currentSlide = 0; 
        }
        galleryImg.src = room.images[currentSlide];
    }

     document.querySelector(".prev").addEventListener("click", function() {
        changeSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        changeSlide(1);
    });
} else {
    document.querySelector(".hotel-info").innerHTML = "<h2>Room not found</h2>";
}
});



const today = new Date();
const minDate = today.toISOString().split('T')[0];

const checkInInput = document.getElementById("check-in");
const checkOutInput = document.getElementById("check-out");
const guestsInput = document.getElementById("guests");
const errorContainer = document.getElementById("error-message");
const billModal = document.getElementById("bill-modal");
const billContent = document.getElementById("bill-content");
const confirmBookingBtn = document.getElementById("confirm-booking");
const emailBtn = document.getElementById("email");

// Set minimum check-in to today
checkInInput.setAttribute("min", minDate);

// Update check-out dynamically based on check-in
checkInInput.addEventListener("change", () => {
  const checkInDate = new Date(checkInInput.value);
  
  if (!checkInInput.value) return;

  // Min checkout = next day
  const minCheckoutDate = new Date(checkInDate);
  minCheckoutDate.setDate(minCheckoutDate.getDate() + 1);

  // Max checkout = 30 days after check-in
  const maxCheckoutDate = new Date(checkInDate);
  maxCheckoutDate.setDate(maxCheckoutDate.getDate() + 30);

  checkOutInput.setAttribute("min", minCheckoutDate.toISOString().split('T')[0]);
  checkOutInput.setAttribute("max", maxCheckoutDate.toISOString().split('T')[0]);
});

// Restrict guests between 1 and 10
guestsInput.setAttribute("min", "1");
guestsInput.setAttribute("max", "10");

document.getElementById("generate-bill").addEventListener("click", () => {
  const checkIn = checkInInput.value;
  const checkOut = checkOutInput.value;
  const guests = parseInt(guestsInput.value, 10);
  
  errorContainer.innerHTML = "";

  // Validations
  if (!checkIn) errorContainer.innerHTML += "<p>Please select a check-in date.</p>";
  if (!checkOut) errorContainer.innerHTML += "<p>Please select a check-out date.</p>";
  if (!guests || guests < 1) errorContainer.innerHTML += "<p>Please enter number of guests.</p>";
  if (guests > 10) errorContainer.innerHTML += "<p>Maximum 10 guests are allowed.</p>";

  const startDate = new Date(checkIn);
  const endDate = new Date(checkOut);
  const nights = (endDate - startDate) / (1000 * 60 * 60 * 24);

  if (nights <= 0) {
    errorContainer.innerHTML += "<p>Check-out date must be after check-in date.</p>";
  }

  if (nights > 30) {
    errorContainer.innerHTML += "<p>You can book only up to 30 nights.</p>";
  }

  if (errorContainer.innerHTML !== "") return;

  const pricePerNight = 1000;
  const totalPrice = nights * pricePerNight * guests;

  billContent.innerHTML = `
    <p><strong>Check-in:</strong> ${checkIn}</p>
    <p><strong>Check-out:</strong> ${checkOut}</p>
    <p><strong>Guests:</strong> ${guests}</p>
    <p><strong>Number of Nights:</strong> ${nights}</p>
    <p><strong>Price Per Night:</strong> ₹${pricePerNight}</p>
    <p><strong>Total Amount:</strong> ₹${totalPrice}</p>
  `;

  billModal.style.display = "block";

  // Set WhatsApp message data
  confirmBookingBtn.setAttribute("data-message",
    `Booking Details:\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\nNights: ${nights}\nTotal Price: ₹${totalPrice}`
  );
});

// Close modal
billModal.querySelector(".close-btn").addEventListener("click", () => {
  billModal.style.display = "none";
});

// WhatsApp integration
confirmBookingBtn.addEventListener("click", function () {
  const message = this.getAttribute("data-message");
  const encodedMessage = encodeURIComponent(message);
  window.location.href = `https://wa.me/1234567890?text=${encodedMessage}`;
});

// Email/booking page redirect
emailBtn.addEventListener("click", function () {
  const message = this.getAttribute("data-message");
  const encodedMessage = encodeURIComponent(message);
  window.location.href = `BookingForm.html?data=${encodedMessage}`;
});

















// document.getElementById("generate-bill").addEventListener("click", function () {
//     const checkIn = document.getElementById("check-in").value;
//     const checkOut = document.getElementById("check-out").value;
//     const guests = document.getElementById("guests").value;
//     const errorContainer = document.getElementById("error-message");
//     const billModal = document.getElementById("bill-modal");
//     const billContent = document.getElementById("bill-content");

//     errorContainer.innerHTML = "";

//     if (!checkIn) errorContainer.innerHTML += "<p>Please select a check-in date.</p>";
//     if (!checkOut) errorContainer.innerHTML += "<p>Please select a check-out date.</p>";
//     if (!guests || guests < 1) errorContainer.innerHTML += "<p>Please enter the number of guests.</p>";

//     if (errorContainer.innerHTML !== "") return;

//     const pricePerNight = 1000; 
//     const startDate = new Date(checkIn);
//     const endDate = new Date(checkOut);
//     const nights = (endDate - startDate) / (1000 * 60 * 60 * 24);
//     const totalPrice = nights * pricePerNight * guests;

//     billContent.innerHTML = `
//         <p><strong>Check-in:</strong> ${checkIn}</p>
//         <p><strong>Check-out:</strong> ${checkOut}</p>
//         <p><strong>Guests:</strong> ${guests}</p>
//         <p><strong>Number of Nights:</strong> ${nights}</p>
//         <p><strong>Price Per Night:</strong> ₹${pricePerNight}</p>
//         <p><strong>Total Amount:</strong> ₹${totalPrice}</p>
//     `;

//     billModal.style.display = "block";

//     document.getElementById("confirm-booking").setAttribute("data-message", 
//         `Booking Details: 
//         Check-in: ${checkIn}
//         Check-out: ${checkOut}
//         Guests: ${guests}
//         Nights: ${nights}
//         Total Price: ₹SAR{totalPrice}`);
// });

// document.querySelector(".close-btn").addEventListener("click", function () {
//     document.getElementById("bill-modal").style.display = "none";
// });

// document.getElementById("confirm-booking").addEventListener("click", function () {
//     const message = this.getAttribute("data-message");
//     const encodedMessage = encodeURIComponent(message);
//     window.location.href = `https://wa.me/1234567890?text=${encodedMessage}`;
// });
// document.getElementById("email").addEventListener("click", function () {
//     console.log("Email button clicked"); 
//     const message = this.getAttribute("data-message");

//     window.location.href = `BookingForm.html`;
// });






