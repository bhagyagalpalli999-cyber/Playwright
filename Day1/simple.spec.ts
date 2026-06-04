// import { test, expect } from '@playwright/test';

// test('Playwright homepage has title and Get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);

//   const getStartedLink = page.getByRole('link', { name: 'Get started' });
//   await expect(getStartedLink).toBeVisible();
//   await getStartedLink.click();
// });


// import { test, expect } from '@playwright/test';

// test('finds text and clicks it', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   const element = page.getByText('Get started');
//   await expect(element).toBeVisible();
//   await element.click();

//   const installationHeading = page.getByRole('heading', { name: 'Installation' });
//   await expect(installationHeading).toBeVisible();

//   const installationText = await installationHeading.textContent();
//   console.log('Installation text:', installationText);

//   const email = page.getByLabel('Email');
//   await email.fill('user@example.com');

// });



// import { test, expect } from '@playwright/test';
// test('Demo test', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');
//   await page.getByLabel('Name:').fill('John');
// });

// import { test, expect } from '@playwright/test';
// test('Demo', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');

  

//   // Relative xpath logo
//   const nameInput = page.locator("//input[@id='name']");
//   await nameInput.fill('bhagayshri');
//   console.log('Filled name input');
// });


import { test, expect, Locator } from '@playwright/test';
test('Demo', async ({ page }) => {
  // await page.goto('https://demowebshop.tricentis.com/');

  // const products:Locator=page.locator("//h2//a[contains(@href,'computer')]");

  // console.log(await products.count());
  // console.log(await products.first().textContent());
  // console.log(await products.last().textContent());
  // console.log(await products.nth(3).textContent());
  

  // const pro:string[]=await products.allTextContents();
  // for(let i=0;i<pro.length;i++){
  //   console.log(pro[i]);
  // }

  //starts-with
  // const pro:Locator=page.locator("//h2//a[starts-with(@href,'/build')]");
  // const num:number=await pro.count();
  // expect(num).toBeGreaterThan(0);

  //text()
  // const registerLink:Locator=page.locator("//a[text()='Register']");
  // await expect(registerLink).toBeVisible();

  //last()
  // const v:Locator=page.locator("//div[@class='column my-account']//li[last()]");
  // console.log(await v.textContent());

  //position
 
  // const v:Locator=page.locator(" //div[@class='column my-account']//li[position()=3]");
  // console.log(await v.textContent());

  //self::
  await page.goto("https://www.w3schools.com/html/html_tables.asp");
  // const v:Locator=page.locator("//td[text()='Germany']/self::td");
  // await expect(v).toHaveText('Germany');

  //parent
  // const v:Locator=page.locator("//td[text()='Germany']/parent::tr");
  // console.log(await v.allTextContents());

  // const v1:Locator=page.locator("//table[@id='customers']//tr[3]/child::td");
  // console.log(await v1.allTextContents());


  //ancestor

  //following 
  const v:Locator =page.locator("//td[normalize-space()='Germany']/following::td");
  console.log(await v.count());

});

