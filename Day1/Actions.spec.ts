// import{test,expect,locator} from "@playwright/test";

// test('Actions',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/');


//     //textbox()
//     const v:locator= page.locator("//input[@id='name']");
//     await expect(v).toBeVisible();
//     await expect(v).toBeEnabled();

//     const maxlength:number=await v.getAttribute("maxlength");
//     expect(maxlength).toBe("15");
//     await v.fill("mansaaa");
//     console.log("textcontent of firstname",await v.inputValue());

//     await expect(await v.inputValue()).toBe("mansaaa");

//     await page.waitForTimeout(3000);



    

// })



//RadioButton()
// import{test,expect,locator} from "@playwright/test";

// test('Radio button actions',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/');

//     const v:locator=page.locator("//input[@id='male']");
//     await expect(v).toBeVisible();
//     await expect(v).toBeEnabled();
//     await expect(await v.isChecked()).toBe(false);

//     await v.check();
//     await expect(v).toBeChecked();




//     await page.waitForTimeout(3000);



    

// })



// import{test,expect,locator} from "@playwright/test";

// test('checkbox actions',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/');

    //select specific checkbox
    // const v:locator=page.getByLabel('Sunday');
    // await v.check();
    // await expect(v).toBeChecked();


    //get all checkboxes
    // const days:string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // const checkboxes:locator[]=days.map(day=>page.getByLabel(day));
    // expect(checkboxes.length).toBe(7);

    // for(const checkbox of checkboxes){
    //     await checkbox.check();
    //     await expect(checkbox).toBeChecked();
    // }


    //select last 3 checkboxes

// for(const checkbox of checkboxes.slice(-4)){
//         await checkbox.check();
//         console.log(await checkbox.isChecked());
//     }


// //cehck if it is unchecked or not
// for(const checkbox of checkboxes){
//     await checkbox.uncheck();
//         await expect(checkbox).not.toBeChecked();
        
//     }


//if checkboxes are selected then uncheck and if no selected then check
    // for(const checkbox of checkboxes){
    //     if(await checkbox.isChecked()){
    //         await checkbox.uncheck();
    //         await expect(checkbox).not.toBeChecked();
    //     }
    //     else{
    //         await checkbox.check();
    //         await expect(checkbox).toBeChecked();
    //     }

    // }

    //i want  to select random 3 checkboxes(2,4,6)

    // const index:number[]=[2,4,6];
    // for(const i of index){
    //     await checkboxes[i].check();
    //     await expect(checkboxes[i]).toBeChecked();
    // }



    //select checkbox based on label
    




//     await page.waitForTimeout(5000);



    

// })





//Dropdown()
// import{test, expect,Locator} from "@playwright/test";

// test('checkbox actions',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     // await page.locator("//select[@id='country']").selectOption({value:'uk'});
//     // await page.locator("//select[@id='country']").selectOption({label:'India'});
    
//     // await page.locator("//select[@id='country']").selectOption({index:2});



//     //sleect multiple option from dropdown
//     const dropdown:Locator=page.locator("//select[@id='country']/option");
//     // expect(dropdown).toHaveCount(10);
//    const optionTexts:string[]=await dropdown.allTextContents();

   
  
//     const finalText:string[]=optionTexts.map(t=>t.trim());
//     console.log(finalText);
//     expect(finalText).toContain("India");

//     // for(const text of finalText){
//     //     console.log(text);
//     // }


//     await page.waitForTimeout(2000);


// })


// added comment
// multiselect Dropdown
import{test, expect,Locator} from "@playwright/test";

test('Multi sleect dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // const v:Locator=page.locator("//select[@id='colors']/option");
    // expect(v).toHaveCount(7);

    // const optionText:string[]=await v.allTextContents();
    // const finalText:string[]=optionText.map(t=>t.trim());
    // expect(finalText).toContain("Red");

    const v:Locator=page.locator("//select[@id='colors']/option");

   
    const optionText:string[]=(await v.allTextContents()).map(t=>t.trim());

    

   const orignalText:string[]=[...optionText];
   const sortedText:string[]=[...optionText].sort();
   console.log(orignalText);
   console.log(sortedText);

   expect(orignalText).toEqual(sortedText);


    




    await page.waitForTimeout(2000);


})


//hidden dropdowns
