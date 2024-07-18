function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100; // convert cm to meters
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    if(weight && height && age) {
        let bmi = weight / (height * height);
        bmi = bmi.toFixed(1);

        let category = "";
        if(bmi < 18.5) {
            category = "Berat badan kurang";
        } else if(bmi >= 18.5 && bmi <= 24.9) {
            category = "Berat badan normal";
        } else if(bmi >= 25 && bmi <= 29.9) {
            category = "Berat badan berlebih";
        } else {
            category = "Obesitas";
        }

        document.getElementById("bmi-value").innerText = `BMI Anda: ${bmi}`;
        document.getElementById("bmi-category").innerText = `Kategori: ${category}`;
    } else {
        alert("Mohon isi semua bidang yang diperlukan");
    }
}

function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    document.getElementById("bmi-value").innerText = "";
    document.getElementById("bmi-category").innerText = "";
}
