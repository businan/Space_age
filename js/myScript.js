
document.getElementById('calculate_year_btn').addEventListener('click', spaceAge);
document.getElementById('calculate_second_btn').addEventListener('click', spaceAge);

function spaceAge(){
const secondToYear = 31557600;
let mount = document.getElementById('mount_inp').value;
let year = document.getElementById('year_inp').value;
let day = document.getElementById('day_inp').value;
let second = document.getElementById('second_inp').value;
console.log('second', second)
const newDate = Date.now();

let dateString = mount +'.'+day+'.'+year;

let dateObject = new Date(dateString);
console.log(newDate-dateObject)


if (second===''){
    result = (((newDate-dateObject) / secondToYear) / 1000).toFixed(2);
    showAge(result)
    document.getElementById('second_inp').value='';
    document.getElementById('mount_inp').value='';
    document.getElementById('year_inp').value='';
    document.getElementById('day_inp').value='';
    
}else{
    result = ((second / secondToYear) / 1000).toFixed(2);
    showAge(result)
    document.getElementById('second_inp').value='';
    document.getElementById('mount_inp').value='';
    document.getElementById('year_inp').value='';
    document.getElementById('day_inp').value='';
}

}
function showAge(result){
    
    const ageConvention = {
        mercury : 0.2408467,
        venus : 0.61519726, 
        mars : 1.8808158,
        jupiter : 11.862615,
        saturn : 29.447498,
        uranus : 84.016846,
        neptun : 164.79132
    }
    
   
    document.getElementById("earth").value = result
    document.getElementById("mercury").value = (result/ageConvention.mercury).toFixed(2)
    document.getElementById("venus").value = (result/ageConvention.venus).toFixed(2)
    document.getElementById("mars").value = (result/ageConvention.mars).toFixed(2)
    document.getElementById("jupiter").value = (result/ageConvention.jupiter).toFixed(2)
    document.getElementById("saturn").value =(result/ageConvention.saturn).toFixed(2)
    document.getElementById("uranus").value = (result/ageConvention.uranus).toFixed(2)
    document.getElementById("neptune").value = (result/ageConvention.neptun).toFixed(2)

}