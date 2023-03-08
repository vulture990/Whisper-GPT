import Twitter from 'twitter';

// Set up Twitter API client with your credentials
const client = new Twitter({
    consumer_key:process.env.consumer_key?.toString(),
    consumer_secret:process.env.consumer_secret?.toString(),
    access_token_key: process.env.access_token_key?.toString(),
    access_token_secret:process.env.access_token_secret?.toString(),
  });
  

// Define a function to scrape the latest 10 tweets of a user
export async function scrapeTweets(username: string): Promise<string[]> {
    const params = {
      screen_name: username,
      count: 100
    };
    // Make a request to the Twitter API to get the latest tweets of the user
    const response = await client.get('statuses/user_timeline', params);
  
    // Extract the text content of the tweets
    const tweets = response.map((tweet: any) => tweet.text);

    return tweets;
  }

  
  // Define the username of the user whose tweets you want to scrape
//   const username = 'elonmusk';
  
  // Call the scrapeTweets function to get the latest tweets of the user
//   scrapeTweets(username)
//     .then((tweets) => {
//       // Write the tweets to a file
//       console.log(tweets);
  
//       console.log(`Successfully wrote the latest tweets of ${username} to ${filename}`);
//     })
//     .catch((error) => {
//       console.error(error);
//     });




