// import {test,expect} from "@playwright/test";

// test("verify page title",async ({ page })=>
// {
//     await page.goto("https://testautomationpractice.blogspot.com/");

//     let title:string=await page.title();
//     console.log("title",title);

//     // await expect(page).toHaveTitle("Automation Testing Practice");
// });




import {test,expect,Locator} from "@playwright/test";

test("verify image is visible",async ({ page })=>
{
    await page.goto("https://automationexercise.com/");

    let logo:Locator=page.getByAltText("Website for automation practice");
    await logo.click();

    // await expect(page).toHaveTitle("Automation Testing Practice");
})