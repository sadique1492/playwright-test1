const{test, expect} = require('@playwright/test');

test.only('first playwright test',async ({browser})=>
    
{ 
    const context = await browser.newContext();
    const page = await context.newPage();
    const errormessage = page.locator("[style*='block']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    const userName = page.locator("#username");
    const passWord = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    // await userName.fill("rahulshetty");
    // await passWord.fill("learnin");
    // await signIn.click();
    // await page.waitForTimeout(1000);
    // console.log(await errormessage.textContent());
    // await expect (errormessage).toContainText('Incorrect');
    await userName.fill("rahulshettyacademy");
    await passWord.fill("learning");
    await signIn.click();
    await page.waitForSelector(".card-body a");
    console.log(await page.locator(".card-body a").allTextContents());





    
    
});

// test('page playwright test',async ({page})=>
    
// {
   
//     await page.goto("https://www.google.com/");
    
//     await expect(page).toHaveTitle("Google");
//     console.log(await page.title());
// });

