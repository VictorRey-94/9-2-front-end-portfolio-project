const options = {
    headers: {
      "x-api-key":
        "live_fFrRONdaeTZ2b6GBxkr9e4l1fnTYUvkkOuAofGDTdHeno0TCXa9XeikKB6wZ1viz",
    },
  };
  
  fetch("https://api.thedogapi.com/v1/breeds", options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); })