// Plant data with coordinates
const plantsData = {
    tulsi: {
        name: "Tulsi (Holy Basil)",
        scientificName: "Ocimum tenuiflorum",
        model: "models/tulsi.glb",
        description: "Sacred in Ayurveda, Tulsi is known as the 'Queen of Herbs' with powerful adaptogenic and immune-boosting properties used across all AYUSH systems.",
        mapLocations: [
            { name: "Mathura, UP", coords: [27.4924, 77.6737], type: "sacred", description: "Sacred cultivation in temple gardens" },
            { name: "Vrindavan, UP", coords: [27.5783, 77.7008], type: "sacred", description: "Most sacred Tulsi growing region" },
            { name: "Bodh Gaya, Bihar", coords: [24.6958, 84.9911], type: "sacred", description: "Temple and monastery gardens" },
            { name: "Pune, Maharashtra", coords: [18.5204, 73.8567], type: "commercial", description: "Commercial cultivation areas" },
            { name: "Nashik, Maharashtra", coords: [19.9975, 73.7898], type: "commercial", description: "Large scale farming" },
            { name: "Nadia, West Bengal", coords: [23.4731, 88.5653], type: "traditional", description: "Rural traditional cultivation" },
            { name: "Rishikesh, Uttarakhand", coords: [30.0869, 78.2676], type: "wild", description: "Wild growth in Himalayan foothills" }
        ],
        diseases: [
            { name: "Respiratory Issues", description: "Helps in treating cough, cold, asthma, and bronchitis through its expectorant properties." },
            { name: "Stress and Anxiety", description: "Acts as a natural adaptogen, helping the body cope with stress and anxiety." },
            { name: "Fever", description: "Traditional antipyretic properties help reduce fever naturally." },
            { name: "Digestive Problems", description: "Improves digestion and helps with stomach disorders." },
            { name: "Skin Conditions", description: "Anti-inflammatory properties help treat various skin ailments." },
            { name: "Heart Health", description: "Supports cardiovascular health and helps regulate blood pressure." }
        ],
        uses: [
            { icon: "fas fa-mortar-pestle", title: "Medicinal", description: "Used in traditional Ayurvedic formulations for respiratory and digestive health." },
            { icon: "fas fa-spa", title: "Aromatherapy", description: "Essential oil used for stress relief and mental clarity." },
            { icon: "fas fa-coffee", title: "Herbal Tea", description: "Leaves are commonly brewed as a healthy, caffeine-free tea." }
        ],
        cultivation: [
            { icon: "fas fa-thermometer-half", title: "Climate", description: "Grows best in tropical and subtropical regions with warm temperatures." },
            { icon: "fas fa-tint", title: "Soil", description: "Prefers well-drained, fertile soil with pH between 6.0-7.5." },
            { icon: "fas fa-seedling", title: "Propagation", description: "Can be grown from seeds or stem cuttings." },
            { icon: "fas fa-eye-dropper", title: "Watering", description: "Requires regular watering but avoid waterlogging." }
        ],
        harvesting: [
            { icon: "fas fa-leaf", title: "Leaves", description: "Harvest mature leaves in early morning for maximum potency." },
            { icon: "fas fa-cut", title: "Method", description: "Cut stems above leaf nodes to encourage new growth." }
        ],
        location: [
            { icon: "fas fa-map-marker-alt", title: "All Over India", description: "Commonly grown in home gardens across every state - considered sacred plant." },
            { icon: "fas fa-map-marker-alt", title: "Uttar Pradesh", description: "Mathura, Vrindavan - considered most sacred, large temple gardens." },
            { icon: "fas fa-map-marker-alt", title: "Bihar", description: "Gaya, Bodh Gaya - grown around temples and monasteries." },
            { icon: "fas fa-map-marker-alt", title: "West Bengal", description: "Widespread in rural areas, Hooghly, Nadia districts." },
            { icon: "fas fa-map-marker-alt", title: "Maharashtra", description: "Pune, Nashik, Ahmednagar - commercial cultivation areas." },
            { icon: "fas fa-mountain", title: "Wild Growth", description: "Naturally found in Himachal Pradesh, Uttarakhand foothills up to 2000m altitude." }
        ]
    },
    ashwagandha: {
        name: "Ashwagandha",
        scientificName: "Withania somnifera",
        model: "models/Ahwagandha.glb",
        description: "Known as 'Indian Winter Cherry' in Ayurveda and Unani systems, this powerful adaptogen helps combat stress and enhances vitality.",
        mapLocations: [
            { name: "Jaisalmer, Rajasthan", coords: [26.9157, 70.9083], type: "wild", description: "Highest natural concentration in arid regions" },
            { name: "Jodhpur, Rajasthan", coords: [26.2389, 73.0243], type: "commercial", description: "Major commercial cultivation" },
            { name: "Kutch, Gujarat", coords: [23.7337, 69.8597], type: "commercial", description: "Large scale farming in arid zones" },
            { name: "Neemuch, MP", coords: [24.4739, 74.8706], type: "commercial", description: "Quality ashwagandha production hub" },
            { name: "Mandsaur, MP", coords: [24.0767, 75.0705], type: "commercial", description: "Commercial cultivation center" },
            { name: "Mahendragarh, Haryana", coords: [28.2828, 76.1469], type: "commercial", description: "Growing cultivation area" },
            { name: "Aravalli Hills", coords: [25.0000, 74.0000], type: "wild", description: "Natural wild habitat in dry hills" }
        ],
        diseases: [
            { name: "Stress and Fatigue", description: "Powerful adaptogen that helps reduce cortisol levels and combat stress." },
            { name: "Insomnia", description: "Promotes better sleep quality and treats sleep disorders." },
            { name: "Anxiety and Depression", description: "Natural mood enhancer that helps with anxiety and mild depression." },
            { name: "Arthritis", description: "Anti-inflammatory properties help reduce joint pain and inflammation." },
            { name: "Low Immunity", description: "Boosts immune system and helps fight infections." },
            { name: "Sexual Dysfunction", description: "Traditional aphrodisiac properties improve sexual health." }
        ],
        uses: [
            { icon: "fas fa-dumbbell", title: "Fitness Supplement", description: "Used by athletes to improve strength and muscle mass." },
            { icon: "fas fa-brain", title: "Cognitive Health", description: "Supports memory and cognitive function." },
            { icon: "fas fa-heart", title: "Hormonal Balance", description: "Helps regulate thyroid and adrenal function." }
        ],
        cultivation: [
            { icon: "fas fa-sun", title: "Climate", description: "Thrives in dry, subtropical regions with minimal rainfall." },
            { icon: "fas fa-mountain", title: "Soil", description: "Prefers sandy, well-drained soil with good drainage." },
            { icon: "fas fa-calendar", title: "Season", description: "Sown during monsoon season for winter harvest." },
            { icon: "fas fa-ruler", title: "Spacing", description: "Requires 30-45 cm spacing between plants." }
        ],
        harvesting: [
            { icon: "fas fa-shovel", title: "Roots", description: "Primary medicinal part, harvested after 6-7 months." },
            { icon: "fas fa-weight", title: "Yield", description: "Fresh root yield ranges from 300-500 kg per hectare." }
        ],
        location: [
            { icon: "fas fa-map-marker-alt", title: "Rajasthan", description: "Jaisalmer, Jodhpur, Bikaner - arid regions, highest concentration in India." },
            { icon: "fas fa-map-marker-alt", title: "Gujarat", description: "Kutch, Banaskantha, Patan districts - major commercial cultivation." },
            { icon: "fas fa-map-marker-alt", title: "Madhya Pradesh", description: "Neemuch, Mandsaur, Indore districts - quality ashwagandha production." },
            { icon: "fas fa-map-marker-alt", title: "Haryana", description: "Mahendragarh, Rewari, Bhiwani - growing commercial cultivation." },
            { icon: "fas fa-map-marker-alt", title: "Punjab", description: "Bathinda, Mansa, Sangrur - emerging cultivation areas." },
            { icon: "fas fa-mountain", title: "Wild Habitat", description: "Naturally found in dry regions of Aravalli Hills and Thar Desert borders." }
        ]
    },
    turmeric: {
        name: "Turmeric (Haldi)",
        scientificName: "Curcuma longa",
        model: "models/Turmeric.glb",
        description: "A golden herb revered in Ayurveda and Siddha systems for its anti-inflammatory and healing properties, used extensively in AYUSH formulations.",
        mapLocations: [
            { name: "Erode, Tamil Nadu", coords: [11.3410, 77.7172], type: "commercial", description: "Turmeric City - largest producer in India" },
            { name: "Salem, Tamil Nadu", coords: [11.6643, 78.1460], type: "commercial", description: "Major cultivation and trading center" },
            { name: "Guntur, Andhra Pradesh", coords: [16.3067, 80.4365], type: "commercial", description: "Famous for high-quality turmeric" },
            { name: "Mysore, Karnataka", coords: [12.2958, 76.6394], type: "commercial", description: "Premium quality turmeric production" },
            { name: "Kandhamal, Odisha", coords: [20.2333, 84.0167], type: "traditional", description: "Medicinal grade turmeric cultivation" },
            { name: "Midnapore, West Bengal", coords: [22.4246, 87.3197], type: "traditional", description: "Traditional cultivation areas" },
            { name: "Western Ghats, Kerala", coords: [10.8505, 76.2711], type: "wild", description: "Natural forest habitat" }
        ],
        diseases: [
            { name: "Inflammation", description: "Contains curcumin, a powerful anti-inflammatory compound." },
            { name: "Arthritis", description: "Reduces joint pain and inflammation in rheumatoid arthritis." },
            { name: "Digestive Issues", description: "Stimulates bile production and improves digestion." },
            { name: "Wound Healing", description: "Antiseptic properties help in faster wound healing." },
            { name: "Cancer Prevention", description: "Antioxidant properties may help prevent certain types of cancer." },
            { name: "Heart Disease", description: "Supports cardiovascular health and reduces cholesterol." }
        ],
        uses: [
            { icon: "fas fa-utensils", title: "Culinary", description: "Essential spice in Indian cuisine and curry preparations." },
            { icon: "fas fa-spa", title: "Cosmetic", description: "Used in face masks and beauty treatments for glowing skin." },
            { icon: "fas fa-pills", title: "Supplement", description: "Available as curcumin supplements for health benefits." }
        ],
        cultivation: [
            { icon: "fas fa-cloud-rain", title: "Climate", description: "Requires warm, humid climate with heavy rainfall." },
            { icon: "fas fa-seedling", title: "Soil", description: "Grows best in well-drained, fertile, loamy soil." },
            { icon: "fas fa-calendar-alt", title: "Planting", description: "Planted during pre-monsoon season (April-July)." },
            { icon: "fas fa-tint", title: "Irrigation", description: "Requires regular watering and high humidity." }
        ],
        harvesting: [
            { icon: "fas fa-clock", title: "Timeline", description: "Rhizomes are ready for harvest after 8-10 months." },
            { icon: "fas fa-hand-paper", title: "Method", description: "Carefully dig up rhizomes without damaging them." }
        ],
        location: [
            { icon: "fas fa-map-marker-alt", title: "Tamil Nadu", description: "Erode district (known as 'Turmeric City'), Salem, Coimbatore - largest producer in India." },
            { icon: "fas fa-map-marker-alt", title: "Andhra Pradesh", description: "Krishna, Guntur, West Godavari districts - major cultivation areas." },
            { icon: "fas fa-map-marker-alt", title: "Karnataka", description: "Mysore, Hassan, Shimoga districts - high-quality turmeric cultivation." },
            { icon: "fas fa-map-marker-alt", title: "Odisha", description: "Kandhamal, Rayagada, Koraput districts - known for medicinal grade turmeric." },
            { icon: "fas fa-map-marker-alt", title: "West Bengal", description: "Midnapore, Bankura districts - traditional cultivation areas." },
            { icon: "fas fa-mountain", title: "Western Ghats", description: "Naturally found in forest areas of Maharashtra, Karnataka, and Kerala." }
        ]
    },
    cinnamon: {
        name: "Cinnamon (Dalchini)",
        scientificName: "Cinnamomum verum",
        model: "models/Cinnamon.glb",
        description: "Used in Ayurveda and Unani systems for diabetes management and digestive health, this aromatic bark is a key AYUSH medicinal plant.",
        mapLocations: [
            { name: "Wayanad, Kerala", coords: [11.6854, 76.1320], type: "commercial", description: "Best quality cinnamon in Western Ghats" },
            { name: "Idukki, Kerala", coords: [9.8814, 76.9721], type: "commercial", description: "Hill station plantations" },
            { name: "Coorg, Karnataka", coords: [12.4244, 75.7387], type: "commercial", description: "Premium spice cultivation region" },
            { name: "Chikmagalur, Karnataka", coords: [13.3161, 75.7720], type: "commercial", description: "High altitude cultivation" },
            { name: "Nilgiri Hills, Tamil Nadu", coords: [11.4916, 76.7337], type: "commercial", description: "Hill station spice gardens" },
            { name: "East Khasi Hills, Meghalaya", coords: [25.4670, 91.8983], type: "traditional", description: "Suitable climate cultivation" },
            { name: "Western Ghats Forest", coords: [11.0000, 76.0000], type: "wild", description: "Natural evergreen forest habitat" }
        ],
        diseases: [
            { name: "Diabetes", description: "Helps regulate blood sugar levels and improve insulin sensitivity." },
            { name: "Heart Disease", description: "Reduces cholesterol levels and supports heart health." },
            { name: "Digestive Issues", description: "Improves digestion and reduces stomach discomfort." },
            { name: "Common Cold", description: "Warming properties help treat cold and flu symptoms." },
            { name: "High Blood Pressure", description: "May help reduce blood pressure naturally." },
            { name: "Fungal Infections", description: "Antifungal properties help treat various infections." }
        ],
        uses: [
            { icon: "fas fa-cookie-bite", title: "Culinary", description: "Popular spice in baking, desserts, and beverages." },
            { icon: "fas fa-capsules", title: "Medicinal", description: "Used in traditional medicine for various health benefits." },
            { icon: "fas fa-spray-can", title: "Aromatherapy", description: "Essential oil used for its warming and stimulating properties." }
        ],
        cultivation: [
            { icon: "fas fa-thermometer-three-quarters", title: "Climate", description: "Thrives in tropical, humid climates with consistent rainfall." },
            { icon: "fas fa-leaf", title: "Soil", description: "Prefers well-drained, sandy loam soil rich in organic matter." },
            { icon: "fas fa-tree", title: "Growth", description: "Evergreen tree that can grow up to 10-15 meters tall." },
            { icon: "fas fa-scissors", title: "Pruning", description: "Regular pruning encourages bark formation." }
        ],
        harvesting: [
            { icon: "fas fa-calendar", title: "Timing", description: "Bark is harvested during rainy season when sap flow is high." },
            { icon: "fas fa-cut", title: "Process", description: "Inner bark is peeled and naturally curls into quills when dried." }
        ],
        location: [
            { icon: "fas fa-map-marker-alt", title: "Kerala", description: "Wayanad, Idukki, Kannur districts - Western Ghats region, best quality cinnamon." },
            { icon: "fas fa-map-marker-alt", title: "Karnataka", description: "Coorg (Kodagu), Chikmagalur, Hassan - hill station plantations." },
            { icon: "fas fa-map-marker-alt", title: "Tamil Nadu", description: "Nilgiri hills, Yercaud, Kodaikanal - high altitude cultivation." },
            { icon: "fas fa-map-marker-alt", title: "Meghalaya", description: "East Khasi Hills, West Garo Hills - suitable climate for cultivation." },
            { icon: "fas fa-map-marker-alt", title: "Assam", description: "Cachar, North Cachar Hills - limited but growing cultivation." },
            { icon: "fas fa-mountain", title: "Natural Habitat", description: "Wild cinnamon found in evergreen forests of Western and Eastern Ghats." }
        ]
    },
    cardamom: {
        name: "Cardamom (Elaichi)",
        scientificName: "Elettaria cardamomum",
        model: "models/Cardamom.glb",
        description: "The 'Queen of Spices' in Ayurveda and Siddha medicine, valued for digestive health and respiratory wellness in AYUSH treatments.",
        mapLocations: [
            { name: "Idukki, Kerala", coords: [9.8814, 76.9721], type: "commercial", description: "Cardamom Hills - largest producer" },
            { name: "Wayanad, Kerala", coords: [11.6854, 76.1320], type: "commercial", description: "Premium small cardamom cultivation" },
            { name: "Dindigul, Tamil Nadu", coords: [10.3624, 77.9814], type: "commercial", description: "Western Ghats cardamom region" },
            { name: "Theni, Tamil Nadu", coords: [10.0104, 77.4977], type: "commercial", description: "Hill station cultivation" },
            { name: "Coorg, Karnataka", coords: [12.4244, 75.7387], type: "commercial", description: "High-quality small cardamom" },
            { name: "Gangtok, Sikkim", coords: [27.3389, 88.6065], type: "traditional", description: "Large cardamom at high altitude" },
            { name: "Western Ghats Range", coords: [10.5000, 77.0000], type: "wild", description: "Natural ecosystem 600-1500m elevation" }
        ],
        diseases: [
            { name: "Digestive Problems", description: "Stimulates digestive enzymes and treats stomach disorders." },
            { name: "Bad Breath", description: "Natural breath freshener with antimicrobial properties." },
            { name: "Respiratory Issues", description: "Helps treat asthma, bronchitis, and other breathing problems." },
            { name: "Nausea", description: "Effective remedy for nausea and morning sickness." },
            { name: "Urinary Disorders", description: "Diuretic properties help treat kidney and bladder issues." },
            { name: "Depression", description: "Aromatic compounds may help improve mood and reduce stress." }
        ],
        uses: [
            { icon: "fas fa-coffee", title: "Beverages", description: "Essential ingredient in chai, coffee, and flavored drinks." },
            { icon: "fas fa-birthday-cake", title: "Desserts", description: "Popular flavoring agent in sweets and baked goods." },
            { icon: "fas fa-prescription", title: "Medicine", description: "Used in Ayurvedic formulations for digestive health." }
        ],
        cultivation: [
            { icon: "fas fa-cloud-rain", title: "Climate", description: "Requires cool, moist climate with high humidity." },
            { icon: "fas fa-mountain", title: "Altitude", description: "Grows best at 600-1500 meters above sea level." },
            { icon: "fas fa-tree", title: "Shade", description: "Cultivated under forest canopy or artificial shade." },
            { icon: "fas fa-thermometer-quarter", title: "Temperature", description: "Optimal temperature range is 10-35°C." }
        ],
        harvesting: [
            { icon: "fas fa-hand-holding", title: "Hand Picking", description: "Pods are carefully hand-picked when three-fourths ripe." },
            { icon: "fas fa-sun", title: "Drying", description: "Pods are dried in special curing chambers or sun-dried." }
        ],
        location: [
            { icon: "fas fa-map-marker-alt", title: "Kerala", description: "Idukki district (Cardamom Hills), Wayanad, Palakkad - largest producer in India." },
            { icon: "fas fa-map-marker-alt", title: "Tamil Nadu", description: "Dindigul, Theni, Coimbatore districts - Western Ghats region." },
            { icon: "fas fa-map-marker-alt", title: "Karnataka", description: "Coorg (Kodagu), Chikmagalur, Hassan - high-quality small cardamom." },
            { icon: "fas fa-map-marker-alt", title: "Sikkim", description: "Large cardamom cultivation in higher altitudes - different variety." },
            { icon: "fas fa-map-marker-alt", title: "Arunachal Pradesh", description: "Large cardamom in Tawang, West Kameng districts." },
            { icon: "fas fa-mountain", title: "Cardamom Hills", description: "Specialized ecosystem in Western Ghats at 600-1500m elevation." }
        ]
    },
    clove: {
        name: "Clove (Laung)",
        scientificName: "Syzygium aromaticum",
        model: "models/clove.glb",
        description: "Extensively used in Ayurveda, Unani, and Siddha systems for dental care, pain relief, and respiratory health in traditional AYUSH formulations.",
        mapLocations: [
            { name: "Kottayam, Kerala", coords: [9.5916, 76.5222], type: "commercial", description: "Ideal tropical climate for clove trees" },
            { name: "Ernakulam, Kerala", coords: [9.9312, 76.2673], type: "commercial", description: "Coastal cultivation region" },
            { name: "Dakshina Kannada, Karnataka", coords: [12.8438, 75.2479], type: "commercial", description: "Coastal and hill regions" },
            { name: "Udupi, Karnataka", coords: [13.3409, 74.7421], type: "commercial", description: "Traditional spice cultivation" },
            { name: "Panaji, Goa", coords: [15.4909, 73.8278], type: "traditional", description: "Portuguese era spice heritage" },
            { name: "Ratnagiri, Maharashtra", coords: [16.9902, 73.3120], type: "traditional", description: "Konkan region cultivation" },
            { name: "Western Coast Belt", coords: [12.0000, 75.0000], type: "wild", description: "Humid coastal areas and lower Ghat slopes" }
        ],
        diseases: [
            { name: "Dental Problems", description: "Powerful antiseptic properties treat toothache and gum diseases." },
            { name: "Respiratory Issues", description: "Helps treat cough, cold, asthma, and bronchitis." },
            { name: "Digestive Disorders", description: "Stimulates digestive enzymes and reduces bloating." },
            { name: "Headache", description: "Natural pain reliever for headaches and migraines." },
            { name: "Skin Infections", description: "Antimicrobial properties help treat skin conditions." },
            { name: "Nausea and Vomiting", description: "Effective remedy for motion sickness and morning sickness." }
        ],
        uses: [
            { icon: "fas fa-tooth", title: "Dental Care", description: "Used in toothpastes, mouthwashes, and dental treatments." },
            { icon: "fas fa-utensils", title: "Culinary", description: "Essential spice in Indian, Indonesian, and Middle Eastern cuisine." },
            { icon: "fas fa-spray-can", title: "Perfumery", description: "Essential oil used in perfumes and cosmetics." }
        ],
        cultivation: [
            { icon: "fas fa-thermometer-full", title: "Climate", description: "Requires hot, humid tropical climate year-round." },
            { icon: "fas fa-tint", title: "Rainfall", description: "Needs heavy rainfall (1000-2000mm annually)." },
            { icon: "fas fa-seedling", title: "Soil", description: "Grows best in rich, well-drained, volcanic soil." },
            { icon: "fas fa-clock", title: "Maturity", description: "Trees start producing after 6-8 years." }
        ],
        harvesting: [
            { icon: "fas fa-calendar-check", title: "Timing", description: "Buds harvested when pink and before flowering." },
            { icon: "fas fa-hand-paper", title: "Method", description: "Carefully hand-picked to avoid damaging the buds." }
        ],
        location: [
            { icon: "fas fa-map-marker-alt", title: "Kerala", description: "Kottayam, Ernakulam, Thrissur districts - ideal tropical climate for clove trees." },
            { icon: "fas fa-map-marker-alt", title: "Karnataka", description: "Dakshina Kannada, Udupi, Uttara Kannada - coastal and hill regions." },
            { icon: "fas fa-map-marker-alt", title: "Tamil Nadu", description: "Kanyakumari, Tirunelveli, Nilgiri hills - suitable humid conditions." },
            { icon: "fas fa-map-marker-alt", title: "Goa", description: "Throughout the state - traditional spice cultivation since Portuguese era." },
            { icon: "fas fa-map-marker-alt", title: "Maharashtra", description: "Konkan region, Ratnagiri, Sindhudurg - coastal belt cultivation." },
            { icon: "fas fa-mountain", title: "Western Coast", description: "Naturally thrives in humid coastal areas and lower Western Ghat slopes." }
        ]
    }
};


























































