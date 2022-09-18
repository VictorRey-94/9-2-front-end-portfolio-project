const options = {
  headers: {
    "x-api-key":
      "live_fFrRONdaeTZ2b6GBxkr9e4l1fnTYUvkkOuAofGDTdHeno0TCXa9XeikKB6wZ1viz",
  },
};

const dogList = document.querySelector("#dog-list");

fetch("https://api.thedogapi.com/v1/breeds", options)
  .then((response) => response.json())
  .then((data) => {
    dropDown(data);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let dogDiv = document.createElement("div");
      dogDiv.addEventListener("click", (e) => {
        removeActiveClasses();
        e.target.classList.add("active");
      });
      dogDiv.setAttribute("class", "panel");
      dogDiv.style.backgroundImage = `url("${data[i].image.url}")`;
      //   console.log(dogDiv);
      let h3 = document.createElement("h3");
      h3.innerText = data[i].name;
      document.querySelector(".container").append(dogDiv);
      dogDiv.append(h3);
    }
  })
  .catch((err) => console.error(err));

function removeActiveClasses() {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function dropDown(data) {
  const breedGroupList = [...new Set(data.map((d) => d.breed_group))].filter(
    (breedGroup) => !!breedGroup
  );

  for (let i = 0; i < breedGroupList.length; i++) {
    let drpDwn = document.querySelector(".dropdown-content");
    let breedGroup = document.createElement("a");
    breedGroup.textContent = breedGroupList[i];
    drpDwn.append(breedGroup);
  }
}



fetch("https://api.thedogapi.com/v1/breeds?attach_breed=172", options)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const p = document.createElement("p");
      p.innerText = data[i].name;

      p.addEventListener("click", (e) => {
        e.preventDefault;
        fetch(`https://api.thedogapi.com/v1/breeds/search?q=${p.innerText}`)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
          });
      });
      dogList.append(p);
      console.log(dogList);
    }
    console.log(data);
  });
