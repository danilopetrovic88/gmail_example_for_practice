const searchInput = document.querySelector('#search-input');
const searchInputList = document.querySelector('.header__search-list');
const leftSidebarMore = document.querySelector('#left-sidebar__list-more');
const moreList = document.querySelector('#more-list');
const leftSidebarList = document.querySelector('.left-sidebar__list');
const leftSidebar = document.querySelector('.left-sidebar');
const emailCalendar = document.querySelector('#email-calendar');
const emailFormDateInput = document.querySelector('#date-input');

const loadingPagePopup = document.querySelector('.loading-popup');
const closePopup = document.querySelector('#popup-close');


// Loading page
window.onload = function() {
    setTimeout(function() {
        emailForm.classList.add('open-email-form');
        loadingPagePopup.classList.remove('hide-popup');
    }, 1500);
};

setTimeout(function() {
    loadingPagePopup.classList.add('hide-popup');
}, 10000);

closePopup.addEventListener('click', () => {
    loadingPagePopup.classList.add('hide-popup');
});


function openList() {
    searchInputList.classList.add('open-list');
}

function closeList() {
    searchInputList.classList.remove('open-list');
}

leftSidebarMore.addEventListener('click', () => {
    moreList.classList.toggle('list-open');
    leftSidebarList.classList.toggle('overflow-y');
});

// CALENDAR START
var dt = new Date();
function renderDate() {
    dt.setDate(1);
    var day = dt.getDay();
    var today = new Date();
    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();

    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    document.getElementById("month").innerHTML = months[dt.getMonth()];
    document.getElementById("date_str").innerHTML = dt.toDateString();
    var cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }
    console.log(day);
    for (i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
        else
            cells += "<div>" + i + "</div>";
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;

}

