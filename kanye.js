class Kanye {
  // fetch what kanye said
  async getQuote() {
    // fetch will return a response object from API
    const response = await fetch(`https://api.kanye.rest`);
    // convert response to JSON
    const responseData = await response.json();
    // the return wlil be a promise because the function is async
    return responseData;
  }
}
