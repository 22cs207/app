document.addEventListener('DOMContentLoaded', function() {
    const chatBubble = document.querySelector('.chat-bubble');
    const chatIcon = document.querySelector('.chat-icon');
    const chatContainer = document.querySelector('.chat-container');
    const closeBtn = document.querySelector('.close-btn');
    const chatInput = document.querySelector('.chat-input');
    const sendBtn = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');

    // Toggle chat container
    chatIcon.addEventListener('click', () => {
        chatContainer.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        chatContainer.classList.remove('active');
    });

    // Auto-resize textarea
    chatInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // Send message function
    async function sendMessage(message) {
        console.log('Sending message:', message);
        // Add user message to chat
        addMessage(message, 'user');
        
        // Show thinking animation
        const thinkingDiv = showThinking();

        try {
            console.log('Making API request...');
            const response = await fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message })
            });

            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error);
            }

            // Add bot response to chat
            addMessage(data.response, 'bot');
        } catch (error) {
            console.error('Error:', error);
            addMessage('Sorry, I encountered an error. Please try again later.', 'bot');
        }
    }

    // Show thinking animation
    function showThinking() {
        const thinkingDiv = document.createElement('div');
        thinkingDiv.classList.add('thinking');
        thinkingDiv.innerHTML = `
            <div class="thinking-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        chatMessages.appendChild(thinkingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return thinkingDiv;
    }

    // Format bot response
    function formatBotResponse(response) {
        // Handle JSON responses
        if (typeof response === 'object') {
            const formattedResponse = [];
            if (response.identified_plants && response.identified_plants.length > 0) {
                formattedResponse.push('Plants mentioned: ' + response.identified_plants.join(', '));
            }
            if (response.identified_conditions && response.identified_conditions.length > 0) {
                formattedResponse.push('Conditions mentioned: ' + response.identified_conditions.join(', '));
            }
            if (response.response) {
                formattedResponse.push('\n' + response.response);
            }
            return formattedResponse.join('\n');
        }
        return response;
    }

    // Add message to chat container
    function addMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${type}-message`);
        
        // Remove any thinking animation if it exists
        const thinking = chatMessages.querySelector('.thinking');
        if (thinking) {
            thinking.remove();
        }

        // Format and set the message
        const formattedMessage = type === 'bot' ? formatBotResponse(message) : message;
        messageDiv.textContent = formattedMessage;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle send button click
    sendBtn.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            sendMessage(message);
            chatInput.value = '';
            chatInput.style.height = 'auto';
        }
    });

    // Handle enter key press
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendBtn.click();
        }
    });
});