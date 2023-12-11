function encodeAndDecodeMessages() {
    let encodeAndSendButton = document.getElementsByTagName("button")[0];

    encodeAndSendButton.addEventListener("click", encodeAndSend);

    let decodeButton = document.getElementsByTagName("button")[1];

    decodeButton.addEventListener("click", decode);

    function encodeAndSend(e) {
        let senderTextAreaElement = e.target.parentNode
            .querySelector("textarea");

        let senderMessage = senderTextAreaElement.value;
    
        senderTextAreaElement.value = "";
    
        let encodedMessage = "";
    
        for (let i = 0; i < senderMessage.length; i++) {
            encodedMessage += 
                String.fromCharCode(senderMessage[i].charCodeAt(0) + 1);
        }

        let receiverTextAreaElement = e.target.parentNode.parentNode
            .getElementsByTagName("textarea")[1];
        
        receiverTextAreaElement.value = encodedMessage;
    }

    function decode(e) {
        let receiverTextAreaElement = e.target.parentNode
            .querySelector("textarea");

        let encodedMessage = receiverTextAreaElement.value;

        let decodedMessage = "";

        for (let i = 0; i < encodedMessage.length; i++) {
            decodedMessage += 
                String.fromCharCode(encodedMessage[i].charCodeAt(0) - 1);
        }

        receiverTextAreaElement.value = decodedMessage;
    }
}