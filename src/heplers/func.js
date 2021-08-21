import axios from "axios";

const gets = (val) => (val > 1 ? 's ' : ' ')

export const calcDateDiff = (date) => {
    // To set two dates to two variables
    let date1 = new Date(date);
    let date2 = new Date();
    let year = 0
    let month = 0
    
    // To calculate the no. of days between two dates
    let Difference_In_Days = ((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24))
   
    if (Difference_In_Days > 365) {
      year = parseInt(Difference_In_Days / 365);
    }
  
    if (Difference_In_Days > 30) {
      month = parseInt(Difference_In_Days / 30.4166) - (year * 12);
    }
  
    Difference_In_Days = parseInt(Difference_In_Days  - (month * 30.4166 ) - (year * 365 ))
    return ((Difference_In_Days + ' Day' + gets(Difference_In_Days)) + (month + ' Month' + gets(month)) + (year + ' Year' +gets(year)))
}

export const getRepos = async (page = 1) =>{
  const res = axios.get('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page='+ page)
  return res
}