function moveDate(para) {
    if(para == "prev") {
        dt.setMonth(dt.getMonth() - 1);
    } else if(para == 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}

// CALENDAR END


// event listener to email calendar
function openCalendar() {
    emailCalendar.style.display = "block";
}

function closeCalendar() {
    emailCalendar.style.display = "none";
}

//search email form buttons event listeners
const createFilter = document.querySelector('#create-filter');
const submitSearch = document.querySelector('#submit-search');
const createFilterHoverText = document.querySelector('#create-filter-hover-text');
const submitsearchHoverText = document.querySelector('#submit-search-hover-text');

createFilter.addEventListener('click', () => {
    alert('Please fill in some search criteria!')
})

function showText2() {
    submitsearchHoverText.style.visibility = "visible";
}
function hideText2() {
    submitsearchHoverText.style.visibility = "hidden";
}

//email form show
const emailForm = document.querySelector('.email-form');
const searchArrow = document.querySelector('#search-arrow');

searchArrow.addEventListener('click', () => {
    emailForm.classList.toggle('open-email-form');
});

submitSearch.addEventListener('click', () => {
    emailForm.classList.remove('open-email-form');
})
/*
function openEmailForm() {
    emailForm.style.display = "block";
} */
/*
function closeEmailForm() {
    emailForm.style.display = "none";
}; */


// Mani section navbar checkbox list 
const mainNavCheckboxList = document.querySelector('#main-nav-checkbox-list');
const mainNavCheckboxArrow = document.querySelector('#main-nav-checkbox-arrow');

mainNavCheckboxArrow.addEventListener('click', () => {
    mainNavCheckboxList.classList.toggle('hide-list');
  //  mainNavCheckboxList.classList.add('open-list');
});

// Main section navbar "more" list show 
const mainNavMore = document.querySelector('.main-nav-more');
const mainNavMoreText = document.querySelector('.main-nav-more-text');
const mainNav = document.querySelector('.main-nav');

mainNavMore.addEventListener('click', () => {
    mainNavMoreText.classList.toggle('hide-text');
});


//Compose form 
const composeFormInputTo = document.querySelector('#compose-to');
const composeFormInputToHoverText = document.querySelector('#compose-to-hover-text');

/* composeFormInputTo.addEventListener('mouseover', () => {
     composeFormInputToHoverText.classList.toggle('hide-text');
 }); */


 const leftSidebarLogo = document.querySelector('.left-sidebar__logo');
 const composeForm = document.querySelector('.compose-form');
 const composeSendBtn = document.querySelector('#footer-send-btn');
 const closeComposeForm = document.querySelector('#compose-form__header-close');
 const composeFormMininaze = document.querySelector('#compose-form__header-minimaze');
 const composeFormFullScreen = document.querySelector('#compose-form__header-full-screen');
 const textareaIconBox = document.querySelector('.compose-form__textarea-icon-box');

 leftSidebarLogo.addEventListener('click', () => {
     composeForm.classList.toggle('hide-compose');
 });

 composeSendBtn.addEventListener('click', () => {
     composeForm.classList.add('hide-compose');
     composeForm.classList.remove('full-screen-compose');
     composeForm.classList.remove('minimaze-compose');
 });

 closeComposeForm.addEventListener('click', () => {
     composeForm.classList.toggle('hide-compose');
     composeForm.classList.remove('full-screen-compose');
     composeForm.classList.remove('minimaze-compose');
 });

 composeFormMininaze.addEventListener('click', () => {
     composeForm.classList.toggle('minimaze-compose');
     composeForm.classList.remove('full-screen-compose');
     composeForm.classList.remove('hide-compose');
 })

 composeFormFullScreen.addEventListener('click', () => {
    composeForm.classList.toggle('full-screen-compose');
    composeForm.classList.remove('minimaze-compose');
    composeForm.classList.remove('hide-compose');
});


// icon box hover text
const iconBoxItems = document.querySelectorAll('.icon-box-item-hover-text');

/*iconBoxItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.remove('hide-hover-text');
    });
}); */

const undoHover = document.querySelector('#undo-hover');
const rendoHover = document.querySelector('#rendo-hover');
const fontFamilyHover = document.querySelector('#font-family-hover');
const sizeHover = document.querySelector('#size-hover');
const boldHover = document.querySelector('#bold-hover');
const italicHover = document.querySelector('#italic-hover');
const underlineHover = document.querySelector('#underline-hover');
const textColorHover = document.querySelector('#text-color-hover');
const alignHover = document.querySelector('#align-hover');
const olHover = document.querySelector('#ol-hover');
const ulHover = document.querySelector('#ul-hover');
const indentLessHover = document.querySelector('#indent-less-hover');
const indentMoreHover = document.querySelector('#indent-more-hover');
const quoteHover = document.querySelector('#quote-hover');
const strikethroughHover = document.querySelector('#strikethrough-hover');
const formatingHover = document.querySelector('#formating-hover');

// Undo hover
function showHoverTextUndo() {
    undoHover.classList.remove('hide-hover-text');
}
function hideHoverTextUndo() {
    undoHover.classList.add('hide-hover-text');
}

// Rendo hover
function showHoverTextRendo() {
    rendoHover.classList.remove('hide-hover-text');
}
function hideHoverTextRendo() {
    rendoHover.classList.add('hide-hover-text');
}

// Font Family hover
function showHoverTextFontFamily() {
    fontFamilyHover.classList.remove('hide-hover-text');
}
function hideHoverTextFontFamily() {
    fontFamilyHover.classList.add('hide-hover-text');
}

// Size hover
function showHoverTextSize() {
    sizeHover.classList.remove('hide-hover-text');
}
function hideHoverTextSize() {
    sizeHover.classList.add('hide-hover-text');
}

// Bold hover
function showHoverTextBold() {
    boldHover.classList.remove('hide-hover-text');
}
function hideHoverTextBold() {
    boldHover.classList.add('hide-hover-text');
}

// Italic hover
function showHoverTextItalic() {
    italicHover.classList.remove('hide-hover-text');
}
function hideHoverTextItalic() {
    italicHover.classList.add('hide-hover-text');
}

// Underline hover
function showHoverTextUnderline() {
    underlineHover.classList.remove('hide-hover-text');
}
function hideHoverTextUnderline() {
    underlineHover.classList.add('hide-hover-text');
}

// Color hover
function showHoverTextColor() {
    textColorHover.classList.remove('hide-hover-text');
}
function hideHoverTextColor() {
    textColorHover.classList.add('hide-hover-text');
}

// Align hover
function showHoverTextAlign() {
    alignHover.classList.remove('hide-hover-text');
}
function hideHoverTextAlign() {
    alignHover.classList.add('hide-hover-text');
}

// OrderedList hover
function showHoverTextOrderedList() {
    olHover.classList.remove('hide-hover-text');
}
function hideHoverTextOrderedList() {
    olHover.classList.add('hide-hover-text');
}

// UnorderedList hover
function showHoverTextUnorderedList() {
    ulHover.classList.remove('hide-hover-text');
}
function hideHoverTextUnorderedList() {
    ulHover.classList.add('hide-hover-text');
}

// IndentLess hover
function showHoverTextIndentLess() {
    indentLessHover.classList.remove('hide-hover-text');
}
function hideHoverTextIndentLess() {
    indentLessHover.classList.add('hide-hover-text');
}

// IndentMore hover
function showHoverTextIndentMore() {
    indentMoreHover.classList.remove('hide-hover-text');
}
function hideHoverTextIndentMore() {
    indentMoreHover.classList.add('hide-hover-text');
}

// Quote hover
function showHoverTextQuote() {
    quoteHover.classList.remove('hide-hover-text');
}
function hideHoverTextQuote() {
    quoteHover.classList.add('hide-hover-text');
}

// Strikethrough hover
function showHoverTextStrikethrough() {
    strikethroughHover.classList.remove('hide-hover-text');
}
function hideHoverTextStrikethrough() {
    strikethroughHover.classList.add('hide-hover-text');
}

// Format hover
function showHoverTextFormat() {
    formatingHover.classList.remove('hide-hover-text');
}
function hideHoverTextFormat() {
    formatingHover.classList.add('hide-hover-text');
}


// const composeFormFullScreen = document.querySelector('.compose-form .full-screen-compose');


// Display messages
let mainMessages = document.querySelector('.main__messages');
let xml = new XMLHttpRequest();
xml.open('get', 'https://jsonplaceholder.typicode.com/comments');
xml.onreadystatechange = function() {
    if(xml.readyState == 4 && xml.status == 200) {
        display(JSON.parse(xml.responseText));
    }
}
xml.send();

function display(data) {
    let messageContainer = ``;
    for (let i = 0; i < data.length - 490; i++) {
        messageContainer += `
        <div class="main__messages-item">
        <div class="main__messages-item-left">
            <div class="item__input-check">
                <input type="checkbox">
            </div>
            <div class="item__star">
                <i class="fas fa-star" id="message-star"></i>
            </div>
            <div class="item__name">
                <h3>${data[i].email.substr(0,15)}...</h3>
                <!-- item name hover start -->
                <div class="item__name-hover" hidden>
                    <div class="item__name-hover-up">
                        <div class="user">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="hover-up__heading">
                            <h2>${data[i].email}</h2>
                            <p>no-replay@m1.email.samsung.com</p>
                        </div>
                    </div>
                    <div class="item__name-hover-down">
                        <button class="hover-down__btn">More info</button>
                        <div class="hover-down__icons">
                                <div class="hover-down__icon">
                                    <i class="far fa-envelope"></i>
                                    <p class="hover-down__icon-hover">Send email</p>
                                </div>
                                <div class="hover-down__icon">
                                    <a href="#"><i class="far fa-envelope"></i></a>
                                    <div class="hover-down__icon-hover">Schedule event</div>
                                </div>
                                <div class="hover-down__icon">
                                    <i class="far fa-comment-alt"></i>
                                    <p class="hover-down__icon-hover">Send message</p>
                                </div>
                                <div class="hover-down__icon">
                                    <i class="fas fa-video"></i>
                                    <p class="hover-down__icon-hover">Start video call</p>
                                </div>
                        </div>
                    </div>
                </div>
                <!-- item name hover end -->
            </div>
        </div>

        <div class="main__messages-item-center">
            <h4 class="item__inbox">Inbox</h4>
            <p class="item__content">${data[i].body}</p>
        </div>

        <div class="main__messages-item-right">
            <p class="item__time">3:08 PM</p>

            <div class="item__hover" hidden>
                <div class="item__hover-item">
                    <i class="fas fa-caret-square-down"></i>
                    <p class="item__hover-item-text">Archive</p>
                </div>
                <div class="item__hover-item">
                    <i class="fas fa-trash"></i>
                    <p class="item__hover-item-text">Delete</p>
                </div>
                <div class="item__hover-item">
                    <i class="fas fa-envelope-open"></i>
                    <p class="item__hover-item-text">Mark as read</p>
                </div>
                <div class="item__hover-item">
                    <i class="fas fa-clock"></i>
                    <p class="item__hover-item-text">Snoze</p>
                </div>
            </div>
        </div>
    </div>
        `;
    }
    mainMessages.innerHTML = messageContainer;
}

// Display messages end
