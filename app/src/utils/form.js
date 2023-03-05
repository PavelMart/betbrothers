// Отправка данных на сервер

export const sendMail = async (event, php) => {
  event.preventDefault();

  const loading = document.getElementById("loading");
  const sign_up_info = document.getElementById("sign_up_info");
  const sign_up_success = document.getElementById("x_sign_up_success");
  const sign_up_error = document.getElementById("x_sign_up_error");

  const data = new FormData(event.target);

  const bookmaker_1 = data.get("bookmaker_1");
  const bookmaker_2 = data.get("bookmaker_2");
  const bookmaker_3 = data.get("bookmaker_3");

  if (!bookmaker_1 && !bookmaker_2 && !bookmaker_3) {
    return alert("Choose at least one bookmaker");
  }

  const bookmakersArray = [];

  if (bookmaker_1) bookmakersArray.push("Laystars");
  if (bookmaker_2) bookmakersArray.push("PS3838");
  if (bookmaker_3) bookmakersArray.push("Spotrsbet.io");

  data.set("bookmakers", bookmakersArray.join(", "));

  try {
    loading.style.display = "block";
    const response = await fetch(php, {
      method: "POST",
      body: data,
    });
    await response.json();
    loading.style.display = "none";
    sign_up_info.style.display = "none";
    sign_up_success.style.display = "";
  } catch (error) {
    loading.style.display = "none";
    sign_up_info.style.display = "none";
    sign_up_error.style.display = "";
  }
};
