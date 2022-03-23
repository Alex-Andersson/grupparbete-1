'use strict';

const dailyBtn = document.querySelector('#daily-btn');
const weeklyBtn = document.querySelector('#weekly-btn');
const mothlyBtn = document.querySelector('#monthly-btn');

const hours = document.querySelectorAll('.hours');
const lastWeek = document.querySelectorAll('.last_week');

function dailyData (){
    fetch('./data.json') .then(response => response.json())
    .then(data => {
        hours.forEach((e,i) => {
            hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
            lastWeek[i].innerHTML = ' Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';
        })
    })
}

function weeklyData (){
    fetch('./data.json') .then(response => response.json())
    .then(data => {
        hours.forEach((e,i) => {
            hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs';
            lastWeek[i].innerHTML = 'Last Weekly - ' + data[i].timeframes.weekly.previous + 'hrs'
        })
    })
}

function mothlyData (){
    fetch('./data.json') .then(response => response.json())
    .then(data => {
        hours.forEach((e,i) => {
            hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs';
            lastWeek[i].innerHTML = 'Last Monthly - ' + data[i].timeframes.monthly.previous + 'hrs'
        })
    })
}

dailyBtn.addEventListener('click', () => {
    dailyBtn.classList.remove('text-muted')
    weeklyBtn.classList.add('text-muted')
    mothlyBtn.classList.add('text-muted')
    dailyData()
})

weeklyBtn.addEventListener('click', () => {
    weeklyBtn.classList.add('text-muted')
    mothlyBtn.classList.add('text-muted')
    dailyBtn.classList.remove('text-muted')
    weeklyData()
})

mothlyBtn.addEventListener('click', () => {
    mothlyBtn.classList.add('text-muted')
    dailyBtn.classList.remove('text-muted')
    weeklyBtn.classList.add('text-muted')
    mothlyData()
})