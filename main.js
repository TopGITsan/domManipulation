const link = document.querySelector('a');

link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');
// create a new paragraph
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride!';
sect.appendChild(para);
// add a text node to the paragraph the link sits inside
const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
// moves the paragraph down to the bottom of the section
sect.appendChild(linkPara);
//  remove a node based only on a reference to itself
sect.removeChild(linkPara);
//  or
// linkPara.parentNode.removeChild(linkPara);

// get a list of all the stylesheets attached to a document
const styleSheets = document.styleSheets;
// console.log(styleSheets);

// para.style.color ='white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

para.setAttribute('class','highlight')