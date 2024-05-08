# FuschiaSteel

This project is using Angular version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Questions

### Why is it (or isn't it) safe to use JTW?

JWT is great for machine-to-machine since it's stateless which allows us to build more scalable and faster applications. It can carry various types of data. The payload can grow in size, which can impact performance. HTTPOnly Cookies provide more security on machine-to-client communication, making it ideal for user authentication. Saving JWT on your client (localStorage, sessionStorage) can expose your users to XSS (cross-site scripting) attacks.

### In our web application, messages sent from one user to another, can contain HTML, which poses some security risks. Describe two attack vectors bad actors might try to abuse. And how would you mitigate these vectors?

Sending unsanitized HTML between users could lead to:

- Cross-Site Scripting (XSS)
- HTML Injection Attacks

Modern frameworks like React, Vue, and Angular already can take care of input sanitization. Which eliminates some of the vulnerabilities web pages have. In our case, we could implement HTML sanitization to validate that message content is safe and mitigate these vectors. Secondly, we can encode our HTML to prevent script execution. We can enforce strict content policies as well to restrict the use of certain HTML tags or attributes.

### Explain the difference between mutable and immutable objects.

Mutable objects can be redefined and reshaped to your needs after their definition, immutable objects remain the same after their definition.

```
// The const declaration creates an immutable reference to a value. It does not mean the value it holds is immutable. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

// arrays in JavaScript can be easily mutated after their definition, even though redefinition is not allowed.
const fruits = ['Apple', 'Banana', 'Strawberry'];
fruits.push('Watermelon')

// strings cannot be redefined or mutated in JavaScript.
const text = 'hello world'
```

- What is an example of an immutable object in JavaScript?

Strings, Numbers, Booleans, Undefined and null

- What are the pros and cons of immutability?

Over a quick Google search, you will probably find various reasons why/not to use immutable objects. In my experience, immutability provided a single source of truth-reducing side-effects in our programs, alongside performance optimization through techniques like memoization and tracable/debugable code base. The cons of immutability would be an increase in code complexity and memory overhead.

- How can you achieve immutability in your own code?

Depending on the framework you are using, you have multiple options. In Angular, you can use RxJS, which combines the observable pattern with functional programming. React is built using flux, which is a unidirectional data flow pattern that allows us to dispatch actions and save our data in one store (singleton). Multiple state management libraries follow similar patterns: NgRX for Angular, Redux for React, MobX, Recoil, and more.

### If you would have to speed up the loading of a web-application, how would you do that?

There are several steps you can take to speed up your web application, first depending on our built system if it exists. I will assume we are using modern web technology. First, we need to understand what is slowing our web application. is it our assets, images, CSS, JavaScript, or externals? There are many tools you can use to measure that, I will be using Chrome's developer tools performance tab and lighthouse to give information about the file sizes and their loading speed. In a web application we care about the load speed cycle or speed index metrics:

1. FCP (First Content Paint)

Is your page's first attempt to paint on your user's screen. Large bundle size, external third parties, and slow server response time can slow our FCP. It's important to keep that in mind. We can solve large bundle sizes using tree-shaking, code splitting, and minification in our build system, use web workers for external third parties allowing them to run on their thread (depending on our browser compatibility), and finally for slow server response time we can optimize our backend request/response time but I won't be getting into that since it's own topic.

2. Speed Index

Is how quickly our content loads onto our web page, again many side effects can slow your speed index. I will point out a few things that can help with our speed index. Cache plays a huge role here since it can reduce our speed index dramatically, reducing main thread work will also help us which is mentioned in the first point.

3. LCP (Largest Content Paint)

Is the moment your page has fully loaded the largest content in your page, in most web-application it can be an image or your bundle. Since we already covered bundle size in the past two points, let's focus on images here. It's important to have a clear and crisp image resolution in your application but that can end up with 5 MB, there are different techniques we can achieve to reduce our image size, you can use a modern image format `WebP` if the browser is compatible with it. Icons can be replaced with SVG, you can implement lazy-loading for large images by rendering a small-sized image first (e.g. 1x1 px).

4. CLS (Cumulative Layout Shift)

This is a web vital but can end up affecting your page performance overall, it's the amount of layout shift happening in your web page. It can be eliminated by using proper aspect ratio and (width, and height) attributes.

### What part of a new job do you think is more important:

- Choose your own hardware, but work with a company supplied operating system image.

Security-wise, it's important to keep your data protected. It can limit your work, especially with the amount of tools installed to prevent data leaks and viruses.

- You’re offered a standard piece of mediocre hardware. Free to pick your own Software.

As a software engineer, you are required to use a lot of the systems services. Choosing the software is an important step because it can affect your productivity.

I am neutral, I like the flexibility of systems but don't like spending too much time on setting them up.
