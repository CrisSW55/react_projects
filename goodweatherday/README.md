# goodweatherday

Learned Experience From React's useEffect() hook
	When creating the weather app, I used the useEffect() hook to obtain the weather data from the openweathermap.org website. I used my weather key to authenticate my account and access the weather data from the site. I placed the weather data inside useState() hook called: const [weatherData,setWeatherData] = useState(null) , this   would be applied within the useEffect() hook. A fetch function is called inside the useEffect() hook, which this function applies the fetched weatherData into the setWeatherData(). This would be my experience using the useEffect() hook in my weather app project.
	My huge mistake made when using the useEffect() hook, when making this app. The useEffect() hook has two parameters, one applies the code and the next has dependency array. The dependency array is where I had my great fault. I ended up applying the 'coords' useState() as my dependency array. After this, oh no this made my useEffect() hook run nonstop causing the nonstop API calls to the website. Sadly, the API calls went over the daily 1000 calls per day, and now I owe about 60 cents. I know that the cost isn't to high, but it shouldn't have gone this far.  This would be a giant lesson for me to be cautious using this hook and any future potential charged API calls.
	Now I have to pivot my project and not use the useEffect() hook. I'm will now be using a button to call the weather data, only one click and no more. This approve would make a finite number API calls, one button click equals one API call. I would be able to obtain the weather data from the site only that one time, instead of the tremendous infinite API calls made by the non-empty dependency array from useEffect() hook. The usage of a button will prevent further charges to my account, providing the better approach to my project. 



	
