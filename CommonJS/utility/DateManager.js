module.exports = class DateManager {
    /**
     * DateManager class will help you get the date and time in desired format
     */
    constructor() {
      this.date = new Date();
    }
    /**
     * Get the day in DD format
     */
    getDate() {
      const day = this.date.getDate();
      return (day<10) ? `0${day}` : `${day}`;
    }
  
    /**
     * Get the Month in MM format
     */
    getMonth() {
      const month = this.date.getMonth()+1;
      return (month<10) ? `0${month}` : `${month}`;
    }
  
    /**
     * Get the Year in YYYY format
     */
     getYear() {
      return `${this.date.getFullYear()}`;
    }
  
    /**
     * Get the Hour in HH format
     */
     getHour() {
        const hour = this.date.getHours();
        return (hour<10) ? `0${hour}` : `${hour}`;
     }
  
     /**
     * Get the Minutes in MM format
     */
      getMinutes() {
          const minutes = this.date.getMinutes();
          return (minutes<10) ? `0${minutes}` : `${minutes}`;
      }
  
      /**
     * Get the Seconds in SS format
     */
      getSeconds() {
          const seconds = this.date.getSeconds();
          return (seconds<10) ? `0${seconds}` : `${seconds}`;
      }
  
      getDateAndTime() {
          const DD = this.getDate();
          const MM = this.getMonth();
          const YYYY = this.getYear();
          const hh = this.getHour();
          const mm = this.getMinutes();
          const ss = this.getSeconds();
          return {DD,MM,YYYY,hh,mm,ss}
      }
  };
  