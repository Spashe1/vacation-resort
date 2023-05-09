"use strict"
//gather inputs
const firstNameEl = document.getElementById('firstName').value;
console.log(`firstName`, firstNameEl.value);
const lastNameEl = document.getElementById('lastName').value;
console.log(`lastName`, lastNameEl.value);

const emailEl = document.getElementById('email').value;


const checkInDayEl = document.getElementById('checkInDate').value;
const numberOfNightsEl = +document.getElementById('numberOfNights').value;

const roomType = document.querySelector('roomType');
const discountType = document.querySelector('discountType');

const queenbtnEl = document.getElementById('queenbtn');
const kingbtnEl = document.getElementById('kingbtn');
const SuitebtnEl = document.getElementById('suitebtn');

const numOfAdultsEl = document.getElementById('numberOfAdults').value;
const numOfChildrenEl = document.getElementById('numberOfChildren').value;

const aaabtnEl = document.getElementById('aaabtn');
const militarybtnEl = document.getElementById('militarybtn');
const nonebtnEl = document.getElementById('nonebtn');

const roomCostEl = document.getElementById('roomCost');
const discountEl = document.getElementById('discount');
const discountRoomcostEl = document.getElementById('dicountedRoom');
const taxEl = document.getElementById('tax');
const totalDueEl = document.getElementById('totalDue');

const estBtnEl = document.getElementById('estimateCost');


estBtnEl.onclick = onEstBtnClicked;

queenbtnEl.onchange = onBtnChange;
kingbtnEl.onchange =onBtnChange;
SuitebtnEl.onchange = onBtnChange;

aaabtnEl.onchange =onBtn2Changed;
militarybtnEl.onchange =onBtn2Changed;
nonebtnEl.onchange =onBtn2Changed;


// calculation



    //const numberOfNights = +document.getElementById('numberOfNights').value;
    //console.log('numberOfNights', numberOfNights);
    
    /*let roomCost =0;
    if(queenbtnEl){
        roomCost = 250 * numberOfNights;
    }
    else if(kingbtnEl){
        roomCost = 250 * numberOfNights;
    }
    else if(SuitebtnEl){
        roomCost = 250 * numberOfNights;
    }

    let discount = 0;
    if(aaabtnEl){
        discount = 0.10 * roomCost
    }
    else if(militarybtnEl){
        discount = 0.20 * roomCost
    }
    else if(nonebtnEl){
        discount = 0;
    }
    let discountRoomcost = roomCost - discount;
    const taxRate = 0.12;
    const tax = taxRate * roomCost;
    const totalDue = discountRoomcost + tax;
    return totalDue
}*/

function getRoomRate(checkInDate,roomType){
    const monthNumber = checkInDate.getMonth();
    const isOnSeason = (monthNumber >= 5 && monthNumber <= 7);
      
    let roomRate = 150;
    if(isOnSeason){
        if(roomType == 'suite'){
            roomRate = 350;
        }else {
            roomRate = 250;
        }
    }else if (roomType == 'suite'){
        roomRate = 210;
    }
    console.log(`roomRate`,roomRate);
    return roomRate;
    
}

    const onSeasonDate = new Date(`2023-07-01`);
    const offSeasonDate = new Date(`2023-02-01`);

    getRoomRate(onSeasonDate);
    const rateForOnSeasonKing = getRoomRate(onSeasonDate, 'king');
    console.log('rateForOnSeasonKing' ,rateForOnSeasonKing);
    getRoomRate(offSeasonDate);
    const rateForOffSeasonuite=  getRoomRate(offSeasonDate, 'suite');


/*function onBtnChange(){
    let roomCost = 150;
    if(roomType == "queenBtn"){
        roomCost  = 250;
    }
    if(roomType=="kingBtn"){
        roomCost= 250;
    }
    if(roomType=="suiteBtn"){
        roomCost=350;
    }
    return roomCost;
}*/









