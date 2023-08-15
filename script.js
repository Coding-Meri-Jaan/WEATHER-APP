const weatherapi={
    key:"853acc5a850fba67cb6adaa7626674cf",
    URL:"https://api.openweathermap.org/data/2.5/weather"
}

/*
In web development, `addEventListener` is a method provided by the Document Object Model (DOM) in JavaScript. It allows you to "listen" for specific events that occur on an HTML element and then execute a specified function (callback) in response to those events.

Here's the basic syntax of `addEventListener`:

element.addEventListener(eventType, callbackFunction);
```

- `element`: The HTML element to which you want to attach the event listener.
- `eventType`: The type of event you want to listen for, such as "click," "mouseenter," "submit," "keydown," etc.
- `callbackFunction`: The function that will be executed when the specified event occurs on the element.

For example, if you have an HTML button element with the ID "myButton" and you want to execute a function `handleButtonClick` when the button is clicked, you can use `addEventListener` like this:

```javascript
const button = document.getElementById("myButton");

function handleButtonClick() {
  console.log("Button was clicked!");
}

button.addEventListener("click", handleButtonClick);
```

In this example, when the button is clicked, the `handleButtonClick` function will be called, and it will log "Button was clicked!" to the console.

`addEventListener` is a fundamental technique in web development for creating interactive and responsive web pages. It allows you to attach behavior to HTML elements based on user interactions and events, enhancing the user experience of your website.
*/


/*
Here's the basic syntax of `addEventListener`:

element.addEventListener(eventType, callbackFunction);
*/




/*
hamne input parameter event isliye diya hai kyuki jaise ki
ham delhi likhna chahte to delhi likhne k liye
sabse pehle 'd' fir 'e' fir 'l' fir 'h' fir 'i' likhna padega
ab jaise hi hamne 'd' likha to keypress event occur hua aur wo console me 'd' dikh jayega 
but hame to search bar me delhi input karwana hai  taki console me 'delhi' jaye aur fir usi ka weather 
to isliye ham kya karenge ki ek parameter pass karenge let's say (event) ab ham ispe ek if condition laga denge 
if(event.key=='Enter') ---> iska matlab jab tak mai enter na daba du apna proper word likhne k baad tab tak use console me
dikhna nahi hai aur jaise hi 'Enter' likh diya waise hi wo console me jayega



function call_back_function_on_keypress(event) {: This is the declaration of a function named call_back_function_on_keypress that takes an event parameter. This parameter represents the event object that is automatically passed to the function when the event occurs.
    
    if (event.key === 'Enter') {: This is a conditional statement that checks if the key pressed during the event is the Enter key.
        
        So, when you attach this event listener to an input box and press the Enter key, the following happens:
        The event listener listens for a keypress event on the input box.
        When a key is pressed, the call_back_function_on_keypress function is called with the event object.
        The function checks if the pressed key is the Enter key.
        If it is, the function logs the value of the input box to the console.
        This is a common pattern for capturing user input and responding to specific key presses or other events on web pages. It allows you to perform actions based on user interactions, enhancing the interactivity of your web applications.
        */
 const searchInputBox=document.getElementById('input-box');


  /* 
The function takes an event parameter because it is intended to be used as an event listener. When you attach an event listener to an element, the browser automatically passes an event object to the listener function when the specified event occurs. This event object contains information about the event itself, including details about the element it occurred on, the type of event, and any relevant data.
By including the event parameter in your event listener function, you can access and use this information to respond to the event appropriately. Here's why the event parameter is important:
Accessing Event Data: The event object contains information about the event, such as which key was pressed (event.key), which mouse button was clicked, the mouse's position, and more. By having access to this data, you can tailor your response based on the specific details of the event.
Event Propagation: The event object also plays a role in event propagation and handling. You can use methods like event.stopPropagation() to prevent an event from propagating further in the DOM, or event.preventDefault() to prevent the default behavior of an event (e.g., preventing a form submission).
Multiple Event Listeners: When you have multiple event listeners on an element, each one can have a different response based on the event object. By including the event parameter, you can differentiate between different event listeners and their specific behaviors.
In your specific example of the call_back_function_on_keypress(event) function, the event parameter allows you to access the key property of the event object to check which key was pressed (in this case, whether it's the Enter key). Without the event parameter, you wouldn't have access to this information, and your function wouldn't be able to accurately respond to the event.
    */
