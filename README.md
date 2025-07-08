# 🎂 Age Calculator

This is a simple and responsive web application built using **HTML**, **CSS**, and **JavaScript** that allows users to calculate their age by entering their date of birth.



## 🚀 Features

- Simple and intuitive user interface
- Real-time age calculation
- Alerts user if no date is selected
- Hover effects for better UI experience
- Fully responsive design

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript**

---



---

## 🧠 How It Works

1. User selects their **Date of Birth** using the input field.
2. On clicking the **"Calculate"** button, JavaScript calculates the difference between the current date and selected date.
3. Result is shown in an alert and also displayed on the page.

---

## 💡 Code Snippet

```js
function ageValue(value){
    const currentDate = new Date();
    const birthdayDate = new Date(value);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}




