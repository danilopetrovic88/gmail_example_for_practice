const rightSidebarCalendarIcon = document.querySelector('#right-sidebar-calendar-icon');
const rightSidebarCalendarLoading = document.querySelector('.right-sidebar__calendar-loading');
const rightSidebar = document.querySelector('.right-sidebar');
const rightSidebarCalendar = document.querySelector('.right-sidebar__calendar');
const closeRightSidebarCalendar = document.querySelector('#close-calendar');
//const emailForm = document.querySelector('.email-form');

rightSidebarCalendarIcon.addEventListener('click', () => {
    rightSidebarCalendarLoading.style.display = "block";
    rightSidebar.style.right = "20rem";
    emailForm.classList.remove('open-email-form');

    rightSidebarCalendar.classList.toggle('calendar-hidden');
    mainNav.style.width = "75%";

    setTimeout(function() {
        rightSidebarCalendarLoading.style.display = "none";
       // rightSidebarCalendarLoading.style.display = "none";
    }, 3000); 
});

closeRightSidebarCalendar.addEventListener('click', () => {
    rightSidebarCalendar.style.display = "none";
    rightSidebar.style.right = "0";
    mainNav.style.width = "100%";
});