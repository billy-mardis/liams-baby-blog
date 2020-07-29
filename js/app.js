// Age Calculator Variables and Math Operations
const liamsBdateTime = new Date("June 26 2019 16:28");
const currentDateTime = new Date();
const timeDifference = Math.abs(currentDateTime - liamsBdateTime);
const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
const yearsDifference = daysDifference / 365;
const monthsDifference = daysDifference / 31;
const weeksDifference = Math.floor(daysDifference / 7);
const hoursDifference = Math.ceil(timeDifference / (1000 * 60 * 60));
const minutesDifference = Math.ceil(timeDifference / (1000 * 60));
const secondsDifference = Math.ceil(timeDifference / (1000));

// Age Calculator Print Function
$(document).ready(function(){
    $("#ageButton").click(function(){
        $("#ageCalc").html(`<h5 class="pt-3"><strong>I was born</strong></h5>
        <h5><strong>Wednesday, June 26, 2019 at 3:28pm.</strong></h5>
        <h5><strong>Right now I am: </strong></h5>
        
        <p class="mt-3">${yearsDifference.toFixed(2)} Years Old</p>
        <p>${monthsDifference.toFixed(2)} Months Old</p>
        <p>${weeksDifference} Weeks Old</p>
        <p>${daysDifference} Days Old</p>
        <p>${hoursDifference} Hours Old</p>
        <p>${minutesDifference} Minutes Old</p>
        <p>${secondsDifference} Seconds Old</p>`);
    });
});

// Auto Close the Navbar When Clicking a Link
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
