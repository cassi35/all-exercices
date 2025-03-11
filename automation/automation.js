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
const nodemailer = require('nodemailer')
const html = `
  <h1>hello world</h1>
  <p>isn't nodemaler useful?</p>
`
async function main(){
 const transporter =  nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
      user:'automocaoemail@gmail.com',
      pass:'hbzd cues nksp fmkf'
    }
  })
  const info = await transporter.sendMail({
    from: '"automocao de email" <automocaoemail@gmail.com>', 
    to: 'altsobral@gmail.com', // Email do destinatário
    subject: 'Assunto do Email', // Assunto do email
    text: 'voce abriu uma conta banco itau', // Corpo do email em texto simples
    html: html // Corpo do email em HTML
  });
  
  console.log("message sent:"+info.messageId)
}
// main()
// .catch(e => console.log(e))

