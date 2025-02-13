document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chatForm');
    const messagesContainer = document.getElementById('messagesContainer');

    // Función para validar campos del formulario
    function validateField(field, errorElement) {
        const value = field.value.trim();
        const isValid = value.length > 0;

        errorElement.style.display = isValid ? 'none' : 'block';
        field.style.borderColor = isValid ? '#ddd' : 'red';

        return isValid;
    }

    // Función para crear un nuevo elemento de mensaje
    function createMessageElement(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';

        const senderDiv = document.createElement('div');
        senderDiv.className = 'message-sender';
        senderDiv.textContent = sender;

        const textDiv = document.createElement('div');
        textDiv.className = 'message-text';
        textDiv.textContent = message;

        messageDiv.appendChild(senderDiv);
        messageDiv.appendChild(textDiv);

        return messageDiv;
    }

    // Manejar el envío del formulario
    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const senderField = document.getElementById('sender');
        const messageField = document.getElementById('message');
        const senderError = document.getElementById('senderError');
        const messageError = document.getElementById('messageError');

        // Validar ambos campos
        const isSenderValid = validateField(senderField, senderError);
        const isMessageValid = validateField(messageField, messageError);

        // Si ambos campos son válidos, crear y agregar el mensaje
        if (isSenderValid && isMessageValid) {
            const messageElement = createMessageElement(
                senderField.value.trim(),
                messageField.value.trim()
            );

            // Agregar el nuevo mensaje al principio del contenedor
            messagesContainer.insertBefore(messageElement, messagesContainer.firstChild);

            // Limpiar el formulario
            chatForm.reset();
        }
    });

    // Validación en tiempo real durante la escritura
    const fields = [
        {field: 'sender', error: 'senderError'},
        {field: 'message', error: 'messageError'}
    ];

    fields.forEach(({field, error}) => {
        const fieldElement = document.getElementById(field);
        const errorElement = document.getElementById(error);

        fieldElement.addEventListener('input', function () {
            validateField(fieldElement, errorElement);
        });
    });
});