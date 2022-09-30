const url = 'https://632753175731f3db99577ba9.mockapi.io/predictions';

class PredictionApi {
    //get request
    get = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    //post request
    post = async (prediciton) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // name: username,
                    // comment: comment,
                    // id: id
                }),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    //update request
    update = async (id, newPrediction) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPrediction),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    //delete request
    delete = async (id) => {
        try {
            await fetch(`${url}/${id}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.log(error);
        }
    }
}


export const predictionApi = new PredictionApi();
