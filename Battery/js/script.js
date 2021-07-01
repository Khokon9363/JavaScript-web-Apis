let isCharging = document.querySelector('.is-charging')
let chargingLevel = document.querySelector('.charging-level')
let chargingTime = document.querySelector('.charging-time')
let dischargingTime = document.querySelector('.discharging-time')

navigator.getBattery().then(function(battery) {
    updateAllBatteryInfo(battery)
    battery.addEventListener('chargingchange', function(){
        updateChargeInfo(battery)
    })
    battery.addEventListener('levelchange', function(){
        updateLevelInfo(battery)
    })
    battery.addEventListener('chargingtimechange', function(){
        updateChargingInfo(battery)
    })
    battery.addEventListener('dischargingtimechange', function(){
        updateDischargingInfo(battery)
    })
})

function updateAllBatteryInfo(battery){
    updateChargeInfo(battery)
    updateLevelInfo(battery)
    updateChargingInfo(battery)
    updateDischargingInfo(battery)
}

function updateChargeInfo(battery){
    isCharging.textContent = (battery.charging ? "Yes" : "No")
}
function updateLevelInfo(battery){
    chargingLevel.textContent = battery.level * 100 + "%"
}
function updateChargingInfo(battery){
    chargingTime.textContent = battery.chargingTime + " seconds"
}
function updateDischargingInfo(battery){
    dischargingTime.textContent = battery.dischargingTime + " seconds"
}