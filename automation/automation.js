const { firefox } = require('playwright');
async function automateFirefoxSearch() {
  const browser = await firefox.launch({ headless: false })
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com/watch?v=32M1al-Y6Ag');
  await page.waitForTimeout(5000);
}
// automateFirefoxSearch()
const { exec } = require('child_process');
function change(s, prog, version) {
  exec('gnome-terminal -- bash -c "vim; exec bash"', (err, stdout, stderr) => {
    if (err) {
        console.error(`Erro ao abrir o terminal: ${err.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Terminal com Node.js aberto com sucesso!`);
});
}
// change("Tues April 9, 2005", "Ladder", 1.1); // Chamando a função

