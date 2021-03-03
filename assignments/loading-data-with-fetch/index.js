const fetchText = async (url) => {
  const response = await fetch(url);
  return await response.text();
};

const csvUrl = "https://gist.githubusercontent.com/damianklick/c0386afa2fe349606c406fc4c09d1cc6/raw/cssNamedColurs.csv";

fetchText(csvUrl).then(text => {
  console.log(text);
});

// fetch(url).then(response => {
//   response.text().then(text => {
//     console.log(text);
//   });
// });