// Get plant name from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const plantName = urlParams.get('plant') || 'tulsi';
const plantData = plantsData[plantName];

// Load plant data
function loadPlantData() {
    if (!plantData) {
        document.getElementById('plantName').textContent = 'Plant not found';
        document.getElementById('scientificName').textContent = 'Please check the plant name and try again';
        document.getElementById('plantDescription').textContent = 'This plant information is not available in our database.';
        return;
    }

    // Update basic info
    document.getElementById('plantName').textContent = plantData.name;
    document.getElementById('scientificName').textContent = plantData.scientificName;
    document.getElementById('plantDescription').textContent = plantData.description;
    document.getElementById('plantModel').src = plantData.model;

    // Load diseases
    const diseasesList = document.getElementById('diseasesList');
    diseasesList.innerHTML = plantData.diseases.map(disease => `
                <div class="disease-card">
                    <h4>${disease.name}</h4>
                    <p>${disease.description}</p>
                </div>
            `).join('');

    // Load uses
    const usesList = document.getElementById('usesList');
    usesList.innerHTML = plantData.uses.map(use => `
                <li>
                    <i class="${use.icon}"></i>
                    <div>
                        <strong>${use.title}:</strong>
                        ${use.description}
                    </div>
                </li>
            `).join('');

    // Load cultivation
    const cultivationList = document.getElementById('cultivationList');
    cultivationList.innerHTML = plantData.cultivation.map(item => `
                <li>
                    <i class="${item.icon}"></i>
                    <div>
                        <strong>${item.title}:</strong>
                        ${item.description}
                    </div>
                </li>
            `).join('');

    // Load harvesting
    const harvestingList = document.getElementById('harvestingList');
    harvestingList.innerHTML = plantData.harvesting.map(item => `
                <li>
                    <i class="${item.icon}"></i>
                    <div>
                        <strong>${item.title}:</strong>
                        ${item.description}
                    </div>
                </li>
            `).join('');

    // Load location
    const locationList = document.getElementById('locationList');
    locationList.innerHTML = plantData.location.map(item => `
                <li>
                    <i class="${item.icon}"></i>
                    <div>
                        <strong>${item.title}:</strong>
                        ${item.description}
                    </div>
                </li>
            `).join('');
}

