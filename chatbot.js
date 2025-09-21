document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chat-icon');
    const chatContainer = document.getElementById('chat-container');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const icon = chatIcon.querySelector('i');

    const API_KEY = "AIzaSyAaoFBv2N3uFFSb8cLnDkTwq9ei1Cb8Vb0";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

    const toggleChat = () => {
        chatContainer.classList.toggle('active');
        if (chatContainer.classList.contains('active')) {
            icon.classList.remove('fa-comments');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-comments');
        }
    };

    chatIcon.addEventListener('click', toggleChat);

    const addMessage = (text, type) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const showThinking = () => {
        const thinkingDiv = document.createElement('div');
        thinkingDiv.classList.add('message', 'thinking');
        thinkingDiv.innerHTML = `<div class="thinking-dots"><span></span><span></span><span></span></div>`;
        chatMessages.appendChild(thinkingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return thinkingDiv;
    };

    async function getBotResponse(userMessage) {
        if (API_KEY === "YOUR_GOOGLE_AI_API_KEY_HERE") {
            return "Error: Please add your Google AI API key to the script.";
        }

        try {
            const payload = {
                "contents": [{
                    "parts": [{
                        "text": `You are AYUSH Assistant, a friendly and knowledgeable expert on medicinal plants, particularly those used in AYUSH systems (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy). Provide helpful, safe, and accurate information. Do not provide medical advice, diagnosis, or prescriptions. Always recommend consulting a qualified healthcare professional before using any herbal remedies.

User question: "${userMessage}"`
                    }]
                }],
            };

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API returned an error: ${errorData.error.message}`);
            }

            const data = await response.json();

            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Could not parse the bot's response.");
            }
        } catch (error) {
            console.error("Error fetching from API:", error);
            return `Sorry, I'm having trouble connecting right now. Please check the console for details.`;
        }
    }

    const handleSendMessage = async () => {
        const messageText = chatInput.value.trim();
        if (!messageText) return;

        sendBtn.disabled = true;
        chatInput.disabled = true;

        addMessage(messageText, 'user-message');
        chatInput.value = '';

        const thinkingIndicator = showThinking();
        const botResponse = await getBotResponse(messageText);

        thinkingIndicator.remove();
        if (botResponse.toLowerCase().startsWith("sorry") || botResponse.toLowerCase().startsWith("error")) {
            addMessage(botResponse, 'error-message');
        } else {
            addMessage(botResponse, 'bot-message');
        }

        sendBtn.disabled = false;
        chatInput.disabled = false;
        chatInput.focus();
    };

    sendBtn.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    });
});
