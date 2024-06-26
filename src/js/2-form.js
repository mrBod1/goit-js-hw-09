const formData = {
    email: "",
    message: ""
};

const storedData = localStorage.getItem("feedback-form-state");
if (storedData) {
    const parsedData = JSON.parse(storedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
}

const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");

function saveFormData() {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

emailInput.addEventListener("input", (event) => {
    formData.email = event.target.value;
    saveFormData();
});

messageInput.addEventListener("input", (event) => {
    formData.message = event.target.value;
    saveFormData();
});

const form = document.querySelector(".feedback-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Fill please all fields.");
    } else {
        console.log("Дані форми відправлені:", formData);
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
        emailInput.value = "";
        messageInput.value = "";
    }
});

// Відновлення даних з localStorage при завантаженні сторінки
if (storedData) {
    emailInput.value = formData.email;
    messageInput.value = formData.message;
}
