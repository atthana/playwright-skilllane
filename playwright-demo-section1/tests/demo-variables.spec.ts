import { test, expect } from '@playwright/test';

test('Demo generic type variables', async ({ page }) => {
    let msg: string = 'Hello world';  // ประกาศตัวแปรด้วย let
    console.log(msg);

    let counter: number = 10;
    console.log(counter);

    let isMale: boolean = true;
    console.log(isMale);
    
    const welcomeMsg: string = 'Merry Christmas';
    console.log(welcomeMsg);
});

test('Demo variable declaration', async ({ page }) => {
    let msg: string = 'Hello world';  // ประกาศตัวแปรด้วย let
    console.log(msg);

    msg = 'Hello Boy';
    console.log(msg);
    

    const welcomeMsg: string = 'Merry Christmas';
    console.log(welcomeMsg);

});

test('Demo variable array', async ({ page }) => {
    let fruits: string[] = ['banana', 'organge', 'apple'];
    let all_things: any[] = ['car', 'shower', 123];
    console.log(fruits);
    console.log(fruits[1]);
    console.log(fruits[2]);
    console.log(all_things);
    
});
