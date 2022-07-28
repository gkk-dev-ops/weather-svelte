import { writable } from 'svelte/store'

export default function (searchedCity) {
	const loading = writable(false)
	const error = writable(false)
	const data = writable({})

    async function getForecastFromLocation(location) {
		try {
			let lat = location[0].lat;
			let lon = location[0].lon;
			let apiKey = import.meta.env.API_KEY
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
			const res = await fetch(url);
			data.set(await res.json());
		} catch(e) {
			error.set(e)
			return {
				status: res.status,
				redirect: '/citynotfound' 
			}
		}
		loading.set(false)
	}

	async function getForecastForCity() {
		loading.set(true)
		error.set(false)
		try {
			const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${searchedCity}&format=jsonv2`)
			getForecastFromLocation(await response.json())
		} catch(e) {
			error.set(e)
			return {
				status: response.status,
				redirect: '/citynotfound' 
			}
		}
	}
	
	getForecastForCity()
	
	return [ data, loading, error, getForecastForCity]
}