const getMinimumTime = () => {
    const now = new Date();
    const currentHour = now.getHours();
  
    // If the current time is past 10 PM, set the minimum time to tomorrow at 5 PM
    if (currentHour >= 22) {
      now.setDate(now.getDate() + 1); // Move to tomorrow
      now.setHours(17, 0, 0, 0); // Set to 5 PM
    } else if (currentHour < 17) {
      // If the current time is before 5 PM, set the minimum time to today at 5 PM
      now.setHours(17, 0, 0, 0); // Set to 5 PM
    } else if (currentHour >= 17 && currentHour < 22) {
      // If the current time is between 5 PM and 10 PM
      now.setHours(currentHour + 1, 0, 0, 0); // Set to the next hour
    }
  
    return now;
  };
  
  export default getMinimumTime;
  