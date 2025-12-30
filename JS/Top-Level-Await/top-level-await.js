// Old Way
async function loadData() {
    const response = await fetch("https://atul-sharma-personal-portfolio.netlify.app");
    const data = await response.json();
    console.log(data);
}

loadData();

// New Way
const response = await fetch("https://atul-sharma-personal-portfolio.netlify.app");
const data = await response.text(); // portfolio is HTML, not JSON
console.log(data);


console.log("Start");                            // Starts
await new Promise(r => setTimeout(r, 2000));     // Waits 2 Sec
console.log("End");                              // End

