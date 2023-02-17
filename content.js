//JohnFeola
const btcApiURL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
const sp500ApiURL = 'https://query2.finance.yahoo.com/v8/finance/chart/%5EGSPC';
const goldURL = 'https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD';

// API request to get the bitcoin price from coingecko
fetch(btcApiURL)
  .then(response => response.json())
  .then(data => {
    const bitcoinPrice = data.bitcoin.usd;
    
    // APi request to get the S&P 500 price
    fetch(sp500ApiURL)
      .then(response => response.json())
      .then(data => {
        const sp500Price = data.chart.result[0].meta.regularMarketPrice;
        
        fetch(goldURL)
            .then(response => response.json())
            .then(data => {
                const goldPrice = data[0].spreadProfilePrices[0].ask;
            
        // Display both prices in HTML elements

        const formatBitcoinPrice = bitcoinPrice.toLocaleString();
        const formatSP500Price = sp500Price.toLocaleString();
        const formatGoldPrice = goldPrice.toLocaleString();
        // const trimGoldPrice = formatGoldPrice.toFixed(2);
        //trimming to 2 decimal places breaks the ext

        document.getElementById('bitcoin-price').innerHTML = `$${formatBitcoinPrice}`;
        document.getElementById('sp500-price').innerHTML = `$${formatSP500Price}`;
        document.getElementById('goldPrice').innerHTML = `$${formatGoldPrice}`;
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
})
.catch(error => console.error(error));










  