function call_back_function_on_keypress(event) {
    if (event.key === 'Enter') {
        console.log(searchInputBox.value); //here,searchInputBox.value means that whatever we have entered in the search bar is the value 
    // console.log(searchInputBox.value);: If the condition inside the if statement is true (meaning the Enter key was pressed), this line of code logs the value of the input box (searchInputBox) to the console. The value property of an input element holds the text entered by the user.
   getweather(searchInputBox.value);

   //js code for the case when we are wanting to display when we have given an input city
document.querySelector('.weather-content').style.display="block";
    }
    
}


//Event Listener Function for the event when we keypress
searchInputBox.addEventListener('keypress',call_back_function_on_keypress);
// The keypress is an event when a key that produces a character value is pressed down

//Function for weather Report ---> this function takes the city name as  input and will fetch the weather details of that city and call the showweatherreport function for showing the data
function getweather(city){
//Our details can be obtained from API  and for that we need to use fetch function to fetch the details of input city using the URL of the API
// fetch(`${weatherApi.URL}q=${city}&appid=${weatherApi.key}`)
//we are not using the above line but using the below one because when we write something in search bar , we get its data in json format but in that format the temp is not given in celcius rather in some other unit so we use this &units=metric in the end to have the temp in celcius
fetch(`${weatherapi.URL}?q=${city}&appid=${weatherapi.key}&units=metric`)
    /*  
Certainly! The .then() method is used in JavaScript when working with Promises. It's a way to handle what happens after an asynchronous task is completed. Think of it as saying "then do this."
In simpler terms, when you have a Promise that represents an action that takes time (like fetching data from a website), you can use .then() to specify what should happen after that action is done.
Here's a straightforward explanation with an example:
Suppose you order food delivery:
You place an order (start an asynchronous task).
You wait for the delivery (waiting for the task to finish).
When the food arrives, you do something with it (handle the result).
    */
    .then(weather =>{
        return weather.json();  /* 
        Returning data in JSON format is a common practice because JSON:
        Provides structured organization.
        Works well with different programming languages.
        Is easy to parse into usable data.
        Is efficient for data transmission.
        Is human-readable and consistent.
        Is a standard for many APIs.
                */
    })
    .then(showWeatherReport);
}
    /* 
function getweather(city) {: This declares a function named getweather that takes a parameter city. This function is intended to fetch weather information for the specified city.
fetch(${weatherApi.URL}?q=${city}&appid=${weatherApi.key}): This line uses the fetch function to send a request to a weather API. It constructs the API URL using the weatherApi object's URL and your API key. It includes the city parameter to specify which city's weather you're requesting.
.then(weather => {: This is the first .then() block, part of a Promise chain. It receives the response from the API (referred to as weather here).
return weather.json();: Inside the first .then() block, you're calling the .json() method on the weather response. This method extracts the JSON data from the response and returns it. You're returning this data, so it becomes the fulfillment value of this .then() block.
.then(showWeatherReport());: This is the second .then() block, again part of the Promise chain. However, there's an issue here: showWeatherReport() should be passed without parentheses, like this: .then(showWeatherReport). As written, it will immediately invoke the showWeatherReport function.
In summary, the getweather function fetches weather data for a specified city from an API using the fetch function. It then processes the API response to extract the JSON data using .json()

You (the function getweather(city)) ask your friend (the browser) to get weather information for a specific city from a weather website (API).
You provide your friend with the city's name (the city parameter) and a special key (API key) to access the weather website's data (the URL).
Your friend (the browser) fetches the weather details using the URL and city name you gave.
When your friend (the browser) gets the weather data, you ask them to convert it into a format you can understand. In this case, you want the data to be in JSON format (like a translation).
Your friend (the browser) translates the weather details into JSON and hands it over to you.
You (the code) then ask your friend (the browser) to show you the weather report. You don't tell them exactly what to do – you just let them know you want to see it.
So, in simpler words, the code is like asking a friend to get weather information, translate it into a format you understand, and then show it to you. The friend does the fetching, translating, and showing, just like how the browser does these actions with the code.



The .then() method is used in JavaScript to handle the result of a Promise. Promises are a way to manage asynchronous operations, like fetching data from a server, reading files, or handling user interactions. The .then() method allows you to specify what should happen after a Promise is fulfilled (resolved) with a value.
In simpler terms, you can think of .then() as a way to say, "After this task is done, do something else."
Here's a basic explanation using an example:


fetch('https://api.example.com/data') // Fetch data from an API
  .then(response => response.json())  // When data is received, convert it to JSON
  .then(data => {
    // When JSON data is ready, do something with it
    console.log(data);
  });
In this example:

The fetch() function is used to retrieve data from an API.
The first .then() block is chained onto fetch(). It takes the response from the API and converts it to JSON format using response.json(). This .then() block is saying, "After the data is received, do this next task."
The second .then() block is chained onto the previous one. It takes the JSON data and logs it to the console. This .then() block is saying, "After the JSON data is ready, do this next task."
Each .then() block is a step that is executed sequentially. It allows you to organize and control the flow of asynchronous operations. It's a way to handle the result of an asynchronous action and decide what to do next.
In the context of your code snippet, the .then() methods are used to handle the asynchronous process of fetching weather data from an API and processing it in a structured way.


Promises in JavaScript typically return data in their resolved state as the result of an asynchronous operation. The data returned by a Promise can be of any type, depending on the context of the operation being performed.
Promises resolve with data when they successfully complete their asynchronous task. The resolved data can be a single value (like a string, number, or object) or even more complex structures like arrays or other objects.
For example, when using the fetch API to retrieve data from a web server, the Promise returned by fetch resolves with a Response object. You often use .json() on this Response object to extract and parse the actual JSON data.
Here's a simplified example:

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data); // This is the JSON data returned by the Promise
  });
In this example, the Promise returned by the fetch function resolves with the Response object. The first .then() block parses the JSON data from the Response object and returns a new Promise that resolves with the parsed JSON data. The second .then() block logs the JSON data to the console.
In summary, Promises return data in the resolved state, which is often processed and transformed in a chain of .then() blocks to work with the desired result of an asynchronous operation.




We're creating a function named getweather to help us get weather information.
To get the weather data, we use the "fetch" function. It's like asking for information from a website.
We give the "fetch" function the API's website address, and we add the city's name and a special key (like a password) to get the right information.
After getting the data from the website, we want to make sure we can understand it easily. So, we translate it into a format called JSON. It's like translating a foreign language into a language you know.
Once it's translated, we want to show the weather report to someone. We use a function called showWeatherReport to do that.
So, in simpler words, this code asks for weather information from a website, translates it to make it easier to understand, and then shows you the weather report. It's like asking a friend for weather details in another country, getting them translated, and then sharing the information with others.

 The .then() method is used in JavaScript when working with Promises. It's a way to handle what happens after an asynchronous task is completed. Think of it as saying "then do this."
In simpler terms, when you have a Promise that represents an action that takes time (like fetching data from a website), you can use .then() to specify what should happen after that action is done.
Here's a straightforward explanation with an example:

Suppose you order food delivery:
You place an order (start an asynchronous task).
You wait for the delivery (waiting for the task to finish).
When the food arrives, you do something with it (handle the result).


function getweather(city) {: This declares a function named getweather that takes a parameter city. This function is intended to fetch weather information for the specified city.
fetch(${weatherApi.URL}?q=${city}&appid=${weatherApi.key}): This line uses the fetch function to send a request to a weather API. It constructs the API URL using the weatherApi object's URL and your API key. It includes the city parameter to specify which city's weather you're requesting.
.then(weather => {: This is the first .then() block, part of a Promise chain. It receives the response from the API (referred to as weather here).
return weather.json();: Inside the first .then() block, you're calling the .json() method on the weather response. This method extracts the JSON data from the response and returns it. You're returning this data, so it becomes the fulfillment value of this .then() block.
.then(showWeatherReport());: This is the second .then() block, again part of the Promise chain. However, there's an issue here: showWeatherReport() should be passed without parentheses, like this: .then(showWeatherReport). As written, it will immediately invoke the showWeatherReport function.
In summary, the getweather function fetches weather data for a specified city from an API using the fetch function. It then processes the API response to extract the JSON data using .json()
*/





