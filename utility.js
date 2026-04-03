async function loadJSON(jsonPath) {
    try {
        const response = await fetch(jsonPath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch:', error);
    }
}
