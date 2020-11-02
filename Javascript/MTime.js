function militaryTime(time) {
  var hour = parseInt(time.slice(0, 2))

  if ( hour < 12 && time.includes('PM')) {
    var newHour = hour + 12
    console.log('newHour', newHour)
    var late = time.replace(time.slice(0, 2), newHour)
    console.log('late', late)
    var newTime = late.replace(("PM"), '')
    return newTime
  }
  if(hour == 12 && time.includes('PM')){
    var newTime = time.replace(("PM"),'')
    return newTime 
  }
  if ( hour == 12 && time.includes('AM')) {
    var early = time.replace(time.slice(0, 2), '00')
    var newTime = early.replace(("AM"), '')
    return newTime
  }
  var newTime = time.replace(("AM"),'')
  return newTime 

}

console.log(militaryTime('12:33:00PM'))