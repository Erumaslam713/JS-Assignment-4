/* Q2. use HTML code of question 1 and show the result on browser.
i. What is node type of element having id “form-content”.
ii. Show node type of element having id “lastName” and its child node.
iii. Update child node of element having id “lastName”.
iv. Get First and last child of id “main-content”.
v. Get next and previous siblings of id “lastName”.
vi. Get parent node and node type of element having id “email”
NOTE: You can remove JUNKS from this site.
https://www.willpeavy.com/minifier/.*/


//i. Node type of element with ID "form-content"
var formContent = document.getElementById('form-content');
console.log(formContent.nodeType); // 1 (Element Node)
//ii. Node type of element with ID "lastName" and its child node
var lastNameElement = document.getElementById('lastName');
console.log(lastNameElement.nodeType); // 1 (Element Node)
console.log(lastNameElement.firstChild.nodeType); // 3 (Text Node)

//iii. Update child node of element with ID "lastName"
lastNameElement.firstChild.textContent = "Last Name: Smith"; // Update the text
 //iv. Get first and last child of ID "main-content"
var mainContent = document.getElementById('main-content');
var firstChild = mainContent.firstChild; // Might need to skip text nodes
var lastChild = mainContent.lastChild;
console.log(firstChild, lastChild);

//v. Get next and previous siblings of ID "lastName"
var previousSibling = lastNameElement.previousElementSibling;
var nextSibling = lastNameElement.nextElementSibling;
console.log(previousSibling, nextSibling);

//vi. Get parent node and node type of element with ID "email"
var emailElement = document.getElementById('email');
var parentNode = emailElement.parentNode;
console.log(parentNode.nodeType); // 1 (Element Node)

