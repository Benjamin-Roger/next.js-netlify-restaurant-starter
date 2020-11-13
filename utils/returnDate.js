
export default function returnDate(stringDate) {
    var date = new Date(stringDate);
  
    return date.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});
  }