document.getElementById("jobApplicationForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let data = {};
    formData.forEach((value, key) => data[key] = value);

    try {
        let response = await fetch("https://script.google.com/macros/s/AKfycby2G-1az5Prc7eUYsspvgS_PAJpROdqXkNvsrcCTZaEo-nHOf_WmmmHaLK4jNHR2oyh/execURL", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("درخواست شما با موفقیت ارسال شد.");
            form.reset();
        } else {
            alert("ارسال درخواست با مشکل مواجه شد.");
        }
    } catch (error) {
        alert("خطا در ارتباط با سرور.");
    }
});
