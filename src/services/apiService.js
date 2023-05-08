const API_URL = process.env.REACT_APP_API_URL;


async function fetchData(minYear, maxYear) {

    const response = await fetch(`${API_URL}/search?min_year=${minYear}&max_year=${maxYear}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

async function fetchEstimation() {

    const response = await fetch(`${API_URL}/expected`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}


export { fetchData, fetchEstimation };