//Show weather Report---> this fnc will show the weather details of the city whose weather details have been fetched
function showWeatherReport(weather){
console.log(weather);  // this line will return the data in  json format at console which (data) is further used
/* 
[{…}]
0: country: "IN"
lat: 19.0785451
local_names: {ps: 'ممبای', ja: 'ムンバイ', el: 'Μουμπάι', si: 'මුම්බායි', yi: 'מומביי', …}
lon: 72.878176
name: "Mumbai"
state: "Maharashtra"
[[Prototype]]: Object
length: 1
[[Prototype]]: Array(0)
*/

//dynamically coding for finding data(city name and country) of the input city using API
let city=document.getElementById('city');
//As we can see that when we are opening this return data in json format we can see an object name i.e having value="mumbai" or (name: "Mumbai") so we can use this object --- > if any object is present in some other varible we first access that variable and then the object
city.innerText=`${weather.name}, ${weather.sys.country}`;
let temperature=document.getElementById('temperature');
//As we can see that when we are opening this return data in json format we can see an object name i.e having value="mumbai" or (name: "Mumbai") so we can use this object --- > if any object is present in some other varible we first access that variable and then the object
temperature.innerHTML=`${Math.round(weather.main.temp)}&degC`;

//dynamic coding of max and min temp using the objects provided by API
let minmaxTemp=document.getElementById('temp-range');
minmaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&degC (min)/${Math.ceil(weather.main.temp_max)}&degC (max)`;

//we found the weather in the 0th index of the object named weather
let weatherType=document.getElementById('current-weather');
weatherType.innerText=`${weather.weather[0].main}`;
/* 
In your provided code, you are using both `innerText` and `innerHTML` to manipulate the content of HTML elements. Both properties are used to modify the content of an element, but they have some differences in their behavior:

1. **`innerText`**:
   - The `innerText` property sets or gets the text content of an element, including all its descendants. It treats the content as plain text.
   - It escapes any HTML tags and entities, meaning it doesn't interpret or render HTML tags as elements.
   - It's generally used when you want to set or get the visible text content of an element without considering HTML.

2. **`innerHTML`**:
   - The `innerHTML` property sets or gets the HTML content (including HTML tags) of an element, including all its descendants.
   - It can be used to directly manipulate the HTML structure within an element.
   - It's often used when you want to set or get the content that includes HTML formatting, tags, and potentially dynamic content.

In your code, you are using `innerText` in places where you want to display simple text content, and you are using `innerHTML` in places where you want to include HTML formatting or dynamic content that requires HTML interpretation.

For example:
- You use `innerText` for setting the city name and country, which are simple text values.
- You use `innerHTML` for setting temperature values with the `&degC` symbol, which requires rendering HTML entities.
- Similarly, you use `innerHTML` for setting the min and max temperature values, as well as the weather type, which involve HTML formatting.

Both `innerText` and `innerHTML` have their appropriate use cases based on whether you are dealing with plain text or HTML content. 
Just be cautious when using `innerHTML` to avoid potential security risks like cross-site scripting (XSS) attacks, especially when 
inserting user-generated or untrusted content into your HTML.
*/




let date=document.getElementById('day-date');
let todayDate=new Date();
date.innerText=dateManage(todayDate);



//weatherType is tellins us the nature of weather and now we are dynamically stying our background image according to it only
if(weatherType.textContent == "Haze"){
    document.body.style.backgroundImage="url('images/DALL·E 2023-08-15 21.10.40 - haze weather.png')";
}else if(weatherType.textContent == "Clouds")
{
    document.body.style.backgroundImage="url('images/DALL·E 2023-08-15 21.44.55 - cloudy weather.png')";
}
else if(weatherType.textContent == "Rain")
{
    document.body.style.backgroundImage="url('images/DALL·E 2023-08-15 21.43.08 - rainy weather.png')";
}
else if(weatherType.textContent == "Snow")
{
    document.body.style.backgroundImage="url('images/DALL·E 2023-08-15 23.21.03 - snow weather.png')";
}
else if(weatherType.textContent == "Thunderstorm")
{
    document.body.style.backgroundImage="url(' https://media.istockphoto.com/id/517643357/photo/thunderstorm-lightning-with-dark-cloudy-sky.webp?b=1&s=170667a&w=0&k=20&c=MWIkaiUFGrpmwgODsLJH1qi3yEPb_PQFJwn0ewPaC6o=')";
}
else if(weatherType.textContent=="Clear"){
    document.body.style.backgroundImage="url('https://media.istockphoto.com/id/182493016/photo/sky-and-grass-backround.jpg?s=612x612&w=0&k=20&c=u9Hk93MPbXqjOTTEFNGMq7JJJ46HDBlnqiG7dvrbu9w=')";
}else if(weatherType.textContent=="Mist"){
    document.body.style.backgroundImage="url('images/DALL·E 2023-08-15 21.07.12 - mist weather.png')";
}else if(weatherType.textContent=="Smoke"){
    document.body.style.backgroundImage="url('images/DALL·E 2023-08-15 21.04.42 - smoke weather.png')";
}else{
    document.body.style.backgroundImage="url('images/DALL·E 2023-08-15 23.20.45 - weather.png')";
}

}


//Function for managing date
function dateManage(arg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

      let year = arg.getFullYear();
      let month= months[arg.getMonth()];
      let date=arg.getDate();
      let day=days[arg.getDay()];
      return `${date} ${month} (${day}), ${year}`;
}
/* 
Certainly! The code you provided is a JavaScript program that generates a formatted date string and updates the content of an HTML element with the formatted date. Let's break down each part of the code step by step:

1. **Function `dateManage(arg)`**: This is a custom JavaScript function that takes a date object `arg` as its parameter. It's responsible for formatting the input date into a human-readable string.

   ```javascript
   function dateManage(arg) {
       // Arrays to store the names of days and months
       let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
       let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

       // Extracting year, month, date, and day components from the input date
       let year = arg.getFullYear();
       let month = months[arg.getMonth()];
       let date = arg.getDate();
       let day = days[arg.getDay()];

       // Creating the formatted date string and returning it
       return `${date} ${month} (${day}), ${year}`;
   }
   ```

2. **Selecting HTML Element**: This line selects an HTML element with the ID `day-date` and assigns it to the variable `date`.

   ```javascript
   let date = document.getElementById('day-date');
   ```

3. **Creating Date Object**: This line creates a new JavaScript `Date` object representing the current date and time.

   ```javascript
   let todayDate = new Date();
   ```

4. **Formatting and Updating Content**: This line calls the `dateManage` function with the `todayDate` object as an argument. The function formats the date and returns a formatted string, which is then set as the inner text of the `day-date` HTML element, effectively updating its content.

   ```javascript
   date.innerText = dateManage(todayDate);
   ```

5. **HTML Element (Placeholder)**: In your HTML file, you should have an element with the ID `day-date`, like this:

   ```html
   <p id="day-date"></p>
   ```

   This element serves as a placeholder where the formatted date will be displayed.

In summary, the JavaScript code defines a function `dateManage` for formatting dates, selects an HTML element with the ID `day-date`, creates a date object representing the current date, uses the `dateManage` function to format the date, and updates the content of the `day-date` element with the formatted date. When you run this code, the `day-date` element will show the current date in the format "Date Month (Day), Year".
*/