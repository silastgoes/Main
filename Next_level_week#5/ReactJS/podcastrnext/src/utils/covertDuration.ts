export function convertDurationToTimeString(duration: number){
    const hours = Math.floor(duration/3600)
    const minutes = Math.floor((duration%3600)/60)
    const secunds = duration % 60

    const finalTime = [hours,minutes,secunds]
    .map(unit => String(unit).padStart(2,'0'))
    .join(';')

    return finalTime;
}