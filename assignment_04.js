/** Problem 04 - (Delete / Store) */
var fileName= "#exp.mp4";
//write your code here

fg = false;

if(fileName[0] === "#" || fileName.endsWith(".pdf") || fileName.endsWith(".docs"))
{
    fg = true;
}

fg ? console.log('Store') : console.log('Delete');