// Map functionality
let plantMap = null;

function initializeMap() {
    if (!plantData || !plantData.mapLocations) return;

    // Create map centered on India
    plantMap = L.map('plantLocationMap').setView([20.5937, 78.9629], 5);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
    }).addTo(plantMap);

    // Define custom icons for different location types
    const icons = {
        commercial: L.divIcon({
            className: 'custom-marker commercial-marker',
            html: '<div style="background: #22c55e; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        }),
        wild: L.divIcon({
            className: 'custom-marker wild-marker',
            html: '<div style="background: #8b5cf6; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        }),
        traditional: L.divIcon({
            className: 'custom-marker traditional-marker',
            html: '<div style="background: #f59e0b; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        }),
        sacred: L.divIcon({
            className: 'custom-marker sacred-marker',
            html: '<div style="background: #ef4444; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        })
    };

    // Add markers for each location
    plantData.mapLocations.forEach(location => {
        const marker = L.marker(location.coords, {
            icon: icons[location.type] || icons.commercial
        }).addTo(plantMap);

        // Add popup with location details
        marker.bindPopup(`
                    <div style="font-family: Inter, sans-serif; max-width: 200px;">
                        <h4 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px;">${location.name}</h4>
                        <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.4;">${location.description}</p>
                        <div style="margin-top: 8px; padding: 4px 8px; background: var(--light-green); border-radius: 4px; font-size: 12px; color: var(--primary-green); text-transform: capitalize;">
                            ${location.type.replace('_', ' ')} Location
                        </div>
                    </div>
                `);
    });

    // Fit map to show all markers
    const group = new L.featureGroup(plantMap._layers);
    if (Object.keys(plantMap._layers).length > 0) {
        plantMap.fitBounds(group.getBounds().pad(0.1));
    }
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', function () {
    loadPlantData();

    // Sidebar navigation
    const menuLinks = document.querySelectorAll('.menu-link');
    const contentSections = document.querySelectorAll('.content-section');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links and sections
            menuLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked link
            link.classList.add('active');

            // Show corresponding section
            const sectionId = link.dataset.section;
            document.getElementById(sectionId).classList.add('active');

            // Initialize map when location section is shown
            if (sectionId === 'location' && !plantMap) {
                setTimeout(initializeMap, 100); // Small delay to ensure container is visible
            }
        });
    });

    // Plant search functionality
    const plantSearch = document.getElementById('plantSearch');
    if (plantSearch) {
        plantSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            const plantItems = document.querySelectorAll('.plant-nav-item');
            let visibleCount = 0;
            
            // Remove existing "not found" message
            const existingNotFound = document.querySelector('.no-plants-found');
            if (existingNotFound) {
                existingNotFound.remove();
            }
            
            if (searchTerm === '') {
                // Show all plants if search is empty
                plantItems.forEach(item => {
                    item.style.display = 'flex';
                    visibleCount++;
                });
            } else {
                // Filter plants based on search term
                plantItems.forEach(item => {
                    const plantNameElement = item.querySelector('.plant-name');
                    const plantName = plantNameElement ? plantNameElement.textContent.toLowerCase() : '';
                    const plantData = item.getAttribute('data-plant') || '';
                    
                    if (plantName.includes(searchTerm) || plantData.includes(searchTerm)) {
                        item.style.display = 'flex';
                        visibleCount++;
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Show "Plant not found" message if no plants match
                if (visibleCount === 0) {
                    const notFoundDiv = document.createElement('div');
                    notFoundDiv.className = 'no-plants-found';
                    notFoundDiv.innerHTML = `
                        <div style="text-align: center; padding: 1rem; color: #666; font-style: italic;">
                            <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.5;"></i>
                            <p style="margin: 0; font-weight: 600;">Plant not found</p>
                            <small style="opacity: 0.7;">Try searching for: Tulsi, Ashwagandha, Turmeric, Cinnamon, Cardamom, or Clove</small>
                        </div>
                    `;
                    document.querySelector('.plants-list').appendChild(notFoundDiv);
                }
            }
        });
    }

    // Update active plant in sidebar based on current URL
    updateActivePlant();
});

// Plant navigation function
function navigateToPlant(plantName) {
    console.log('Navigating to plant:', plantName);
    
    // Update URL and reload page with new plant
    const newUrl = `plant-details.html?plant=${plantName}`;
    window.location.href = newUrl;
}

// Add click event listeners to plant nav items
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to plant navigation items
    const plantNavItems = document.querySelectorAll('.plant-nav-item');
    plantNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const plantName = this.getAttribute('data-plant');
            if (plantName) {
                navigateToPlant(plantName);
            }
        });
    });
});

// Update active plant in sidebar
function updateActivePlant() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentPlant = urlParams.get('plant') || 'tulsi';
    
    // Remove active class from all plant items
    const plantItems = document.querySelectorAll('.plant-nav-item');
    plantItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to current plant
    const currentPlantItem = document.querySelector(`[data-plant="${currentPlant}"]`);
    if (currentPlantItem) {
        currentPlantItem.classList.add('active');
    }
}

// Keyboard navigation for plant sidebar
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('plantSearch');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Mobile navigation functions
function toggleMobileNav() {
    const sidebar = document.getElementById('plantSidebar');
    const overlay = document.querySelector('.mobile-overlay');
    
    sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('active');
}

function closeMobileNav() {
    const sidebar = document.getElementById('plantSidebar');
    const overlay = document.querySelector('.mobile-overlay');
    
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
}

// Show/hide mobile toggle button based on screen size
function handleResize() {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    if (window.innerWidth <= 768) {
        mobileToggle.style.display = 'block';
    } else {
        mobileToggle.style.display = 'none';
        closeMobileNav(); // Close mobile nav if screen becomes larger
    }
}

// Add resize listener
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);