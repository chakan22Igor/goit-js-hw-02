function formatMessage (message, maxLength) {
    if (message.slice(maxLength)) {
        return message.slice(0, maxLength) + "..."
    }
    else {
        return message
    }
}
console.log(formatMessage("Curabitur ligula sapien", 16))