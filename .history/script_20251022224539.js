const btnElement=document.querySelector('button');
const spanElement=document.getElementById('updateContent');
btnElement.onclick= function()
{
    const yourName=prompt("allow me know you please:");
    spanElement.textContent=yourName;
}