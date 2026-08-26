const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    userDataDir: '/private/tmp/claude-501/-Users-io-Desktop-cursor/43b1934c-b9f9-421e-8a02-4bb695374cda/scratchpad/pptr-fresh-' + Date.now(),
    args: ['--no-sandbox', '--window-size=1440,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.emulateMediaFeatures([{name:'prefers-reduced-motion', value:'reduce'}]); // いお様の環境(reduceMotion=1)を再現
  await page.goto('https://airis-motosumiyoshi.surge.sh/', { waitUntil: 'domcontentloaded' });
  const st = await page.evaluate(() => {
    const el = document.getElementById('airis-intro');
    const cs = getComputedStyle(el);
    return { display: cs.display, visibility: cs.visibility, opacity: cs.opacity, offsetHeight: el.offsetHeight };
  });
  console.log('STATE=' + JSON.stringify(st));
  const dir='/private/tmp/claude-501/-Users-io-Desktop-cursor/43b1934c-b9f9-421e-8a02-4bb695374cda/scratchpad/';
  await new Promise(r=>setTimeout(r,750));
  await page.screenshot({path:dir+'pptr_intro.png'});
  await browser.close();
  console.log('DONE');
})().catch(e=>{console.log('ERR='+e.message);process.exit(1);});
