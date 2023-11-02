const data = new Promise((resolve, reject) => {
  fetch("./data.json")
    .then((respond) => {
      resolve(respond.json());
    })
    .catch((err) => {
      reject(err);
    });
});

const createCard = () => {
  let mainContainer = document.querySelector(".container");

  Promise.all([data]).then((developers) => {
    developers[0].developers.forEach((developer) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("flex-row");
      mainContainer.appendChild(card);

      let cardLeft = document.createElement("div");
      cardLeft.classList.add("card-left");
      cardLeft.classList.add("flex-row");
      card.appendChild(cardLeft);

      let cardImage = document.createElement("div");
      cardImage.classList.add("card-image");
      cardLeft.appendChild(cardImage);

      let logo = document.createElement("img");
      logo.classList.add("logo");
      logo.src = developer.logo;
      cardImage.appendChild(logo);

      let cardDeveloper = document.createElement("div");
      cardDeveloper.classList.add("card-developer");
      cardLeft.appendChild(cardDeveloper);

      let cardDeveloperHeader = document.createElement("div");
      cardDeveloperHeader.classList.add("card-developer-header");
      cardDeveloperHeader.classList.add("flex-row");
      cardDeveloper.appendChild(cardDeveloperHeader);

      let company = document.createElement("p");
      company.classList.add("company");
      cardDeveloperHeader.appendChild(company);
      company.innerText = developer.company;

      let newParagraph = document.createElement("p");
      newParagraph.classList.add("new");
      cardDeveloperHeader.appendChild(newParagraph);
      newParagraph.innerText = developer.new;

      let featured = document.createElement("p");
      featured.classList.add("featured");
      cardDeveloperHeader.appendChild(featured);
      featured.innerText = developer.featured;

      let position = document.createElement("p");
      position.classList.add("position");
      cardDeveloper.appendChild(position);
      position.innerText = developer.position;

      let cardDeveloperFooter = document.createElement("div");
      cardDeveloperFooter.classList.add("card-developer-footer");
      cardDeveloperFooter.classList.add("flex-row");
      cardDeveloper.appendChild(cardDeveloperFooter);

      let postedAt = document.createElement("p");
      postedAt.classList.add("postedAt");
      cardDeveloperFooter.appendChild(postedAt);
      postedAt.innerText = developer.postedAt;

      let contract = document.createElement("p");
      contract.classList.add("contract");
      cardDeveloperFooter.appendChild(contract);
      contract.innerText = developer.contract;

      let location = document.createElement("p");
      location.classList.add("location");
      cardDeveloperFooter.appendChild(location);
      location.innerText = developer.location;

      let cardRight = document.createElement("div");
      cardRight.classList.add("card-right");
      cardRight.classList.add("flex-row");
      card.appendChild(cardRight);

      let role = document.createElement("p");
      role.classList.add("role");
      cardRight.appendChild(role);
      role.innerText = developer.role;

      let level = document.createElement("p");
      level.classList.add("level");
      cardRight.appendChild(level);
      level.innerText = developer.level;

      developer.languages.forEach((language) => {
        let languageParagraph = document.createElement("p");
        languageParagraph.classList.add("language");
        cardRight.appendChild(languageParagraph);
        languageParagraph.innerText = language;
      });
    });
  });
};

createCard();
