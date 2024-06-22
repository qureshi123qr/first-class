function getperc() {
    let std_Tm_grade10 = +document.getElementById("tm1").value;
    let std_om_grade10 = +document.getElementById("ob").value;
    let res = (std_Tm_grade10/std_om_grade10)*100
    document.getElementById("change").innerHTML = (`you have got it ${res}%`);
    alert(`you have got it ${res}%`);
    console.log(`you have got it ${res}%`);

    
}