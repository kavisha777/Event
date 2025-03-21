1 An event in JavaScript is an action or occurrence detected by the browser, such as a user clicking a button, pressing a key, or loading a webpage.

2 click – When an element is clicked mouseover – When the mouse hovers over an element keydown – When a key is pressed submit – When a form is submitted load – When a webpage or resource loads

3 Attach an event handler using the onclick attribute directly in an HTML element

4 Onclick: Overwrites previous handlers didn't Supports multiple event types element.onclick = function()
addEventListener() Don't, allows multiple handlers It Supports multiple event types element.addEventListener('click', function())

7 using by id
