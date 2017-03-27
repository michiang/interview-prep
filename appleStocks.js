/*
 * Suppose we could access yesterday's stock prices as an array, where:
 *
 *  - The indices are the time in minutes past trade opening time, which was 9:30am local time.
 *  - The values are the price in dollars of Apple stock at that time.
 *  
 *  For example, if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.
 *
 *  Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
 *
 *  No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
 */

const appleStocks = (stock_prices_yesterday) => {
  let buy = stock_prices_yesterday[0];
  let sell = stock_prices_yesterday[1];
  let profit = sell - buy;
  let len = stock_prices_yesterday.length;

  for ( let i = 0; i < len; i++ ) {
    // skip first buy and sell price match
    if ( i < 2 ) {
      continue;
    }
    // update best profit if current is better
    let currentPrice = stock_prices_yesterday[i];
    let currentProfit = currentPrice - buy;
    if ( currentProfit > profit ) {
      sell = currentPrice;
    }
    // update buying price if profit from current price is higher than current buy and sell points
    else if ( currentPrice < buy ) {
      buy = currentPrice;
    }
    profit = sell - buy;
  }
  return profit;
}
