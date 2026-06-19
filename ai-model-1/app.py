from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load trained model
model = pickle.load(
    open("crop_price_model.pkl", "rb")
)

encoder = pickle.load(
    open("label_encoder.pkl", "rb")
)


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    crop = data["crop"]
    month = data["month"]
    previous_price = data["previousPrice"]
    current_price = data["currentPrice"]

    # Convert crop name to number
    crop_encoded = encoder.transform(
        [crop]
    )[0]

    # Prepare input
    features = np.array([
        [
            crop_encoded,
            month,
            previous_price,
            current_price
        ]
    ])

    # Predict
    predicted_price = model.predict(
        features
    )[0]

    # Find trend
    if predicted_price > current_price:
        trend = "Increase 📈"
    else:
        trend = "Decrease 📉"

    return jsonify({
        "crop": crop,
        "currentPrice": current_price,
        "predictedPrice": round(
            float(predicted_price),
            2
        ),
        "trend": trend
    })


if __name__ == "__main__":

    app.run(
        debug=True,
        port=5000
    )